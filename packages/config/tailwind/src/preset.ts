import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";
import typography from "@tailwindcss/typography";
import { type Config } from "tailwindcss";

export const yeetTailwindPreset: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx,css}"],
  theme: {},
  corePlugins: {
    preflight: false,
  },
  important: "#__next",
  plugins: [
    typography,
    require("tailwindcss-logical"),
    aspectRatio,
    {
      config: containerQueries.config ?? {},
      handler: containerQueries.handler,
    },
    require("./plugin"),
  ],
};
