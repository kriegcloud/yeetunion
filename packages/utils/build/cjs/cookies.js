"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCookie = getCookie;
exports.removeCookie = removeCookie;
exports.setCookie = setCookie;
/**
 * Retrieves a cookie value by key.
 *
 * @param {string} key - The key of the cookie to retrieve.
 * @returns {T | null} - The parsed value of the cookie, or null if not found or an error occurs.
 *
 * @example
 * const user = getCookie<{ name: string, age: number }>('user');
 * console.log(user); // { name: 'John', age: 30 }
 */
function getCookie(key) {
  if (!key || typeof key !== "string") {
    console.warn("Invalid cookie key provided");
    return null;
  }
  try {
    const keyName = `${key}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split("; ");
    const matchedCookie = cookieArray.find(cookie => cookie.startsWith(keyName));
    if (!matchedCookie) return null;
    const cookieValue = matchedCookie.substring(keyName.length);
    try {
      return JSON.parse(cookieValue);
    } catch {
      return cookieValue;
    }
  } catch (error) {
    console.error("Error retrieving cookie:", error);
    return null;
  }
}
// ----------------------------------------------------------------------
/**
 * Sets a cookie with a specified key, value, and options.
 *
 * @template T
 * @param {string} key - The key of the cookie to set.
 * @param {T} value - The value of the cookie to set.
 * @param {CookieOptions} [options] - The options for the cookie.
 *
 * @example
 * setCookie('user', { name: 'John', age: 30 }, { daysUntilExpiration: 7, sameSite: 'Lax', secure: true });
 */
function setCookie(key, value, options) {
  if (!key || typeof key !== "string") {
    console.error("Invalid cookie key provided");
    return;
  }
  const {
    daysUntilExpiration = 0,
    sameSite = "Strict",
    secure = false,
    path = "/",
    domain
  } = options ?? {};
  try {
    const serializedValue = encodeURIComponent(typeof value === "string" ? value : JSON.stringify(value));
    const cookieParts = [`${key}=${serializedValue}`, `path=${path}`, sameSite && `SameSite=${sameSite}`, secure && "Secure", domain && `domain=${domain}`];
    if (daysUntilExpiration > 0) {
      const expirationDate = new Date(Date.now() + daysUntilExpiration * 24 * 60 * 60 * 1000);
      cookieParts.push(`expires=${expirationDate.toUTCString()}`);
    }
    document.cookie = cookieParts.filter(Boolean).join("; ");
  } catch (error) {
    console.error("Error setting cookie:", error);
  }
}
// ----------------------------------------------------------------------
/**
 * Removes a cookie by key.
 *
 * @param {string} key - The key of the cookie to remove.
 * @param {Pick<CookieOptions, 'path' | 'domain'>} [options] - The options for the cookie removal.
 *
 * @example
 * removeCookie('user');
 */
function removeCookie(key, options) {
  if (!key || typeof key !== "string") {
    console.error("Invalid cookie key provided");
    return;
  }
  const {
    path = "/",
    domain
  } = options ?? {};
  try {
    const cookieParts = [`${key}=`, "expires=Thu, 01 Jan 1970 00:00:00 GMT", `path=${path}`, domain && `domain=${domain}`, "Secure"];
    document.cookie = cookieParts.filter(Boolean).join("; ");
  } catch (error) {
    console.error("Error removing cookie:", error);
  }
}
//# sourceMappingURL=cookies.js.map