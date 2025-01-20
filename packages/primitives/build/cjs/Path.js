"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NextPath = void 0;
var _effect = require("effect");
var _NonEmptyStr = require("./NonEmptyStr.js");
/**
 * @since 0.1.0
 * @category primitives
 */

/**
 * @since 0.1.0
 * @category primitives
 */
const NextPath = exports.NextPath = /*#__PURE__*/_NonEmptyStr.NonEmptyTrimStr.pipe(/*#__PURE__*/_effect.Schema.startsWith("/"), /*#__PURE__*/_effect.Schema.brand("@ye/primitives/yeNextPath"));
/**
 * @since 0.1.0
 * @category primitives
 */
var _default = exports.default = {
  NextPath
};
//# sourceMappingURL=Path.js.map