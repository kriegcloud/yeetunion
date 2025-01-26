import type {
  FormControlLabelProps,
  FormLabelProps,
  RadioGroupProps,
  RadioProps,
} from "@mui/material";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  useTheme,
} from "@mui/material";
import React, { forwardRef } from "react";
import type { ReactNode, Ref, RefAttributes } from "react";
import type {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  PathValue,
  UseControllerProps,
} from "react-hook-form";
import { useController } from "react-hook-form";
import { useFormError } from "../FormErrorProvider";
import { useTransform } from "../useTransform";

function isRecord(val: unknown): val is Record<string, unknown> {
  return val !== null && typeof val === "object";
}

export type RadioButtonGroupProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
> = {
  rules?: UseControllerProps<TFieldValues, TName>["rules"];
  options: TValue[];
  helperText?: ReactNode;
  name: TName;
  required?: boolean;
  parseError?: (error: FieldError) => ReactNode;
  label?: string;
  labelKey?: string;
  valueKey?: string;
  disabledKey?: string;
  type?: "number" | "string";
  emptyOptionLabel?: string;
  onChange?: (value: TValue | string | undefined) => void;
  returnObject?: boolean;
  row?: boolean;
  control?: Control<TFieldValues>;
  labelProps?: Omit<FormControlLabelProps, "label" | "control" | "value">;
  formLabelProps?: Omit<FormLabelProps, "required" | "error">;
  radioProps?: RadioProps;
  disabled?: boolean;
  transform?: {
    input?: (value: PathValue<TFieldValues, TName>) => TValue;
    output?: (
      value: TValue | string | undefined,
    ) => PathValue<TFieldValues, TName>;
  };
};

type RadioButtonGroupComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
>(
  props: RadioButtonGroupProps<TFieldValues, TName, TValue> &
    RefAttributes<HTMLDivElement>,
) => JSX.Element;

const RadioButtonGroup = forwardRef(function RadioButtonGroup<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TValue = unknown,
>(
  props: RadioButtonGroupProps<TFieldValues, TName, TValue>,
  ref: Ref<HTMLDivElement>,
) {
  const {
    helperText,
    options,
    label,
    name,
    parseError,
    labelKey = "label",
    valueKey = "id",
    disabledKey = "disabled",
    required,
    emptyOptionLabel,
    returnObject,
    row,
    control,
    type,
    labelProps,
    disabled,
    formLabelProps,
    radioProps,
    transform,
    rules = {},
    ...rest
  } = props;

  const theme = useTheme();
  const errorMsgFn = useFormError();
  const customErrorFn = parseError || errorMsgFn;

  // If "required" is true, but there's no 'rules.required', define a default message.
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
    disabled,
    control,
  });

  // Use the transform helper to map in/out if the user provided transform input/output
  const { value, onChange } = useTransform<
    TFieldValues,
    TName,
    TValue | string
  >({
    value: field.value,
    onChange: field.onChange,
    transform: {
      input:
        typeof transform?.input === "function"
          ? transform.input
          : (val) => val || ("" as TValue),
      output:
        typeof transform?.output === "function"
          ? transform.output
          : (_evt, val) => {
              if (val && type === "number") {
                return Number(val) as PathValue<TFieldValues, TName>;
              }
              return val as PathValue<TFieldValues, TName>;
            },
    },
  });

  const renderHelperText = error
    ? typeof customErrorFn === "function"
      ? customErrorFn(error)
      : error.message
    : helperText;

  /**
   * MUI's RadioGroup passes:
   *   onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
   * We'll interpret 'value' as the string from the selected <Radio value="...">,
   * then find the matching object if returnObject is true.
   */
  const onRadioChange: RadioGroupProps["onChange"] = (event, radioValue) => {
    const returnValue = returnObject
      ? options.find((item) => {
          if (!isRecord(item)) return false;
          return item[valueKey] === radioValue;
        })
      : radioValue;

    onChange(event, returnValue);

    // If the user also passed an onChange prop, call it with the final value
    if (typeof rest.onChange === "function") {
      rest.onChange(returnValue);
    }
  };

  return (
    <FormControl error={!!error} ref={ref}>
      {label && (
        <FormLabel
          {...formLabelProps}
          required={required}
          error={!!error}
          // If you need id or anything else, you can set it here as well
        >
          {label}
        </FormLabel>
      )}

      <RadioGroup
        onChange={onRadioChange}
        name={name}
        row={row}
        value={value || ""} // MUI wants a string; fallback to '' if no selection
      >
        {/* Possibly render an empty (unselected) option */}
        {emptyOptionLabel && (
          <FormControlLabel
            {...labelProps}
            control={
              <Radio
                {...radioProps}
                sx={{
                  color: error ? theme.palette.error.main : undefined,
                }}
                // If the main control is disabled, also disable the empty label
                disabled={disabled}
                // Checked if the current value is falsy
                checked={!value}
              />
            }
            label={emptyOptionLabel}
            value=""
          />
        )}

        {options.map((option, idx) => {
          // Get the unique key used in <Radio value="...">
          // We'll cast or guard for objects if we need to index them
          let optionKey: unknown;
          let optionIsDisabled = false;
          let optionLabel: ReactNode;

          if (isRecord(option)) {
            optionKey = option[valueKey];
            optionIsDisabled = !!option[disabledKey];
            optionLabel = option[labelKey] as ReactNode;
          } else {
            // If not an object, fallback to the entire "option" as the key/label
            optionKey = option;
            optionLabel = String(option);
          }

          // If user wants numeric comparison, cast to number
          // Only do so if type === 'number' and we know it's string/number
          const castedValue = type === "number" ? Number(value) : value;
          const isChecked = castedValue === optionKey;

          return (
            <FormControlLabel
              key={`${String(optionKey)}-${idx}`}
              {...labelProps}
              control={
                <Radio
                  {...radioProps}
                  sx={{
                    color: error ? theme.palette.error.main : undefined,
                  }}
                  disabled={disabled || optionIsDisabled}
                  checked={isChecked}
                />
              }
              // MUI's <Radio value="..."> must be a string, number, or undefined
              // We'll coerce to string if it's not
              value={String(optionKey)}
              label={optionLabel}
            />
          );
        })}
      </RadioGroup>

      {renderHelperText && <FormHelperText>{renderHelperText}</FormHelperText>}
    </FormControl>
  );
});

RadioButtonGroup.displayName = "RadioButtonGroup";

export default RadioButtonGroup as RadioButtonGroupComponent;
