import type { Array } from "effect";
import * as S from "effect/Schema";
import React from "react";
import type { FieldPath, FieldValues } from "react-hook-form";
import { FormField } from "../../core";
import type { ToggleButtonGroupElementProps } from "./Element";

interface ToggleButtonGroupFC<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends string = string,
> extends React.FC<
    Omit<
      ToggleButtonGroupElementProps<TFieldValues, TName, TValue>,
      "rules" | "control"
    >
  > {}

export class ToggleButtonGroup extends FormField.FormField(
  "@ye/form/fields/ToggleButtonGroup",
)<ToggleButtonGroup, ToggleButtonGroupFC>() {
  static Default = <Literals extends Array.NonEmptyReadonlyArray<string>>(
    ...literals: Literals
  ) =>
    this.make({
      schema: S.Literal(...literals),
      defaultValue: "",
    }).decorate<ToggleButtonGroupFC<any, string, Literals[number]>>();
}
