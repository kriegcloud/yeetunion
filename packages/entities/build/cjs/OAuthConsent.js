"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OAuthConsentId = exports.OAuthConsent = void 0;
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
const OAuthConsentId = exports.OAuthConsentId = /*#__PURE__*/_primitives.default.NonEmptyTrimStr.pipe(/*#__PURE__*/_primitives.default.Brand("@ye/entities/OAuthConsentId"));
/**
 * @since 0.1.0
 * @category entities
 */
class OAuthConsent extends /*#__PURE__*/S.Class("OAuthConsent")({
  id: OAuthConsentId,
  clientId: /*#__PURE__*/S.NullOr(_primitives.default.NonEmptyTrimStrOrNull),
  userId: /*#__PURE__*/S.NullOr(_User.UserId),
  scopes: /*#__PURE__*/S.NullOr(_primitives.default.NonEmptyTrimStrOrNull),
  createdAt: /*#__PURE__*/S.NullOr(_primitives.default.DateTime),
  updatedAt: /*#__PURE__*/S.NullOr(_primitives.default.DateTime),
  consentGiven: /*#__PURE__*/S.NullOr(_primitives.default.Bool)
}) {}
exports.OAuthConsent = OAuthConsent;
//# sourceMappingURL=OAuthConsent.js.map