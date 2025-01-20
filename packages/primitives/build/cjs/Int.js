"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PosIntWithDefault = exports.PosIntOrUndefined = exports.PosIntOrNullish = exports.PosIntOrNull = exports.PosIntOptional = exports.PosInt = exports.NegIntWithDefault = exports.NegIntOrUndefined = exports.NegIntOrNullish = exports.NegIntOrNull = exports.NegIntOptional = exports.NegInt = exports.IntWithDefault = exports.IntOrUndefined = exports.IntOrNullish = exports.IntOrNull = exports.IntOptional = exports.Int = void 0;
var _effect = require("effect");
/**
 * @category primitives
 * @since 0.1.0
 */

/**
 * @category primitives
 * @since 0.1.0
 */
const Int = exports.Int = _effect.Schema.Int;
/**
 * @category primitives
 * @since 0.1.0
 */
const IntOrNull = exports.IntOrNull = /*#__PURE__*/_effect.Schema.NullOr(Int);
/**
 * @category primitives
 * @since 0.1.0
 */
const IntOrUndefined = exports.IntOrUndefined = /*#__PURE__*/_effect.Schema.UndefinedOr(Int);
/**
 * @category primitives
 * @since 0.1.0
 */
const IntOrNullish = exports.IntOrNullish = /*#__PURE__*/_effect.Schema.NullishOr(Int);
/**
 * @category primitives
 * @since 0.1.0
 */
const IntOptional = exports.IntOptional = /*#__PURE__*/_effect.Schema.optional(Int);
/**
 * @category primitives
 * @since 0.1.0
 */
const IntWithDefault = value => Int.pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(() => Int.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
exports.IntWithDefault = IntWithDefault;
const PosInt = exports.PosInt = /*#__PURE__*/_effect.Schema.Int.pipe(/*#__PURE__*/_effect.Schema.positive(), /*#__PURE__*/_effect.Schema.brand("@/primitives/PosInt"));
/**
 * @category primitives
 * @since 0.1.0
 */
const PosIntOrNull = exports.PosIntOrNull = /*#__PURE__*/_effect.Schema.NullOr(PosInt);
/**
 * @category primitives
 * @since 0.1.0
 */
const PosIntOrUndefined = exports.PosIntOrUndefined = /*#__PURE__*/_effect.Schema.UndefinedOr(PosInt);
/**
 * @category primitives
 * @since 0.1.0
 */
const PosIntOrNullish = exports.PosIntOrNullish = /*#__PURE__*/_effect.Schema.NullishOr(PosInt);
/**
 * @category primitives
 * @since 0.1.0
 */
const PosIntOptional = exports.PosIntOptional = /*#__PURE__*/_effect.Schema.optional(PosInt);
/**
 * @category primitives
 * @since 0.1.0
 */
const PosIntWithDefault = value => PosInt.pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(() => PosInt.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
exports.PosIntWithDefault = PosIntWithDefault;
const NegInt = exports.NegInt = /*#__PURE__*/_effect.Schema.Int.pipe(/*#__PURE__*/_effect.Schema.negative(), /*#__PURE__*/_effect.Schema.brand("@/primitives/NegInt"));
/**
 * @category primitives
 * @since 0.1.0
 */
const NegIntOrNull = exports.NegIntOrNull = /*#__PURE__*/_effect.Schema.NullOr(NegInt);
/**
 * @category primitives
 * @since 0.1.0
 */
const NegIntOrUndefined = exports.NegIntOrUndefined = /*#__PURE__*/_effect.Schema.UndefinedOr(NegInt);
/**
 * @category primitives
 * @since 0.1.0
 */
const NegIntOrNullish = exports.NegIntOrNullish = /*#__PURE__*/_effect.Schema.NullishOr(NegInt);
/**
 * @category primitives
 * @since 0.1.0
 */
const NegIntOptional = exports.NegIntOptional = /*#__PURE__*/_effect.Schema.optional(NegInt);
/**
 * @category primitives
 * @since 0.1.0
 */
const NegIntWithDefault = value => NegInt.pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(() => NegInt.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
exports.NegIntWithDefault = NegIntWithDefault;
var _default = exports.default = {
  // Int
  Int,
  IntOrNull,
  IntOrUndefined,
  IntOrNullish,
  IntOptional,
  IntWithDefault,
  // PosInt
  PosInt,
  PosIntOrNull,
  PosIntOrUndefined,
  PosIntOrNullish,
  PosIntOptional,
  PosIntWithDefault,
  // NegInt
  NegInt,
  NegIntOrNull,
  NegIntOrUndefined,
  NegIntOrNullish,
  NegIntOptional,
  NegIntWithDefault
};
//# sourceMappingURL=Int.js.map