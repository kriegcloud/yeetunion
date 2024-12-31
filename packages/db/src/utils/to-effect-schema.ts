import * as S from "@effect/schema/Schema";
import * as Drizzle from "drizzle-orm";
import * as DrizzleMysql from "drizzle-orm/mysql-core";
import * as DrizzlePg from "drizzle-orm/pg-core";
import * as DrizzleSqlite from "drizzle-orm/sqlite-core";

type Columns<TTable extends Drizzle.Table> =
  TTable["_"]["columns"] extends infer TColumns extends Record<
    string,
    Drizzle.Column<any>
  >
    ? TColumns
    : never;

type PropertySignatureEncoded<T> = T extends S.PropertySignature<
  any,
  any,
  any,
  any,
  infer From,
  any,
  any
>
  ? From
  : never;

type PropertySignatureType<T> = T extends S.PropertySignature<
  any,
  infer To,
  any,
  any,
  any,
  any,
  any
>
  ? To
  : never;

type InsertRefineArg<
  TTable extends Drizzle.Table,
  Col extends keyof Columns<TTable>,
> =
  | S.Schema<any, any, any>
  | ((
      s: {
        [S in keyof InsertColumnPropertySignatures<TTable>]: InsertColumnPropertySignatures<TTable>[S] extends S.PropertySignature<
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
          ? S.Schema<
              Exclude<
                PropertySignatureEncoded<
                  InsertColumnPropertySignatures<TTable>[S]
                >,
                undefined | null
              >,
              Exclude<
                PropertySignatureType<
                  InsertColumnPropertySignatures<TTable>[S]
                >,
                undefined | null
              >
            >
          : InsertColumnPropertySignatures<TTable>[S];
      },
    ) => InsertColumnPropertySignatures<TTable>[Col] extends S.PropertySignature<
      any,
      any,
      any,
      any,
      any,
      any,
      any
    >
      ? S.Schema<
          Exclude<
            PropertySignatureEncoded<
              InsertColumnPropertySignatures<TTable>[Col]
            >,
            undefined | null
          >,
          any
        >
      : S.Schema<
          Exclude<
            S.Schema.Encoded<InsertColumnPropertySignatures<TTable>[Col]>,
            undefined | null
          >,
          any
        >);

type SelectRefineArg<
  TTable extends Drizzle.Table,
  Col extends keyof Columns<TTable>,
> =
  | S.Schema<any, any, any>
  | ((
      s: {
        [S in keyof InsertColumnPropertySignatures<TTable>]: InsertColumnPropertySignatures<TTable>[S] extends S.PropertySignature<
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
          ? S.Schema<
              Exclude<
                PropertySignatureEncoded<
                  InsertColumnPropertySignatures<TTable>[S]
                >,
                undefined | null
              >,
              Exclude<
                PropertySignatureType<
                  InsertColumnPropertySignatures<TTable>[S]
                >,
                undefined | null
              >
            >
          : InsertColumnPropertySignatures<TTable>[S];
      },
    ) => InsertColumnPropertySignatures<TTable>[Col] extends S.PropertySignature<
      any,
      any,
      any,
      any,
      any,
      any,
      any
    >
      ? S.Schema<
          Exclude<
            PropertySignatureEncoded<
              InsertColumnPropertySignatures<TTable>[Col]
            >,
            undefined | null
          >,
          any
        >
      : S.Schema<
          Exclude<
            S.Schema.Encoded<InsertColumnPropertySignatures<TTable>[Col]>,
            undefined | null
          >,
          any
        >);

type InsertRefine<TTable extends Drizzle.Table> = {
  [K in keyof Columns<TTable>]?: InsertRefineArg<TTable, K>;
};

type SelectRefine<TTable extends Drizzle.Table> = {
  [K in keyof Columns<TTable>]?: SelectRefineArg<TTable, K>;
};

const literalSchema = S.Union(S.String, S.Number, S.Boolean, S.Null);

type Json =
  | string
  | number
  | boolean
  | {
      [key: string]: Json;
    }
  | Json[]
  | readonly Json[]
  | null;

export const Json = S.suspend(
  (): S.Schema<Json> =>
    S.Union(
      literalSchema,
      S.Array(Json),
      S.Record({ key: S.String, value: Json }),
    ),
);

type GetSchemaForType<TColumn extends Drizzle.Column> =
  TColumn["_"]["dataType"] extends infer TDataType
    ? TDataType extends "custom"
      ? S.Schema<any>
      : TDataType extends "json"
        ? S.Schema<Json>
        : TColumn extends { enumValues: [string, ...string[]] }
          ? Drizzle.Equal<
              TColumn["enumValues"],
              [string, ...string[]]
            > extends true
            ? S.Schema<string>
            : S.Schema<TColumn["enumValues"][number]>
          : TDataType extends "array"
            ? S.Schema<
                | null
                | readonly Drizzle.Assume<
                    TColumn["_"],
                    { baseColumn: Drizzle.Column }
                  >["baseColumn"]["_"]["data"][]
              >
            : TDataType extends "bigint"
              ? S.Schema<bigint>
              : TDataType extends "number"
                ? S.Schema<number>
                : TDataType extends "string"
                  ? S.Schema<string>
                  : TDataType extends "boolean"
                    ? S.Schema<boolean>
                    : TDataType extends "date"
                      ? S.Schema<Date>
                      : S.Schema<any>
    : never;

