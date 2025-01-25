/**
 * @since 0.1.0
 * @category YeForm
 */
import type { Types } from "effect"
import { Predicate, Tuple } from "effect"
import * as S from "effect/Schema";
import type * as FormField from "./FormField.js"
/**
 * @since 0.1.0
 * @category YeForm
 */
type FormSchemaFields<Fields extends AnyFields> = Types.Simplify<
  {
    [key in keyof Fields]: Fields[key] extends Any ? FormSchema<Fields[key]["fields"]>
      : Fields[key]["schema"]
  }
>
/**
 * @since 0.1.0
 * @category YeForm
 */
type FormSchemaStruct<T> = T extends S.Struct.Fields ? S.Struct<T>
  : never
/**
 * @since 0.1.0
 * @category YeForm
 */
type FormSchema<Fields extends AnyFields> = FormSchemaStruct<
  FormSchemaFields<Fields>
>
/**
 * @since 0.1.0
 * @category YeForm
 */
export const FormStructTypeId = Symbol.for("@ye/form/FormBody/FormStruct")
/**
 * @since 0.1.0
 * @category YeForm
 */
export type FormStructTypeId = typeof FormStructTypeId
/**
 * @since 0.1.0
 * @category YeForm
 */
export const isFormStruct = (
  value: unknown
): value is FormStruct<AnyFields> => Predicate.hasProperty(value, FormStructTypeId)
/**
 * @since 0.1.0
 * @category YeForm
 */
interface FormStruct<Fields extends AnyFields> {
  [FormStructTypeId]: FormStructTypeId
  fields: Fields
  schema: FormSchema<Fields>
  defaultValue: FormSchema<Fields>["Encoded"]
}
/**
 * @since 0.1.0
 * @category YeForm
 */
export const FormArrayTypeId = Symbol.for("@ye/form/FormBody/FormArray")
/**
 * @since 0.1.0
 * @category YeForm
 */
export type FormArrayTypeId = typeof FormArrayTypeId
/**
 * @since 0.1.0
 * @category YeForm
 */
export const isFormArray = (value: unknown): value is AnyArray => Predicate.hasProperty(value, FormArrayTypeId)
/**
 * @since 0.1.0
 * @category YeForm
 */
interface FormArray<Field extends AnyNonIterableField> {
  [FormArrayTypeId]: FormArrayTypeId
  field: Field
  schema: S.Array$<Field["schema"]>
  defaultValue: FormArray<Field>["schema"]["Encoded"]
}
/**
 * @since 0.1.0
 * @category YeForm
 */
export const FormMapTypeId = Symbol.for("@ye/form/FormBody/FormMap")
/**
 * @since 0.1.0
 * @category YeForm
 */
export type FormMapTypeId = typeof FormMapTypeId
/**
 * @since 0.1.0
 * @category YeForm
 */
export const isFormMap = (value: unknown): value is AnyMap => Predicate.hasProperty(value, FormMapTypeId)
/**
 * @since 0.1.0
 * @category YeForm
 */
interface FormMap<
  Key extends S.Schema.AnyNoContext,
  Field extends AnyNonIterableField
> {
  [FormMapTypeId]: FormMapTypeId
  field: Field
  keySchema: Key
  schema: S.HashMap<Key, Field["schema"]>
  defaultValue: FormMap<Key, Field>["schema"]["Encoded"]
  defaultValueFor: (
    keys: ReadonlyArray<Key["Encoded"]>
  ) => FormMap<Key, Field>["defaultValue"]
}
/**
 * @since 0.1.0
 * @category YeForm
 */
export const FormRawTypeId = Symbol.for("@ye/form/FormBody/FormRaw")
/**
 * @since 0.1.0
 * @category YeForm
 */
export type FormRawTypeId = typeof FormRawTypeId
/**
 * @since 0.1.0
 * @category YeForm
 */
export const isFormRaw = (value: unknown): value is AnyRaw => Predicate.hasProperty(value, FormRawTypeId)
/**
 * @since 0.1.0
 * @category YeForm
 */
