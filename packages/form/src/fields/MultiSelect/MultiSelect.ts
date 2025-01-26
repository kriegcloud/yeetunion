import type { Array } from "effect";
import { Schema } from "effect";
import React from "react";
import type { FieldPath, FieldValues } from "react-hook-form";
import { FormField } from "../../core";
import type { MultiSelectElementProps } from "./Element";

interface MultiSelectFC<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends string = string,
> extends React.FC<
    Omit<
      MultiSelectElementProps<TFieldValues, TName, TValue>,
      "rules" | "control"
    >
  > {}

/**
 * 1) Pass a wide version of `MultiSelectFC` to `FormField(...)<MultiSelect, MultiSelectFC<any, any, any>>()`.
 *    This tells `FormField` the “base” component type is `MultiSelectFC` but does *not* lock in the narrower
 *    generics for `TFieldValues`, `TName`, or `TValue`.
 */
export class MultiSelect extends FormField.FormField(
  "@ye/form/fields/MultiSelect",
)<MultiSelect, MultiSelectFC<any, any, any>>() {
  /**
   * 2) In this static method, you pick the narrower type arguments you want.
   *    Now you can call `.decorate<MultiSelectFC<TFieldValues, TName, Literals[number]>>()` safely,
   *    because the base class was declared with `MultiSelectFC<any, any, any>`.
   */
  static Default = <
    Literals extends Array.NonEmptyReadonlyArray<string>,
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  >(
    ...literals: Literals
  ) =>
    this.make({
      schema: Schema.HashSet(Schema.Literal(...literals)),
      defaultValue: [],
    }).decorate<MultiSelectFC<TFieldValues, TName, Literals[number]>>();
}
