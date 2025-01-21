"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isActiveLink = isActiveLink;
var _url = require("./url");
// ----------------------------------------------------------------------
/**
 * Determines if a given link is active based on the current pathname.
 *
 * @param {string} pathnameProps - The current pathname.
 * @param {string} itemPath - The path of the item to check.
 * @param {boolean} [deep=true] - Whether to perform a deep check, including child paths and parameters.
 *
 * @returns {boolean} - True if the link is active, false otherwise.
 *
 * @example
 * const isActive = isActiveLink('/dashboard/user', '/dashboard/user', true);
 * console.log(isActive); // true
 */
function isActiveLink(pathnameProps, itemPath, deep = true) {
  const pathname = (0, _url.removeLastSlash)(pathnameProps);
  const pathHasParams = (0, _url.hasParams)(itemPath);
  // Check if the item path is invalid (starts with '#' or is an external link)
  const notValid = itemPath.startsWith("#") || (0, _url.isExternalLink)(itemPath);
  if (notValid) {
    return false;
  }
  // Determine if a deep check is needed
  const isDeep = deep || pathHasParams;
  if (isDeep) {
    // Deep check: default
    // Example: itemPath = '/dashboard/user'
    // Matches: pathname = '/dashboard/user', '/dashboard/user/list', '/dashboard/user/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b15/edit'
    const defaultActive = pathname.includes(itemPath);
    // Deep check: has params
    // Example: itemPath = '/dashboard/test?id=e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1'
    // Matches: pathname = '/dashboard/test'
    const originItemPath = (0, _url.removeParams)(itemPath);
    const hasParamsActive = pathHasParams && originItemPath === pathname;
    return defaultActive || hasParamsActive;
  }
  // Normal check: active
  // Example: itemPath = '/dashboard/calendar'
  // Matches: pathname = '/dashboard/calendar'
  return pathname === itemPath;
}
//# sourceMappingURL=active-link.js.map