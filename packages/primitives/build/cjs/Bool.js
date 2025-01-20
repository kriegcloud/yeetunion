"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _effect = require("effect");
/**
 * @category primitives
 * @since 0.1.0
 */

/**
 * @category primitives
 * @since 0.1.0
 */
const Bool = /*#__PURE__*/_effect.Schema.Boolean.pipe();
/**
 * @category primitives
 * @since 0.1.0
 */
const BoolOrNull = /*#__PURE__*/_effect.Schema.NullOr(Bool);
/**
 * @category primitives
 * @since 0.1.0
 */
const BoolOrUndefined = /*#__PURE__*/_effect.Schema.UndefinedOr(Bool);
/**
 * @category primitives
 * @since 0.1.0
 */
const BoolOrNullish = /*#__PURE__*/_effect.Schema.NullishOr(Bool);
/**
 * @category primitives
 * @since 0.1.0
 */
const BoolOptional = /*#__PURE__*/_effect.Schema.optional(Bool);
/**
 * @category primitives
 * @since 0.1.0
 */
const BoolWithDefault = value => Bool.pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(() => value));
/**
 * @category primitives
 * @since 0.1.0
 */
var _default = exports.default = {
  Bool,
  BoolOrNull,
  BoolOrUndefined,
  BoolOrNullish,
  BoolOptional,
  BoolWithDefault
};
//# sourceMappingURL=Bool.js.map