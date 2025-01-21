export type StateProps = {
    [key: string]: boolean | undefined | [boolean, string];
};
/**
 * Merges class names with state-based class names.
 *
 * @param {string | string[] | null} className - The base class name(s).
 * @param {StateProps} state - The state object containing boolean or [boolean, string] pairs.
 * @returns {string} - The merged class names.
 *
 * @example
 *
 * const classNames = mergeClasses('item__base', {
 *   ['active__class']: true,
 *   ['open__class']: true,
 *   ['disabled__class']: false,
 *   ['hover__class']: undefined,
 * });
 *
 * console.log(classNames);
 * Output: 'item__base active__class open__class'
 */
export declare function mergeClasses(className?: string | (string | undefined)[] | null, state?: StateProps): string;
//# sourceMappingURL=classes.d.ts.map