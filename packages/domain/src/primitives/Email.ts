/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
import { NonEmptyTrimStr } from "./NonEmptyStr";

/**
 * @category primitives
 * @since 0.1.0
 */
export const Email = NonEmptyTrimStr.pipe(
  S.lowercased(),
  S.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: () => ({ message: `Not a valid email address`, override: true }),
  }),
);
/**
 * @category primitives
 * @since 0.1.0
 */
export type Email = typeof Email.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const EmailOrNull = S.NullOr(Email);
/**
 * @category primitives
 * @since 0.1.0
 */
export type EmailOrNull = typeof EmailOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const EmailOrUndefined = S.UndefinedOr(Email);
/**
 * @category primitives
 * @since 0.1.0
 */
export type EmailOrUndefined = typeof EmailOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const EmailOrNullish = S.NullishOr(Email);
/**
 * @category primitives
 * @since 0.1.0
 */
export type EmailOrNullish = typeof EmailOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const EmailOptional = S.optional(Email);
/**
 * @category primitives
 * @since 0.1.0
 */
export type EmailOptional = S.Schema.Type<typeof EmailOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const EmailWithDefault = (value: string) =>
  Email.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => Email.make(value)),
  );
