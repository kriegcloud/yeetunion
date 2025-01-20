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
const DateTime = _effect.Schema.Date;
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOrNull = /*#__PURE__*/_effect.Schema.NullOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOrUndefined = /*#__PURE__*/_effect.Schema.UndefinedOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOrNullish = /*#__PURE__*/_effect.Schema.NullishOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOptional = /*#__PURE__*/_effect.Schema.optional(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeWithDefault = value => DateTime.pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(() => value));
/**
 * @category primitives
 * @since 0.1.0
 */
var _default = exports.default = {
  DateTime,
  DateTimeOrNull,
  DateTimeOrUndefined,
  DateTimeOptional,
  DateTimeOrNullish,
  DateTimeWithDefault
};
//# sourceMappingURL=DateTime.js.map