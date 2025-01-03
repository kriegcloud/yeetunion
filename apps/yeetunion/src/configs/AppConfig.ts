import type { LocalePrefix } from "next-intl/routing";
const localePrefix: LocalePrefix = "always";
export const AppConfig = {
  name: "Yeet Union",
  locales: [
    {
      id: "en",
      name: "English",
      direction: "ltr",
    },
    { id: "fr", name: "French", direction: "ltr" },
    { id: "ar", name: "Arabic", direction: "rtl" },
  ],
  defaultLocale: "en",
  localePrefix
} as const;

export const AllLocales = AppConfig.locales.map((locale) => locale.id);
