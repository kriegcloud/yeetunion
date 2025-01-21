/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
import { NonEmptyTrimStr } from "./NonEmptyStr.js";

/**
 * @category primitives
 * @since 0.1.0
 */
export const URL = NonEmptyTrimStr.pipe(S.pattern(/^https?:\/\//));
/**
 * @category primitives
 * @since 0.1.0
 */
export type URL = typeof URL.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const URLOrNull = S.NullOr(URL);
/**
 * @category primitives
 * @since 0.1.0
 */
export type URLOrNull = typeof URLOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const URLOrUndefined = S.UndefinedOr(URL);
/**
 * @category primitives
 * @since 0.1.0
 */
export type URLOrUndefined = typeof URLOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const URLOrNullish = S.NullishOr(URL);
/**
 * @category primitives
 * @since 0.1.0
 */
export type URLOrNullish = typeof URLOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const URLOptional = S.optional(URL);
/**
 * @category primitives
 * @since 0.1.0
 */
export type URLOptional = S.Schema.Type<typeof URLOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const URLWithDefault = (value: string) =>
  URL.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => URL.make(value)),
  );

/**
 * @category primitives
 * @since 0.1.0
 */
export default {
  URL,
  URLOrNull,
  URLOrUndefined,
  URLOrNullish,
  URLOptional,
  URLWithDefault,
};
