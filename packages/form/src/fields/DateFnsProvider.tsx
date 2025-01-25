import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFnsV3'
import {
  LocalizationProvider,
} from '@mui/x-date-pickers'
import type {
  LocalizationProviderProps,
  MuiPickersAdapter,
} from '@mui/x-date-pickers'
import React from 'react'

export type DateFnsProviderProps<TDate extends Date> = Omit<
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  LocalizationProviderProps<TDate, any>,
  'dateAdapter'
> & {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  dateAdapter?: new (..._args: any) => MuiPickersAdapter<TDate>
}

export function DateFnsProvider({
                                  children,
                                  ...props
                                }: DateFnsProviderProps<Date>) {
  const {dateAdapter, ...localizationProps} = props
  return (
    <LocalizationProvider
      dateAdapter={dateAdapter || AdapterDateFns}
      {...localizationProps}
    >
      {children}
    </LocalizationProvider>
  )
}

