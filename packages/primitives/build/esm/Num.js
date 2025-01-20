/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
export const Num = S.Number;
/**
 * @category primitives
 * @since 0.1.0
 */
export const NumOrNull = /*#__PURE__*/S.NullOr(Num);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NumOrUndefined = /*#__PURE__*/S.UndefinedOr(Num);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NumOrNullish = /*#__PURE__*/S.NullishOr(Num);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NumOptional = /*#__PURE__*/S.optional(Num);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NumWithDefault = value => Num.pipe(S.propertySignature, S.withConstructorDefault(() => value));
/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNum = /*#__PURE__*/S.Number.pipe(/*#__PURE__*/S.positive(), /*#__PURE__*/S.brand("@/primitives/PosNum"));
/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNumOrNull = /*#__PURE__*/S.NullOr(PosNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNumOrUndefined = /*#__PURE__*/S.UndefinedOr(PosNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNumOrNullish = /*#__PURE__*/S.NullishOr(PosNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNumOptional = /*#__PURE__*/S.optional(PosNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNumWithDefault = value => PosNum.pipe(S.propertySignature, S.withConstructorDefault(() => PosNum.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNum = /*#__PURE__*/S.Number.pipe(/*#__PURE__*/S.negative(), /*#__PURE__*/S.brand("@/primitives/NegNum"));
/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNumOrNull = /*#__PURE__*/S.NullOr(NegNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNumOrUndefined = /*#__PURE__*/S.UndefinedOr(NegNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNumOrNullish = /*#__PURE__*/S.NullishOr(NegNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNumOptional = /*#__PURE__*/S.optional(NegNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNumWithDefault = value => NegNum.pipe(S.propertySignature, S.withConstructorDefault(() => NegNum.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
export default {
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