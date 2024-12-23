import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const Url = S.NonEmptyTrimmedString.pipe(
  S.pattern(/^https?:\/\//),
  S.brand("@ye/domain/primitives/Url"),
);
export type Url = typeof Url.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const UrlOrNull = S.NullOr(Url);
export type UrlOrNull = typeof UrlOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const UrlOrUndefined = S.UndefinedOr(Url);
export type UrlOrUndefined = typeof UrlOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const UrlOrNullish = S.NullishOr(Url);
export type UrlOrNullish = typeof UrlOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const UrlOrOptional = S.optional(Url);
export type UrlOrOptional = S.Schema.Type<typeof UrlOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const UrlWithDefault = (value: string) =>
  Url.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => Url.make(value)),
  );
