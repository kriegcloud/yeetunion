"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IPv6 = exports.IPOrNull = exports.IP = void 0;
var _effect = require("effect");
var _NonEmptyStr = require("./NonEmptyStr.js");
/**
 * @category primitives
 * @since 0.1.0
 */

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
const IPv4 = /*#__PURE__*/_NonEmptyStr.NonEmptyTrimStr.pipe(/*#__PURE__*/_effect.Schema.pattern(IPv4_REGEX));
/**
 * @category primitives
 * @since 0.1.0
 */
const IPv6 = exports.IPv6 = /*#__PURE__*/_NonEmptyStr.NonEmptyTrimStr.pipe(/*#__PURE__*/_effect.Schema.pattern(IPv6_REGEX));
/**
 * @category primitives
 * @since 0.1.0
 */
const IP = exports.IP = /*#__PURE__*/_NonEmptyStr.NonEmptyTrimStr.pipe(/*#__PURE__*/_effect.Schema.pattern(IP_REGEX));
/**
 * @category primitives
 * @since 0.1.0
 */
const IPOrNull = exports.IPOrNull = /*#__PURE__*/_effect.Schema.NullOr(IP);
//# sourceMappingURL=IP.js.map