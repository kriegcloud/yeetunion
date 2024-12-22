import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const Int = S.Int.pipe(S.brand("@dank/domain/primitives/Int"));
export type Int = typeof Int.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const IntOrNull = S.NullOr(Int);
export type IntOrNull = typeof IntOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const IntOrUndefined = S.UndefinedOr(Int);
export type IntOrUndefined = typeof IntOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const IntOrNullish = S.NullishOr(Int);
export type IntOrNullish = typeof IntOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const IntOrOptional = S.optional(Int);
export type IntOrOptional = S.Schema.Type<typeof IntOrOptional>;

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
export const PosInt = S.Int.pipe(S.positive(), S.brand("@dank/domain/primitives/PosInt"));
export type PosInt = typeof PosInt.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosIntOrNull = S.NullOr(PosInt);
export type PosIntOrNull = typeof PosIntOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosIntOrUndefined = S.UndefinedOr(PosInt);
export type PosIntOrUndefined = typeof PosIntOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosIntOrNullish = S.NullishOr(PosInt);
export type PosIntOrNullish = typeof PosIntOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const PosIntOrOptional = S.optional(PosInt);
export type PosIntOrOptional = S.Schema.Type<typeof PosIntOrOptional>;

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
export const NegInt = S.Int.pipe(S.negative(), S.brand("@dank/domain/primitives/NegInt"));
export type NegInt = typeof NegInt.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegIntOrNull = S.NullOr(NegInt);
export type NegIntOrNull = typeof NegIntOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegIntOrUndefined = S.UndefinedOr(NegInt);
export type NegIntOrUndefined = typeof NegIntOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegIntOrNullish = S.NullishOr(NegInt);
export type NegIntOrNullish = typeof NegIntOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegIntOrOptional = S.optional(NegInt);
export type NegIntOrOptional = S.Schema.Type<typeof NegIntOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const NegIntWithDefault = (value: number) =>
  NegInt.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => NegInt.make(value)),
  );