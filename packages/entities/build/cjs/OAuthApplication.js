"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OAuthApplicationId = exports.OAuthApplication = void 0;
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
const OAuthApplicationId = exports.OAuthApplicationId = /*#__PURE__*/_primitives.default.NonEmptyTrimStr.pipe(/*#__PURE__*/_primitives.default.Brand("@ye/entities/OAuthApplicationId"));
/**
 * @since 0.1.0
 * @category entities
 */
class OAuthApplication extends /*#__PURE__*/S.Class("OAuthApplication")({
  id: OAuthApplicationId,
  name: /*#__PURE__*/S.NullOr(_primitives.default.NonEmptyTrimStr),
  icon: /*#__PURE__*/S.NullOr(_primitives.default.NonEmptyTrimStr),
  metadata: /*#__PURE__*/S.NullOr(_primitives.default.NonEmptyTrimStr),
  clientId: /*#__PURE__*/S.NullOr(_primitives.default.NonEmptyTrimStr),
  clientSecret: /*#__PURE__*/S.NullOr(_primitives.default.NonEmptyTrimStr),
  redirectURLs: /*#__PURE__*/S.NullOr(_primitives.default.NonEmptyTrimStr),
  type: /*#__PURE__*/S.NullOr(_primitives.default.NonEmptyTrimStr),
  disabled: /*#__PURE__*/S.NullOr(_primitives.default.Bool),
  userId: /*#__PURE__*/S.NullOr(_User.UserId),
  createdAt: /*#__PURE__*/S.NullOr(_primitives.default.DateTime),
  updatedAt: /*#__PURE__*/S.NullOr(_primitives.default.DateTime)
}) {}
exports.OAuthApplication = OAuthApplication;
//# sourceMappingURL=OAuthApplication.js.map