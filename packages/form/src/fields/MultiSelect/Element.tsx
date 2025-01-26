import CloseIcon from "@mui/icons-material/Cancel";
import {
  Checkbox,
  Chip,
  FormControl,
  type FormControlProps,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  useForkRef,
} from "@mui/material";
import type {
  InputLabelProps,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import type { Array as A } from "effect";
import type { ReactNode } from "react";
import React from "react";
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

/**
 * Helper to safely retrieve a property from a value that may be unknown.
 * If it's not an object or the property doesn't exist, returns `undefined`.
 */
function safeGet(obj: unknown, key: string | undefined): unknown {
  if (!key) return obj;
  if (obj && typeof obj === "object" && key in obj) {
    return (obj as Record<string, unknown>)[key];
  }
  return undefined;
}

export type MultiSelectElementProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TValue extends string = string,
> = Omit<SelectProps<TValue[]>, "value"> & {
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
  /** The name of the field in react-hook-form. */
  name?: string;
  /** Custom function to parse/transform `FieldError` into a display value. */
  parseError?: (error: FieldError) => ReactNode;
  /** Minimum width for the underlying FormControl. */
  minWidth?: number;
  /** Max height of the menu popover. */
  menuMaxHeight?: number;
  /** Max width of the menu popover. */
  menuMaxWidth?: number;
  /** Helper text to display below the select. */
  helperText?: ReactNode;
  /** Whether to show selected items as chips. */
  showChips?: boolean;
  /** Preserve the original order of `options` when displaying chips. */
  preserveOrder?: boolean;
  /** The `control` object from `useForm()`. */
  control?: Control<TFieldValues>;
  /** Whether to show a checkbox next to each option. */
  showCheckbox?: boolean;
  /** Props to spread into the FormControl wrapper. */
  formControlProps?: Omit<FormControlProps, "fullWidth" | "variant">;
  /** Transform input/output data before hooking into RHF. */
  transform?: {
    /** Input transform: convert RHF field value => multi-select array. */
    input?: (value: PathValue<TFieldValues, TName>) => TValue[];
    /** Output transform: convert multi-select event => RHF field value. */
    output?: (
      event: SelectChangeEvent<TValue[number][]>,
      child: ReactNode,
    ) => PathValue<TFieldValues, TName>;
  };
  /** Props to spread into the InputLabel. */
  inputLabelProps?: Omit<InputLabelProps, "htmlFor" | "required">;
};

// type MultiSelectElementComponent = <
//   TFieldValues extends FieldValues,
//   TName extends FieldPath<TFieldValues>,
//   TValue extends string,
// >(
//   props: MultiSelectElementProps<TFieldValues, TName, TValue> &
//     React.RefAttributes<HTMLDivElement>
// ) => React.ReactElement

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function MultiSelectElement<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TValue extends A.NonEmptyReadonlyArray<string>[number],
>(
  props: MultiSelectElementProps<TFieldValues, TName, TValue>,
  ref: React.LegacyRef<HTMLDivElement> | undefined,
) {
  const {
    onBlur,
    options,
    label = "",
    itemKey = "id",
    itemValue = "",
    itemLabel = "label",
    required = false,
    rules = {},
    parseError,
    name,
    menuMaxHeight = ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    menuMaxWidth = 250,
    minWidth = 120,
    helperText,
    showChips,
    preserveOrder,
    control,
    showCheckbox,
    formControlProps,
    inputRef,
    transform,
    inputLabelProps,
    ...rest
  } = props;

  const errorMsgFn = useFormError();
  const customErrorFn = parseError || errorMsgFn;

  // Make renderLabel return a ReactNode to avoid "type unknown" errors
  const renderLabel = (selectedValue: unknown): ReactNode => {
    const foundOption = options.find((op) => {
      const val = safeGet(op, itemValue || itemKey) ?? op;
      return val === selectedValue;
    });
    // Cast the final to ReactNode
    return (safeGet(foundOption, itemLabel) ?? selectedValue) as ReactNode;
  };

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
    name: name as TName,
    rules: rulesTmp,
    disabled: rest.disabled,
    control,
  });

  // Transform the RHF field value into an array, and vice versa
  const { value, onChange } = useTransform<TFieldValues, TName, TValue[]>({
    value: field.value,
    onChange: field.onChange,
    transform: {
      input:
        typeof transform?.input === "function"
          ? transform.input
          : (val) =>
              Array.isArray(val) ? val : ([] as PathValue<TFieldValues, TName>),
      output: transform?.output,
    },
  });

  const handleInputRef = useForkRef(field.ref, inputRef);

  const renderHelperText = error
    ? typeof customErrorFn === "function"
      ? customErrorFn(error)
      : error.message
    : helperText;

  // Force our "value" to always be an array for MUI's multiple select
  const arrayValue = Array.isArray(value) ? value : [];

  return (
    <FormControl
      {...formControlProps}
      style={{
        minWidth,
        ...formControlProps?.style,
      }}
      variant={rest.variant}
      fullWidth={rest.fullWidth}
      error={!!error}
      size={rest.size}
    >
      {label && (
        <InputLabel
          {...inputLabelProps}
          size={rest.size === "small" ? "small" : inputLabelProps?.size}
          error={!!error}
          htmlFor={rest.id || `select-multi-select-${name}`}
          required={required}
        >
          {label}
        </InputLabel>
      )}
      <Select
        {...rest}
        multiple
        label={label || undefined}
        error={!!error}
        id={rest.id || `select-multi-select-${name}`}
        value={arrayValue}
        required={required}
        onChange={onChange}
        onBlur={(event) => {
          field.onBlur();
          if (typeof onBlur === "function") {
            onBlur(event);
          }
        }}
        MenuProps={{
          ...rest.MenuProps,
          slotProps: {
            ...rest.MenuProps?.slotProps,
            paper: {
              ...(rest.MenuProps?.slotProps?.paper ?? {}),
              style: {
                maxHeight: menuMaxHeight,
                width: menuMaxWidth,
                ...(propertyExists(rest.MenuProps?.slotProps?.paper, "style") &&
                  typeof rest.MenuProps?.slotProps?.paper.style ===
                    "object" && {
                    ...rest.MenuProps.slotProps.paper.style,
                  }),
              },
            },
          },
        }}
        renderValue={
          typeof rest.renderValue === "function"
            ? rest.renderValue
            : showChips
              ? (selected) => {
                  // In MUI, selected is unknown[]. Cast to our array type.
                  const selectedArr = Array.isArray(selected) ? selected : [];
                  // Optionally preserve the same order as in `options`
                  const finalValues = preserveOrder
                    ? options.filter((option) => {
                        const val = (safeGet(option, itemValue || itemKey) ??
                          option) as TValue;
                        // Now that val is cast to TValue, we can compare with selectedArr
                        return selectedArr.includes(val);
                      })
                    : selectedArr;

                  return (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {finalValues.map((selectedValue) => {
                        const lbl = renderLabel(selectedValue);
                        return (
                          <Chip
                            key={String(selectedValue)}
                            label={lbl}
                            style={{ display: "flex", flexWrap: "wrap" }}
                            onDelete={() => {
                              onChange(
                                arrayValue.filter((v) => v !== selectedValue),
                              );
                            }}
                            deleteIcon={
                              <CloseIcon
                                onMouseDown={(ev) => {
                                  ev.stopPropagation();
                                }}
                              />
                            }
                          />
                        );
                      })}
                    </div>
                  );
                }
              : (selected) =>
                  Array.isArray(selected)
                    ? selected.map(renderLabel).join(", ")
                    : ""
        }
        inputRef={handleInputRef}
      >
        {options.map((item) => {
          // We cast to TValue so arrayValue.some(...) can compare
          const val = (safeGet(item, itemValue || itemKey) ?? item) as TValue;
          const isChecked = arrayValue.some((v) => v === val);

          // MUI's MenuItem wants value to be string|number by default,
          // so we cast to `any` (or `unknown as string|number|...`) to bypass
          return (
            <MenuItem
              key={String(val)}
              value={val as any} // Casting to let MUI accept object values
              sx={{
                fontWeight: (theme) =>
                  isChecked
                    ? theme.typography.fontWeightBold
                    : theme.typography.fontWeightRegular,
              }}
            >
              {showCheckbox && <Checkbox checked={isChecked} />}
              <ListItemText
                primary={
                  // The primary prop must be ReactNode. Cast the unknown fallback to ReactNode.
                  (safeGet(item, itemLabel) ?? item) as ReactNode
                }
              />
            </MenuItem>
          );
        })}
      </Select>
      {renderHelperText && (
        <FormHelperText error={!!error}>{renderHelperText}</FormHelperText>
      )}
    </FormControl>
  );
}

MultiSelectElement.displayName = "MultiSelectElement";

export default MultiSelectElement;
