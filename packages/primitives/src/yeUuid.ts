import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUUID = S.UUID;
export type yeUUID = typeof yeUUID.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUUIDOrNull = S.NullOr(yeUUID);
export type yeUUIDOrNull = typeof yeUUIDOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUUIDOrUndefined = S.UndefinedOr(yeUUID);
export type yeUUIDOrUndefined = typeof yeUUIDOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUUIDOrNullish = S.NullishOr(yeUUID);
export type yeUUIDOrNullish = typeof yeUUIDOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUUIDOrOptional = S.optional(yeUUID);
export type yeUUIDOrOptional = S.Schema.Type<typeof yeUUIDOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeUUIDWithDefault = (value: string) =>
  yeUUID.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => yeUUID.make(value)),
  );
