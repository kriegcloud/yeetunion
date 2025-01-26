import { FormControlLabel, Switch, useForkRef } from "@mui/material";
import type { FormControlLabelProps, SwitchProps } from "@mui/material";
import type { ChangeEvent } from "react";
import React from "react";
import { useController } from "react-hook-form";
import type {
  Control,
  FieldPath,
  FieldValues,
  PathValue,
} from "react-hook-form";
import { useTransform } from "../useTransform";

export type SwitchElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
> = Omit<FormControlLabelProps, "control"> & {
  name?: TName;
  control?: Control<TFieldValues>;
  switchProps?: SwitchProps;
  transform?: {
    input?: (value: PathValue<TFieldValues, TName>) => TValue;
    output?: (
      event: ChangeEvent<HTMLInputElement>,
      checked: boolean,
    ) => PathValue<TFieldValues, TName>;
  };
};

function SwitchElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
>(props: SwitchElementProps<TFieldValues, TName, TValue>) {
  const { name, control, switchProps, transform, ...rest } = props;

  const { field } = useController({
    name: name as TName,
    control,
    disabled: rest.disabled,
  });

  const { value, onChange } = useTransform<TFieldValues, TName, TValue>({
    value: field.value,
    onChange: field.onChange,
    transform: {
      input: transform?.input,
      output:
        typeof transform?.output === "function"
          ? transform.output
          : (_event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
              return checked as PathValue<TFieldValues, TName>;
            },
    },
  });

  const handleSwitchRef = useForkRef(field.ref, switchProps?.ref);

  return (
    <FormControlLabel
      control={
        <Switch
          {...switchProps}
          name={field.name}
          value={value}
          onChange={(event, checked) => {
            onChange(event, checked);
            if (typeof switchProps?.onChange === "function") {
              switchProps.onChange(event, checked);
            }
          }}
          onBlur={(event) => {
            field.onBlur();
            if (typeof switchProps?.onBlur === "function") {
              switchProps?.onBlur(event);
            }
          }}
          ref={handleSwitchRef}
          checked={!!value}
        />
      }
      {...rest}
    />
  );
}
SwitchElement.displayName = "SwitchElement";
export default SwitchElement;
