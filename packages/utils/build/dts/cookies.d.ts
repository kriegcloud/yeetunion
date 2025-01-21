export type CookieOptions = {
    secure?: boolean;
    daysUntilExpiration?: number;
    sameSite?: "Strict" | "Lax" | "None";
    domain?: string;
    path?: string;
};
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
export declare function getCookie<T>(key: string): T | null;
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
export declare function setCookie<T>(key: string, value: T, options?: CookieOptions): void;
/**
 * Removes a cookie by key.
 *
 * @param {string} key - The key of the cookie to remove.
 * @param {Pick<CookieOptions, 'path' | 'domain'>} [options] - The options for the cookie removal.
 *
 * @example
 * removeCookie('user');
 */
export declare function removeCookie(key: string, options?: Pick<CookieOptions, "path" | "domain">): void;
//# sourceMappingURL=cookies.d.ts.map