"use client";
import { Controller, useFormContext } from "react-hook-form";

import { PhoneInput } from "@ye/ui/components";

import type { PhoneInputProps } from "@ye/ui/components";
import React from "react";

// ----------------------------------------------------------------------

export type RHFPhoneInputProps = Omit<PhoneInputProps, "value" | "onChange"> & {
  name?: string;
};

export default function RHFPhoneInput({
  name,
  helperText,
  ...other
}: RHFPhoneInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name as string}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <PhoneInput
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message ?? helperText}
          {...other}
        />
      )}
    />
  );
}
