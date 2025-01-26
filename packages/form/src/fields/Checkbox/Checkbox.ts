import ye from "@ye/primitives";
import type { RHFCheckboxProps } from "@ye/ui/components";
import React from "react";
import { FormField } from "../../core";
export interface CheckboxFC extends React.FC<RHFCheckboxProps> {}

export class Checkbox extends FormField.FormField("@ye/form/fields/Checkbox")<
  Checkbox,
  CheckboxFC
>() {
  static Default = this.make({ schema: ye.Bool, defaultValue: false });
}
