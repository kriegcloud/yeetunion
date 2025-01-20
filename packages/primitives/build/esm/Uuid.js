/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
export const UUID = S.UUID;
/**
 * @category primitives
 * @since 0.1.0
 */
export const UUIDOrNull = /*#__PURE__*/S.NullOr(UUID);
/**
 * @category primitives
 * @since 0.1.0
 */
export const UUIDOrUndefined = /*#__PURE__*/S.UndefinedOr(UUID);
/**
 * @category primitives
 * @since 0.1.0
 */
export const UUIDOrNullish = /*#__PURE__*/S.NullishOr(UUID);
/**
 * @category primitives
 * @since 0.1.0
 */
export const UUIDOptional = /*#__PURE__*/S.optional(UUID);
/**
 * @category primitives
 * @since 0.1.0
 */
export const UUIDWithDefault = value => UUID.pipe(S.propertySignature, S.withConstructorDefault(() => UUID.make(value)));
/**
 * @since 0.1.0
 * @category primitives
 */
export default {
  UUID,
  UUIDOrNull,
  UUIDOrUndefined,
  UUIDOrNullish,
  UUIDOptional,
  UUIDWithDefault
};
//# sourceMappingURL=Uuid.js.map