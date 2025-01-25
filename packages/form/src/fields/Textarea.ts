import { Schema } from "effect";
import { FormField } from "../core";
import {FieldPath, FieldValues} from "react-hook-form";

export interface TextAreaFC<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>
  extends React.FC<{
    name: TName;
    label?: React.ReactNode;
    placeholder?: string | undefined;
    className?: string;
  }> {}

export class Textarea extends FormField.FormField("@ye/form/fields/TextArea")<
  Textarea,
  TextAreaFC
>() {
  static Optional = this.make({
    schema: Schema.OptionFromNonEmptyTrimmedString,
    defaultValue: "",
  });
  static Required = this.makeRequired({
    schema: Schema.Trim.pipe(Schema.nonEmptyString()),
  });
}
