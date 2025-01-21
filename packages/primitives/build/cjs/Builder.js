"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.define = exports.createBuilderLenses = exports.compose = exports.ValidationError = exports.BuilderError = void 0;
var _effect = require("effect");
var ReadonlyArray = _interopRequireWildcard(require("effect/Array"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * This module provides a type-safe, immutable builder pattern implementation
 * using Effect.
 *
 * @since 0.1.0
 */

/**
 * @since 0.3.0
 * @category errors
 */
class ValidationError extends /*#__PURE__*/_effect.Data.TaggedError("ValidationError") {}
/**
 * @since 0.3.0
 * @category errors
 */
exports.ValidationError = ValidationError;
class BuilderError extends /*#__PURE__*/_effect.Data.TaggedError("BuilderError") {}
/**
 * Creates a lens for a specific field
 *
 * @since 0.3.0
 * @category constructors
 */
exports.BuilderError = BuilderError;
const createLens = key => {
  const get = s => s[key];
  const set = value => state => ({
    ...state,
    [key]: value
  });
  const modify = f => state => {
    const currentValue = state[key];
    if (currentValue === undefined) return state;
    return {
      ...state,
      [key]: f(currentValue)
    };
  };
  return {
    get,
    set,
    modify
  };
};
/**
 * Creates a builder lens for a specific field
 *
 * @since 0.3.0
 * @category constructors
 */
const createBuilderLens = key => {
  const lens = createLens(key);
  const setter = value => lens.set(value);
  return Object.assign(setter, {
    get: lens.get,
    modify: lens.modify
  });
};
/**
 * Creates a builder lens for each field in the schema
 *
 * @since 0.3.0
 * @category constructors
 */
const createBuilderLenses = (
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
schema) => (0, _effect.pipe)(Object.entries(schema.fields), ReadonlyArray.reduce({}, (acc, [key]) => ({
  ...acc,
  [key]: createBuilderLens(key)
})));
/**
 * Gets default values from schema annotations recursively
 *
 * @since 0.3.0
 * @category constructors
 */
exports.createBuilderLenses = createBuilderLenses;
const getSchemaDefaults = schema => {
  // Get defaults from fields first
  const fieldDefaults = Object.entries(schema.fields).reduce((acc, [key, field]) => {
    const fieldDefault = _effect.SchemaAST.getDefaultAnnotation(field.ast).pipe(_effect.Option.getOrElse(() => undefined));
    return fieldDefault ? {
      ...acc,
      [key]: fieldDefault
    } : acc;
  }, {});
  // Get struct-level defaults
  const structDefaults = _effect.SchemaAST.getDefaultAnnotation(schema.ast).pipe(_effect.Option.getOrElse(() => ({})));
  // Merge with struct defaults taking precedence
  return {
    ...(typeof fieldDefaults === "object" && fieldDefaults !== null ? fieldDefaults : {}),
    ...(typeof structDefaults === "object" && structDefaults !== null ? structDefaults : {})
  };
};
/**
 * Creates a builder for constructing objects with runtime validation.
 *
 * @since 0.1.0
 * @category constructors
 * @example
 * import { Schema, Effect, pipe } from "effect"
 * import { define, compose } from "@ye/primitives/Builder"
 *
 * const UserSchema = Schema.Struct({
 *   name: Schema.String,
 * })
 *
 * const User = define(UserSchema)
 *
 * const result = Effect.gen(function* () {
 *   return yield* pipe(compose(User.name("John")), User.build)
 * }).pipe(Effect.runSync)
 *
 * console.log("Created user:", result)
 * // {
 */
const define = (schema, defaults) => {
  const lenses = createBuilderLenses(schema);
  // Get schema defaults first
  const schemaDefaults = getSchemaDefaults(schema);
  // Merge defaults, prioritizing schema defaults over builder defaults
  const mergedDefaults = {
    ...schemaDefaults,
    // Override with schema defaults
    ...defaults // Start with builder defaults
  };
  return {
    ...lenses,
    schema,
    Default: mergedDefaults,
    field: key => createLens(key),
    when: (predicate, ifTrue, ifFalse = a => a) => a => predicate(a) ? ifTrue(a) : ifFalse(a),
    build: transform => (0, _effect.pipe)(transform(mergedDefaults), _effect.Schema.decodeUnknown(schema), _effect.Effect.mapError(error => new ValidationError({
      message: `Schema validation failed: ${error}`
    })))
  };
};
/**
 * @since 0.1.0
 * @category combinators
 * @example
 * import { Schema, Effect, pipe } from "effect"
 * import { define, compose } from "@ye/primitives/Builder"
 *
 * const UserSchema = Schema.Struct({
 *   name: Schema.String,
 *   age: Schema.Number,
 *   roles: Schema.Array(Schema.String).annotations({ default: ["user"] })
 * })
 *
 * const User = define(UserSchema)
 *
 * const result = Effect.gen(function* () {
 *   return yield* pipe(
 *      compose(
 *        User.name("John"),
 *        User.age(25),
 *        User.roles.modify((roles) => [...roles, "admin"])
 *      ),
 *      User.build
 *  )
 * }).pipe(Effect.runSync)
 *
 * console.log("Created user:", result)
 * // {
 * //   name: "John",
 * //   age: 25,
 * //   roles: ["admin"]
 * // }
 */
exports.define = define;
const compose = (...transforms) => a => transforms.reduce((acc, transform) => transform(acc), a);
exports.compose = compose;
//# sourceMappingURL=Builder.js.map