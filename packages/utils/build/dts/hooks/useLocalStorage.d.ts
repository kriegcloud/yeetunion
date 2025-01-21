/**
 * Custom hook to manage state with local storage.
 *
 * @param {string} key - The key for the local storage.
 * @param {T} initialState - The initial state value.
 * @param {Object} [options] - Optional settings.
 * @param {boolean} [options.initializeWithValue=true] - Whether to initialize the local storage with the initial state value.
 *
 * @returns {UseLocalStorageReturn<T>} - An object containing:
 * - `state`: The current state.
 * - `resetState`: A function to reset the state to the initial value and remove it from local storage.
 * - `setState`: A function to update the state and save it to local storage.
 * - `setField`: A function to update a specific field in the state and save it to local storage.
 *
 * @example
 * const { state, resetState, setState, setField } = useLocalStorage('settings', initialState);
 *
 * return (
 *   <div>
 *     <p>State: {JSON.stringify(state)}</p>
 *     <button onClick={() => setState({name: 'John', age: 20})}>Set State</button>
 *     <button onClick={() => setField('name', 'John')}>Set Name</button>
 *     <button onClick={resetState}>Reset</button>
 *   </div>
 * );
 */
export type UseLocalStorageOptions = {
    initializeWithValue?: boolean;
};
export type UseLocalStorageReturn<T> = {
    state: T;
    resetState: (defaultState?: T) => void;
    setState: (updateState: T | Partial<T>) => void;
    setField: (name: keyof T, updateValue: T[keyof T]) => void;
};
export declare function useLocalStorage<T>(key: string, initialState?: T, options?: UseLocalStorageOptions): UseLocalStorageReturn<T>;
//# sourceMappingURL=useLocalStorage.d.ts.map