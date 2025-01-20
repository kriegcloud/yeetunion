"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StrWithDefault = exports.StrOrUndefined = exports.StrOrNullish = exports.StrOrNull = exports.StrOptional = exports.Str = void 0;
var _effect = require("effect");
/**
 * @category primitives
 * @since 0.1.0
 */

/**
 * @category primitives
 * @since 0.1.0
 */
const Str = exports.Str = _effect.Schema.String;
/**
 * @category primitives
 * @since 0.1.0
 */
const StrOrNull = exports.StrOrNull = /*#__PURE__*/_effect.Schema.NullOr(Str);
/**
 * @category primitives
 * @since 0.1.0
 */
const StrOrUndefined = exports.StrOrUndefined = /*#__PURE__*/_effect.Schema.UndefinedOr(Str);
/**
 * @category primitives
 * @since 0.1.0
 */
const StrOrNullish = exports.StrOrNullish = /*#__PURE__*/_effect.Schema.NullishOr(Str);
/**
 * @category primitives
 * @since 0.1.0
 */
const StrOptional = exports.StrOptional = /*#__PURE__*/_effect.Schema.optional(Str);
/**
 * @category primitives
 * @since 0.1.0
 */
const StrWithDefault = value => Str.pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(() => value));
/**
 * @category primitives
 * @since 0.1.0
 */
exports.StrWithDefault = StrWithDefault;
var _default = exports.default = {
  Str,
  StrOrNull,
  StrOrUndefined,
  StrOrNullish,
  StrOptional,
  StrWithDefault
};
//# sourceMappingURL=Str.js.map