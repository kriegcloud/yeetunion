"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBaseUrl = getBaseUrl;
exports.hasParams = void 0;
exports.isEqualPath = isEqualPath;
exports.isExternalLink = isExternalLink;
exports.removeLastSlash = removeLastSlash;
exports.removeParams = removeParams;
/**
 * This function gets the base URL of the current environment.
 * @returns The base URL.
 */
function getBaseUrl() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  if (process.env["VERCEL_URL"]) {
    return `https://${process.env["VERCEL_URL"]}`;
  }
  return `http://localhost:${String(process.env["PORT"] ?? 3000)}`;
}
/**
 * Checks if a URL has query parameters.
 *
 * @param {string} url - The URL to check.
 * @returns {boolean} - True if the URL has query parameters, false otherwise.
 *
 * @example
 * const hasQueryParams = hasParams('https://example.com?page=1');
 * console.log(hasQueryParams); // true
 */
const hasParams = url => {
  const queryString = url.split("?")[1];
  return queryString ? new URLSearchParams(queryString).toString().length > 0 : false;
};
// ----------------------------------------------------------------------
/**
 * Removes the trailing slash from a pathname if it exists.
 *
 * @param {string} pathname - The pathname to process.
 * @returns {string} - The pathname without the trailing slash.
 *
 * @example
 * const cleanPathname = removeLastSlash('/dashboard/calendar/');
 * console.log(cleanPathname); // '/dashboard/calendar'
 */
exports.hasParams = hasParams;
function removeLastSlash(pathname) {
  /**
   * Remove last slash
   * [1]
   * @input  = '/dashboard/calendar/'
   * @output = '/dashboard/calendar'
   * [2]
   * @input  = '/dashboard/calendar'
   * @output = '/dashboard/calendar'
   */
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}
// ----------------------------------------------------------------------
/**
 * Checks if two URLs have the same path.
 *
 * @param {string} targetUrl - The target URL to compare.
 * @param {string} pathname - The pathname to compare.
 * @returns {boolean} - True if the paths are equal, false otherwise.
 */
function isEqualPath(targetUrl, pathname) {
  return removeLastSlash(targetUrl) === removeLastSlash(pathname);
}
// ----------------------------------------------------------------------
/**
 * Removes query parameters from a URL.
 *
 * @param {string} url - The URL to process.
 * @returns {string} - The URL without query parameters.
 *
 * @example
 * const cleanUrl = removeParams('https://example.com/page?param=value');
 * console.log(cleanUrl); // 'https://example.com/page'
 */
function removeParams(url) {
  try {
    const urlObj = new URL(url, window.location.origin);
    return removeLastSlash(urlObj.pathname);
  } catch {
    return url;
  }
}
// ----------------------------------------------------------------------
/**
 * Checks if a URL is an external link.
 *
 * @param {string} url - The URL to check.
 * @returns {boolean} - True if the URL is an external link, false otherwise.
 *
 * @example
 * const isExternal = isExternalLink('https://example.com');
 * console.log(isExternal); // true
 */
function isExternalLink(url) {
  return url.startsWith("http");
}
//# sourceMappingURL=url.js.map