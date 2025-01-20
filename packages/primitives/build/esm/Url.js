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
export const URL = /*#__PURE__*/NonEmptyTrimStr.pipe(/*#__PURE__*/S.pattern(/^https?:\/\//));
/**
 * @category primitives
 * @since 0.1.0
 */
export const URLOrNull = /*#__PURE__*/S.NullOr(URL);
/**
 * @category primitives
 * @since 0.1.0
 */
export const URLOrUndefined = /*#__PURE__*/S.UndefinedOr(URL);
/**
 * @category primitives
 * @since 0.1.0
 */
export const URLOrNullish = /*#__PURE__*/S.NullishOr(URL);
/**
 * @category primitives
 * @since 0.1.0
 */
export const URLOptional = /*#__PURE__*/S.optional(URL);
/**
 * @category primitives
 * @since 0.1.0
 */
export const URLWithDefault = value => URL.pipe(S.propertySignature, S.withConstructorDefault(() => URL.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
export default {
  URL,
  URLOrNull,
  URLOrUndefined,
  URLOrNullish,
  URLOptional,
  URLWithDefault
};
//# sourceMappingURL=Url.js.map