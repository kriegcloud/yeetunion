import { FormField } from "../core"
import ye from "@ye/primitives"
import React from "react";


export interface CheckboxFC extends
  React.FC<{
    label?: React.ReactNode
    className?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  }>
{}

export class Checkbox extends FormField.FormField("@ye/Form/fields/Checkbox")<Checkbox, CheckboxFC>() {
  static Default = this.make({ schema: ye.Bool, defaultValue: false })
}
