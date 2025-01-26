import ye from "@ye/primitives";
import React from "react";
import { FormField } from "../../core";
import type { MobileDatePickerElementProps } from "./Element";

export interface MobileDatePickerFC
  extends React.FC<MobileDatePickerElementProps> {}

export class MobileDatePicker extends FormField.FormField(
  "@ye/form/fields/MobileDatePicker",
)<MobileDatePicker, MobileDatePickerFC>() {
  static Optional = this.make({
    schema: ye.DateTime,
    defaultValue: new Date(Date.now()).toDateString(),
  });
  static Required = this.makeRequired({
    schema: ye.DateTime,
  });
}
