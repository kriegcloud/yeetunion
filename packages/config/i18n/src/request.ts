import * as S from "@effect/schema/Schema";
import { pipe } from "effect/Function";
import { getRequestConfig } from "next-intl/server";
import { SupportedLocalesEnumSchema } from "./constants";
import { routing } from "./routing";
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale.then(
    pipe(S.decodeUnknownSync(SupportedLocalesEnumSchema)),
  );

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./langs/${locale}.json`)).default,
  };
});