type MapInsertColumnToPropertySignature<TColumn extends Drizzle.Column> =
  TColumn["_"]["notNull"] extends false
    ? S.PropertySignature<
        "?:",
        S.Schema.Type<GetSchemaForType<TColumn>> | undefined | null,
        TColumn["_"]["name"],
        "?:",
        S.Schema.Encoded<GetSchemaForType<TColumn>> | undefined | null,
        false,
        never
      >
    : TColumn["_"]["hasDefault"] extends true
      ? S.PropertySignature<
          "?:",
          S.Schema.Type<GetSchemaForType<TColumn>> | undefined,
          TColumn["_"]["name"],
          "?:",
          S.Schema.Encoded<GetSchemaForType<TColumn>> | undefined,
          true,
          never
        >
      : GetSchemaForType<TColumn>;

type MapSelectColumnToPropertySignature<TColumn extends Drizzle.Column> =
  TColumn["_"]["notNull"] extends false
    ? S.Schema<S.Schema.Type<GetSchemaForType<TColumn>> | null>
    : GetSchemaForType<TColumn>;

type InsertColumnPropertySignatures<TTable extends Drizzle.Table> = {
  [K in keyof Columns<TTable>]: MapInsertColumnToPropertySignature<
    Columns<TTable>[K]
  >;
};

type SelectColumnPropertySignatures<TTable extends Drizzle.Table> = {
  [K in keyof Columns<TTable>]: MapSelectColumnToPropertySignature<
    Columns<TTable>[K]
  >;
};

type PropertySignatureReplaceType<S, ReplaceWith> =
  S extends S.PropertySignature<
    infer TokenType,
    any,
    infer Name,
    infer TokenEncoded,
    infer Encoded,
    infer HasDefault,
    infer R
  >
    ? S.PropertySignature<
        TokenType,
        ReplaceWith,
        Name,
        TokenEncoded,
        Encoded,
        HasDefault,
        R
      >
    : never;

type CarryOverNull<From, To> = null extends From ? To | null : To;
type CarryOverUndefined<From, To> = undefined extends From
  ? To | undefined
  : To;

type CarryOverOptionality<From, To> = CarryOverNull<
  From,
  CarryOverUndefined<From, To>
>;

type BuildInsertSchema<
  TTable extends Drizzle.Table,
  TRefine extends
    | InsertRefine<TTable>
    | NonNullable<unknown> = NonNullable<unknown>,
> = S.Struct<
  InsertColumnPropertySignatures<TTable> & {
    [K in keyof TRefine &
      string]: InsertColumnPropertySignatures<TTable>[K] extends S.PropertySignature<
      any,
      any,
      any,
      any,
      any,
      any
    >
      ? TRefine[K] extends S.Schema<any, any, any>
        ? S.Schema<
            CarryOverOptionality<
              PropertySignatureType<InsertColumnPropertySignatures<TTable>[K]>,
              S.Schema.Type<TRefine[K]>
            >
          >
        : TRefine[K] extends (...a: any[]) => any
          ? PropertySignatureReplaceType<
              InsertColumnPropertySignatures<TTable>[K],
              CarryOverOptionality<
                PropertySignatureType<
                  InsertColumnPropertySignatures<TTable>[K]
                >,
                S.Schema.Type<ReturnType<TRefine[K]>>
              >
            >
          : never
      : TRefine[K];
  }
>;

type BuildSelectSchema<
  TTable extends Drizzle.Table,
  TRefine extends
    | InsertRefine<TTable>
    | NonNullable<unknown> = NonNullable<unknown>,
> = S.Struct<
  {
    [K in keyof SelectColumnPropertySignatures<TTable>]: SelectColumnPropertySignatures<TTable>[K];
  } & {
    [K in keyof TRefine &
      string]: SelectColumnPropertySignatures<TTable>[K] extends S.PropertySignature<
      any,
      any,
      any,
      any,
      any,
      any
    >
      ? TRefine[K] extends S.Schema<any, any, any>
        ? S.Schema<
            CarryOverOptionality<
              PropertySignatureType<SelectColumnPropertySignatures<TTable>[K]>,
              S.Schema.Type<TRefine[K]>
            >
          >
        : TRefine[K] extends (...a: any[]) => any
          ? PropertySignatureReplaceType<
              SelectColumnPropertySignatures<TTable>[K],
              CarryOverOptionality<
                PropertySignatureType<
                  SelectColumnPropertySignatures<TTable>[K]
                >,
                S.Schema.Type<ReturnType<TRefine[K]>>
              >
            >
          : never
      : TRefine[K];
  }
>;

