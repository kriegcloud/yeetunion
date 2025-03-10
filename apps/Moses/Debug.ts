/**
 * @since 0.1.0
 * @category Debuggers
 * Immediately throws an error passed as an argument.
 *
 * Useful for throwing errors from inside expressions.
 * For example,
 * ```
 * const item = model.getById(someId) ??
 * raise(new Error("Not found"));
 * ```
 * @param error
 */
export const raise = (error: Error): never => {
  throw error;
};

/**
 * @since 0.1.0
 * @category Debuggers
 * Using this allows code to be written in a portable fashion, so that the custom inspect function is used in an Node.js environment and ignored in the browser.
 */
export const inspectCustom = Symbol.for("nodejs.util.inspect.custom");
