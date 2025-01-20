/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
export const Int = S.Int;
/**
 * @category primitives
 * @since 0.1.0
 */
export const IntOrNull = /*#__PURE__*/S.NullOr(Int);
/**
 * @category primitives
 * @since 0.1.0
 */
export const IntOrUndefined = /*#__PURE__*/S.UndefinedOr(Int);
/**
 * @category primitives
 * @since 0.1.0
 */
export const IntOrNullish = /*#__PURE__*/S.NullishOr(Int);
/**
 * @category primitives
 * @since 0.1.0
 */
export const IntOptional = /*#__PURE__*/S.optional(Int);
/**
 * @category primitives
 * @since 0.1.0
 */
export const IntWithDefault = value => Int.pipe(S.propertySignature, S.withConstructorDefault(() => Int.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
export const PosInt = /*#__PURE__*/S.Int.pipe(/*#__PURE__*/S.positive(), /*#__PURE__*/S.brand("@/primitives/PosInt"));
/**
 * @category primitives
 * @since 0.1.0
 */
export const PosIntOrNull = /*#__PURE__*/S.NullOr(PosInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export const PosIntOrUndefined = /*#__PURE__*/S.UndefinedOr(PosInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export const PosIntOrNullish = /*#__PURE__*/S.NullishOr(PosInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export const PosIntOptional = /*#__PURE__*/S.optional(PosInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export const PosIntWithDefault = value => PosInt.pipe(S.propertySignature, S.withConstructorDefault(() => PosInt.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
export const NegInt = /*#__PURE__*/S.Int.pipe(/*#__PURE__*/S.negative(), /*#__PURE__*/S.brand("@/primitives/NegInt"));
/**
 * @category primitives
 * @since 0.1.0
 */
export const NegIntOrNull = /*#__PURE__*/S.NullOr(NegInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NegIntOrUndefined = /*#__PURE__*/S.UndefinedOr(NegInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NegIntOrNullish = /*#__PURE__*/S.NullishOr(NegInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NegIntOptional = /*#__PURE__*/S.optional(NegInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NegIntWithDefault = value => NegInt.pipe(S.propertySignature, S.withConstructorDefault(() => NegInt.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
export default {
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