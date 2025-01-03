import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeDate = S.Date;
export type yeDate = typeof yeDate.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeDateOrNull = S.NullOr(yeDate);
export type yeDateOrNull = typeof yeDateOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeDateOrUndefined = S.UndefinedOr(yeDate);
export type yeDateOrUndefined = typeof yeDateOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeDateOrNullish = S.NullishOr(yeDate);
export type yeDateOrNullish = typeof yeDateOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeDateOrOptional = S.optional(yeDate);
export type yeDateOrOptional = S.Schema.Type<typeof yeDateOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeDateWithDefault = (value: Date) =>
  yeDate.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => value),
  );
