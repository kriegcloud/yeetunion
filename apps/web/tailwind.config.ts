import { boisTailwindPreset } from "@dank/tailwind";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,css}", "../../packages/ui/dist/**/*.js"],
  presets: [boisTailwindPreset],
};

export default config;
