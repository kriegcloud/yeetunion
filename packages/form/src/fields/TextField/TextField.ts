import ye from "@ye/primitives";
import type { RHFTextFieldProps } from "@ye/ui/components";
import * as S from "effect/Schema";
import React from "react";
import { FormField } from "../../core";
export interface TextFieldFC
  extends React.FC<Omit<RHFTextFieldProps, "name">> {}

export class TextField extends FormField.FormField("@ye/form/fields/TextField")<
  TextField,
  TextFieldFC
>() {
  static Optional = this.make({
    schema: S.OptionFromNonEmptyTrimmedString,
    defaultValue: "",
  });
  static Required = this.makeRequired({
    schema: ye.NonEmptyTrimStr,
  });
}
