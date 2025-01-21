"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserId = exports.User = void 0;
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
const UserId = exports.UserId = /*#__PURE__*/_primitives.default.NonEmptyTrimStr.pipe(/*#__PURE__*/_primitives.default.Brand("@ye/entities/UserId"));
/**
 * @since 0.1.0
 * @category entities
 */
class User extends /*#__PURE__*/_sql.Model.Class("User")({
  id: /*#__PURE__*/_sql.Model.GeneratedByApp(UserId),
  name: _primitives.default.NonEmptyTrimStr,
  email: _primitives.default.Email,
  emailVerified: _primitives.default.Bool,
  image: _primitives.default.NonEmptyTrimStrOrNull,
  role: _primitives.default.NonEmptyTrimStrOrNull,
  banned: _primitives.default.BoolOrNull,
  banReason: _primitives.default.StrOrNull,
  banExpires: _primitives.default.DateTimeOrNull,
  ..._utils.baseFields
}) {}
exports.User = User;
//# sourceMappingURL=User.js.map