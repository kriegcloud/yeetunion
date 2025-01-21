/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";

/**
 * @category primitives
 * @since 0.1.0
 */
export const Str = S.String;
/**
 * @category primitives
 * @since 0.1.0
 */
export type Str = typeof Str.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const StrOrNull = S.NullOr(Str);
/**
 * @category primitives
 * @since 0.1.0
 */
export type StrOrNull = typeof StrOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const StrOrUndefined = S.UndefinedOr(Str);
/**
 * @category primitives
 * @since 0.1.0
 */
export type StrOrUndefined = typeof StrOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const StrOrNullish = S.NullishOr(Str);
/**
 * @category primitives
 * @since 0.1.0
 */
export type StrOrNullish = typeof StrOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const StrOptional = S.optional(Str);
/**
 * @category primitives
 * @since 0.1.0
 */
export type StrOptional = S.Schema.Type<typeof StrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const StrWithDefault = (value: string) =>
  Str.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => value),
  );

/**
 * @category primitives
 * @since 0.1.0
 */
export default {
  Str,
  StrOrNull,
  StrOrUndefined,
  StrOrNullish,
  StrOptional,
  StrWithDefault,
};
