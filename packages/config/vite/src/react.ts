import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { libInjectCss } from "vite-plugin-lib-inject-css";
export const reactConfig = defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    {
      ...libInjectCss(),
      enforce: "pre", // this is important to make sure the css is injected before the code is processed
    },
    {
      // libInjectCss (with preserveDirectives) adds the css import to the top of the file
      // this custom handle moves the directive ('use client') to the top of the file again
      name: "custom-swap-directive",
      generateBundle(_, bundle) {
        for (const chunk of Object.values(bundle)) {
          if (chunk.type === "chunk") {
            if (chunk.code.includes("use client")) {
              chunk.code = chunk.code.replace(/['"]use client['"];/, "");
              chunk.code = `'use client';\n${chunk.code}`;
            }
            if (chunk.code.includes("use server")) {
              chunk.code = chunk.code.replace(/['"]use server['"];/, "");
              chunk.code = `'use server';\n${chunk.code}`;
            }
          }
        }
      },
    },
  ],
});
