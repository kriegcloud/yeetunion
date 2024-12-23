import { buildConfig, mergeConfig, reactConfig } from "@dank/vite";

import pkg from "./package.json";

export default mergeConfig(
  // Vite config to support React.
  reactConfig,
  /**
   * This allows us to use vite to also bundle this package using the `vite build` script, it will also emit TS declaration files using the dts plugin.
   */
  buildConfig({
    lib: {
      entry: [
        "./src/primitives/*/index.tsx",
        "./src/utils/cn.ts",
        "./src/svg/*/index.tsx",
        "./src/atoms/*/index.tsx",
      ],
    },
    external: {
      externalizeDeps: Object.keys(pkg.dependencies),
    },
    dts: {
      exclude: ["src/storybook-utils", "**/*.stories.tsx"],
    },
  }),
);
