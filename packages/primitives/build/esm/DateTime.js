/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTime = S.Date;
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOrNull = /*#__PURE__*/S.NullOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOrUndefined = /*#__PURE__*/S.UndefinedOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOrNullish = /*#__PURE__*/S.NullishOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOptional = /*#__PURE__*/S.optional(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeWithDefault = value => DateTime.pipe(S.propertySignature, S.withConstructorDefault(() => value));
/**
 * @category primitives
 * @since 0.1.0
 */
export default {
  DateTime,
  DateTimeOrNull,
  DateTimeOrUndefined,
  DateTimeOptional,
  DateTimeOrNullish,
  DateTimeWithDefault
};
//# sourceMappingURL=DateTime.js.map