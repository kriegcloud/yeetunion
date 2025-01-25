import type {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  PathValue,
  UseControllerProps,
} from 'react-hook-form'
import {useController,} from 'react-hook-form'
import type {
  FormControlLabelProps,
  CheckboxProps,
} from '@mui/material'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  useForkRef,
} from '@mui/material'
import {useFormError} from '../FormErrorProvider.js'
import {forwardRef,} from 'react'
import {useTransform} from '../useTransform.js'
import type {ChangeEvent, ReactNode, Ref, RefAttributes} from 'react'
import React from 'react'

export type CheckboxElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
> = Omit<CheckboxProps, 'name'> & {
  rules?: UseControllerProps<TFieldValues, TName>['rules']
  name?: TName
  parseError?: (error: FieldError) => ReactNode
  label?: FormControlLabelProps['label']
  helperText?: string
  control?: Control<TFieldValues>
  labelProps?: Omit<FormControlLabelProps, 'label' | 'control'>
  transform?: {
    input?: (value: PathValue<TFieldValues, TName>) => TValue
    output?: (
      event: ChangeEvent<HTMLInputElement>,
      value: TValue
    ) => PathValue<TFieldValues, TName>
  }
}

type CheckboxElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
>(
  props: CheckboxElementProps<TFieldValues, TName, TValue> &
    RefAttributes<HTMLDivElement>
) => JSX.Element

const CheckboxElement = forwardRef(function CheckboxElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
>(
  props: CheckboxElementProps<TFieldValues, TName, TValue>,
  ref: Ref<HTMLDivElement>
) {
  const {
    name,
    rules = {},
    required,
    parseError,
    label,
    control,
    helperText,
    labelProps,
    inputRef,
    transform,
    ...rest
  } = props

  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn

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
    control,
    disabled: rest.disabled,
    rules: rulesTmp,
  } as UseControllerProps<TFieldValues, TName>)

  const {value, onChange} = useTransform<TFieldValues, TName, TValue>({
    value: field.value,
    onChange: field.onChange,
    transform: {
      input: transform?.input,
      output:
        typeof transform?.output === 'function'
          ? transform?.output
          : (_event, newValue) => newValue,
    },
  })

  const handleInputRef = useForkRef(field.ref, inputRef)

  const renderHelperText = error
    ? typeof customErrorFn === 'function'
      ? customErrorFn(error)
      : error.message
    : helperText

  return (
    <FormControl component={"div"} required={Boolean(required)} error={!!error} ref={ref}>
      <FormGroup row>
        <FormControlLabel
          {...labelProps}
          label={label || ''}
          control={
            <Checkbox
              {...rest}
              color={rest.color || 'primary'}
              sx={[
                ...(Array.isArray(rest.sx) ? rest.sx : [rest.sx]),
                {
                  color: error ? 'error.main' : undefined,
                },
              ]}
              value={value}
              checked={!!value}
              onChange={(event, newValue) => {
                onChange(event, newValue)
                if (typeof rest.onChange === 'function') {
                  rest.onChange(event, newValue)
                }
              }}
              inputRef={handleInputRef}
            />
          }
        />
      </FormGroup>
      {renderHelperText && (
        <FormHelperText error={!!error}>{renderHelperText}</FormHelperText>
      )}
    </FormControl>
  )
})
CheckboxElement.displayName = 'CheckboxElement'
export default CheckboxElement as CheckboxElementComponent