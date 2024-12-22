import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const Bool = S.Boolean.pipe(S.brand("@dank/domain/primitives/Bool"));
export type Bool = typeof Bool.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const BoolOrNull = S.NullOr(Bool);
export type BoolOrNull = typeof BoolOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const BoolOrUndefined = S.UndefinedOr(Bool);
export type BoolOrUndefined = typeof BoolOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const BoolOrNullish = S.NullishOr(Bool);
export type BoolOrNullish = typeof BoolOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const BoolOrOptional = S.optional(Bool);
export type BoolOrOptional = S.Schema.Type<typeof BoolOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const BoolWithDefault = (value: boolean) =>
  Bool.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => Bool.make(value)),
  );
