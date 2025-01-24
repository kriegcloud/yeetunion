import { FormField } from "../core"
import type { Array } from "effect"
import * as S from "effect/Schema"
import React from "react";
interface CheckboxGroupFC<Value extends string = string> extends
  React.FC<{
    label?: React.ReactNode
    className?: string
    options: ReadonlyArray<{ label: React.ReactNode; value: Value }>
  }>
{}

export class CheckboxGroup
  extends FormField.FormField("@ye/Form/fields/CheckboxGroup")<CheckboxGroup, CheckboxGroupFC>()
{
  static Default = <Literals extends Array.NonEmptyReadonlyArray<string>>(
    ...literals: Literals
  ) =>
    this.make({
      schema: S.HashSet(S.Literal(...literals)),
      defaultValue: []
    }).decorate<CheckboxGroupFC<Literals[number]>>()
}
