/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
export const Str = S.String;
/**
 * @category primitives
 * @since 0.1.0
 */
export const StrOrNull = /*#__PURE__*/S.NullOr(Str);
/**
 * @category primitives
 * @since 0.1.0
 */
export const StrOrUndefined = /*#__PURE__*/S.UndefinedOr(Str);
/**
 * @category primitives
 * @since 0.1.0
 */
export const StrOrNullish = /*#__PURE__*/S.NullishOr(Str);
/**
 * @category primitives
 * @since 0.1.0
 */
export const StrOptional = /*#__PURE__*/S.optional(Str);
/**
 * @category primitives
 * @since 0.1.0
 */
export const StrWithDefault = value => Str.pipe(S.propertySignature, S.withConstructorDefault(() => value));
/**
 * @category primitives
 * @since 0.1.0
 */
export default {
  Str,
  StrOrNull,
  StrOrUndefined,
  StrOrNullish,
  StrOptional,
  StrWithDefault
};
//# sourceMappingURL=Str.js.map