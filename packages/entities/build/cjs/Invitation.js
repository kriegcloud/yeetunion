"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvitationId = exports.Invitation = void 0;
var _sql = require("@effect/sql");
var _primitives = _interopRequireDefault(require("@ye/primitives"));
var _Org = require("./Org.js");
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
const InvitationId = exports.InvitationId = /*#__PURE__*/_primitives.default.NonEmptyTrimStr.pipe(/*#__PURE__*/_primitives.default.Brand("@ye/entities/InvitationId"));
/**
 * @since 0.1.0
 * @category entities
 */
class Invitation extends /*#__PURE__*/_sql.Model.Class("Invitation")({
  id: /*#__PURE__*/_sql.Model.GeneratedByApp(InvitationId),
  organizationId: _Org.OrgId,
  email: _primitives.default.Email,
  role: _primitives.default.NonEmptyTrimStr,
  status: _primitives.default.NonEmptyTrimStr,
  expiresAt: _primitives.default.DateTime,
  inviterId: _User.UserId,
  ..._utils.baseFields
}) {}
exports.Invitation = Invitation;
//# sourceMappingURL=Invitation.js.map