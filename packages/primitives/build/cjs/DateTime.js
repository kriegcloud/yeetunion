"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimeWithDefault = exports.DateTimeOrUndefined = exports.DateTimeOrNullish = exports.DateTimeOrNull = exports.DateTimeOptional = exports.DateTime = void 0;
var _effect = require("effect");
/**
 * @category primitives
 * @since 0.1.0
 */

/**
 * @category primitives
 * @since 0.1.0
 */
const DateTime = exports.DateTime = _effect.Schema.Date;
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOrNull = exports.DateTimeOrNull = /*#__PURE__*/_effect.Schema.NullOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOrUndefined = exports.DateTimeOrUndefined = /*#__PURE__*/_effect.Schema.UndefinedOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOrNullish = exports.DateTimeOrNullish = /*#__PURE__*/_effect.Schema.NullishOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOptional = exports.DateTimeOptional = /*#__PURE__*/_effect.Schema.optional(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeWithDefault = value => DateTime.pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(() => value));
exports.DateTimeWithDefault = DateTimeWithDefault;
//# sourceMappingURL=DateTime.js.map