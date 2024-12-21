import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

import { sharedEnv } from "../shared";
import { env as dbEnv } from "./db";

export const env = createEnv({
  extends: [sharedEnv, dbEnv],
  shared: {
    PORT: z.coerce.number().default(3000),
  },
  server: {
    AUTH_GITHUB_ID: z.string().optional(),
    AUTH_GITHUB_SECRET: z.string().optional(),
  },
  experimental__runtimeEnv: {
    PORT: process.env["PORT"],
  },
  emptyStringAsUndefined: true,
  skipValidation: !!process.env["SKIP_ENV_VALIDATION"],
});
