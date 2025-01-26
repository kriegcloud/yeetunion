import ye from "@ye/primitives";
import type { RHFUploadProps } from "@ye/ui/components";
import React from "react";
import { FormField } from "../../core";
export interface UploadFC extends React.FC<RHFUploadProps> {}

export class Upload extends FormField.FormField("@ye/form/fields/Upload")<
  Upload,
  UploadFC
>() {
  static Optional = this.make({
    schema: ye.FileFromSelfOrNull,
    defaultValue: null,
  });
  static Required = this.makeRequired({
    schema: ye.NonEmptyTrimStr,
  });
}
