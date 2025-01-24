import { FormField } from "../core"
import { identity, Option } from "effect"
import * as S from "effect/Schema";
import React from "react";
export interface NumberInputFC extends
  React.FC<{
    label?: React.ReactNode
    placeholder?: string | undefined
    className?: string
  }>
{}

const optionalSchema = S.transform(
  S.OptionFromNullOr(S.Union(S.Number, S.Literal(""))),
  S.OptionFromSelf(S.Number),
  {
    decode: Option.filter((a) => a !== ""),
    encode: identity,
    strict: true
  }
)

export class NumberInput extends FormField.FormField("@ye/Form/fields/NumberInput")<NumberInput, NumberInputFC>() {
  static Optional = this.make({
    schema: optionalSchema,
    defaultValue: ""
  })
  static Required = this.makeRequired({
    schema: S.Number
  })
}
