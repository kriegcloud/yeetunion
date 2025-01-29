/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";

/**
 * @category primitives
 * @since 0.1.0
 */
export const UUID = S.UUID;

/**
 * @since 0.1.0
 * @category primitives
 */
export type UUID = typeof UUID.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const UUIDOrNull = S.NullOr(UUID);

/**
 * @since 0.1.0
 * @category primitives
 */
export type UUIDOrNull = typeof UUIDOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const UUIDOrUndefined = S.UndefinedOr(UUID);

/**
 * @since 0.1.0
 * @category primitives
 */
export type UUIDOrUndefined = typeof UUIDOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const UUIDOrNullish = S.NullishOr(UUID);

/**
 * @since 0.1.0
 * @category primitives
 */
export type UUIDOrNullish = typeof UUIDOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const UUIDOptional = S.optional(UUID);

/**
 * @since 0.1.0
 * @category primitives
 */
export type UUIDOptional = S.Schema.Type<typeof UUIDOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const UUIDWithDefault = (value: string) =>
  UUID.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => UUID.make(value)),
  );

/**
 * @since 0.1.0
 * @category primitives
 */
export default {
  UUID,
  UUIDOrNull,
  UUIDOrUndefined,
  UUIDOrNullish,
  UUIDOptional,
  UUIDWithDefault,
};
