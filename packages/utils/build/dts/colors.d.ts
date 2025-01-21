/**
 * Converts a hex color to RGB channels.
 *
 * @param {string} hexColor - The hex color string.
 * @returns {string} - The RGB channels string.
 * @throws {Error} - Throws an error if the hex color is invalid.
 *
 * @example
 * const rgbChannel = hexToRgbChannel("#C8FAD6");
 * console.log(rgbChannel); // "200 250 214"
 */
export declare function hexToRgbChannel(hexColor: string): string;
/**
 * Converts a hex palette color to RGB channels palette.
 *
 * @typedef {Object} InputPalette - The input palette object with hex color strings.
 * @property {string} lighter - The lighter hex color.
 * @property {string} light - The light hex color.
 * @property {string} main - The main hex color.
 *
 * @typedef {Object} ChannelPalette - The output palette object with RGB channels.
 * @property {string} lighterChannel - The lighter RGB channels.
 * @property {string} lightChannel - The light RGB channels.
 * @property {string} mainChannel - The main RGB channels.
 *
 * @param {InputPalette} hexPalette - The input palette object.
 * @returns {ChannelPalette} - The output palette object with RGB channels.
 *
 * @example
 * const palette = createPaletteChannel({
 *   lighter: "#C8FAD6",
 *   light: "#5BE49B",
 *   main: "#00A76F",
 * });
 * console.log(palette);
 * // {
 * //   lighter: "#C8FAD6",
 * //   light: "#5BE49B",
 * //   main: "#00A76F",
 * //   lighterChannel: "200 250 214",
 * //   lightChannel: "91 228 155",
 * //   mainChannel: "0 167 111",
 * // }
 */
export type InputPalette = Record<string, string | undefined>;
export declare function createPaletteChannel<T extends InputPalette>(hexPalette: T): T & Record<string, string | undefined>;
/**
 * Adds an alpha channel to a color.
 *
 * @param {string} color - The color string in RGB channels or CSS variable format.
 * @param {number} [opacity=1] - The opacity value.
 * @returns {string} - The color string with alpha channel.
 * @throws {Error} - Throws an error if the color format is unsupported.
 *
 * @example
 * const rgbaColor = varAlpha('200 250 214', 0.8);
 * console.log(rgbaColor); // "rgba(200 250 214 / 0.8)"
 *
 * const rgbaVarColor = varAlpha('var(--palette-primary-lighterChannel)', 0.8);
 * console.log(rgbaVarColor); // "rgba(var(--palette-primary-lighterChannel) / 0.8)"
 */
export declare function varAlpha(color: string, opacity?: number): string;
//# sourceMappingURL=colors.d.ts.map