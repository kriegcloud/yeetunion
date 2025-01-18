import * as S from "@effect/schema/Schema";
import { yeNonEmptyTrimStr } from "./yeNonEmptyStr";

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeEmail = yeNonEmptyTrimStr.pipe(
  S.lowercased(),
  S.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
);
export type yeEmail = typeof yeEmail.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeEmailOrNull = S.NullOr(yeEmail);
export type yeEmailOrNull = typeof yeEmailOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeEmailOrUndefined = S.UndefinedOr(yeEmail);
export type yeEmailOrUndefined = typeof yeEmailOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeEmailOrNullish = S.NullishOr(yeEmail);
export type yeEmailOrNullish = typeof yeEmailOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeEmailOrOptional = S.optional(yeEmail);
export type yeEmailOrOptional = S.Schema.Type<typeof yeEmailOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeEmailWithDefault = (value: string) =>
  yeEmail.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => yeEmail.make(value)),
  );
