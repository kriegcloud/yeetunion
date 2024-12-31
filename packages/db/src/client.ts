import * as S from "@effect/schema/Schema";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import {Effect} from "effect";
import type {ConfigError} from "effect/ConfigError";
import * as schema from "./schema";

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
    try: () => sql,
    catch: (e) =>
      new DbAcquisitionError({
        message: `Database client creation error: ${e}`,
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

export const upsertSession = Effect.gen(function* () {
  const { db } = yield* Db;

  const existingSession = yield* db.use({
    fn: async (client) => {
      return await client.query.Session.findFirst({
        where: (session, { eq, and }) =>
          and(
            eq(session.sessionToken, "beep"),
          ),
      });
    },
    spanName: "getSession",
  });

  if (existingSession) {
    return existingSession;
  }

  return yield * db.use({
    fn: async (client) => {
      return await client.transaction(async (tx) => {
        const sessions = await tx
          .insert(schema.Session)
          .values({
            userId: "beep",
            sessionToken: crypto.randomUUID(),
            expires: new Date(),
          })
          .returning({id: schema.Session.sessionToken});
        if (sessions.length !== 1) {
          throw new Error(
            `Expected to insert exactly one session, but got ${sessions.length}`,
          );
        }
        return sessions[0];
      });
    },
    spanName: "newAuthAccount",
  });
})


export const dontUseMeDBClientAuthAdapterOnly = drizzle({
  client: sql,
  schema,
  casing: "snake_case",
});

