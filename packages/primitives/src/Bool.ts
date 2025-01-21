/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";

/**
 * @category primitives
 * @since 0.1.0
 */
export const Bool = S.Boolean.pipe();
/**
 * @category primitives
 * @since 0.1.0
 */
export type Bool = typeof Bool.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const BoolOrNull = S.NullOr(Bool);
/**
 * @category primitives
 * @since 0.1.0
 */
export type BoolOrNull = typeof BoolOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const BoolOrUndefined = S.UndefinedOr(Bool);
/**
 * @category primitives
 * @since 0.1.0
 */
export type BoolOrUndefined = typeof BoolOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const BoolOrNullish = S.NullishOr(Bool);
/**
 * @category primitives
 * @since 0.1.0
 */
export type BoolOrNullish = typeof BoolOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const BoolOptional = S.optional(Bool);
/**
 * @category primitives
 * @since 0.1.0
 */
export type BoolOptional = S.Schema.Type<typeof BoolOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const BoolWithDefault = (value: boolean) =>
  Bool.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => value),
  );

/**
 * @category primitives
 * @since 0.1.0
 */
export default {
  Bool,
  BoolOrNull,
  BoolOrUndefined,
  BoolOrNullish,
  BoolOptional,
  BoolWithDefault,
};
