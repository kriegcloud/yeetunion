import { FormControlLabelProps } from "@mui/material";
import { Schema } from "effect";
import React from "react";
import {
  FieldPath,
  FieldValues,
} from "react-hook-form";
import { FormField } from "../core";

export interface CheckboxFC<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends React.FC<{
  name: TName;
  label?: FormControlLabelProps["label"];
  helperText?: string;
}> {}

export class Checkbox extends FormField.FormField("@ye/form/fields/Checkbox")<
  Checkbox,
  CheckboxFC
>() {
  static Default = this.make({ schema: Schema.Boolean, defaultValue: false });
}
