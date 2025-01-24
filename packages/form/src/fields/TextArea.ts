import { FormField } from "../core"
import { Schema } from "effect"

export interface TextAreaFC extends
  React.FC<{
    label?: React.ReactNode
    placeholder?: string | undefined
    className?: string
  }>
{}

export class TextArea extends FormField.FormField("@ye/form/fields/TextArea")<TextArea, TextAreaFC>() {
  static Optional = this.make({
    schema: Schema.OptionFromNonEmptyTrimmedString,
    defaultValue: ""
  })
  static Required = this.makeRequired({
    schema: Schema.Trim.pipe(Schema.nonEmptyString())
  })
}
