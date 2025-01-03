import { dbEnv } from "@ye/env/db";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

export const db = globalForDb.conn ?? drizzle(dbEnv.DATABASE_URL, { schema });
