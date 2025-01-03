import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNum = S.Number;
export type yeNum = typeof yeNum.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNumOrNull = S.NullOr(yeNum);
export type yeNumOrNull = typeof yeNumOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNumOrUndefined = S.UndefinedOr(yeNum);
export type yeNumOrUndefined = typeof yeNumOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNumOrNullish = S.NullishOr(yeNum);
export type yeNumOrNullish = typeof yeNumOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNumOrOptional = S.optional(yeNum);
export type yeNumOrOptional = S.Schema.Type<typeof yeNumOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNumWithDefault = (value: number) =>
  yeNum.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => value),
  );

/**
 * @category primitives
 * @since 0.1.0
 */
export const yePosNum = S.Number.pipe(
  S.positive(),
  S.brand("@ye/domain/primitives/yePosNum"),
);
export type yePosNum = typeof yePosNum.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yePosNumOrNull = S.NullOr(yePosNum);
export type yePosNumOrNull = typeof yePosNumOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yePosNumOrUndefined = S.UndefinedOr(yePosNum);
export type yePosNumOrUndefined = typeof yePosNumOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yePosNumOrNullish = S.NullishOr(yePosNum);
export type yePosNumOrNullish = typeof yePosNumOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yePosNumOrOptional = S.optional(yePosNum);
export type yePosNumOrOptional = S.Schema.Type<typeof yePosNumOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yePosNumWithDefault = (value: number) =>
  yePosNum.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => yePosNum.make(value)),
  );

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNegNum = S.Number.pipe(
  S.negative(),
  S.brand("@ye/domain/primitives/yeNegNum"),
);
export type yeNegNum = typeof yeNegNum.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNegNumOrNull = S.NullOr(yeNegNum);
export type yeNegNumOrNull = typeof yeNegNumOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNegNumOrUndefined = S.UndefinedOr(yeNegNum);
export type yeNegNumOrUndefined = typeof yeNegNumOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNegNumOrNullish = S.NullishOr(yeNegNum);
export type yeNegNumOrNullish = typeof yeNegNumOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNegNumOrOptional = S.optional(yeNegNum);
export type yeNegNumOrOptional = S.Schema.Type<typeof yeNegNumOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNegNumWithDefault = (value: number) =>
  yeNegNum.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => yeNegNum.make(value)),
  );
