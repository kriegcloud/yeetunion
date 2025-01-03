import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUrl = S.NonEmptyTrimmedString.pipe(
  S.pattern(/^https?:\/\//)
);
export type yeUrl = typeof yeUrl.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUrlOrNull = S.NullOr(yeUrl);
export type yeUrlOrNull = typeof yeUrlOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUrlOrUndefined = S.UndefinedOr(yeUrl);
export type yeUrlOrUndefined = typeof yeUrlOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUrlOrNullish = S.NullishOr(yeUrl);
export type yeUrlOrNullish = typeof yeUrlOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUrlOrOptional = S.optional(yeUrl);
export type yeUrlOrOptional = S.Schema.Type<typeof yeUrlOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUrlWithDefault = (value: string) =>
  yeUrl.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => yeUrl.make(value)),
  );
