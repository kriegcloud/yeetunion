import { CountryCodeUnion } from "@ye/i18n";
import type { CountrySelectProps } from "@ye/ui/components";
import * as S from "effect/Schema";
import React from "react";
import { FormField } from "../../core";
export interface CountrySelectFC
  extends React.FC<Omit<CountrySelectProps, "ref">> {}

export class CountrySelect extends FormField.FormField(
  "@ye/form/fields/CountrySelect",
)<CountrySelect, CountrySelectFC>() {
  static Optional = this.make({
    schema: S.OptionFromNullOr(CountryCodeUnion),
    defaultValue: "US" as const,
  });
  static Required = this.makeRequired({
    schema: CountryCodeUnion,
  });
}
