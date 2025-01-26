"use client";
import type { TextFieldProps } from "@mui/material/TextField";

import {
  transformValue,
  transformValueOnBlur,
  transformValueOnChange,
} from "@ye/utils/transform-number";
import { Controller, useFormContext } from "react-hook-form";

import TextField from "@mui/material/TextField";

// ----------------------------------------------------------------------

export type RHFTextFieldProps = Omit<TextFieldProps, "variant"> & {
  name?: string;
  variant?: TextFieldProps["variant"];
};

export function RHFTextField({
  name,
  helperText,
  slotProps,
  type = "text",
  variant = "outlined",
  ...other
}: RHFTextFieldProps) {
  const { control } = useFormContext();

  const isNumberType = type === "number";

  return (
    <Controller
      name={name as string}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          variant={variant}
          value={isNumberType ? transformValue(field.value) : field.value}
          onChange={(event) => {
            const transformedValue = isNumberType
              ? transformValueOnChange(event.target.value)
              : event.target.value;

            field.onChange(transformedValue);
          }}
          onBlur={(event) => {
            const transformedValue = isNumberType
              ? transformValueOnBlur(event.target.value)
              : event.target.value;

            field.onChange(transformedValue);
          }}
          type={isNumberType ? "text" : type}
          error={!!error}
          helperText={error?.message ?? helperText}
          slotProps={{
            ...slotProps,
            htmlInput: {
              autoComplete: "off",
              ...slotProps?.htmlInput,
              ...(isNumberType && {
                inputMode: "decimal",
                pattern: "[0-9]*\\.?[0-9]*",
              }),
            },
          }}
          {...other}
        />
      )}
    />
  );
}
