import type { Config } from "tailwindcss";

import { yeetTailwindPreset } from "@ye/tailwind";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,css}"],
  presets: [yeetTailwindPreset],
};

export default config;
