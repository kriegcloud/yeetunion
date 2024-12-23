import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNonEmptyStr = S.NonEmptyTrimmedString.pipe(
  S.brand("@ye/domain/primitives/yeNonEmptyStr"),
);
export type yeNonEmptyStr = typeof yeNonEmptyStr.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNonEmptyStrOrNull = S.NullOr(yeNonEmptyStr);
export type yeNonEmptyStrOrNull = typeof yeNonEmptyStrOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNonEmptyStrOrUndefined = S.UndefinedOr(yeNonEmptyStr);
export type yeNonEmptyStrOrUndefined = typeof yeNonEmptyStrOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNonEmptyStrOrNullish = S.NullishOr(yeNonEmptyStr);
export type yeNonEmptyStrOrNullish = typeof yeNonEmptyStrOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNonEmptyStrOrOptional = S.optional(yeNonEmptyStr);
export type yeNonEmptyStrOrOptional = S.Schema.Type<typeof yeNonEmptyStrOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNonEmptyStrWithDefault = (value: string) =>
  yeNonEmptyStr.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => yeNonEmptyStr.make(value)),
  );



/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNonEmptyTrimStr = S.NonEmptyTrimmedString.pipe(
  S.brand("@ye/domain/primitives/yeNonEmptyTrimStr"),
);
export type yeNonEmptyTrimStr = typeof yeNonEmptyTrimStr.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNonEmptyTrimStrOrNull = S.NullOr(yeNonEmptyTrimStr);
export type yeNonEmptyTrimStrOrNull = typeof yeNonEmptyTrimStrOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNonEmptyTrimStrOrUndefined = S.UndefinedOr(yeNonEmptyTrimStr);
export type yeNonEmptyTrimStrOrUndefined = typeof yeNonEmptyTrimStrOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNonEmptyTrimStrOrNullish = S.NullishOr(yeNonEmptyTrimStr);
export type yeNonEmptyTrimStrOrNullish = typeof yeNonEmptyTrimStrOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNonEmptyTrimStrOrOptional = S.optional(yeNonEmptyTrimStr);
export type yeNonEmptyTrimStrOrOptional = S.Schema.Type<typeof yeNonEmptyTrimStrOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeNonEmptyTrimStrWithDefault = (value: string) =>
  yeNonEmptyTrimStr.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => yeNonEmptyTrimStr.make(value)),
  );

