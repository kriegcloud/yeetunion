import type { CheckboxButtonGroupProps} from "./Element";
import type { Array } from "effect"
import { FormField } from "../../core";
import * as S from "effect/Schema";
import React from "react";

interface CheckboxButtonGroupFC<TValue extends string = string> extends
  React.FC<CheckboxButtonGroupProps<TValue>>
{}

export class CheckboxButtonGroup
  extends FormField.FormField("@ye/form/fields/CheckboxButtonGroup")<CheckboxButtonGroup, CheckboxButtonGroupFC>()
{
  static Default = <Literals extends Array.NonEmptyReadonlyArray<string>>(
    ...literals: Literals
  ) =>
    this.make({
      schema: S.HashSet(S.Literal(...literals)),
      defaultValue: []
    }).decorate<CheckboxButtonGroupFC<Literals[number]>>()
}