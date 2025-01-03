import { getRequestConfig } from "next-intl/server";
import { IntlErrorCode } from "next-intl";
import { notFound } from "next/navigation";

const locales = ["en", "de"];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!locale || !locales.includes(locale)) notFound();
  return {
    messages: (await import(`./data/dictionaries/${locale}.json`)).default,
    onError(error) {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        // Missing translations are expected and should only log an error
        console.error(error);
      } else {
        // Other errors indicate a bug in the app and should be reported
        // reportToErrorTracking(error);
        console.error(error);
      }
    },
    getMessageFallback({ namespace, key, error }) {
      const path = [namespace, key].filter((part) => part != null).join(".");

      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        return `${path} is not yet translated`;
      }
      return `Dear developer, please fix this message: ${path}`;
    },
  };
});
