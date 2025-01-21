/**
 * Retrieves a value from local storage by key.
 *
 * @param {string} key - The key of the item to retrieve.
 * @returns {any | null} - The parsed value of the item, or null if not found or an error occurs.
 *
 * @example
 * const user = getStorage('user');
 * console.log(user); // { name: 'John', age: 30 }
 */
export declare function getStorage<T>(key: string, defaultValue?: T): T | null | undefined;
/**
 * Sets a value in local storage with a specified key.
 *
 * @template T
 * @param {string} key - The key of the item to set.
 * @param {T} value - The value of the item to set.
 *
 * @example
 * setStorage('user', { name: 'John', age: 30 });
 */
export declare function setStorage<T>(key: string, value: T): void;
/**
 * Removes an item from local storage by key.
 *
 * @param {string} key - The key of the item to remove.
 *
 * @example
 * removeStorage('user');
 */
export declare function removeStorage(key: string): void;
/**
 * Checks if local storage is available.
 *
 * @returns {boolean} - True if local storage is available, false otherwise.
 *
 * @example
 * const isAvailable = localStorageAvailable();
 * console.log(isAvailable); // true or false
 */
export declare function localStorageAvailable(): boolean;
//# sourceMappingURL=local-storage.d.ts.map