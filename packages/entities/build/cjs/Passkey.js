"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasskeyId = exports.Passkey = void 0;
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
const PasskeyId = exports.PasskeyId = /*#__PURE__*/_primitives.default.NonEmptyTrimStr.pipe(/*#__PURE__*/_primitives.default.Brand("@ye/entities/PasskeyId"));
/**
 * @since 0.1.0
 * @category entities
 */
class Passkey extends /*#__PURE__*/_sql.Model.Class("Passkey")({
  id: /*#__PURE__*/_sql.Model.GeneratedByApp(PasskeyId),
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