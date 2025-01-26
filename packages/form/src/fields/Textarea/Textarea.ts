import ye from "@ye/primitives";
import * as S from "effect/Schema";
import React from "react";
import { FormField } from "../../core";
import type { TextareaAutosizeElementProps } from "./Element";
export interface TextareaFC extends React.FC<TextareaAutosizeElementProps> {}

export class Textarea extends FormField.FormField("@ye/form/fields/Textarea")<
  Textarea,
  TextareaFC
>() {
  static Optional = this.make({
    schema: S.OptionFromNonEmptyTrimmedString,
    defaultValue: "",
  });
  static Required = this.makeRequired({
    schema: ye.NonEmptyTrimStr,
  });
}
