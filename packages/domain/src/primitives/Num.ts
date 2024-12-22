import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const Num = S.Number.pipe(S.brand("@dank/domain/primitives/Num"));
export type Num = typeof Num.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NumOrNull = S.NullOr(Num);
export type NumOrNull = typeof NumOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NumOrUndefined = S.UndefinedOr(Num);
export type NumOrUndefined = typeof NumOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NumOrNullish = S.NullishOr(Num);
export type NumOrNullish = typeof NumOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NumOrOptional = S.optional(Num);
export type NumOrOptional = S.Schema.Type<typeof NumOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NumWithDefault = (value: number) =>
  Num.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => Num.make(value)),
  );

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNum = S.Number.pipe(
  S.positive(),
  S.brand("@dank/domain/primitives/PosNum"),
);
export type PosNum = typeof PosNum.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNumOrNull = S.NullOr(PosNum);
export type PosNumOrNull = typeof PosNumOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNumOrUndefined = S.UndefinedOr(PosNum);
export type PosNumOrUndefined = typeof PosNumOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNumOrNullish = S.NullishOr(PosNum);
export type PosNumOrNullish = typeof PosNumOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosNumOrOptional = S.optional(PosNum);
export type PosNumOrOptional = S.Schema.Type<typeof PosNumOrOptional>;

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
  S.brand("@dank/domain/primitives/NegNum"),
);
export type NegNum = typeof NegNum.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNumOrNull = S.NullOr(NegNum);
export type NegNumOrNull = typeof NegNumOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNumOrUndefined = S.UndefinedOr(NegNum);
export type NegNumOrUndefined = typeof NegNumOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNumOrNullish = S.NullishOr(NegNum);
export type NegNumOrNullish = typeof NegNumOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNumOrOptional = S.optional(NegNum);
export type NegNumOrOptional = S.Schema.Type<typeof NegNumOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegNumWithDefault = (value: number) =>
  NegNum.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => NegNum.make(value)),
  );
