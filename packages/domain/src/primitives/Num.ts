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
export type Num = typeof Num.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NumOrNull = S.NullOr(Num);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NumOrNull = typeof NumOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NumOrUndefined = S.UndefinedOr(Num);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NumOrUndefined = typeof NumOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NumOrNullish = S.NullishOr(Num);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NumOrNullish = typeof NumOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NumOptional = S.optional(Num);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NumOptional = S.Schema.Type<typeof NumOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NumWithDefault = (value: number) =>
  Num.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => value),
  );

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNum = S.Number.pipe(
  S.positive(),
  S.brand("@/primitives/PosNum"),
);
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosNum = typeof PosNum.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNumOrNull = S.NullOr(PosNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosNumOrNull = typeof PosNumOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNumOrUndefined = S.UndefinedOr(PosNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosNumOrUndefined = typeof PosNumOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNumOrNullish = S.NullishOr(PosNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosNumOrNullish = typeof PosNumOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNumOptional = S.optional(PosNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosNumOptional = S.Schema.Type<typeof PosNumOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNumWithDefault = (value: number) =>
  PosNum.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => PosNum.make(value)),
  );

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNum = S.Number.pipe(
  S.negative(),
  S.brand("@/primitives/NegNum"),
);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegNum = typeof NegNum.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNumOrNull = S.NullOr(NegNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegNumOrNull = typeof NegNumOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNumOrUndefined = S.UndefinedOr(NegNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegNumOrUndefined = typeof NegNumOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNumOrNullish = S.NullishOr(NegNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegNumOrNullish = typeof NegNumOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNumOptional = S.optional(NegNum);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegNumOptional = S.Schema.Type<typeof NegNumOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNumWithDefault = (value: number) =>
  NegNum.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => NegNum.make(value)),
  );

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
  NegNumOptional,
};
