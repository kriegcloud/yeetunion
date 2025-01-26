"use client";
import { type ButtonProps } from "@mui/material/Button";
import { useFormContext } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import type { AnyEffectForm } from "@ye/utils/hooks";
import React from "react";

export type SubmitButtonProps = Omit<ButtonProps, "type" | "form"> & {
  /**
   * Optionally specify a form to submit instead of the closest form context.
   */
  form?: AnyEffectForm;
  loadingIndicator?: React.ReactNode;
  handleSubmit?: () => void;
};

export const SubmitButton = (props: SubmitButtonProps) => {
  const context = useFormContext();

  const form = props.form ?? context;
  if (!form) {
    throw new Error(
      "SubmitButton must be used within a Form or have a form prop",
    );
  }
  const { formState } = form;

  return (
    <LoadingButton
      {...props}
      form={props.form?.id}
      type="submit"
      loading={formState.isSubmitting}
      disabled={formState.isSubmitting}
      onClick={() => props.handleSubmit?.()}
      loadingIndicator={props.loadingIndicator}
    >
      {props.children}
    </LoadingButton>
  );
};
