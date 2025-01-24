import { FormField } from "../core"
import * as S from "effect/Schema";
import React from "react";
import ye from "@ye/primitives"
export interface TextFieldFC extends
  React.FC<{
    label?: React.ReactNode
    placeholder?: string | undefined
    className?: string
  }>
{}


export class TextField extends FormField.FormField("@ye/Form/fields/TextField")<TextField, TextFieldFC>() {
  static Optional = this.make({
    schema: S.OptionFromNonEmptyTrimmedString,
    defaultValue: ""
  })
  static Required = this.makeRequired({
    schema: S.Trim.pipe(S.nonEmptyString())
  })
  static Email = {
    Optional: this.make({
      schema: S.OptionFromNullOr(ye.Email),
      defaultValue: null
    }),
    Required: this.makeRequired({
      schema: ye.Email
    })
  }
}
