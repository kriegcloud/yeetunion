"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountId = exports.Account = void 0;
var S = _interopRequireWildcard(require("effect/Schema"));
var _primitives = _interopRequireDefault(require("@ye/primitives"));
var _User = require("./User.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
class Account extends /*#__PURE__*/S.Class("Account")({
  id: AccountId,
  accountId: _primitives.default.NonEmptyTrimStr,
  providerId: _primitives.default.NonEmptyTrimStr,
  userId: _User.UserId,
  accessToken: _primitives.default.NonEmptyTrimStrOrNull,
  refreshToken: _primitives.default.NonEmptyTrimStrOrNull,
  idToken: _primitives.default.NonEmptyTrimStrOrNull,
  accessTokenExpiresAt: _primitives.default.DateTimeOrNull,
  refreshTokenExpiresAt: _primitives.default.DateTimeOrNull,
  scope: _primitives.default.NonEmptyTrimStrOrNull,
  password: _primitives.default.NonEmptyTrimStrOrNull,
  createdAt: _primitives.default.DateTime,
  updatedAt: _primitives.default.DateTime
}) {}
exports.Account = Account;
//# sourceMappingURL=Account.js.map