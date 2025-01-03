// Third-party Imports
import "server-only";

// Type Imports
import type { Locale } from "@/configs/AppConfig";

const dictionaries = {
  en: () =>
    import("@/data/dictionaries/en.json").then((module) => module.default),
  fr: () =>
    import("@/data/dictionaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
