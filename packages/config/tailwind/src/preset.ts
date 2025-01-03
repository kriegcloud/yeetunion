import { type Config } from "tailwindcss";

export const yeetTailwindPreset: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx,css}"],
  theme: {},
  corePlugins: {
    preflight: false,
  },
  important: "#__next",
  plugins: [
    require("tailwindcss-logical"),
    require("./plugin"),
  ],
};
