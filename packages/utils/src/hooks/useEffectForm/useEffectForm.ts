import * as S from "effect/Schema";
import {effectTsResolver} from "./resolver";
import {useId} from "react";
import type {FieldValues, UseFormProps, UseFormReturn} from "react-hook-form";
import {useForm} from "react-hook-form";

export type UseEffectForm<A extends FieldValues> = UseFormReturn<
  S.Schema.Type<S.Schema<A>>
> & {
  id: string;
};

export type UseEffectFormParams<A extends FieldValues> = Omit<
  UseFormProps<S.Schema.Type<S.Schema<A>>>,
  "resolver"
> & {
  schema: S.Schema<A>;
};

export const useEffectForm = <A extends FieldValues>(
  {
    schema,
    ...rest
  }: UseEffectFormParams<A>) => {
  const form = useForm<S.Schema.Type<S.Schema<A>>>({
    ...rest,
    resolver: effectTsResolver(schema),
  }) as UseEffectForm<A>;

  form.id = useId();

  return form;
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type AnyEffectForm = UseEffectForm<any>;
