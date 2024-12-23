import type { Config } from "drizzle-kit";

import { env } from "@ye/env/web/db";

export default {
  dialect: "postgresql",
  schema: "./src/schema/index.ts",
  out: "./drizzle",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config;
