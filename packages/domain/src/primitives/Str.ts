import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const Str = S.String.pipe(S.brand("@dank/domain/primitives/Str"));
export type Str = typeof Str.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const StrOrNull = S.NullOr(Str);
export type StrOrNull = typeof StrOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const StrOrUndefined = S.UndefinedOr(Str);
export type StrOrUndefined = typeof StrOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const StrOrNullish = S.NullishOr(Str);
export type StrOrNullish = typeof StrOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const StrOrOptional = S.optional(Str);
export type StrOrOptional = S.Schema.Type<typeof StrOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const StrWithDefault = (value: string) =>
  Str.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => Str.make(value)),
  );
