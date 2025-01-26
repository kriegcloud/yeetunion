import ye from "@ye/primitives";
import React from "react";
import { FormField } from "../../core";
import type { DateTimePickerElementProps } from "./Element";

export interface DateTimePickerFC
  extends React.FC<DateTimePickerElementProps> {}

export class DateTimePicker extends FormField.FormField(
  "@ye/form/fields/DateTimePicker",
)<DateTimePicker, DateTimePickerFC>() {
  static Optional = this.make({
    schema: ye.DateTime,
    defaultValue: new Date(Date.now()).toDateString(),
  });
  static Required = this.makeRequired({
    schema: ye.DateTime,
  });
}
