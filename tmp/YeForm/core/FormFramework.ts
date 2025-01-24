import {Effect, Either, ParseResult, Predicate} from "effect"
import type React from "react"
import type {FieldPath} from "react-hook-form"
import * as S from "effect/Schema";

import type * as FormBody from "./FormBody"
import type {Path} from "./Path"

type Values<S extends S.Schema.AnyNoContext> =
  | {
  encoded: S["Encoded"] | ((from: S["Encoded"]) => S["Encoded"])
}
  | { unknown: unknown }

const getValues = <S extends S.Schema.AnyNoContext>(schema: S) =>
  ({
     defaultValues,
     values
   }: {
    values: Values<NoInfer<S>> | undefined
    defaultValues: NoInfer<S>["Encoded"]
  }): S["Encoded"] => {
    if (!values) return defaultValues
    if ("encoded" in values) {
      if (Predicate.isFunction(values.encoded)) {
        return values.encoded(defaultValues)
      }
      return values.encoded

    }
    const encodedSchema = S.encodedSchema(schema)
    const either = S.decodeUnknownEither(encodedSchema, {
      errors: "all"
    })(values.unknown)
    if (Either.isRight(either)) {
      return either.right
    }
    // TODO: use effect log

    console.log(
      "[warning] Provided values are not valid. Falling back on default values",
      ParseResult.ArrayFormatter.formatErrorSync(either.left)
    )
    return defaultValues


  }

export interface FormComponentProps<S extends S.Schema.AnyNoContext> {
  children: React.ReactNode
  onSubmit: (_: {
    decoded: S["Type"]
    encoded: S["Encoded"]
  }) => void | Promise<void>
  onError?: (values: unknown) => void
  /**
   * The validation mode. Default: 'onBlur'
   */
  validationMode?: "onBlur" | "onSubmit" | "onChange"
  /**
   * The values to hydrate the form with, typically loading some values already saved by the user
   */
  initialValues?: Values<S>
  /**
   * The starting point of an empty form
   */
  resetValues?: Values<S>
}

export interface FormComponent<S extends S.Schema.AnyNoContext> extends React.FC<FormComponentProps<S>> {
  /**
   * The form id to synchronize with Submit button
   */
  id: string
}

export type ReactFCWithChildren = React.FC<{
  children: React.ReactNode
}>

export interface FieldControls<
  Field extends FormBody.AnyField = FormBody.AnyField
> {
  watch: () => Field["schema"]["Encoded"]
  reset: () => void
  set: (value: Field["schema"]["Encoded"]) => void
}

export interface ArrayControls<
  Field extends FormBody.AnyArray = FormBody.AnyArray
> extends FieldControls<Field> {
  append: (value?: Field["field"]["schema"]["Encoded"]) => void
  useRemove: () => { remove: () => void }
}

export interface MakeIterable<
  Field extends FormBody.AnyIterable = FormBody.AnyIterable
> extends ReactFCWithChildren {
  Fields: ReactFCWithChildren
  useControls: () => Field extends FormBody.AnyArray ? ArrayControls<Field>
    : FieldControls<Field>
}

export interface RawControls<Field extends FormBody.AnyRaw = FormBody.AnyRaw> extends FieldControls<Field> {
  usePath: <T extends FieldPath<Field["schema"]["Encoded"]>>(
    path: T
  ) => string
}

export interface MakeRaw<Field extends FormBody.AnyRaw = FormBody.AnyRaw> extends ReactFCWithChildren {
  useControls: () => RawControls<Field>
}

export interface MakeMapKey<S extends S.Schema.AnyNoContext> {
  Key: React.FC
  useKey: () => S["Encoded"]
}

export type Button = React.FC<
  {
    type?: "submit" | "reset" | "button"
    form?: string
    variant?: string
    loading?: boolean
    children?: React.ReactNode
    onClick?: React.MouseEventHandler
  }
>

export interface IFormFramework {
  registerUncontrolled: <A extends { error?: React.ReactNode }>(component: React.FC<A>, path: Path) => React.FC<A>
  registerControlled: <A extends { error?: React.ReactNode }>(component: React.FC<A>, path: Path) => React.FC<A>

  makeFieldControls: (path: Path) => {
    useControls: () => FieldControls
  }

  makeIterable: (
    defaultValue: unknown,
    path: Path
  ) => MakeIterable<FormBody.AnyArray>

  makeMapKey: <S extends S.Schema.AnyNoContext>(
    schema: S,
    path: Path
  ) => MakeMapKey<S>

  makeRaw: (path: Path) => MakeRaw

  makeForm: <S extends S.Schema.AnyNoContext>(_: {
    schema: S
    resetValues: S["Encoded"]
  }) => FormComponent<S>

  makeSubmit: (formId: string) => Button

  useError: <T = unknown>(path: Path) => T

  Clear: Button
}

export class FormFramework extends Effect.Tag("@ye/Form/FormFramework")<
  FormFramework,
  IFormFramework
>() {
  static getValues = getValues
}
