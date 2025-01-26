import { forwardRef } from "react";
import type { Ref, RefAttributes } from "react";
import React from "react";
import type { FieldPath, FieldValues } from "react-hook-form";
import { useWatch } from "react-hook-form";
import type { PasswordElementProps } from "../Password/Element";
import PasswordElement from "../Password/Element";

export type PasswordRepeatElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TConfirmPasswordName extends
    FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TPasswordName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TConfirmPasswordValue = unknown,
> = PasswordElementProps<
  TFieldValues,
  TConfirmPasswordName,
  TConfirmPasswordValue
> & {
  passwordFieldName: TPasswordName;
  customInvalidFieldMessage?: string;
};

type PasswordRepeatElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TConfirmPasswordName extends
    FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TPasswordName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: PasswordRepeatElementProps<
    TFieldValues,
    TConfirmPasswordName,
    TPasswordName
  > &
    RefAttributes<HTMLDivElement>,
) => JSX.Element;

const PasswordRepeatElement = forwardRef(function PasswordRepeatElement<
  TFieldValues extends FieldValues = FieldValues,
  TConfirmPasswordName extends
    FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TPasswordName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TConfirmPasswordValue = unknown,
>(
  props: PasswordRepeatElementProps<
    TFieldValues,
    TConfirmPasswordName,
    TPasswordName,
    TConfirmPasswordValue
  >,
  ref: Ref<HTMLDivElement>,
) {
  const { passwordFieldName, customInvalidFieldMessage, control, ...rest } =
    props;

  const pwValue = useWatch({
    name: passwordFieldName,
    control,
  });

  return (
    <PasswordElement
      control={control}
      {...rest}
      ref={ref}
      rules={{
        validate: (value: string) => {
          return (
            value === pwValue ||
            (customInvalidFieldMessage ?? "Password should match")
          );
        },
      }}
    />
  );
});
PasswordRepeatElement.displayName = "PasswordRepeatElement";
export default PasswordRepeatElement as PasswordRepeatElementComponent;
