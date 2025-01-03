import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

import { dbEnv } from "../db";
import { sharedEnv } from "../shared";

export const env = createEnv({
  extends: [sharedEnv, dbEnv],
  shared: {
    PORT: z.coerce.number().default(3000),
  },
  server: {
    BETTER_AUTH_SECRET: z.string().min(32),
  },
  experimental__runtimeEnv: {
    PORT: process.env["PORT"],
  },
  emptyStringAsUndefined: true,
  skipValidation: !!process.env["SKIP_ENV_VALIDATION"],
});