interface FormRaw<S extends S.Schema.AnyNoContext> {
  [FormRawTypeId]: FormRawTypeId
  schema: S
  defaultValue: S["Encoded"]
}
/**
 * @since 0.1.0
 * @category YeForm
 */
const makeStructSchema = <Fields extends AnyFields>(
  fields: Fields
): {
  schema: FormSchema<Fields>
  defaultValue: FormSchema<Fields>["Encoded"]
} => {
  const schemaFields: Types.Mutable<S.Struct.Fields> = {}
  const defaultValue: Record<string, unknown> = {}
  for (const [key, field] of Object.entries(fields)) {
    schemaFields[key] = field.schema
    if ("matchDefaultValue" in field) {
      field.matchDefaultValue({
        withDefaultValue: (value) => {
          defaultValue[key] = value
        }
      })
    } else {
      defaultValue[key] = field.defaultValue
    }
  }
  // @ts-expect-error "structSchema is indeed of type FormSchema<Fields>"
  const structSchema: FormSchema<Fields> = S.Struct(schemaFields)
  return { schema: structSchema, defaultValue }
}
/**
 * @since 0.1.0
 * @category YeForm
 */
export const struct = <Fields extends AnyFields>(
  fields: Fields
): FormStruct<Fields> => {
  const { defaultValue, schema } = makeStructSchema(fields)
  return { [FormStructTypeId]: FormStructTypeId, fields, schema, defaultValue }
}
/**
 * @since 0.1.0
 * @category YeForm
 */
export const array = <Field extends AnyNonIterableField>(
  field: Field
): FormArray<Field> => {
  return {
    [FormArrayTypeId]: FormArrayTypeId,
    field,
    schema: S.Array(field.schema),
    defaultValue: []
  }
}
/**
 * @since 0.1.0
 * @category YeForm
 */
export const map = <A, I, Field extends AnyNonIterableField>({
  field,
  key
}: {
  key: S.Schema<A, I>
  field: Field
}): FormMap<S.Schema<A, I>, Field> => {
  return {
    [FormMapTypeId]: FormMapTypeId,
    field,
    keySchema: key,
    schema: S.HashMap({ key, value: field.schema }),
    defaultValue: [],
    defaultValueFor(keys) {
      const defaultValue: typeof field.schema.Encoded = "getDefaultValue" in field
        ? field.getDefaultValue()
        : field.defaultValue
      return keys.map((key) => Tuple.make(key, defaultValue))
    }
  }
}
/**
 * @since 0.1.0
 * @category YeForm
 */
export const raw = <S extends S.Schema.AnyNoContext>({
  defaultValue,
  schema
}: {
  schema: S
  defaultValue: S["Encoded"]
}): FormRaw<S> => {
  return {
    [FormRawTypeId]: FormRawTypeId,
    schema,
    defaultValue
  }
}
/**
 * @since 0.1.0
 * @category YeForm
 */
export type AnyNonIterableField = Any | FormField.Any
/**
 * @since 0.1.0
 * @category YeForm
 */
export type AnyArray = FormArray<AnyNonIterableField>
/**
 * @since 0.1.0
 * @category YeForm
 */
export type AnyMap = FormMap<S.Schema.AnyNoContext, AnyNonIterableField>
/**
 * @since 0.1.0
 * @category YeForm
 */
export type AnyRaw = FormRaw<S.Schema.AnyNoContext>
/**
 * @since 0.1.0
 * @category YeForm
 */
export type AnyIterable =
  | FormArray<AnyNonIterableField>
  | FormMap<S.Schema.AnyNoContext, AnyNonIterableField>
/**
 * @since 0.1.0
 * @category YeForm
 */
export type AnyField = AnyNonIterableField | AnyIterable | AnyRaw
/**
 * @since 0.1.0
 * @category YeForm
 */
export type AnyFields = Record<string, AnyField>
/**
 * @since 0.1.0
 * @category YeForm
 */
export type Any = FormStruct<AnyFields>
