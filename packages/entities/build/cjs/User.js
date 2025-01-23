"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticKeys = exports.baseFields = exports.UserId = exports.UserDefinition = exports.Keys = exports.BetterAuthUser = void 0;
var _primitives = _interopRequireDefault(require("@ye/primitives"));
var S = _interopRequireWildcard(require("effect/Schema"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// 1) Define `baseFields` as a `const` so TS has exact key knowledge
const baseFields = exports.baseFields = {
  createdAt: _primitives.default.DateTime,
  updatedAt: _primitives.default.DateTimeOrNull
};
// 2) Define your static keys
const staticKeys = exports.staticKeys = ["id", "name", "email", "emailVerified", "image", "role", "banned", "banReason", "banExpires"];
// 4) Create your combined Keys array
const Keys = exports.Keys = [...staticKeys, ... /*#__PURE__*/Object.keys(baseFields)];
// 5) Define your S.Struct
const UserId = exports.UserId = /*#__PURE__*/_primitives.default.NonEmptyTrimStr.pipe(/*#__PURE__*/_primitives.default.Brand("@ye/entities/UserId"));
const UserDefinition = exports.UserDefinition = /*#__PURE__*/S.Struct({
  id: UserId,
  name: _primitives.default.NonEmptyTrimStr,
  email: _primitives.default.Email,
  emailVerified: _primitives.default.Bool,
  image: /*#__PURE__*/S.optional(_primitives.default.NonEmptyTrimStrOrNullish),
  role: _primitives.default.NonEmptyTrimStrOrNull,
  banned: _primitives.default.BoolOrNull,
  banReason: _primitives.default.StrOrNull,
  banExpires: _primitives.default.DateTimeOrNull,
  twoFactorEnabled: _primitives.default.BoolOrNull,
  createdAt: _primitives.default.DateTime,
  updatedAt: _primitives.default.DateTime
});
const BetterAuthUser = exports.BetterAuthUser = /*#__PURE__*/S.mutable(UserDefinition);
//# sourceMappingURL=User.js.map