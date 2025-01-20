"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UUIDWithDefault = exports.UUIDOrUndefined = exports.UUIDOrNullish = exports.UUIDOrNull = exports.UUIDOptional = exports.UUID = void 0;
var _effect = require("effect");
/**
 * @category primitives
 * @since 0.1.0
 */

/**
 * @category primitives
 * @since 0.1.0
 */
const UUID = exports.UUID = _effect.Schema.UUID;
/**
 * @category primitives
 * @since 0.1.0
 */
const UUIDOrNull = exports.UUIDOrNull = /*#__PURE__*/_effect.Schema.NullOr(UUID);
/**
 * @category primitives
 * @since 0.1.0
 */
const UUIDOrUndefined = exports.UUIDOrUndefined = /*#__PURE__*/_effect.Schema.UndefinedOr(UUID);
/**
 * @category primitives
 * @since 0.1.0
 */
const UUIDOrNullish = exports.UUIDOrNullish = /*#__PURE__*/_effect.Schema.NullishOr(UUID);
/**
 * @category primitives
 * @since 0.1.0
 */
const UUIDOptional = exports.UUIDOptional = /*#__PURE__*/_effect.Schema.optional(UUID);
/**
 * @category primitives
 * @since 0.1.0
 */
const UUIDWithDefault = value => UUID.pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(() => UUID.make(value)));
/**
 * @since 0.1.0
 * @category primitives
 */
exports.UUIDWithDefault = UUIDWithDefault;
var _default = exports.default = {
  UUID,
  UUIDOrNull,
  UUIDOrUndefined,
  UUIDOrNullish,
  UUIDOptional,
  UUIDWithDefault
};
//# sourceMappingURL=Uuid.js.map