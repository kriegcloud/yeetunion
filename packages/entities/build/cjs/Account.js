"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountId = exports.Account = void 0;
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
const AccountId = exports.AccountId = /*#__PURE__*/_primitives.default.NonEmptyTrimStr.pipe(/*#__PURE__*/_primitives.default.Brand("@ye/entities/AccountId"));
/**
 * @since 0.1.0
 * @category entities
 */
class Account extends /*#__PURE__*/_sql.Model.Class("Account")({
  id: /*#__PURE__*/_sql.Model.GeneratedByApp(AccountId),
  accountId: _primitives.default.NonEmptyTrimStr,
  providerId: _primitives.default.NonEmptyTrimStr,
  userId: _User.UserId,
  accessToken: _primitives.default.NonEmptyTrimStrOrNull,
  refreshToken: _primitives.default.NonEmptyTrimStrOrNull,
  idToken: _primitives.default.NonEmptyTrimStrOrNull,
  accessTokenExpiresAt: _primitives.default.DateTimeOrNull,
  refreshTokenExpiresAt: _primitives.default.DateTimeOrNull,
  scope: _primitives.default.NonEmptyTrimStrOrNull,
  password: /*#__PURE__*/_sql.Model.Sensitive(_primitives.default.NonEmptyTrimStrOrNull),
  ..._utils.baseFields
}) {}
exports.Account = Account;
//# sourceMappingURL=Account.js.map