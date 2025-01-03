import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeBool = S.Boolean;
export type Bool = typeof yeBool.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeBoolOrNull = S.NullOr(yeBool);
export type yeBoolOrNull = typeof yeBoolOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeBoolOrUndefined = S.UndefinedOr(yeBool);
export type yeBoolOrUndefined = typeof yeBoolOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeBoolOrNullish = S.NullishOr(yeBool);
export type yeBoolOrNullish = typeof yeBoolOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeBoolOrOptional = S.optional(yeBool);
export type yeBoolOrOptional = S.Schema.Type<typeof yeBoolOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeBoolWithDefault = (value: boolean) =>
  yeBool.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => value),
  );

// export const yeBoolFromStr = (str: string): Bool => S.transformOrFail()
