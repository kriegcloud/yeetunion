/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStr = S.NonEmptyTrimmedString;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyStr = typeof NonEmptyStr.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStrOrNull = S.NullOr(NonEmptyStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyStrOrNull = typeof NonEmptyStrOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStrOrUndefined = S.UndefinedOr(NonEmptyStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyStrOrUndefined = typeof NonEmptyStrOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStrOrNullish = S.NullishOr(NonEmptyStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyStrOrNullish = typeof NonEmptyStrOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStrOptional = S.optional(NonEmptyStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyStrOptional = S.Schema.Type<typeof NonEmptyStrOptional>;

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
export const NonEmptyTrimStr = S.NonEmptyTrimmedString;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyTrimStr = typeof NonEmptyTrimStr.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStrOrNull = S.NullOr(NonEmptyTrimStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyTrimStrOrNull = typeof NonEmptyTrimStrOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStrOrUndefined = S.UndefinedOr(NonEmptyTrimStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyTrimStrOrUndefined = typeof NonEmptyTrimStrOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStrOrNullish = S.NullishOr(NonEmptyTrimStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyTrimStrOrNullish = typeof NonEmptyTrimStrOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStrOptional = S.optional(NonEmptyTrimStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyTrimStrOptional = S.Schema.Type<
  typeof NonEmptyTrimStrOptional
>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStrWithDefault = (value: string) =>
  NonEmptyTrimStr.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => NonEmptyTrimStr.make(value)),
  );

/**
 * @category primitives
 * @since 0.1.0
 */
export default {
  NonEmptyStr,
  NonEmptyStrOrNull,
  NonEmptyStrOrUndefined,
  NonEmptyStrOrNullish,
  NonEmptyStrOptional,
  NonEmptyStrWithDefault,
  NonEmptyTrimStr,
  NonEmptyTrimStrOrNull,
  NonEmptyTrimStrOrUndefined,
  NonEmptyTrimStrOrNullish,
  NonEmptyTrimStrOptional,
  NonEmptyTrimStrWithDefault,
};
