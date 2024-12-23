import { yeetTailwindPreset } from "@ye/tailwind";

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,css}",
    "../../packages/ui/dist/**/*.js",
  ],
  presets: [yeetTailwindPreset],
};

export default config;
