"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerificationId = exports.Verification = void 0;
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
const VerificationId = exports.VerificationId = /*#__PURE__*/_primitives.default.NonEmptyTrimStr.pipe(/*#__PURE__*/_primitives.default.Brand("@ye/entities/VerificationId"));
/**
 * @since 0.1.0
 * @category entities
 */
class Verification extends /*#__PURE__*/_sql.Model.Class("Verification")({
  id: /*#__PURE__*/_sql.Model.GeneratedByApp(VerificationId),
  identifier: _primitives.default.NonEmptyTrimStr,
  value: _primitives.default.NonEmptyTrimStr,
  expiresAt: _primitives.default.DateTime,
  ..._utils.baseFields
}) {}
exports.Verification = Verification;
//# sourceMappingURL=Verification.js.map