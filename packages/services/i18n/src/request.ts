import { getRequestConfig } from "next-intl/server";
import type { SupportedLocales } from "./constants";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as SupportedLocales)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./langs/${locale}.json`)).default,
  };
});
