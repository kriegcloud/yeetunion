import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets";
import { z } from "zod";

export const sharedEnv = createEnv({
  extends: [vercel()],
  shared: {
    NODE_ENV: z.enum(["development", "test", "production"]).optional(),
    PORT: z.coerce.number().default(3000),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: 3000,
  },
});
