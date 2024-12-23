import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStr = S.NonEmptyTrimmedString.pipe(
  S.brand("@ye/domain/primitives/NonEmptyStr"),
);
export type NonEmptyStr = typeof NonEmptyStr.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStrOrNull = S.NullOr(NonEmptyStr);
export type NonEmptyStrOrNull = typeof NonEmptyStrOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStrOrUndefined = S.UndefinedOr(NonEmptyStr);
export type NonEmptyStrOrUndefined = typeof NonEmptyStrOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStrOrNullish = S.NullishOr(NonEmptyStr);
export type NonEmptyStrOrNullish = typeof NonEmptyStrOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStrOrOptional = S.optional(NonEmptyStr);
export type NonEmptyStrOrOptional = S.Schema.Type<typeof NonEmptyStrOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStrWithDefault = (value: string) =>
  NonEmptyStr.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => NonEmptyStr.make(value)),
  );



/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStr = S.NonEmptyTrimmedString.pipe(
  S.brand("@ye/domain/primitives/NonEmptyTrimStr"),
);
export type NonEmptyTrimStr = typeof NonEmptyTrimStr.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStrOrNull = S.NullOr(NonEmptyTrimStr);
export type NonEmptyTrimStrOrNull = typeof NonEmptyTrimStrOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStrOrUndefined = S.UndefinedOr(NonEmptyTrimStr);
export type NonEmptyTrimStrOrUndefined = typeof NonEmptyTrimStrOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStrOrNullish = S.NullishOr(NonEmptyTrimStr);
export type NonEmptyTrimStrOrNullish = typeof NonEmptyTrimStrOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStrOrOptional = S.optional(NonEmptyTrimStr);
export type NonEmptyTrimStrOrOptional = S.Schema.Type<typeof NonEmptyTrimStrOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStrWithDefault = (value: string) =>
  NonEmptyTrimStr.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => NonEmptyTrimStr.make(value)),
  );

