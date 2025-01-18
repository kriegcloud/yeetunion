import * as S from "@effect/schema/Schema";
import { yeNonEmptyTrimStr } from "./yeNonEmptyStr";

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeURL = yeNonEmptyTrimStr.pipe(S.pattern(/^https?:\/\//));
export type yeURL = typeof yeURL.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeURLOrNull = S.NullOr(yeURL);
export type yeURLOrNull = typeof yeURLOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeURLOrUndefined = S.UndefinedOr(yeURL);
export type yeURLOrUndefined = typeof yeURLOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeURLOrNullish = S.NullishOr(yeURL);
export type yeURLOrNullish = typeof yeURLOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeURLOrOptional = S.optional(yeURL);
export type yeURLOrOptional = S.Schema.Type<typeof yeURLOrOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
export const yeURLWithDefault = (value: string) =>
  yeURL.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => yeURL.make(value)),
  );
