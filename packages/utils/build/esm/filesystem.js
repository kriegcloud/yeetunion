import { dirname, join } from "node:path";
/**
 * This function is used to resolve the absolute path of a package. It is needed
 * in projects that use Yarn PnP or are set up within a monorepo.
 * @param value The package name.
 * @returns The absolute path of the package.
 */
export function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
//# sourceMappingURL=filesystem.js.map