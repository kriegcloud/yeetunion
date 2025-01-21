import type { CookieOptions } from "../cookies";
/**
 * Custom hook to manage state with cookies.
 *
 * @template T
 * @param {string} key - The key for the cookie.
 * @param {T} initialState - The initial state value.
 * @param {UseCookiesOptions} [options] - Optional settings.
 *
 * @returns {UseCookiesReturn<T>} - An object containing:
 * - `state`: The current state.
 * - `resetState`: A function to reset the state to the initial value and remove the cookie.
 * - `setState`: A function to update the state and save it to the cookie.
 * - `setField`: A function to update a specific field in the state and save it to the cookie.
 *
 * @example
 * const { state, setState, setField, resetState } = useCookies('user', { name: '', age: 0 });
 *
 * return (
 *   <div>
 *     <p>Name: {state.name}</p>
 *     <p>Age: {state.age}</p>
 *     <button onClick={() => setField('name', 'John')}>Set Name</button>
 *     <button onClick={resetState}>Reset</button>
 *   </div>
 * );
 */
export type UseCookiesOptions = CookieOptions & {
    initializeWithValue?: boolean;
};
export type UseCookiesReturn<T> = {
    state: T;
    resetState: (defaultState?: T) => void;
    setState: (updateState: T | Partial<T>) => void;
    setField: (name: keyof T, updateValue: T[keyof T]) => void;
};
export declare function useCookies<T>(key: string, initialState?: T, options?: UseCookiesOptions): UseCookiesReturn<T>;
//# sourceMappingURL=useCookies.d.ts.map