export function createInsertSchema<
  TTable extends Drizzle.Table,
  TRefine extends InsertRefine<TTable>,
>(
  table: TTable,
  refine?: {
    [K in keyof TRefine]: K extends keyof TTable["_"]["columns"]
      ? TRefine[K]
      : Drizzle.DrizzleTypeError<`Column '${K &
          string}' does not exist in table '${TTable["_"]["name"]}'`>;
  },
): BuildInsertSchema<
  TTable,
  Drizzle.Equal<TRefine, InsertRefine<TTable>> extends true
    ? NonNullable<unknown>
    : TRefine
> {
  const columns = Drizzle.getTableColumns(table);
  const columnEntries = Object.entries(columns);

  let schemaEntries = Object.fromEntries(
    columnEntries.map(([name, column]) => {
      return [name, mapColumnToSchema(column)];
    }),
  );

  if (refine) {
    schemaEntries = Object.assign(
      schemaEntries,
      Object.fromEntries(
        Object.entries(refine).map(([name, refineColumn]) => {
          return [
            name,
            typeof refineColumn === "function" && !S.isSchema(refineColumn)
              ? refineColumn(schemaEntries as any)
              : refineColumn,
          ];
        }),
      ),
    );
  }

  for (const [name, column] of columnEntries) {
    if (!column.notNull) {
      schemaEntries[name] = S.optional(
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        S.NullOr(schemaEntries[name]!),
      ) as any;
    } else if (column.hasDefault) {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      schemaEntries[name] = S.optional(schemaEntries[name]!) as any;
    }
  }

  return S.Struct(schemaEntries) as any;
}

export function createSelectSchema<
  TTable extends Drizzle.Table,
  TRefine extends SelectRefine<TTable>,
>(
  table: TTable,
  refine?: {
    [K in keyof TRefine]: K extends keyof TTable["_"]["columns"]
      ? TRefine[K]
      : Drizzle.DrizzleTypeError<`Column '${K &
          string}' does not exist in table '${TTable["_"]["name"]}'`>;
  },
): BuildSelectSchema<
  TTable,
  Drizzle.Equal<TRefine, SelectRefine<TTable>> extends true
    ? NonNullable<unknown>
    : TRefine
> {
  const columns = Drizzle.getTableColumns(table);
  const columnEntries = Object.entries(columns);

  let schemaEntries = Object.fromEntries(
    columnEntries.map(([name, column]) => {
      return [name, mapColumnToSchema(column)];
    }),
  );

  if (refine) {
    schemaEntries = Object.assign(
      schemaEntries,
      Object.fromEntries(
        Object.entries(refine).map(([name, refineColumn]) => {
          return [
            name,
            typeof refineColumn === "function" && !S.isSchema(refineColumn)
              ? refineColumn(schemaEntries as any)
              : refineColumn,
          ];
        }),
      ),
    );
  }

  for (const [name, column] of columnEntries) {
    if (!column.notNull) {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      schemaEntries[name] = S.NullOr(schemaEntries[name]!);
    }
  }

  return S.Struct(schemaEntries) as any;
}

function mapColumnToSchema(column: Drizzle.Column): S.Schema<any, any> {
  let type: S.Schema<any, any> | undefined;

  if (isWithEnum(column)) {
    type = column.enumValues.length
      ? S.Literal(...column.enumValues)
      : S.String;
  }

  if (!type) {
    if (Drizzle.is(column, DrizzlePg.PgUUID)) {
      type = S.UUID;
    } else if (column.dataType === "custom") {
      type = S.Any;
    } else if (column.dataType === "json") {
      type = Json;
    } else if (column.dataType === "array") {
      type = S.Array(
        mapColumnToSchema((column as DrizzlePg.PgArray<any, any>).baseColumn),
      );
    } else if (column.dataType === "number") {
      type = S.Number;
    } else if (column.dataType === "bigint") {
      type = S.BigIntFromSelf;
    } else if (column.dataType === "boolean") {
      type = S.Boolean;
    } else if (column.dataType === "date") {
      type = S.DateFromSelf;
    } else if (column.dataType === "string") {
      let sType = S.String;

      if (
        (Drizzle.is(column, DrizzlePg.PgChar) ||
          Drizzle.is(column, DrizzlePg.PgVarchar) ||
          Drizzle.is(column, DrizzleMysql.MySqlVarChar) ||
          Drizzle.is(column, DrizzleMysql.MySqlVarBinary) ||
          Drizzle.is(column, DrizzleMysql.MySqlChar) ||
          Drizzle.is(column, DrizzleSqlite.SQLiteText)) &&
        typeof column.length === "number"
      ) {
        sType = sType.pipe(S.maxLength(column.length));
      }

      type = sType;
    }
  }

  if (!type) {
    type = S.Any;
  }

  return type;
}

const isWithEnum = (
  column: Drizzle.Column,
): column is typeof column & { enumValues: [string, ...string[]] } =>
  "enumValues" in column &&
  Array.isArray(column.enumValues) &&
  column.enumValues.length > 0;
