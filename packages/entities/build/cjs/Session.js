"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionId = exports.Session = void 0;
var _sql = require("@effect/sql");
var _primitives = _interopRequireDefault(require("@ye/primitives"));
var _User = require("./User.js");
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
const SessionId = exports.SessionId = /*#__PURE__*/_primitives.default.NonEmptyTrimStr.pipe(/*#__PURE__*/_primitives.default.Brand("@ye/entities/SessionId"));
/**
 * @since 0.1.0
 * @category entities
 */
class Session extends /*#__PURE__*/_sql.Model.Class("Session")({
  id: /*#__PURE__*/_sql.Model.GeneratedByApp(SessionId),
  expiresAt: _primitives.default.DateTimeOrNull,
  token: _primitives.default.NonEmptyTrimStr,
  ipAddress: _primitives.default.IPOrNull,
  userAgent: _primitives.default.NonEmptyTrimStrOrNull,
  userId: _User.UserId,
  impersonatedBy: _primitives.default.NonEmptyTrimStrOrNull,
  activeOrganizationId: _primitives.default.NonEmptyTrimStrOrNull,
  ..._utils.baseFields
}) {}
exports.Session = Session;
//# sourceMappingURL=Session.js.map