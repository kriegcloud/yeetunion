"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrgMemberId = exports.OrgMember = void 0;
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
const OrgMemberId = exports.OrgMemberId = /*#__PURE__*/_primitives.default.NonEmptyTrimStr.pipe(/*#__PURE__*/_primitives.default.Brand("@ye/entities/OrgMemberId"));
/**
 * @since 0.1.0
 * @category entities
 */
class OrgMember extends /*#__PURE__*/_sql.Model.Class("OrgMember")({
  id: /*#__PURE__*/_sql.Model.GeneratedByApp(OrgMemberId),
  organizationId: _Org.OrgId,
  userId: _User.UserId,
  role: _primitives.default.NonEmptyTrimStr,
  ..._utils.baseFields
}) {}
exports.OrgMember = OrgMember;
//# sourceMappingURL=OrgMember.js.map