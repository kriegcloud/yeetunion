import { LocaleConfig, SupportedLocalesEnum } from "../../src";

export default LocaleConfig.make({
  LangOption: {
    value: "en",
    label: "English",
    countryCode: "US",
    adapterLocale: SupportedLocalesEnum.EN,
    numberFormat: {
      code: "en-US",
      currency: "USD",
    },
  },
  Home: {
    title: "Home",
  },
});
