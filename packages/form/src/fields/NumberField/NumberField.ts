import type { RHFNumberInputProps } from "@ye/ui/components";
import { Schema } from "effect";
import React from "react";
import { FormField } from "../../core";

export interface NumberFieldFC extends React.FC<RHFNumberInputProps> {}

// const optionalSchema = Schema.transform(
//   Schema.OptionFromNullOr(Schema.Union(Schema.Number, Schema.Literal(""))),
//   Schema.OptionFromSelf(Schema.Number),
//   {
//     decode: Option.filter((a) => a !== ""),
//     encode: identity,
//     strict: true
//   }
// )

export class NumberField extends FormField.FormField(
  "@ye/form/fields/NumberField",
)<NumberField, NumberFieldFC>() {
  static Optional = this.make({
    schema: Schema.OptionFromNullOr(Schema.Number),
    defaultValue: null,
  });
  static Required = this.makeRequired({
    schema: Schema.Number,
  });
}
