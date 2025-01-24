import { FormField } from "../core"
import type { Array } from "effect"
import * as S from "effect/Schema"
import React from "react";
interface RadioGroupFC<Value extends string = string> extends
  React.FC<{
    label?: React.ReactNode
    placeholder?: string | undefined
    className?: string
    options: ReadonlyArray<{ label: React.ReactNode; value: Value }>
  }>
{}

export class RadioGroup extends FormField.FormField(
  "../fields/RadioGroup"
)<RadioGroup, RadioGroupFC>() {
  static Required = <Literals extends Array.NonEmptyReadonlyArray<string>>(
    ...literals: Literals
  ) =>
    this.makeRequired({
      schema: S.Literal(...literals)
    }).decorate<RadioGroupFC<Literals[number]>>()

  static Optional = <Literals extends Array.NonEmptyReadonlyArray<string>>(
    ...literals: Literals
  ) =>
    this.make({
      schema: S.OptionFromNullOr(S.Literal(...literals)),
      defaultValue: null
    }).decorate<RadioGroupFC<Literals[number]>>()
}
