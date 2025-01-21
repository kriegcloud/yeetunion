"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPaletteChannel = createPaletteChannel;
exports.hexToRgbChannel = hexToRgbChannel;
exports.varAlpha = varAlpha;
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
function hexToRgbChannel(hexColor) {
  if (!hexColor) {
    throw new Error("Hex color is undefined!");
  }
  if (!/^#[0-9A-F]{6}$/i.test(hexColor)) {
    throw new Error(`Invalid hex color: ${hexColor}`);
  }
  const r = Number.parseInt(hexColor.substring(1, 3), 16);
  const g = Number.parseInt(hexColor.substring(3, 5), 16);
  const b = Number.parseInt(hexColor.substring(5, 7), 16);
  return `${r} ${g} ${b}`;
}
function createPaletteChannel(hexPalette) {
  const channelPalette = {};
  Object.entries(hexPalette).forEach(([key, value]) => {
    if (value) {
      channelPalette[`${key}Channel`] = hexToRgbChannel(value);
    }
  });
  return {
    ...hexPalette,
    ...channelPalette
  };
}
// ----------------------------------------------------------------------
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
function varAlpha(color, opacity = 1) {
  if (!color) {
    throw new Error("[Alpha]: Color is undefined!");
  }
  const unsupported = color.startsWith("#") || color.startsWith("rgb") || color.startsWith("rgba") || !color.includes("var") && color.includes("Channel");
  if (unsupported) {
    throw new Error([`[Alpha]: Unsupported color format "${color}"`, "Supported formats are:", '- RGB channels: "0 184 217"', '- CSS variables with "Channel" prefix: "var(--palette-common-blackChannel, #000000)"', "Unsupported formats are:", '- Hex: "#00B8D9"', '- RGB: "rgb(0, 184, 217)"', '- RGBA: "rgba(0, 184, 217, 1)"'].join("\n"));
  }
  return `rgba(${color} / ${opacity})`;
}
//# sourceMappingURL=colors.js.map