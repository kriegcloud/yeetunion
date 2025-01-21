/**
 * This function gets the base URL of the current environment.
 * @returns The base URL.
 */
export declare function getBaseUrl(): string;
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
export declare const hasParams: (url: string) => boolean;
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
export declare function removeLastSlash(pathname: string): string;
/**
 * Checks if two URLs have the same path.
 *
 * @param {string} targetUrl - The target URL to compare.
 * @param {string} pathname - The pathname to compare.
 * @returns {boolean} - True if the paths are equal, false otherwise.
 */
export declare function isEqualPath(targetUrl: string, pathname: string): boolean;
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
export declare function removeParams(url: string): string;
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
export declare function isExternalLink(url: string): boolean;
//# sourceMappingURL=url.d.ts.map