import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const Uuid = S.UUID.pipe(S.brand("@ye/domain/primitives/Uuid"));
export type Uuid = typeof Uuid.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const UuidOrNull = S.NullOr(Uuid);
export type UuidOrNull = typeof UuidOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const UuidOrUndefined = S.UndefinedOr(Uuid);
export type UuidOrUndefined = typeof UuidOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const UuidOrNullish = S.NullishOr(Uuid);
export type UuidOrNullish = typeof UuidOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const UuidOrOptional = S.optional(Uuid);
export type UuidOrOptional = S.Schema.Type<typeof UuidOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const UuidWithDefault = (value: string) =>
  Uuid.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => Uuid.make(value)),
  );
