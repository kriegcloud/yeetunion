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
type DateTime = typeof DateTime.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOrNull = S.NullOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
type DateTimeOrNull = typeof DateTimeOrNull.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOrUndefined = S.UndefinedOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
type DateTimeOrUndefined = typeof DateTimeOrUndefined.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOrNullish = S.NullishOr(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
type DateTimeOrNullish = typeof DateTimeOrNullish.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeOptional = S.optional(DateTime);
/**
 * @category primitives
 * @since 0.1.0
 */
type DateTimeOptional = S.Schema.Type<typeof DateTimeOptional>;

/**
 * @category primitives
 * @since 0.1.0
 */
const DateTimeWithDefault = (value: Date) =>
  DateTime.pipe(
    S.propertySignature,
    S.withConstructorDefault(() => value),
  );

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
  DateTimeWithDefault,
}
