import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { patchCssModules } from "vite-css-modules";
import tsconfigPaths from "vite-tsconfig-paths";

export const reactConfig = defineConfig({
  plugins: [
    patchCssModules({ generateSourceTypes: true }),
    react(),
    tsconfigPaths(),
  ],
});
