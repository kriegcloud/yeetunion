import {
  type PropsWithChildren,
  type ReactNode,
  createContext,
  useContext,
} from "react";
import React from "react";
import type { FieldError } from "react-hook-form";
export type FormErrorProviderProps = {
  onError: (error: FieldError) => ReactNode;
};

const FormErrorProviderContext = createContext<FormErrorProviderProps>({
  onError: (error) => error?.message,
});

export function FormErrorProvider({
  onError,
  children,
}: PropsWithChildren<FormErrorProviderProps>) {
  return (
    <FormErrorProviderContext.Provider value={{ onError }}>
      {children}
    </FormErrorProviderContext.Provider>
  );
}

export const useFormError = () => {
  const errorCtx = useContext<FormErrorProviderProps>(FormErrorProviderContext);
  return errorCtx?.onError;
};
