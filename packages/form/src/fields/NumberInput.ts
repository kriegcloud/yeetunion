import { FormField } from "../core"
import { identity, Option, Schema } from "effect"

export interface NumberInputFC extends
  React.FC<{
    label?: React.ReactNode
    placeholder?: string | undefined
    className?: string
  }>
{}

const optionalSchema = Schema.transform(
  Schema.OptionFromNullOr(Schema.Union(Schema.Number, Schema.Literal(""))),
  Schema.OptionFromSelf(Schema.Number),
  {
    decode: Option.filter((a) => a !== ""),
    encode: identity,
    strict: true
  }
)

export class NumberInput extends FormField.FormField("@ye/form/fields/NumberInput")<NumberInput, NumberInputFC>() {
  static Optional = this.make({
    schema: optionalSchema,
    defaultValue: ""
  })
  static Required = this.makeRequired({
    schema: Schema.Number
  })
}
