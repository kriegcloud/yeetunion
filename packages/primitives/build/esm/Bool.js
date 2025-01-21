/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
export const Bool = /*#__PURE__*/S.Boolean.pipe();
/**
 * @category primitives
 * @since 0.1.0
 */
export const BoolOrNull = /*#__PURE__*/S.NullOr(Bool);
/**
 * @category primitives
 * @since 0.1.0
 */
export const BoolOrUndefined = /*#__PURE__*/S.UndefinedOr(Bool);
/**
 * @category primitives
 * @since 0.1.0
 */
export const BoolOrNullish = /*#__PURE__*/S.NullishOr(Bool);
/**
 * @category primitives
 * @since 0.1.0
 */
export const BoolOptional = /*#__PURE__*/S.optional(Bool);
/**
 * @category primitives
 * @since 0.1.0
 */
export const BoolWithDefault = value => Bool.pipe(S.propertySignature, S.withConstructorDefault(() => value));
/**
 * @category primitives
 * @since 0.1.0
 */
export default {
  Bool,
  BoolOrNull,
  BoolOrUndefined,
  BoolOrNullish,
  BoolOptional,
  BoolWithDefault
};
//# sourceMappingURL=Bool.js.map