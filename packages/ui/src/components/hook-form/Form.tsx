"use client";
import { DevTool } from "@hookform/devtools";
import type {
  ComponentProps,
  FormEventHandler,
  FormHTMLAttributes,
  PropsWithChildren,
} from "react";
import {
  type FieldValues,
  FormProvider,
  type SubmitErrorHandler,
  type SubmitHandler,
  type UseFormProps,
  type UseFormReturn,
  useForm,
} from "react-hook-form";

import type { UseEffectForm } from "@ye/utils/hooks";

export type FormProps<TInput extends FieldValues = FieldValues> = Omit<
  ComponentProps<"form">,
  "onSubmit" | "id"
> & {
  handleSubmit?: FormEventHandler<HTMLFormElement>;
  formContext?: UseFormReturn<TInput> & { id: string };
  onSuccess?: SubmitHandler<TInput>;
  onError?: SubmitErrorHandler<TInput>;
  FormProps?: FormHTMLAttributes<HTMLFormElement>;
};

export const Form = <TInput extends FieldValues = FieldValues>(
  props: FormProps<TInput>,
) => {
  const { onSuccess, formContext, onError, ...passThrough }: typeof props =
    props;

  if (!formContext) {
    return (
      <FormWithoutContext<TInput> {...{ onSuccess, onError, ...passThrough }} />
    );
  }
  if (
    typeof onSuccess === "function" &&
    typeof props.handleSubmit === "function"
  ) {
    console.warn(
      "Property `onSuccess` will be ignored because handleSubmit assertions provided",
    );
  }

  return (
    <FormProvider {...formContext}>
      <form
        {...passThrough}
        id={formContext.id}
        noValidate
        onSubmit={(event) => {
          formContext.handleSubmit(
            onSuccess
              ? async (values) => {
                try {
                  await onSuccess(values);
                } catch (cause) {
                  formContext.setError("root.server", {
                    message: (cause as Error)?.message ?? "Unknown error",
                    type: "server",
                  });
                }
              }
              : () =>
                console.log("submit handler `onSuccess` assertions missing"),
            onError,
          )(event);
        }}
      />
      <DevTool control={formContext.control} />
    </FormProvider>
  );
};

export type FormWithoutContextProps<TInput extends FieldValues = FieldValues> =
  PropsWithChildren<
    UseFormProps<TInput> & {
    onSuccess?: SubmitHandler<TInput>;
    onError?: SubmitErrorHandler<TInput>;
    FormProps?: FormHTMLAttributes<HTMLFormElement>;
    handleSubmit?: FormEventHandler<HTMLFormElement>;
    formContext?: UseEffectForm<TInput>;
  }
  >;
const FormWithoutContext = <TInput extends FieldValues = FieldValues>(
  props: FormWithoutContextProps<TInput>,
) => {
  const { onSuccess, FormProps, onError, ...rest }: typeof props = props;
  const methods = useForm<TInput>({
    ...rest,
  });
  const { handleSubmit, setError } = methods;

  return (
    <FormProvider {...methods}>
      <form
        {...rest}
        noValidate
        onSubmit={(event) => {
          handleSubmit(
            onSuccess
              ? async (values) => {
                try {
                  await onSuccess(values);
                } catch (cause) {
                  setError("root.server", {
                    message: (cause as Error)?.message ?? "Unknown error",
                    type: "server",
                  });
                }
              }
              : () =>
                console.log("submit handler `onSuccess` assertions missing"),
            onError,
          )(event);
        }}
      />
    </FormProvider>
  );
};
