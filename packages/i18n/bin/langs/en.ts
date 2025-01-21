import { LocaleConfig } from "../../src";

export default LocaleConfig.make({
  LangOption: {
    value: "en",
    label: "English",
    countryCode: "US",
    adapterLocale: "en",
    numberFormat: {
      code: "en-US",
      currency: "USD",
    },
  },
  Home: {
    title: "Home",
  },
});
