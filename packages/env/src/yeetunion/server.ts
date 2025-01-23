import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

import { dbEnv } from "../db";
import { sharedEnv } from "../shared";
import { authEnv } from "../auth";


export const env = createEnv({
  extends: [sharedEnv, dbEnv, authEnv],
  shared: {
    PORT: z.coerce.number().default(3000),
  },
  server: {
    DATABASE_URL: z.string().url().startsWith("postgres"),
    BETTER_AUTH_SECRET: z.string().min(32),
    BETTER_AUTH_URL: z.string().url(),
    DISCORD_CLIENT_ID: z.string(),
    DISCORD_CLIENT_SECRET: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    X_CLIENT_ID: z.string(),
    X_CLIENT_SECRET: z.string(),
    LINKEDIN_CLIENT_ID: z.string(),
    LINKEDIN_CLIENT_SECRET: z.string(),
    RESEND_API_KEY: z.string(),
    RESEND_FROM: z.string().email(),
    RESEND_TO: z.string().email(),
  },
  experimental__runtimeEnv: {
    PORT: process.env["PORT"],
  },
  emptyStringAsUndefined: true,
  skipValidation: !!process.env["SKIP_ENV_VALIDATION"],
});
