"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrgId = exports.Org = void 0;
var _sql = require("@effect/sql");
var _primitives = _interopRequireDefault(require("@ye/primitives"));
var _effect = require("effect");
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
const OrgId = exports.OrgId = /*#__PURE__*/_primitives.default.NonEmptyTrimStr.pipe(/*#__PURE__*/_primitives.default.Brand("@ye/entities/OrgId"));
/**
 * @since 0.1.0
 * @category entities
 */
class Org extends /*#__PURE__*/_sql.Model.Class("Org")({
  id: /*#__PURE__*/_sql.Model.GeneratedByApp(OrgId),
  name: _primitives.default.NonEmptyTrimStr,
  slug: /*#__PURE__*/_primitives.default.NonEmptyTrimStr.pipe(/*#__PURE__*/_effect.Schema.lowercased()),
  logo: _primitives.default.URL,
  metadata: _primitives.default.Str,
  ..._utils.baseFields
}) {}
exports.Org = Org;
//# sourceMappingURL=Org.js.map