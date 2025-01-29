import { env  } from "@ye/env/yeetunion/server";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { Effect } from "effect";
import { provideDefault} from "@ye/utils/service";

const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

export const db = globalForDb.conn ?? drizzle(env.DATABASE_URL, { schema });

export const makeDb = Effect.sync(() =>
  drizzle({
    connection: {
      url: env.DATABASE_URL,
    },
    schema: schema,
  }),
);

export class Database extends Effect.Service<Database>()("DB/Sqlite", {
  effect: makeDb,
}) {}

export const provideDB = provideDefault(Database.Default);

export default Database;