/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStr = S.NonEmptyTrimmedString;
/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStrOrNull = /*#__PURE__*/S.NullOr(NonEmptyStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStrOrUndefined = /*#__PURE__*/S.UndefinedOr(NonEmptyStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStrOrNullish = /*#__PURE__*/S.NullishOr(NonEmptyStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStrOptional = /*#__PURE__*/S.optional(NonEmptyStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyStrWithDefault = value => NonEmptyStr.pipe(S.propertySignature, S.withConstructorDefault(() => NonEmptyStr.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStr = S.NonEmptyTrimmedString;
/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStrOrNull = /*#__PURE__*/S.NullOr(NonEmptyTrimStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStrOrUndefined = /*#__PURE__*/S.UndefinedOr(NonEmptyTrimStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStrOrNullish = /*#__PURE__*/S.NullishOr(NonEmptyTrimStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStrOptional = /*#__PURE__*/S.optional(NonEmptyTrimStr);
/**
 * @category primitives
 * @since 0.1.0
 */
export const NonEmptyTrimStrWithDefault = value => NonEmptyTrimStr.pipe(S.propertySignature, S.withConstructorDefault(() => NonEmptyTrimStr.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
export default {
  NonEmptyStr,
  NonEmptyStrOrNull,
  NonEmptyStrOrUndefined,
  NonEmptyStrOrNullish,
  NonEmptyStrOptional,
  NonEmptyStrWithDefault,
  NonEmptyTrimStr,
  NonEmptyTrimStrOrNull,
  NonEmptyTrimStrOrUndefined,
  NonEmptyTrimStrOrNullish,
  NonEmptyTrimStrOptional,
  NonEmptyTrimStrWithDefault
};
//# sourceMappingURL=NonEmptyStr.js.map