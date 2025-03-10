import * as R from "effect/Record";
import * as S from "effect/Schema";
import { JsonSchemaType } from "../Schema/AST/json-schema-type";
import { toJsonSchema } from "../Schema/JSON/json-schema";
import { FormField } from "./FormField";

export namespace Form {
  export const Schema = S.Struct({
    fields: S.Record({ key: S.NonEmptyTrimmedString, value: FormField.Schema }),
  });

  export type Type = typeof Schema.Type;

  export const make = <
    TFields extends R.ReadonlyRecord<
      string,
      {
        props: FormField.Type["props"];
        fields: FormField.Type;
        schema: S.Schema<any>;
      }
    >,
  >(
    fields: TFields,
  ) => {
    const fieldSchemas = R.fromEntries(
      R.toEntries(fields).map(([k, v]) => [k, v.schema]),
    );

    const jsonSchema = toJsonSchema(S.Struct(fieldSchemas));
    return {
      jsonSchema, // Effect-TS Schema for validation
      fields,
    } as const;
  };
}
