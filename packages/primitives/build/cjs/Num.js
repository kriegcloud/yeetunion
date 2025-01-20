"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PosNumWithDefault = exports.PosNumOrUndefined = exports.PosNumOrNullish = exports.PosNumOrNull = exports.PosNumOptional = exports.PosNum = exports.NumWithDefault = exports.NumOrUndefined = exports.NumOrNullish = exports.NumOrNull = exports.NumOptional = exports.Num = exports.NegNumWithDefault = exports.NegNumOrUndefined = exports.NegNumOrNullish = exports.NegNumOrNull = exports.NegNumOptional = exports.NegNum = void 0;
var _effect = require("effect");
/**
 * @category primitives
 * @since 0.1.0
 */

/**
 * @category primitives
 * @since 0.1.0
 */
const Num = exports.Num = _effect.Schema.Number;
/**
 * @category primitives
 * @since 0.1.0
 */
const NumOrNull = exports.NumOrNull = /*#__PURE__*/_effect.Schema.NullOr(Num);
/**
 * @category primitives
 * @since 0.1.0
 */
const NumOrUndefined = exports.NumOrUndefined = /*#__PURE__*/_effect.Schema.UndefinedOr(Num);
/**
 * @category primitives
 * @since 0.1.0
 */
const NumOrNullish = exports.NumOrNullish = /*#__PURE__*/_effect.Schema.NullishOr(Num);
/**
 * @category primitives
 * @since 0.1.0
 */
const NumOptional = exports.NumOptional = /*#__PURE__*/_effect.Schema.optional(Num);
/**
 * @category primitives
 * @since 0.1.0
 */
const NumWithDefault = value => Num.pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(() => value));
/**
 * @category primitives
 * @since 0.1.0
 */
exports.NumWithDefault = NumWithDefault;
const PosNum = exports.PosNum = /*#__PURE__*/_effect.Schema.Number.pipe(/*#__PURE__*/_effect.Schema.positive(), /*#__PURE__*/_effect.Schema.brand("@/primitives/PosNum"));
/**
 * @category primitives
 * @since 0.1.0
 */
const PosNumOrNull = exports.PosNumOrNull = /*#__PURE__*/_effect.Schema.NullOr(PosNum);
/**
 * @category primitives
 * @since 0.1.0
 */
const PosNumOrUndefined = exports.PosNumOrUndefined = /*#__PURE__*/_effect.Schema.UndefinedOr(PosNum);
/**
 * @category primitives
 * @since 0.1.0
 */
const PosNumOrNullish = exports.PosNumOrNullish = /*#__PURE__*/_effect.Schema.NullishOr(PosNum);
/**
 * @category primitives
 * @since 0.1.0
 */
const PosNumOptional = exports.PosNumOptional = /*#__PURE__*/_effect.Schema.optional(PosNum);
/**
 * @category primitives
 * @since 0.1.0
 */
const PosNumWithDefault = value => PosNum.pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(() => PosNum.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
exports.PosNumWithDefault = PosNumWithDefault;
const NegNum = exports.NegNum = /*#__PURE__*/_effect.Schema.Number.pipe(/*#__PURE__*/_effect.Schema.negative(), /*#__PURE__*/_effect.Schema.brand("@/primitives/NegNum"));
/**
 * @category primitives
 * @since 0.1.0
 */
const NegNumOrNull = exports.NegNumOrNull = /*#__PURE__*/_effect.Schema.NullOr(NegNum);
/**
 * @category primitives
 * @since 0.1.0
 */
const NegNumOrUndefined = exports.NegNumOrUndefined = /*#__PURE__*/_effect.Schema.UndefinedOr(NegNum);
/**
 * @category primitives
 * @since 0.1.0
 */
const NegNumOrNullish = exports.NegNumOrNullish = /*#__PURE__*/_effect.Schema.NullishOr(NegNum);
/**
 * @category primitives
 * @since 0.1.0
 */
const NegNumOptional = exports.NegNumOptional = /*#__PURE__*/_effect.Schema.optional(NegNum);
/**
 * @category primitives
 * @since 0.1.0
 */
const NegNumWithDefault = value => NegNum.pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(() => NegNum.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
exports.NegNumWithDefault = NegNumWithDefault;
var _default = exports.default = {
  Num,
  NumOrNull,
  NumOrUndefined,
  NumOrNullish,
  NumOptional,
  NumWithDefault,
  PosNum,
  PosNumOrNull,
  PosNumOrUndefined,
  PosNumOrNullish,
  PosNumOptional,
  PosNumWithDefault,
  NegNum,
  NegNumOrNull,
  NegNumOrNullish,
  NegNumOrUndefined,
  NegNumOptional
};
//# sourceMappingURL=Num.js.map