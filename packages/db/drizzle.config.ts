import type { Config } from "drizzle-kit";

import { dbEnv } from "@ye/env/db";

export default {
  dialect: "postgresql",
  schema: "./src/schema/index.ts",
  out: "./drizzle",
  dbCredentials: {
    url: dbEnv.DATABASE_URL,
  },
} satisfies Config;
