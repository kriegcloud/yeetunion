"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.URLWithDefault = exports.URLOrUndefined = exports.URLOrNullish = exports.URLOrNull = exports.URLOptional = exports.URL = void 0;
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
const URL = exports.URL = /*#__PURE__*/_NonEmptyStr.NonEmptyTrimStr.pipe(/*#__PURE__*/_effect.Schema.pattern(/^https?:\/\//));
/**
 * @category primitives
 * @since 0.1.0
 */
const URLOrNull = exports.URLOrNull = /*#__PURE__*/_effect.Schema.NullOr(URL);
/**
 * @category primitives
 * @since 0.1.0
 */
const URLOrUndefined = exports.URLOrUndefined = /*#__PURE__*/_effect.Schema.UndefinedOr(URL);
/**
 * @category primitives
 * @since 0.1.0
 */
const URLOrNullish = exports.URLOrNullish = /*#__PURE__*/_effect.Schema.NullishOr(URL);
/**
 * @category primitives
 * @since 0.1.0
 */
const URLOptional = exports.URLOptional = /*#__PURE__*/_effect.Schema.optional(URL);
/**
 * @category primitives
 * @since 0.1.0
 */
const URLWithDefault = value => URL.pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(() => URL.make(value)));
/**
 * @category primitives
 * @since 0.1.0
 */
exports.URLWithDefault = URLWithDefault;
var _default = exports.default = {
  URL,
  URLOrNull,
  URLOrUndefined,
  URLOrNullish,
  URLOptional,
  URLWithDefault
};
//# sourceMappingURL=Url.js.map