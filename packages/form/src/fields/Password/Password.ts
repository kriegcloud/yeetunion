import ye from "@ye/primitives";
import * as S from "effect/Schema";
import React from "react";
import { FormField } from "../../core";
import type { PasswordElementProps } from "./Element";
export interface PasswordFC extends React.FC<PasswordElementProps> {}

export class Password extends FormField.FormField("@ye/form/fields/Password")<
  Password,
  PasswordFC
>() {
  static Optional = this.make({
    schema: S.Redacted(ye.NonEmptyTrimStr),
    defaultValue: "",
  });
  static Required = this.makeRequired({
    schema: S.Redacted(ye.NonEmptyTrimStr),
  });
}
