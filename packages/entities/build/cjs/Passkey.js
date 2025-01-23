"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasskeyId = exports.Passkey = void 0;
var S = _interopRequireWildcard(require("effect/Schema"));
var _primitives = _interopRequireDefault(require("@ye/primitives"));
var _User = require("./User.js");
var _utils = require("./lib/utils.js");
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
const PasskeyId = exports.PasskeyId = /*#__PURE__*/_primitives.default.NonEmptyTrimStr.pipe(/*#__PURE__*/_primitives.default.Brand("@ye/entities/PasskeyId"));
/**
 * @since 0.1.0
 * @category entities
 */
class Passkey extends /*#__PURE__*/S.Class("Passkey")({
  id: PasskeyId,
  name: _primitives.default.NonEmptyTrimStrOrNull,
  publicKey: _primitives.default.NonEmptyTrimStr,
  userId: _User.UserId,
  credentialID: _primitives.default.NonEmptyTrimStr,
  counter: _primitives.default.PosInt,
  deviceType: _primitives.default.NonEmptyTrimStr,
  backedUp: _primitives.default.Bool,
  transports: _primitives.default.NonEmptyTrimStrOrNull,
  ..._utils.baseFields
}) {}
exports.Passkey = Passkey;
//# sourceMappingURL=Passkey.js.map