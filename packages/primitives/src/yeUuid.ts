import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUuid = S.UUID
export type yeUuid = typeof yeUuid.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUuidOrNull = S.NullOr(yeUuid);
export type yeUuidOrNull = typeof yeUuidOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUuidOrUndefined = S.UndefinedOr(yeUuid);
export type yeUuidOrUndefined = typeof yeUuidOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUuidOrNullish = S.NullishOr(yeUuid);
export type yeUuidOrNullish = typeof yeUuidOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUuidOrOptional = S.optional(yeUuid);
export type yeUuidOrOptional = S.Schema.Type<typeof yeUuidOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUuidWithDefault = (value: string) =>
  yeUuid.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => yeUuid.make(value)),
  );
