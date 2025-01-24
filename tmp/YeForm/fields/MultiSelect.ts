import { FormField } from "../core"
import type { Array } from "effect"
import * as S from "effect/Schema"
import React from "react";
interface MultiSelectFC<Value extends string = string> extends
  React.FC<{
    label?: React.ReactNode
    placeholder?: string | undefined
    className?: string
    options: ReadonlyArray<{ label: string; value: Value }>
  }>
{}

export class MultiSelect extends FormField.FormField("@ye/Form/fields/MultiSelect")<
  MultiSelect,
  MultiSelectFC
>() {
  static Default = <Literals extends Array.NonEmptyReadonlyArray<string>>(
    ...literals: Literals
  ) =>
    this.make({
      schema: S.HashSet(S.Literal(...literals)),
      defaultValue: []
    }).decorate<MultiSelectFC<Literals[number]>>()
}
