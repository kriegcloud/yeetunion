import type { TextFieldProps } from "@mui/material/TextField";
import type { SxProps, Theme } from "@mui/material/styles";
import { COUNTRIES } from "@ye/i18n";
import type { Country, Value } from "react-phone-number-input/input";
// ----------------------------------------------------------------------

export type PhoneInputProps = Omit<TextFieldProps, "onChange" | "ref"> & {
  value: string;
  country?: Country;
  disableSelect?: boolean;
  onChange: (newValue: Value) => void;
};

export type CountryListProps = {
  sx?: SxProps<Theme>;
  countryCode?: Country;
  searchCountry: string;
  countries: typeof COUNTRIES;
  onClickCountry: (inputValue: Country) => void;
  onSearchCountry: (inputValue: string) => void;
};
