import * as A from "effect/Array";
import * as S from "effect/Schema";
import { define } from "../Builder";
import * as Primitives from "../Primitives";
import { SimpleDate } from "../Schema/formats/date";
import { invariant } from "../invariant";

export const BasePropSchema = S.Struct({
  name: S.NonEmptyTrimmedString,
  label: S.NonEmptyString,
});

const SelectOptions = S.mutable(
  S.Array(
    S.Struct({
      id: S.NonEmptyString,
      label: S.NonEmptyString,
    }),
  ),
);
export type SelectOptions = typeof SelectOptions.Type;

export type SelectOption = (typeof SelectOptions.Type)[number];

const SelectPropSchemaBase = S.Struct({
  ...BasePropSchema.fields,
  options: SelectOptions,
});

/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: TextField
 *--------------------------------------------------------------------------------------------------------------------*/
export namespace TextField {
  export const TypeId = Symbol.for("@e2/moses/Mission/FormField/TextField");
  export type TypeId = typeof TypeId;

  const PropSchemaBase = S.Struct({
    ...BasePropSchema.fields,
  });

  const WithScannerPropSchema = S.Struct({
    ...PropSchemaBase.fields,
    withScanner: S.Boolean,
  });
  type WithScannerProps = typeof WithScannerPropSchema.Type & {
    onClickScan: () => void;
  };

  export const PropSchema = S.Union(PropSchemaBase, WithScannerPropSchema);
  export type PropSchema = typeof PropSchema.Type;

  export type Props = typeof PropSchemaBase.Type | WithScannerProps;
  export const Schema = S.TaggedStruct("TextField", {
    props: PropSchema,
  });
  export type Type = typeof Schema.Type;

  export const make = <TProps extends PropSchema>(props: TProps) => ({
    ...Schema.make({ props }),
    schema: Primitives.Str(
      S.decodeSync(Primitives.BaseAnnotationsFromProps)({ props }),
    ),
  });

  export const builder = define(Schema);
}
/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: AutocompleteField
 *--------------------------------------------------------------------------------------------------------------------*/
export namespace AutocompleteField {
  export const TypeId = Symbol.for(
    "@e2/moses/Mission/FormField/AutocompleteField",
  );
  export type TypeId = typeof TypeId;

  export const PropSchema = S.Struct({
    ...SelectPropSchemaBase.fields,
  });
  export type PropSchema = typeof PropSchema.Type;
  export type Props = typeof PropSchema.Type;
  export const Schema = S.TaggedStruct("AutocompleteField", {
    props: PropSchema,
  });
  export type Type = typeof Schema.Type;

  export const make = <
    const TOptIds extends string,
    const TOptions extends readonly [
      { id: TOptIds; label: string },
      ...{ id: TOptIds; label: string }[],
    ],
    const TProps extends Omit<PropSchema, "options"> & { options: TOptions },
  >({
    options,
    ...rest
  }: TProps) => {
    invariant(!!options.length);

    const ops = options.map((o) => o.id);

    invariant(A.isNonEmptyArray(ops));

    return {
      ...Schema.make({
        props: {
          ...rest,
          options: options as unknown as SelectOptions,
        },
      }),
      schema: S.Literal(...ops),
    };
  };

  export const builder = define(Schema);
}

/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: NumberField
 *--------------------------------------------------------------------------------------------------------------------*/
export namespace NumberField {
  export const TypeId = Symbol.for("@e2/moses/Mission/FormField/NumberField");
  export type TypeId = typeof TypeId;

  export const PropSchema = S.Struct({
    ...BasePropSchema.fields,
  });
  export type PropSchema = typeof PropSchema.Type;
  export type Props = typeof PropSchema.Type;
  export const Schema = S.TaggedStruct("NumberField", { props: PropSchema });
  export type Type = typeof Schema.Type;

  export const make = <TProps extends PropSchema>(props: TProps) => ({
    ...Schema.make({ props }),
    schema: Primitives.Num(
      S.decodeSync(Primitives.BaseAnnotationsFromProps)({ props }),
    ),
  });

  export const builder = define(Schema);
}
/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: CheckboxField
 *--------------------------------------------------------------------------------------------------------------------*/
export namespace CheckboxField {
  export const TypeId = Symbol.for("@e2/moses/Mission/FormField/CheckboxField");
  export type TypeId = typeof TypeId;

  const PropSchema = S.Struct({
    ...BasePropSchema.fields,
  });
  export type PropSchema = typeof PropSchema.Type;
  export type Props = typeof PropSchema.Type;
  export const Schema = S.TaggedStruct("CheckboxField", { props: PropSchema });
  export type Type = typeof Schema.Type;

  export const make = <TProps extends PropSchema>(props: TProps) => ({
    ...Schema.make({ props }),
    schema: Primitives.Bool(
      S.decodeSync(Primitives.BaseAnnotationsFromProps)({ props }),
    ),
  });

  export const builder = define(Schema);
}
/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: DatePickerField
 *--------------------------------------------------------------------------------------------------------------------*/
export namespace DatePickerField {
  export const TypeId = Symbol.for(
    "@e2/moses/Mission/FormField/DatePickerField",
  );
  export type TypeId = typeof TypeId;

  const PropSchema = S.Struct({
    ...BasePropSchema.fields,
  });
  export type PropSchema = typeof PropSchema.Type;
  export type Props = typeof PropSchema.Type;
  export const Schema = S.TaggedStruct("DatePickerField", {
    props: PropSchema,
  });
  export type Type = typeof Schema.Type;

  export const make = <TProps extends PropSchema>(props: TProps) => ({
    ...Schema.make({ props }),
    schema: SimpleDate,
  });

