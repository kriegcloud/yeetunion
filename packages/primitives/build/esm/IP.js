import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
import { NonEmptyTrimStr } from "./NonEmptyStr";
/**
 * @category primitives
 * @since 0.1.0
 */
const IPv4_REGEX = /*#__PURE__*/new RegExp("^" + "(25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\." + "(25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\." + "(25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\." + "(25[0-5]|2[0-4]\\d|[01]?\\d?\\d)" + "$");
/**
 * @category primitives
 * @since 0.1.0
 */
const IP_REGEX = /*#__PURE__*/new RegExp("^" +
// ---------------------- IPv4 ----------------------
"(?:" + "(25[0-5]|2[0-4]\\d|[01]?\\d?\\d)" +
// 0–255
"\\." + "){3}" + "(25[0-5]|2[0-4]\\d|[01]?\\d?\\d)" +
// last octet
"|" +
// ---------------------- IPv6 ----------------------
"(" +
// 1) Full IPv6, 8 groups of 1-4 hex digits:
"([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}" + "|" +
// 2) Compressed forms (using "::"):
"(" +
// A look-ahead to ensure "::" appears at most once:
"(?=.*(::))(?!.*::.*::)" +
// Various ways to compress:
"((:[0-9A-Fa-f]{1,4}){1,7}|:)" + "|" +
// Another way to capture the groups:
"([0-9A-Fa-f]{1,4}(:[0-9A-Fa-f]{1,4}){0,6})?::([0-9A-Fa-f]{1,4}(:[0-9A-Fa-f]{1,4}){0,6})?" + ")" + ")" + "$");
/**
 * @category primitives
 * @since 0.1.0
 */
const IPv6_REGEX = /*#__PURE__*/new RegExp("^" + "([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}" +
// full form
"|" + "((?=.*(::))(?!.*::.*::)" +
// or compressed form
"(([0-9A-Fa-f]{1,4})?(:[0-9A-Fa-f]{1,4}){0,6})?::" + "(([0-9A-Fa-f]{1,4})(:[0-9A-Fa-f]{1,4}){0,6})?)" + "$");
/**
 * @category primitives
 * @since 0.1.0
 */
const IPv4 = /*#__PURE__*/NonEmptyTrimStr.pipe(/*#__PURE__*/S.pattern(IPv4_REGEX));
/**
 * @category primitives
 * @since 0.1.0
 */
export const IPv6 = /*#__PURE__*/NonEmptyTrimStr.pipe(/*#__PURE__*/S.pattern(IPv6_REGEX));
/**
 * @category primitives
 * @since 0.1.0
 */
export const IP = /*#__PURE__*/NonEmptyTrimStr.pipe(/*#__PURE__*/S.pattern(IP_REGEX));
/**
 * @category primitives
 * @since 0.1.0
 */
export const IPOrNull = /*#__PURE__*/S.NullOr(IP);
//# sourceMappingURL=IP.js.map