import type {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  PathValue,
  UseControllerProps,
} from "react-hook-form";
import {
  useController,
} from 'react-hook-form'
import {
  Autocomplete, type AutocompleteOwnerState,
  Checkbox,
  TextField,
  useForkRef,
} from '@mui/material'
import type {
  ChipTypeMap,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteFreeSoloValueMapping,
  AutocompleteProps,
  AutocompleteValue,
  TextFieldProps,
  AutocompleteRenderOptionState,
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress'
import {useFormError} from '../FormErrorProvider.js'
import {
  forwardRef,
} from 'react'
import type {
  ElementType,
  ReactNode,
  Ref,
  RefAttributes,
  SyntheticEvent,
} from "react";
import {useTransform} from '../useTransform.js'
import {propertyExists} from '../utils.js'
import React from "react";

type AutoDefault = {
  id: string | number // must keep id in case of keepObject
  label: string
}
export type AutocompleteElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = AutoDefault | string,
  Multiple extends boolean = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends ElementType = ChipTypeMap['defaultComponent'],
> = {
  name: TName
  control?: Control<TFieldValues>
  options: ReadonlyArray<TValue>
  loading?: boolean
  multiple?: Multiple
  loadingIndicator?: ReactNode
  rules?: UseControllerProps<TFieldValues, TName>['rules']
  parseError?: (error: FieldError) => ReactNode
  required?: boolean
  label?: TextFieldProps['label']
  showCheckbox?: boolean
  matchId?: boolean
  autocompleteProps?: Omit<
    AutocompleteProps<
      TValue,
      Multiple,
      DisableClearable,
      FreeSolo,
      ChipComponent
    >,
    'name' | 'options' | 'loading' | 'renderInput'
  >
  textFieldProps?: Omit<TextFieldProps, 'name' | 'required' | 'label'>
  transform?: {
    input?: (
      value: PathValue<TFieldValues, TName>
    ) => AutocompleteValue<TValue, Multiple, DisableClearable, FreeSolo>
    output?: (
      event: SyntheticEvent,
      value: AutocompleteValue<TValue, Multiple, DisableClearable, FreeSolo>,
      reason: AutocompleteChangeReason,
      details?: AutocompleteChangeDetails<TValue>
    ) => PathValue<TFieldValues, TName>
  }
}


type AutocompleteElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = AutoDefault | string, // Maybe we can change it to 'unknown' type for more strict type checking
  Multiple extends boolean = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends ElementType = ChipTypeMap['defaultComponent'],
>(
  props: AutocompleteElementProps<
    TFieldValues,
    TName,
    TValue,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  > &
    RefAttributes<HTMLDivElement>
) => React.ReactElement

const AutocompleteElement = forwardRef(function AutocompleteElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = AutoDefault | string,
  Multiple extends boolean = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends ElementType = ChipTypeMap['defaultComponent'],
>(
  props: AutocompleteElementProps<
    TFieldValues,
    TName,
    TValue,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >,
  ref: Ref<HTMLDivElement>
) {
  const {
    textFieldProps,
    autocompleteProps,
    name,
    control,
    options,
    loading,
    showCheckbox,
    rules,
    loadingIndicator,
    required,
    multiple,
    label,
    parseError,
    transform,
    matchId,
  } = props

  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn

  const validationRules = {
    ...rules,
    ...(required && {
      required: rules?.required || 'This field is required',
    }),
  }

  const {
    field,
    fieldState: {error},
  } = useController({
    name,
    control: control,
    disabled: autocompleteProps?.disabled,
    rules: validationRules,
  } as UseControllerProps<TFieldValues, TName>)

  const getOptionLabel = (
    option: TValue | AutocompleteFreeSoloValueMapping<FreeSolo>
  ): string => {
    if (typeof autocompleteProps?.getOptionLabel === 'function') {
      return autocompleteProps.getOptionLabel(option)
    }
    if (propertyExists(option, 'label')) {
      return `${option?.label}`
    }
    return `${option}`
  }

  const isOptionEqualToValue = (option: TValue, value: TValue): boolean => {
    if (typeof autocompleteProps?.isOptionEqualToValue === 'function') {
      return autocompleteProps.isOptionEqualToValue(option, value)
    }
    const optionKey = propertyExists(option, 'id') ? option.id : option
    const valueKey = propertyExists(value, 'id') ? value.id : value
    return optionKey === valueKey
  }

  const matchOptionByValue = (currentValue: TValue) => {
    return options.find((option) => {
      if (matchId && propertyExists(option, 'id')) {
        return option.id === currentValue
      }
      return isOptionEqualToValue(option, currentValue)
    })
  }

  const {value, onChange} = useTransform<
    TFieldValues,
    TName,
    AutocompleteValue<TValue, Multiple, DisableClearable, FreeSolo>
  >({
    value: field.value,
    onChange: field.onChange,
    transform: {
      input:
        typeof transform?.input === 'function'
          ? transform.input
          : (newValue: TValue) => {
            return (
              multiple
                ? (Array.isArray(newValue) ? newValue : []).map(
                  matchOptionByValue
                )
                : matchOptionByValue(newValue) ?? null
            ) as AutocompleteValue<
              TValue,
              Multiple,
              DisableClearable,
              FreeSolo
            >
          },
      output:
        typeof transform?.output === 'function'
          ? transform.output
          : (
            _event: SyntheticEvent,
            newValue: AutocompleteValue<
              TValue,
              Multiple,
              DisableClearable,
              FreeSolo
            >
          ) => {
            if (multiple) {
              const newValues = Array.isArray(newValue) ? newValue : []
              return (
                matchId
                  ? newValues.map((currentValue) =>
                    propertyExists(currentValue, 'id')
                      ? currentValue.id
                      : currentValue
                  )
                  : newValues
              ) as PathValue<TFieldValues, TName>
            }
            return (
              matchId && propertyExists(newValue, 'id')
                ? newValue.id
                : newValue
            ) as PathValue<TFieldValues, TName>
          },
    },
  })

  const handleInputRef = useForkRef(field.ref, textFieldProps?.inputRef)

  const loadingElement = loadingIndicator || (
    <CircularProgress color="inherit" size={20}/>
  )

  const renderOption = (autocompleteProps?.renderOption ??
    (showCheckbox
      ? (props, option, {selected}) => {
        return (
          <li {...props}>
            <Checkbox sx={{marginRight: 1}} checked={selected}/>
            {getOptionLabel(option)}
          </li>
        )
      }
      : undefined)) as
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (props: React.HTMLAttributes<HTMLLIElement> & { key: any; },
     option: TValue, state: AutocompleteRenderOptionState, ownerState: AutocompleteOwnerState<TValue,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent>) => React.ReactNode

  return (
    <Autocomplete
      {...autocompleteProps}
      value={value}
      loading={loading ?? false}
      multiple={Boolean(multiple) as Multiple}
      options={options}
      disableCloseOnSelect={
        typeof autocompleteProps?.disableCloseOnSelect === 'boolean'
          ? autocompleteProps.disableCloseOnSelect
          : !!multiple
      }
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={getOptionLabel}
      onChange={(event, newValue, reason, details) => {
        onChange(event, newValue, reason, details)
        if (autocompleteProps?.onChange) {
          autocompleteProps.onChange(event, newValue, reason, details)
        }
      }}
      ref={ref}
      renderOption={renderOption}
      onBlur={(event) => {
        field.onBlur()
        if (typeof autocompleteProps?.onBlur === 'function') {
          autocompleteProps.onBlur(event)
        }
      }}
      renderInput={({size, InputLabelProps, ...rest}) => (
        <TextField
          name={name}
          required={rules?.required ? true : (required ?? false)}
          label={label}
          {...textFieldProps}
          {...rest}
          size={size ?? 'medium'}
          error={!!error}
          slotProps={{
            inputLabel: {
              ...InputLabelProps,
              className: InputLabelProps.className ?? '',
            },
            input: {
              ...rest.InputProps,
              endAdornment: (
                <>
                  {loading ? loadingElement : null}
                  {rest.InputProps.endAdornment}
                </>
              ),
            },
            htmlInput: {
              ...rest.inputProps,
            }
          }}
          helperText={
            error
              ? typeof customErrorFn === 'function'
                ? customErrorFn(error)
                : error.message
              : textFieldProps?.helperText
          }
          inputRef={handleInputRef}
        />
      )}
    />
  )
})
AutocompleteElement.displayName = 'AutocompleteElement'
export default AutocompleteElement as AutocompleteElementComponent