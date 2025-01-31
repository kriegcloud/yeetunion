// import type { PgTableWithColumns } from "drizzle-orm/pg-core";
// import type { TableConfig } from "drizzle-orm/table";
import { db } from "#/client"
// import { head, isArray } from "effect/Array";
import type { UnknownException } from "effect/Cause";
// import { isNullable, isNumber, isRecord, isString } from "effect/Predicate";
import {
  Config,
  Context,
  Effect
} from "effect";
// import { TaggedError } from "effect/Data";
const EmptyPrimitives = Object.freeze({
  Array: [],
  Object: {
    __proto_: {
      type: "EmptyObject",
    },
  },
});

export const safeArray = <T>(a?: Array<T>): Array<T | never> =>
  Array.isArray(a) ? a : EmptyPrimitives.Array;

export class DatabaseClient extends Context.Tag("Database")<
  DatabaseClient,
  typeof db
>() {}

type QueryErrors = UnknownException | Error;

export interface Countable {
  count(
    attributes?: Record<string, unknown>,
  ): Effect.Effect<number, QueryErrors, DatabaseClient>;
}

export type RepoModelIdType = string | number;

