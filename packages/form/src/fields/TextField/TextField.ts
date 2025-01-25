import * as S from "effect/Schema";
import React from "react";
import ye from "@ye/primitives";
import { FormField } from "../../core";
import type { RHFTextFieldProps } from "@ye/ui/components";
export interface TextFieldFC extends
  React.FC<Omit<RHFTextFieldProps, "name">>
{}

export class TextField extends FormField.FormField("@ye/form/fields/TextInput")<TextField, TextFieldFC>() {
  static Optional = this.make({
    schema: S.OptionFromNonEmptyTrimmedString,
    defaultValue: ""
  })
  static Required = this.makeRequired({
    schema: ye.NonEmptyTrimStr,
  })
}