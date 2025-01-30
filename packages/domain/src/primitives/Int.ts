/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";

/**
 * @category primitives
 * @since 0.1.0
 */
export const Int = S.Int;
/**
 * @category primitives
 * @since 0.1.0
 */
export type Int = typeof Int.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const IntOrNull = S.NullOr(Int);
/**
 * @category primitives
 * @since 0.1.0
 */
export type IntOrNull = typeof IntOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const IntOrUndefined = S.UndefinedOr(Int);
/**
 * @category primitives
 * @since 0.1.0
 */
export type IntOrUndefined = typeof IntOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const IntOrNullish = S.NullishOr(Int);
/**
 * @category primitives
 * @since 0.1.0
 */
export type IntOrNullish = typeof IntOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const IntOptional = S.optional(Int);
/**
 * @category primitives
 * @since 0.1.0
 */
export type IntOptional = S.Schema.Type<typeof IntOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const IntWithDefault = (value: number) =>
  Int.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => Int.make(value)),
  );

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosInt = S.Int.pipe(S.positive(), S.brand("@/primitives/PosInt"));
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosInt = typeof PosInt.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosIntOrNull = S.NullOr(PosInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosIntOrNull = typeof PosIntOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosIntOrUndefined = S.UndefinedOr(PosInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosIntOrUndefined = typeof PosIntOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosIntOrNullish = S.NullishOr(PosInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosIntOrNullish = typeof PosIntOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosIntOptional = S.optional(PosInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosIntOptional = S.Schema.Type<typeof PosIntOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosIntWithDefault = (value: number) =>
  PosInt.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => PosInt.make(value)),
  );

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegInt = S.Int.pipe(S.negative(), S.brand("@/primitives/NegInt"));
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegInt = typeof NegInt.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegIntOrNull = S.NullOr(NegInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegIntOrNull = typeof NegIntOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegIntOrUndefined = S.UndefinedOr(NegInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegIntOrUndefined = typeof NegIntOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegIntOrNullish = S.NullishOr(NegInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegIntOrNullish = typeof NegIntOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegIntOptional = S.optional(NegInt);
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegIntOptional = S.Schema.Type<typeof NegIntOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegIntWithDefault = (value: number) =>
  NegInt.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => NegInt.make(value)),
  );

/**
 * @category primitives
 * @since 0.1.0
 */
export default {
  // Int
  Int,
  IntOrNull,
  IntOrUndefined,
  IntOrNullish,
  IntOptional,
  IntWithDefault,
  // PosInt
  PosInt,
  PosIntOrNull,
  PosIntOrUndefined,
  PosIntOrNullish,
  PosIntOptional,
  PosIntWithDefault,
  // NegInt
  NegInt,
  NegIntOrNull,
  NegIntOrUndefined,
  NegIntOrNullish,
  NegIntOptional,
  NegIntWithDefault,
};
