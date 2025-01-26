import { Option, Schema, identity } from "effect";
import React from "react";
import { FormField } from "../../core";

import type { RHFSliderProps } from "@ye/ui/components";

export interface SliderFC extends React.FC<RHFSliderProps> {}

const optionalSchema = Schema.transform(
  Schema.OptionFromNullOr(Schema.Union(Schema.Number, Schema.Literal(""))),
  Schema.OptionFromSelf(Schema.Number),
  {
    decode: Option.filter((a) => a !== ""),
    encode: identity,
    strict: true,
  },
);

export class Slider extends FormField.FormField("@ye/form/fields/Slider")<
  Slider,
  SliderFC
>() {
  static Optional = this.make({
    schema: optionalSchema,
    defaultValue: "",
  });
  static Required = this.makeRequired({
    schema: Schema.Number,
  });
}
