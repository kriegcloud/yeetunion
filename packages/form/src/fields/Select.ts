import type { Array } from "effect";
import { Schema } from "effect";
import { FormField } from "../core";
import React from "react";
import {FieldPath, FieldValues} from "react-hook-form";

interface SelectFC<Value extends string = string>
  extends React.FC<{
    name: FieldPath<FieldValues>;
    label?: React.ReactNode;
    placeholder?: string | undefined;
    className?: string;
    options: ReadonlyArray<{ label: string; value: Value }>;
  }> {}

export class Select extends FormField.FormField("@ye/form/fields/Select")<
  Select,
  SelectFC
>() {
  static RequiredWithLiterals = <
    Literals extends Array.NonEmptyReadonlyArray<string>,
  >(
    ...literals: Literals
  ) =>
    this.makeRequired({
      schema: Schema.Literal(...literals),
    }).decorate<SelectFC<Literals[number]>>();

  static OptionalWithLiterals = <
    Literals extends Array.NonEmptyReadonlyArray<string>,
  >(
    ...literals: Literals
  ) =>
    this.make({
      schema: Schema.OptionFromNullOr(Schema.Literal(...literals)),
      defaultValue: null,
    }).decorate<SelectFC<Literals[number]>>();

  static Required = this.makeRequired({
    schema: Schema.String,
  });

  static Optional = this.make({
    schema: Schema.OptionFromNullOr(Schema.String),
    defaultValue: null,
  });
}
