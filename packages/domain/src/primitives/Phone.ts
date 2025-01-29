/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
import { NonEmptyTrimStr } from "./NonEmptyStr";

const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
/**
 * @category primitives
 * @since 0.1.0
 */
export const Phone = NonEmptyTrimStr.pipe(S.pattern(PHONE_REGEX));
/**
 * @category primitives
 * @since 0.1.0
 */
export type Phone = typeof Phone.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PhoneOrNull = S.NullOr(Phone);
/**
 * @category primitives
 * @since 0.1.0
 */
export type PhoneOrNull = typeof PhoneOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PhoneOrUndefined = S.UndefinedOr(Phone);
/**
 * @category primitives
 * @since 0.1.0
 */
export type PhoneOrUndefined = typeof PhoneOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PhoneOrNullish = S.NullishOr(Phone);
/**
 * @category primitives
 * @since 0.1.0
 */
export type PhoneOrNullish = typeof PhoneOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PhoneOptional = S.optional(Phone);
/**
 * @category primitives
 * @since 0.1.0
 */
export type PhoneOptional = S.Schema.Type<typeof PhoneOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PhoneWithDefault = (value: string) =>
  Phone.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => Phone.make(value)),
  );

/**
 * @category primitives
 * @since 0.1.0
 */
export default {
  Phone,
  PhoneOrNull,
  PhoneOrUndefined,
  PhoneOrNullish,
  PhoneOptional,
  PhoneWithDefault,
};
