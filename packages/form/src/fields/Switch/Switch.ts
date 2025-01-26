import ye from "@ye/primitives";
import React from "react";
import { FormField } from "../../core";
import type { SwitchElementProps } from "./Element";
export interface SwitchFC extends React.FC<SwitchElementProps> {}

export class Switch extends FormField.FormField("@ye/form/fields/Switch")<
  Switch,
  SwitchFC
>() {
  static Default = this.make({ schema: ye.Bool, defaultValue: false });
}
