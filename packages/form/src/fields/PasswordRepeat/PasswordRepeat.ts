import ye from "@ye/primitives";
import * as S from "effect/Schema";
import React from "react";
import { FormField } from "../../core";
import type { PasswordRepeatElementProps } from "./Element";
export interface PasswordRepeatFC
  extends React.FC<PasswordRepeatElementProps> {}

export class PasswordRepeat extends FormField.FormField(
  "@ye/form/fields/PasswordRepeat",
)<PasswordRepeat, PasswordRepeatFC>() {
  static Optional = this.make({
    schema: S.Redacted(ye.NonEmptyTrimStr),
    defaultValue: "",
  });
  static Required = this.makeRequired({
    schema: S.Redacted(ye.NonEmptyTrimStr),
  });
}
