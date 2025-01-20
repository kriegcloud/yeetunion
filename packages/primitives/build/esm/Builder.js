/**
 * This module provides a type-safe, immutable builder pattern implementation
 * using Effect.
 *
 * @since 0.1.0
 */
import { Data, Effect, Option, pipe, Schema, SchemaAST } from "effect";
import * as ReadonlyArray from "effect/Array";
/**
 * @since 0.3.0
 * @category errors
 */
export class ValidationError extends /*#__PURE__*/Data.TaggedError("ValidationError") {}
/**
 * @since 0.3.0
 * @category errors
 */
export class BuilderError extends /*#__PURE__*/Data.TaggedError("BuilderError") {}
/**
 * Creates a lens for a specific field
 *
 * @since 0.3.0
 * @category constructors
 */
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
export const createBuilderLenses = schema => pipe(Object.entries(schema.fields), ReadonlyArray.reduce({}, (acc, [key]) => ({
  ...acc,
  [key]: createBuilderLens(key)
})));
/**
 * Gets default values from schema annotations recursively
 *
 * @since 0.3.0
 * @category constructors
 */
const getSchemaDefaults = schema => {
  // Get defaults from fields first
  const fieldDefaults = Object.entries(schema.fields).reduce((acc, [key, field]) => {
    const fieldDefault = SchemaAST.getDefaultAnnotation(field.ast).pipe(Option.getOrElse(() => undefined));
    return fieldDefault ? {
      ...acc,
      [key]: fieldDefault
    } : acc;
  }, {});
  // Get struct-level defaults
  const structDefaults = SchemaAST.getDefaultAnnotation(schema.ast).pipe(Option.getOrElse(() => ({})));
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
export const define = (schema, defaults) => {
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
    build: transform => pipe(transform(mergedDefaults), Schema.decodeUnknown(schema), Effect.mapError(error => new ValidationError({
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
export const compose = (...transforms) => a => transforms.reduce((acc, transform) => transform(acc), a);
//# sourceMappingURL=Builder.js.map