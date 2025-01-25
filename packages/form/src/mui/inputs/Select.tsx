import {ChangeEvent, forwardRef, ReactNode, Ref, RefAttributes} from 'react'
import {MenuItem, TextField, TextFieldProps, useForkRef} from '@mui/material'
import {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  PathValue,
  useController,
  UseControllerProps,
} from 'react-hook-form'
import {useFormError} from './FormErrorProvider'
import {useTransform} from './useTransform'
import {propertyExists} from './utils'

export type SelectElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends string = string,
> = Omit<TextFieldProps, 'name' | 'type' | 'onChange'> & {
  rules?: UseControllerProps<TFieldValues, TName>['rules']
  name: TName
  options?: ReadonlyArray<{ label: string; value: TValue }>
  valueKey?: string
  labelKey?: string
  type?: 'string' | 'number'
  parseError?: (error: FieldError) => ReactNode
  objectOnChange?: boolean
  onChange?: (value: any) => void
  control?: Control<TFieldValues>
  transform?: {
    input?: (value: PathValue<TFieldValues, TName>) => TValue
    output?: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => PathValue<TFieldValues, TName>
  }
}

type SelectElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends string = string,
>(
  props: SelectElementProps<TFieldValues, TName, TValue> &
    RefAttributes<HTMLDivElement>
) => JSX.Element

const SelectElement = forwardRef(function SelectElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends string = string,
>(
  props: SelectElementProps<TFieldValues, TName, TValue>,
  ref: Ref<HTMLDivElement>
) {
  const {
    name,
    required,
    valueKey = 'id',
    labelKey = 'label',
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
  } = props

  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn
  const isNativeSelect = !!rest.SelectProps?.native

  const rulesTmp = {
    ...rules,
    ...(required &&
      !rules.required && {
        required: 'This field is required',
      }),
  }

  const {
    field,
    fieldState: {error},
  } = useController({
    name,
    rules: rulesTmp,
    disabled: rest.disabled,
    control,
  })

  const {value, onChange} = useTransform<TFieldValues, TName, TValue>({
    value: field.value,
    onChange: field.onChange,
    transform: {
      input:
        typeof transform?.input === 'function'
          ? transform.input
          : (value) => {
              return value?.[valueKey] ?? value ?? ('' as TValue)
            },
      output:
        typeof transform?.output === 'function'
          ? transform.output
          : (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              let value: string | number = event.target.value
              if (type === 'number' && value) {
                value = Number(value)
              }
              return value as PathValue<TFieldValues, TName>
            },
    },
  })

  const handleInputRef = useForkRef(field.ref, inputRef)

  // handle shrink on number input fields
  if (type === 'number' && typeof value !== 'undefined') {
    rest.InputLabelProps = rest.InputLabelProps || {}
    rest.InputLabelProps.shrink = true
  }

  return (
    <TextField
      {...rest}
      name={name}
      value={value}
      onBlur={(event) => {
        field.onBlur()
        if (typeof onBlur === 'function') {
          onBlur(event)
        }
      }}
      ref={ref}
      onChange={(event) => {
        onChange(event)
        if (typeof rest.onChange === 'function') {
          // It would be better if we expose event object here, instead of value
          // This will be a breaking change for user.
          rest.onChange(event.target.value)
        }
      }}
      select
      required={required}
      error={!!error}
      helperText={
        error
          ? typeof customErrorFn === 'function'
            ? customErrorFn(error)
            : error.message
          : rest.helperText
      }
      inputRef={handleInputRef}
    >
      {isNativeSelect && <option />}
      {options.map((item) => {
        // Need to clearly apply key because of https://github.com/vercel/next.js/issues/55642
        const key = `${name}_${item.value}`
        const optionProps = {
          value: item?.["value"] ?? item,
          disabled: propertyExists(item, 'disabled') ? !!item.disabled : false,
          children: item["value"],
        }

        return isNativeSelect ? (
          <option key={key} {...optionProps} />
        ) : (
          <MenuItem key={key} {...optionProps} />
        )
      })}
    </TextField>
  )
})
SelectElement.displayName = 'SelectElement'
export default SelectElement as SelectElementComponent
