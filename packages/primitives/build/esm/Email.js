/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
import { NonEmptyTrimStr } from "./NonEmptyStr.js";
/**
 * @category primitives
 * @since 0.1.0
 */
const Email = /*#__PURE__*/NonEmptyTrimStr.pipe(/*#__PURE__*/S.lowercased(), /*#__PURE__*/S.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/));
/**
 * @category primitives
 * @since 0.1.0
 */
export const EmailOrNull = /*#__PURE__*/S.NullOr(Email);
/**
 * @category primitives
 * @since 0.1.0
 */
export const EmailOrUndefined = /*#__PURE__*/S.UndefinedOr(Email);
/**
 * @category primitives
 * @since 0.1.0
 */
export const EmailOrNullish = /*#__PURE__*/S.NullishOr(Email);
/**
 * @category primitives
 * @since 0.1.0
 */
export const EmailOptional = /*#__PURE__*/S.optional(Email);
/**
 * @category primitives
 * @since 0.1.0
 */
export const EmailWithDefault = value => Email.pipe(S.propertySignature, S.withConstructorDefault(() => Email.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
export default {
  Email,
  EmailOrNull,
  EmailOrUndefined,
  EmailOrNullish,
  EmailOptional,
  EmailWithDefault
};
//# sourceMappingURL=Email.js.map