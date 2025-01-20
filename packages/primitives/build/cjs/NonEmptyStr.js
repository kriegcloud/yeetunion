"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NonEmptyTrimStrWithDefault = exports.NonEmptyTrimStrOrUndefined = exports.NonEmptyTrimStrOrNullish = exports.NonEmptyTrimStrOrNull = exports.NonEmptyTrimStrOptional = exports.NonEmptyTrimStr = exports.NonEmptyStrWithDefault = exports.NonEmptyStrOrUndefined = exports.NonEmptyStrOrNullish = exports.NonEmptyStrOrNull = exports.NonEmptyStrOptional = exports.NonEmptyStr = void 0;
var _effect = require("effect");
/**
 * @category primitives
 * @since 0.1.0
 */

/**
 * @category primitives
 * @since 0.1.0
 */
const NonEmptyStr = exports.NonEmptyStr = _effect.Schema.NonEmptyTrimmedString;
/**
 * @category primitives
 * @since 0.1.0
 */
const NonEmptyStrOrNull = exports.NonEmptyStrOrNull = /*#__PURE__*/_effect.Schema.NullOr(NonEmptyStr);
/**
 * @category primitives
 * @since 0.1.0
 */
const NonEmptyStrOrUndefined = exports.NonEmptyStrOrUndefined = /*#__PURE__*/_effect.Schema.UndefinedOr(NonEmptyStr);
/**
 * @category primitives
 * @since 0.1.0
 */
const NonEmptyStrOrNullish = exports.NonEmptyStrOrNullish = /*#__PURE__*/_effect.Schema.NullishOr(NonEmptyStr);
/**
 * @category primitives
 * @since 0.1.0
 */
const NonEmptyStrOptional = exports.NonEmptyStrOptional = /*#__PURE__*/_effect.Schema.optional(NonEmptyStr);
/**
 * @category primitives
 * @since 0.1.0
 */
const NonEmptyStrWithDefault = value => NonEmptyStr.pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(() => NonEmptyStr.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
exports.NonEmptyStrWithDefault = NonEmptyStrWithDefault;
const NonEmptyTrimStr = exports.NonEmptyTrimStr = _effect.Schema.NonEmptyTrimmedString;
/**
 * @category primitives
 * @since 0.1.0
 */
const NonEmptyTrimStrOrNull = exports.NonEmptyTrimStrOrNull = /*#__PURE__*/_effect.Schema.NullOr(NonEmptyTrimStr);
/**
 * @category primitives
 * @since 0.1.0
 */
const NonEmptyTrimStrOrUndefined = exports.NonEmptyTrimStrOrUndefined = /*#__PURE__*/_effect.Schema.UndefinedOr(NonEmptyTrimStr);
/**
 * @category primitives
 * @since 0.1.0
 */
const NonEmptyTrimStrOrNullish = exports.NonEmptyTrimStrOrNullish = /*#__PURE__*/_effect.Schema.NullishOr(NonEmptyTrimStr);
/**
 * @category primitives
 * @since 0.1.0
 */
const NonEmptyTrimStrOptional = exports.NonEmptyTrimStrOptional = /*#__PURE__*/_effect.Schema.optional(NonEmptyTrimStr);
/**
 * @category primitives
 * @since 0.1.0
 */
const NonEmptyTrimStrWithDefault = value => NonEmptyTrimStr.pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(() => NonEmptyTrimStr.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
exports.NonEmptyTrimStrWithDefault = NonEmptyTrimStrWithDefault;
var _default = exports.default = {
  NonEmptyStr,
  NonEmptyStrOrNull,
  NonEmptyStrOrUndefined,
  NonEmptyStrOrNullish,
  NonEmptyStrOptional,
  NonEmptyStrWithDefault,
  NonEmptyTrimStr,
  NonEmptyTrimStrOrNull,
  NonEmptyTrimStrOrUndefined,
  NonEmptyTrimStrOrNullish,
  NonEmptyTrimStrOptional,
  NonEmptyTrimStrWithDefault
};
//# sourceMappingURL=NonEmptyStr.js.map