"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JWKSId = exports.JWKS = void 0;
var _sql = require("@effect/sql");
var _primitives = _interopRequireDefault(require("@ye/primitives"));
var _utils = require("./lib/utils.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @since 0.1.0
 * @category entities
 */

/**
 * @since 0.1.0
 * @category entities
 */
const JWKSId = exports.JWKSId = /*#__PURE__*/_primitives.default.NonEmptyTrimStr.pipe(/*#__PURE__*/_primitives.default.Brand("@ye/entities/JWKSId"));
/**
 * @since 0.1.0
 * @category entities
 */
class JWKS extends /*#__PURE__*/_sql.Model.Class("JWKS")({
  id: /*#__PURE__*/_sql.Model.GeneratedByApp(JWKSId),
  publicKey: _primitives.default.NonEmptyTrimStr,
  privateKey: /*#__PURE__*/_sql.Model.Sensitive(_primitives.default.NonEmptyTrimStr),
  ..._utils.baseFields
}) {}
exports.JWKS = JWKS;
//# sourceMappingURL=JWKS.js.map