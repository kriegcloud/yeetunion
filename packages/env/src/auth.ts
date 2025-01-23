import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import { sharedEnv } from "./shared";
export const authEnv = createEnv({
  extends: [sharedEnv],
  server: {
    BETTER_AUTH_EMAIL: z.string().email(),
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
    TEST_EMAIL: z.string().email(),
  },
  experimental__runtimeEnv: {},
  emptyStringAsUndefined: true,
  skipValidation: !!process.env["SKIP_ENV_VALIDATION"],
});
