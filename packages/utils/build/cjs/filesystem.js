"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAbsolutePath = getAbsolutePath;
var _nodePath = require("node:path");
/**
 * This function is used to resolve the absolute path of a package. It is needed
 * in projects that use Yarn PnP or are set up within a monorepo.
 * @param value The package name.
 * @returns The absolute path of the package.
 */
function getAbsolutePath(value) {
  return (0, _nodePath.dirname)(require.resolve((0, _nodePath.join)(value, "package.json")));
}
//# sourceMappingURL=filesystem.js.map