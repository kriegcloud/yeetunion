import { Option, Schema, identity } from "effect";
import * as S from "effect/Schema";
import React from "react";
import { FormField } from "../../core";
import type { RHFRatingProps } from "./Element";
export interface RatingFC extends React.FC<RHFRatingProps> {}

const optionalSchema = Schema.transform(
  Schema.OptionFromNullOr(
    Schema.Union(S.Number.pipe(S.filter((n) => n <= 5)), Schema.Literal("")),
  ),
  Schema.OptionFromSelf(Schema.Number),
  {
    decode: Option.filter((a) => a !== ""),
    encode: identity,
    strict: true,
  },
);

export class Rating extends FormField.FormField("@ye/form/fields/Rating")<
  Rating,
  RatingFC
>() {
  static Optional = this.make({
    schema: optionalSchema,
    defaultValue: "",
  });
  static Required = this.makeRequired({
    schema: Schema.Number,
  });
}
