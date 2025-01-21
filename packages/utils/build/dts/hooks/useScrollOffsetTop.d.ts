import type { RefObject } from "react";
/**
 * Custom hook to manage the offset top state based on scroll position.
 *
 * @param {number} [defaultValue=0] - The offset value at which the state changes.
 *
 * @returns {UseScrollOffsetTopReturn<T>} - An object containing:
 * - `offsetTop`: A boolean indicating whether the scroll position is past the offset.
 * - `elementRef`: A ref object to attach to the element to track its offset.
 *
 * @example
 * 1.Applies to top <header/>
 * const { offsetTop } = useScrollOffsetTop(80);
 *
 * Or
 *
 * 2.Applies to element
 * const { offsetTop, elementRef } = useScrollOffsetTop(80);
 * <div ref={elementRef} />
 */
export type UseScrollOffsetTopReturn<T> = {
    offsetTop: boolean;
    elementRef: RefObject<T>;
};
export declare function useScrollOffsetTop<T extends HTMLElement>(defaultValue?: number): UseScrollOffsetTopReturn<T>;
//# sourceMappingURL=useScrollOffsetTop.d.ts.map