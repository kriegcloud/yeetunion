"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerificationId = exports.Verification = void 0;
var _primitives = _interopRequireDefault(require("@ye/primitives"));
var _utils = require("./lib/utils.js");
var S = _interopRequireWildcard(require("effect/Schema"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
class Verification extends /*#__PURE__*/S.Class("Verification")({
  id: VerificationId,
  identifier: _primitives.default.NonEmptyTrimStr,
  value: _primitives.default.NonEmptyTrimStr,
  expiresAt: _primitives.default.DateTime,
  ..._utils.baseFields
}) {}
exports.Verification = Verification;
//# sourceMappingURL=Verification.js.map