  export const builder = define(Schema);
}
/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: MultiSelectField
 *--------------------------------------------------------------------------------------------------------------------*/
export namespace MultiSelectField {
  export const TypeId = Symbol.for(
    "@e2/moses/Mission/FormField/MultiSelectField",
  );
  export type TypeId = typeof TypeId;

  const PropSchema = S.Struct({
    ...SelectPropSchemaBase.fields,
  });
  export type PropSchema = typeof PropSchema.Type;
  export type Props = typeof PropSchema.Type;
  export const Schema = S.TaggedStruct("MultiSelectField", {
    props: PropSchema,
  });
  export type Type = typeof Schema.Type;

  export const make = <
    const TOptIds extends string,
    const TOptions extends readonly [
      { id: TOptIds; label: string },
      ...{ id: TOptIds; label: string }[],
    ],
    const TProps extends Omit<PropSchema, "options"> & { options: TOptions },
  >({
    options,
    ...rest
  }: TProps) => {
    invariant(!!options.length);

    const ops = options.map((o) => o.id);

    invariant(A.isNonEmptyArray(ops));

    return {
      ...Schema.make({
        props: {
          ...rest,
          options: options as unknown as SelectOptions,
        },
      }),
      schema: S.Array(S.Literal(...ops)),
    };
  };

  export const builder = define(Schema);
}
/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: SelectField
 *--------------------------------------------------------------------------------------------------------------------*/
export namespace SelectField {
  export const TypeId = Symbol.for("@e2/moses/Mission/FormField/SelectField");
  export type TypeId = typeof TypeId;

  const PropSchema = S.Struct({
    ...SelectPropSchemaBase.fields,
  });
  export type PropSchema = typeof PropSchema.Type;
  export type Props = typeof PropSchema.Type;
  export const Schema = S.TaggedStruct("SelectField", { props: PropSchema });
  export type Type = typeof Schema.Type;

  export const make = <
    const TOptIds extends string,
    const TOptions extends readonly [
      { id: TOptIds; label: string },
      ...{ id: TOptIds; label: string }[],
    ],
    const TProps extends Omit<PropSchema, "options"> & { options: TOptions },
  >({
    options,
    ...rest
  }: TProps) => {
    invariant(!!options.length);

    const ops = options.map((o) => o.id);

    invariant(A.isNonEmptyArray(ops));

    return {
      ...Schema.make({
        props: {
          ...rest,
          options: options as unknown as SelectOptions,
        },
      }),
      schema: S.Literal(...ops),
    };
  };

  export const builder = define(Schema);
}
/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: SliderField
 *--------------------------------------------------------------------------------------------------------------------*/
export namespace SliderField {
  export const TypeId = Symbol.for("@e2/moses/Mission/FormField/SliderField");
  export type TypeId = typeof TypeId;

  const PropSchema = S.Struct({
    ...BasePropSchema.fields,
  });
  export type PropSchema = typeof PropSchema.Type;
  export type Props = typeof PropSchema.Type;
  export const Schema = S.TaggedStruct("SliderField", { props: PropSchema });
  export type Type = typeof Schema.Type;

  export const make = <TProps extends PropSchema>(props: TProps) => ({
    ...Schema.make({ props }),
    schema: Primitives.Num(
      S.decodeSync(Primitives.BaseAnnotationsFromProps)({ props }),
    ),
  });

  export const builder = define(Schema);
}
/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: SwitchField
 *--------------------------------------------------------------------------------------------------------------------*/
export namespace SwitchField {
  export const TypeId = Symbol.for("@e2/moses/Mission/FormField/SwitchField");
  export type TypeId = typeof TypeId;

  const PropSchema = S.Struct({
    ...BasePropSchema.fields,
  });
  export type PropSchema = typeof PropSchema.Type;
  export type Props = typeof PropSchema.Type;
  export const Schema = S.TaggedStruct("SwitchField", { props: PropSchema });
  export type Type = typeof Schema.Type;

  export const make = <TProps extends PropSchema>(props: TProps) => ({
    ...Schema.make({ props }),
    schema: Primitives.Bool(
      S.decodeSync(Primitives.BaseAnnotationsFromProps)({ props }),
    ),
  });

  export const builder = define(Schema);
}
/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: TextareaField
 *--------------------------------------------------------------------------------------------------------------------*/
export namespace TextareaField {
  export const TypeId = Symbol.for("@e2/moses/Mission/FormField/TextareaField");
  export type TypeId = typeof TypeId;

  const PropSchema = S.Struct({
    ...BasePropSchema.fields,
  });
  export type PropSchema = typeof PropSchema.Type;
  export type Props = typeof PropSchema.Type;
  export const Schema = S.TaggedStruct("TextareaField", { props: PropSchema });
  export type Type = typeof Schema.Type;

  export const make = <TProps extends PropSchema>(props: TProps) => ({
    ...Schema.make({ props }),
    schema: Primitives.Str(
      S.decodeSync(Primitives.BaseAnnotationsFromProps)({ props }),
    ),
  });

  export const builder = define(Schema);
}

/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: FormField
 *--------------------------------------------------------------------------------------------------------------------*/
export namespace FormField {
  export const Schema = S.Union(
    TextField.Schema,
    AutocompleteField.Schema,
    NumberField.Schema,
    CheckboxField.Schema,
    DatePickerField.Schema,
    MultiSelectField.Schema,
    SelectField.Schema,
    SliderField.Schema,
    SwitchField.Schema,
    TextareaField.Schema,
  );
  export type Type = typeof Schema.Type;
}
