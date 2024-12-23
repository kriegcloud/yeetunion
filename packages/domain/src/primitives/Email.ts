import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const Email = S.NonEmptyTrimmedString.pipe(
  S.lowercased(),
  S.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  S.brand("@ye/domain/primitives/Email"),
);
export type Email = typeof Email.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const EmailOrNull = S.NullOr(Email);
export type EmailOrNull = typeof EmailOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const EmailOrUndefined = S.UndefinedOr(Email);
export type EmailOrUndefined = typeof EmailOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const EmailOrNullish = S.NullishOr(Email);
export type EmailOrNullish = typeof EmailOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const EmailOrOptional = S.optional(Email);
export type EmailOrOptional = S.Schema.Type<typeof EmailOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const EmailWithDefault = (value: string) =>
  Email.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => Email.make(value)),
  );
