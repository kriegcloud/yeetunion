import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeStr = S.String;
export type yeStr = typeof yeStr.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeStrOrNull = S.NullOr(yeStr);
export type yeStrOrNull = typeof yeStrOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeStrOrUndefined = S.UndefinedOr(yeStr);
export type yeStrOrUndefined = typeof yeStrOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeStrOrNullish = S.NullishOr(yeStr);
export type yeStrOrNullish = typeof yeStrOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeStrOrOptional = S.optional(yeStr);
export type yeStrOrOptional = S.Schema.Type<typeof yeStrOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeStrWithDefault = (value: string) =>
  yeStr.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => value),
  );
