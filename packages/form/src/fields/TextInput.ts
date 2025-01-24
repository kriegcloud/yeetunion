import { FormField } from "../core"
import { Schema } from "effect"

export interface TextInputFC extends
  React.FC<{
    label?: React.ReactNode
    placeholder?: string | undefined | undefined
    className?: string
  }>
{}

export class TextInput extends FormField.FormField("@ye/form/fields/TextInput")<TextInput, TextInputFC>() {
  static Optional = this.make({
    schema: Schema.OptionFromNonEmptyTrimmedString,
    defaultValue: ""
  })
  static Required = this.makeRequired({
    schema: Schema.Trim.pipe(Schema.nonEmptyString())
  })
}
