import { FormField } from "../core"
import type { Array } from "effect"
import * as S from "effect/Schema"
import React from "react";
// import { Field } from "../../hook-form";

interface SelectFC<Value extends string = string> extends
  React.FC<{
    label?: React.ReactNode
    placeholder?: string | undefined
    className?: string
    options: ReadonlyArray<{ label: string; value: Value }>
  }>
{}

export class Select extends FormField.FormField("@ye/Form/fields/Select")<
  Select,
  SelectFC
>() {
  static RequiredWithLiterals = <
    Literals extends Array.NonEmptyReadonlyArray<string>
  >(
    ...literals: Literals
  ) =>
    this.makeRequired({
      schema: S.Literal(...literals)
    }).decorate<SelectFC<Literals[number]>>()

  static OptionalWithLiterals = <
    Literals extends Array.NonEmptyReadonlyArray<string>
  >(
    ...literals: Literals
  ) =>
    this.make({
      schema: S.OptionFromNullOr(S.Literal(...literals)),
      defaultValue: null
    }).decorate<SelectFC<Literals[number]>>()

  static Required = this.makeRequired({
    schema: S.String
  })

  static Optional = this.make({
    schema: S.OptionFromNullOr(S.String),
    defaultValue: null
  })
}
