import type { Config } from "tailwindcss";

import { boisTailwindPreset } from "@dank/tailwind";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,css}"],
  presets: [boisTailwindPreset],
};

export default config;
