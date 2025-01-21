/**
 * Sets the font family.
 *
 * @param {string} [fontName] - The name of the font to set.
 * @returns {string} - The complete font family string.
 *
 * @example
 * const fontFamily = setFont('CustomFont');
 * console.log(fontFamily); // "CustomFont, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol""
 */
export declare function setFont(fontName?: string): string;
/**
 * Converts rem to px.
 *
 * @param {string} value - The rem value to convert.
 * @returns {number} - The equivalent value in pixels.
 * @throws {Error} - Throws an error if the rem value is invalid.
 *
 * @example
 * const pixels = remToPx('1.5rem');
 * console.log(pixels); // 24
 */
export declare function remToPx(value: string): number;
/**
 * Converts px to rem.
 *
 * @param {number} value - The pixel value to convert.
 * @returns {string} - The equivalent value in rem.
 * @throws {Error} - Throws an error if the pixel value is invalid.
 *
 * @example
 * const remValue = pxToRem(24);
 * console.log(remValue); // "1.5rem"
 */
export declare function pxToRem(value: number): string;
//# sourceMappingURL=font.d.ts.map