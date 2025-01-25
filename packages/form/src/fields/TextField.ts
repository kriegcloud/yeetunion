import { Schema } from "effect";
import { FormField } from "../core";
import {FieldPath, FieldValues} from "react-hook-form";
import React from "react";

export interface TextInputFC<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>
  extends React.FC<{
    name: TName;
    label?: React.ReactNode;
    placeholder?: string | undefined | undefined;
    className?: string;
  }> {}

export class TextField extends FormField.FormField("@ye/form/fields/TextInput")<
  TextField,
  TextInputFC
>() {
  static Optional = this.make({
    schema: Schema.OptionFromNonEmptyTrimmedString,
    defaultValue: "",
  });
  static Required = this.makeRequired({
    schema: Schema.Trim.pipe(Schema.nonEmptyString()),
  });
}
