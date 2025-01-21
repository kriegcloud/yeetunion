"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailWithDefault = exports.EmailOrUndefined = exports.EmailOrNullish = exports.EmailOrNull = exports.EmailOptional = exports.Email = void 0;
var _effect = require("effect");
var _NonEmptyStr = require("./NonEmptyStr.js");
/**
 * @category primitives
 * @since 0.1.0
 */

/**
 * @category primitives
 * @since 0.1.0
 */
const Email = exports.Email = /*#__PURE__*/_NonEmptyStr.NonEmptyTrimStr.pipe(/*#__PURE__*/_effect.Schema.lowercased(), /*#__PURE__*/_effect.Schema.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/));
/**
 * @category primitives
 * @since 0.1.0
 */
const EmailOrNull = exports.EmailOrNull = /*#__PURE__*/_effect.Schema.NullOr(Email);
/**
 * @category primitives
 * @since 0.1.0
 */
const EmailOrUndefined = exports.EmailOrUndefined = /*#__PURE__*/_effect.Schema.UndefinedOr(Email);
/**
 * @category primitives
 * @since 0.1.0
 */
const EmailOrNullish = exports.EmailOrNullish = /*#__PURE__*/_effect.Schema.NullishOr(Email);
/**
 * @category primitives
 * @since 0.1.0
 */
const EmailOptional = exports.EmailOptional = /*#__PURE__*/_effect.Schema.optional(Email);
/**
 * @category primitives
 * @since 0.1.0
 */
const EmailWithDefault = value => Email.pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(() => Email.make(value)));
exports.EmailWithDefault = EmailWithDefault;
//# sourceMappingURL=Email.js.map