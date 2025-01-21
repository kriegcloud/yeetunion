"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseFields = void 0;
var _sql = require("@effect/sql");
/**
 * @since 0.1.0
 * @category entities
 */

/**
 * @since 0.1.0
 * @category entities
 */
const baseFields = exports.baseFields = {
  createdAt: _sql.Model.DateTimeInsertFromDate,
  updatedAt: _sql.Model.DateTimeUpdateFromDate
};
//# sourceMappingURL=utils.js.map