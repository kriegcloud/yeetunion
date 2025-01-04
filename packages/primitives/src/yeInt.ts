import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeInt = S.Int;
export type yeInt = typeof yeInt.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeIntOrNull = S.NullOr(yeInt);
export type yeIntOrNull = typeof yeIntOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeIntOrUndefined = S.UndefinedOr(yeInt);
export type yeIntOrUndefined = typeof yeIntOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeIntOrNullish = S.NullishOr(yeInt);
export type yeIntOrNullish = typeof yeIntOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeIntOrOptional = S.optional(yeInt);
export type yeIntOrOptional = S.Schema.Type<typeof yeIntOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeIntWithDefault = (value: number) =>
  yeInt.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => yeInt.make(value)),
  );

/**
 * @category primitives
 * @since 0.1.0
 */
export const yePosInt = S.Int.pipe(
  S.positive(),
  S.brand("@ye/primitives/yePosInt"),
);
export type yePosInt = typeof yePosInt.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yePosIntOrNull = S.NullOr(yePosInt);
export type yePosIntOrNull = typeof yePosIntOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yePosIntOrUndefined = S.UndefinedOr(yePosInt);
export type yePosIntOrUndefined = typeof yePosIntOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yePosIntOrNullish = S.NullishOr(yePosInt);
export type yePosIntOrNullish = typeof yePosIntOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yePosIntOrOptional = S.optional(yePosInt);
export type yePosIntOrOptional = S.Schema.Type<typeof yePosIntOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yePosIntWithDefault = (value: number) =>
  yePosInt.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => yePosInt.make(value)),
  );

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNegInt = S.Int.pipe(
  S.negative(),
  S.brand("@ye/primitives/yeNegInt"),
);
export type yeNegInt = typeof yeNegInt.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNegIntOrNull = S.NullOr(yeNegInt);
export type yeNegIntOrNull = typeof yeNegIntOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNegIntOrUndefined = S.UndefinedOr(yeNegInt);
export type yeNegIntOrUndefined = typeof yeNegIntOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNegIntOrNullish = S.NullishOr(yeNegInt);
export type yeNegIntOrNullish = typeof yeNegIntOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNegIntOrOptional = S.optional(yeNegInt);
export type yeNegIntOrOptional = S.Schema.Type<typeof yeNegIntOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNegIntWithDefault = (value: number) =>
  yeNegInt.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => yeNegInt.make(value)),
  );
