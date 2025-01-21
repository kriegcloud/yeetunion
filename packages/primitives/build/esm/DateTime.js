/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
export const DateTime = S.Date;
/**
 * @category primitives
 * @since 0.1.0
 */
export const DateTimeOrNull = /*#__PURE__*/S.NullOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
export const DateTimeOrUndefined = /*#__PURE__*/S.UndefinedOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
export const DateTimeOrNullish = /*#__PURE__*/S.NullishOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
export const DateTimeOptional = /*#__PURE__*/S.optional(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
export const DateTimeWithDefault = value => DateTime.pipe(S.propertySignature, S.withConstructorDefault(() => value));
//# sourceMappingURL=DateTime.js.map