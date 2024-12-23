import { drizzle } from "drizzle-orm/postgres-js";
import { Effect } from "effect";
import type { ConfigError } from "effect/ConfigError";
import postgres from "postgres";
import * as authAccount from "./schema/auth-account";
import * as authAccountOrgRole from "./schema/auth-account-org-role";
import * as org from "./schema/org";
import * as orgRole from "./schema/org-role";
import * as session from "./schema/session";
import * as user from "./schema/user";
import { env } from "@dank/env/web/db";
import * as S from "@effect/schema/Schema";
import * as userToAuthAccount from "./schema/user-to-auth-account";

const schema = {
  ...authAccountOrgRole,
  ...authAccount,
  ...session,
  ...org,
  ...orgRole,
  ...user,
  ...userToAuthAccount,
};

export class DbAcquisitionError extends S.TaggedError<DbAcquisitionError>()(
  "DbAcquisitionError",
  {
    message: S.String,
    rawError: S.Unknown,
    stringifiedError: S.String,
  },
) {}
export class DbUsageError extends S.TaggedError<DbUsageError>()(
  "DbUsageError",
  {
    message: S.String,
    rawError: S.Unknown,
    stringifiedError: S.String,
  },
) {}

export type DbError = DbAcquisitionError | DbUsageError | ConfigError;

export const acquireDb = Effect.gen(function* () {
  const client = yield* Effect.try({
    try: () =>
      postgres(env.DATABASE_URL),
    catch: (e) =>
      new DbAcquisitionError({
        message: `Database SQLite client creation error: ${e}`,
        rawError: e,
        stringifiedError: JSON.stringify(e),
      }),
  });

  const drizzleClient = yield* Effect.try({
    try: () =>
      drizzle({
        client,
        schema,
        casing: "snake_case",
      }),
    catch: (e) =>
      new DbAcquisitionError({
        message: `Drizzle client creation error: ${e}`,
        rawError: e,
        stringifiedError: JSON.stringify(e),
      }),
  });
  const db = {
    use: <A>({
      fn,
      spanName,
    }: {
      spanName: string;
      fn: (arg: typeof drizzleClient) => Promise<A>;
    }) => {
      return Effect.tryPromise({
        try: () => fn(drizzleClient),
        catch: (e) => {
          console.error(e);
          return new DbUsageError({
            message: `Database encountered an error: ${e}`,
            rawError: e,
            stringifiedError: JSON.stringify(e),
          });
        },
      }).pipe(Effect.withSpan(`Db.${spanName}`));
    },
  };
  return { db, client };
}).pipe(Effect.withSpan("Db.acquireDb"));

export const Db = Effect.acquireRelease(acquireDb, ({ client }) =>
  Effect.sync(() => client.end()).pipe(Effect.withSpan("Db.releaseDb")),
);
