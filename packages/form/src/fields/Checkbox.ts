import { FormField } from "../core"
import { Schema } from "effect"
import {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  PathValue,
  UseControllerProps,
} from 'react-hook-form'
import {
  CheckboxProps,
  FormControlLabelProps,
} from '@mui/material'
import {ChangeEvent, ReactNode,} from 'react'
import React from "react";

export interface CheckboxFC<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
> extends
  React.FC<Omit<CheckboxProps, 'name'> & {
    rules?: UseControllerProps<TFieldValues, TName>['rules']
    name: TName
    parseError?: (error: FieldError) => ReactNode
    label?: FormControlLabelProps['label']
    helperText?: string
    control?: Control<TFieldValues>
    labelProps?: Omit<FormControlLabelProps, 'label' | 'control'>
    transform?: {
      input?: (value: PathValue<TFieldValues, TName>) => TValue
      output?: (
        event: ChangeEvent<HTMLInputElement>,
        value: TValue
      ) => PathValue<TFieldValues, TName>
    }
  }>
{}

export class Checkbox extends FormField.FormField("@ye/form/fields/Checkbox")<Checkbox, CheckboxFC>() {
  static Default = this.make({ schema: Schema.Boolean, defaultValue: false })
}
