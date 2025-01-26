import { MenuItem, type MenuItemProps, useForkRef } from "@mui/material";
import { TextField } from "@mui/material";
import type { InputLabelProps } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";
import type { Array as A } from "effect";
import type { ReactNode, Ref } from "react";
import React, { forwardRef } from "react";
import type { ChangeEvent } from "react";
import { useController } from "react-hook-form";
import type {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  PathValue,
  UseControllerProps,
} from "react-hook-form";
import { useFormError } from "../FormErrorProvider";
import { useTransform } from "../useTransform";
import { propertyExists } from "../utils";

export type SelectElementProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TValue extends string = string,
> = Omit<TextFieldProps, "name" | "type" | "onChange"> & {
  /** The array of items to display in the multi-select. */
  options: TValue[];
  /** The label text for the field. */
  label?: string;
  /** The key that uniquely identifies each item (defaults to `"id"`). */
  itemKey?: string;
  /**
   * The property on each item that holds its "value".
   * If not provided, will use `itemKey` or the entire item as fallback.
   */
  itemValue?: string;
  /**
   * The property on each item that holds its "label" (defaults to `"label"`).
   */
  itemLabel?: string;
  /** Mark as required. */
  required?: boolean;
  /** Validation rules for react-hook-form. */
  rules?: UseControllerProps<TFieldValues, TName>["rules"];
  name: TName;
  valueKey?: string;
  labelKey?: string;
  type?: "string" | "number";
  parseError?: (error: FieldError) => ReactNode;
  objectOnChange?: boolean;
  onChange?: (value: any) => void;
  control?: Control<TFieldValues>;
  transform?: {
    input?: (value: PathValue<TFieldValues, TName>) => TValue;
    output?: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => PathValue<TFieldValues, TName>;
  };
  /** Props to spread into the InputLabel. */
  inputLabelProps?: Omit<InputLabelProps, "htmlFor" | "required">;
};

type SelectElementComponent = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TValue extends string,
>(
  props: SelectElementProps<TFieldValues, TName, TValue> &
    React.RefAttributes<HTMLDivElement>,
) => React.ReactElement;

const SelectElement = forwardRef(function SelectElement<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TValue extends A.NonEmptyReadonlyArray<string>[number],
>(
  props: SelectElementProps<TFieldValues, TName, TValue>,
  ref: Ref<HTMLDivElement>,
) {
  const {
    name,
    required,
    valueKey = "id",
    labelKey = "label",
    options = [],
    parseError,
    type,
    objectOnChange,
    rules = {},
    control,
    inputRef,
    transform,
    onBlur,
    ...rest
  } = props;

  const errorMsgFn = useFormError();
  const customErrorFn = parseError || errorMsgFn;
  const isNativeSelect = !!rest.SelectProps?.native;

  const rulesTmp = {
    ...rules,
    ...(required &&
      !rules.required && {
        required: "This field is required",
      }),
  };

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    rules: rulesTmp,
    disabled: rest.disabled,
    control,
  });

  const { value, onChange } = useTransform<TFieldValues, TName, TValue>({
    value: field.value,
    onChange: field.onChange,
    transform: {
      input:
        typeof transform?.input === "function"
          ? transform.input
          : (value) => {
              return value?.[valueKey] ?? value ?? ("" as TValue);
            },
      output:
        typeof transform?.output === "function"
          ? transform.output
          : (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              let value: string | number = event.target.value;
              if (type === "number" && value) {
                value = Number(value);
              }
              return value as PathValue<TFieldValues, TName>;
            },
    },
  });

  const handleInputRef = useForkRef(field.ref, inputRef);

  // handle shrink on number input fields
  if (type === "number" && typeof value !== "undefined") {
    rest.InputLabelProps = rest.InputLabelProps || {};
    rest.InputLabelProps.shrink = true;
  }

  return (
    <TextField
      {...rest}
      name={name}
      value={value}
      onBlur={(event) => {
        field.onBlur();
        if (typeof onBlur === "function") {
          onBlur(event);
        }
      }}
      ref={ref}
      onChange={(event) => {
        onChange(event);
        if (typeof rest.onChange === "function") {
          let value: string | number | TValue | undefined = event.target.value;
          if (type === "number" && value) {
            value = Number(value);
          }
          if (objectOnChange) {
            value = options.find(
              (i) => i[valueKey as keyof typeof i] === value,
            );
          }
          // It would be better if we expose event object here, instead of value
          // This will be a breaking change for user.
          rest.onChange(value);
        }
      }}
      select
      required={required}
      error={!!error}
      helperText={
        error
          ? typeof customErrorFn === "function"
            ? customErrorFn(error)
            : error.message
          : rest.helperText
      }
      inputRef={handleInputRef}
    >
      {isNativeSelect && <option />}
      {options.map((item) => {
        // Need to clearly apply key because of https://github.com/vercel/next/issues/55642
        const key = `${name}_${item[valueKey as keyof typeof item]}`;
        const optionProps = {
          value: item,
          disabled: propertyExists(item, "disabled") ? !!item.disabled : false,
          children: item,
        };
        return isNativeSelect ? (
          <option
            key={key}
            {...(optionProps as React.OptionHTMLAttributes<HTMLOptionElement>)}
          />
        ) : (
          <MenuItem key={key} {...(optionProps as MenuItemProps)} />
        );
      })}
    </TextField>
  );
});

SelectElement.displayName = "SelectElement";

export default SelectElement as SelectElementComponent;
