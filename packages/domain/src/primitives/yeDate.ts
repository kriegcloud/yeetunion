import * as S from "@effect/schema/Schema";

/**
 * @category primitives
 * @since 0.1.0
 */
export const Dte = S.Date.pipe(S.brand("@ye/domain/primitives/Dte"));
export type Dte = typeof Dte.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const DteOrNull = S.NullOr(Dte);
export type DteOrNull = typeof DteOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const DteOrUndefined = S.UndefinedOr(Dte);
export type DteOrUndefined = typeof DteOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const DteOrNullish = S.NullishOr(Dte);
export type DteOrNullish = typeof DteOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const DteOrOptional = S.optional(Dte);
export type DteOrOptional = S.Schema.Type<typeof DteOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const DteWithDefault = (value: Date) =>
  Dte.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => Dte.make(value)),
  );
