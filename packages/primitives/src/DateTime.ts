/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";

/**
 * @category primitives
 * @since 0.1.0
 */
export const DateTime = S.Date;
/**
 * @category primitives
 * @since 0.1.0
 */
export type DateTime = typeof DateTime.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const DateTimeOrNull = S.NullOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
export type DateTimeOrNull = typeof DateTimeOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const DateTimeOrUndefined = S.UndefinedOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
export type DateTimeOrUndefined = typeof DateTimeOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const DateTimeOrNullish = S.NullishOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
export type DateTimeOrNullish = typeof DateTimeOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const DateTimeOptional = S.optional(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
export type DateTimeOptional = S.Schema.Type<typeof DateTimeOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const DateTimeWithDefault = (value: Date) =>
  DateTime.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => value),
  );
