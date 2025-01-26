import ye from "@ye/primitives";
import type { RHFEditorProps } from "@ye/ui/components";
import * as S from "effect/Schema";
import React from "react";
import { FormField } from "../../core";
export interface EditorFC extends React.FC<RHFEditorProps> {}

export class Editor extends FormField.FormField("@ye/form/fields/Editor")<
  Editor,
  EditorFC
>() {
  static Optional = this.make({
    schema: S.OptionFromNonEmptyTrimmedString,
    defaultValue: "",
  });
  static Required = this.makeRequired({
    schema: ye.NonEmptyTrimStr,
  });
}
