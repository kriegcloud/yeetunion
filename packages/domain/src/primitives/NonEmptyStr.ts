import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStr = S.NonEmptyTrimmedString.pipe(
  S.brand("@dank/domain/primitives/NonEmptyStr"),
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
