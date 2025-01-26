import ye from "@ye/primitives";
import React from "react";
import { FormField } from "../../core";
import type { DatePickerElementProps } from "./Element";

export interface DatePickerFC extends React.FC<DatePickerElementProps> {}

export class DatePicker extends FormField.FormField(
  "@ye/form/fields/DatePicker",
)<DatePicker, DatePickerFC>() {
  static Optional = this.make({
    schema: ye.DateTime,
    defaultValue: new Date(Date.now()).toDateString(),
  });
  static Required = this.makeRequired({
    schema: ye.DateTime,
  });
}
