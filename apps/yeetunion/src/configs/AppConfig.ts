import type { LocalePrefix } from "next-intl/routing";
const localePrefix: LocalePrefix = "always";
export const AppConfig = {
  name: "Yeet Union",
  description: "Yeet Union",
  locales: [
    {
      id: "en",
      name: "English",
      direction: "ltr",
    },
    { id: "fr", name: "French", direction: "ltr" },
  ],
  defaultLocale: "en",
  localePrefix,
} as const;

export const AllLocales = AppConfig.locales.map((locale) => locale.id);
export type Locale = (typeof AllLocales)[number];
