"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Hex = void 0;
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
const Hex = exports.Hex = /*#__PURE__*/_NonEmptyStr.NonEmptyTrimStr.pipe(/*#__PURE__*/_effect.Schema.pattern(/^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6}|[a-fA-F0-9]{4}|[a-fA-F0-9]{8})$/));
/**
 * @category primitives
 * @since 0.1.0
 */
var _default = exports.default = {
  Hex
};
//# sourceMappingURL=Hex.js.map