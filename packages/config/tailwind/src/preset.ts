import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";
import typography from "@tailwindcss/typography";
import { type Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { createPlugin } from "windy-radix-palette";
import windyTypography from "windy-radix-typography";

const colors = createPlugin();

export const yeetTailwindPreset: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx,css}"],
  presets: [windyTypography],
  theme: {},
  corePlugins: {
    preflight: false,
  },
  important: "#__next",
  plugins: [
    animate,
    typography,
    require("tailwindcss-logical"),
    aspectRatio,
    {
      config: colors.plugin.config ?? {},
      handler: colors.plugin.handler,
    },
    {
      config: containerQueries.config ?? {},
      handler: containerQueries.handler,
    },
    require("./plugin"),
  ],
};
