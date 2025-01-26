import type { Array } from "effect";
import { Schema } from "effect";
import React from "react";
import type { FieldPath, FieldValues } from "react-hook-form";
import { FormField } from "../../core";
import type { SelectElementProps } from "./Element";

interface SelectFC<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends string = string,
> extends React.FC<
    Omit<SelectElementProps<TFieldValues, TName, TValue>, "rules" | "control">
  > {}

/**
 * 1) Pass a wide version of `SelectFC` to `FormField(...)<Select, SelectFC<any, any, any>>()`.
 *    This tells `FormField` the “base” component type is `SelectFC` but does *not* lock in the narrower
 *    generics for `TFieldValues`, `TName`, or `TValue`.
 */
export class Select extends FormField.FormField("@ye/form/fields/Select")<
  Select,
  SelectFC<any, any, any>
>() {
  /**
   * 2) In this static method, you pick the narrower type arguments you want.
   *    Now you can call `.decorate<SelectFC<TFieldValues, TName, Literals[number]>>()` safely,
   *    because the base class was declared with `SelectFC<any, any, any>`.
   */
  static Default = <
    Literals extends Array.NonEmptyReadonlyArray<string>,
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  >(
    ...literals: Literals
  ) =>
    this.make({
      schema: Schema.Literal(...literals),
      defaultValue: "",
    }).decorate<SelectFC<TFieldValues, TName, Literals[number]>>();
}
