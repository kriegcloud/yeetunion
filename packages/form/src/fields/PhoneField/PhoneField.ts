import ye from "@ye/primitives";
import * as S from "effect/Schema";
import React from "react";
import { FormField } from "../../core";
import type { RHFPhoneInputProps } from "./Element";
export interface PhoneFieldFC extends React.FC<RHFPhoneInputProps> {}

export class PhoneField extends FormField.FormField(
  "@ye/form/fields/PhoneField",
)<PhoneField, PhoneFieldFC>() {
  static Optional = this.make({
    schema: S.Redacted(ye.Phone),
    defaultValue: "",
  });
  static Required = this.makeRequired({
    schema: S.Redacted(ye.Phone),
  });
}
