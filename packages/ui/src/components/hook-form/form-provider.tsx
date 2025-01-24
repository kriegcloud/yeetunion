"use client";
import type { UseFormReturn } from 'react-hook-form';

import { FormProvider as RHFForm } from 'react-hook-form';
import type { ReactNode } from 'react';
// ----------------------------------------------------------------------

export type FormProps = {
  onSubmit?: () => void;
  children: ReactNode;
  methods: UseFormReturn<any>;
};

export function Form({ children, onSubmit, methods }: FormProps) {
  return (
    <RHFForm {...methods}>
      <form onSubmit={onSubmit} noValidate autoComplete="off">
        {children}
      </form>
    </RHFForm>
  );
}
