
import React from "react";
import type { FormControlProps } from "@mui/material";
import { FormField } from "../../core";
import ye from "@ye/primitives";

export interface CheckboxFC extends React.FC<FormControlProps> {}

export class Checkbox extends FormField.FormField("@ye/form/fields/Checkbox")<
  Checkbox,
  CheckboxFC
>() {
  static Default = this.make({ schema: ye.Bool, defaultValue: false });
}