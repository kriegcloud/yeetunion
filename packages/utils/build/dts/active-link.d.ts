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
export declare function isActiveLink(pathnameProps: string, itemPath: string, deep?: boolean): boolean;
//# sourceMappingURL=active-link.d.ts.map