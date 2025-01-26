import type { RHFCodesProps } from "@ye/ui/components";
import { Schema } from "effect";
import React from "react";
import { FormField } from "../../core";

export interface CodeFC extends React.FC<Omit<RHFCodesProps, "name">> {}

export class Code extends FormField.FormField("@ye/form/fields/Code")<
  Code,
  CodeFC
>() {
  static Optional = this.make({
    schema: Schema.OptionFromNonEmptyTrimmedString,
    defaultValue: "",
  });
  static Required = this.makeRequired({
    schema: Schema.Trim.pipe(Schema.nonEmptyString()),
  });
}
