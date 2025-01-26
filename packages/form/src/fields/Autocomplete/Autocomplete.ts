import type { RHFAutocompleteProps } from "@ye/ui/components";
import type { Array } from "effect";
import { Schema } from "effect";
import React from "react";
import { FormField } from "../../core";

interface AutocompleteFC<Value extends string = string>
  extends React.FC<
    Omit<RHFAutocompleteProps, "options" | "name"> & {
      options: Array<{ label: string; id: Value }>;
      name?: string;
    }
  > {}

export class Autocomplete extends FormField.FormField(
  "@e2/form/fields/Autocomplete",
)<Autocomplete, AutocompleteFC>() {
  static RequiredWithLiterals = <
    Literals extends Array.NonEmptyReadonlyArray<string>,
  >(
    ...literals: Literals
  ) =>
    this.makeRequired({
      schema: Schema.Literal(...literals),
    }).decorate<AutocompleteFC<Literals[number]>>();

  static OptionalWithLiterals = <
    Literals extends Array.NonEmptyReadonlyArray<string>,
  >(
    ...literals: Literals
  ) =>
    this.make({
      schema: Schema.OptionFromNullOr(Schema.Literal(...literals)),
      defaultValue: null,
    }).decorate<AutocompleteFC<Literals[number]>>();

  static Required = this.makeRequired({
    schema: Schema.String,
  });

  static Optional = this.make({
    schema: Schema.OptionFromNullOr(Schema.String),
    defaultValue: null,
  });
}
