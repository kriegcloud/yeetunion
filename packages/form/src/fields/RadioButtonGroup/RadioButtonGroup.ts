import type { RHFRadioGroupProps } from "@ye/ui/components";
import type { Array } from "effect";
import * as S from "effect/Schema";
import React from "react";
import { FormField } from "../../core";

interface RadioButtonGroupFC extends React.FC<RHFRadioGroupProps> {}

export class RadioButtonGroup extends FormField.FormField(
  "@ye/form/fields/RadioButtonGroup",
)<RadioButtonGroup, RadioButtonGroupFC>() {
  static Default = <Literals extends Array.NonEmptyReadonlyArray<string>>(
    ...literals: Literals
  ) =>
    this.make({
      schema: S.Literal(...literals),
      defaultValue: "",
    }).decorate<RadioButtonGroupFC>();
}
