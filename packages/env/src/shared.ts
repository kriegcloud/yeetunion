import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets";
import { z } from "zod";

export const sharedEnv = createEnv({
  extends: [vercel()],
  server: {
    VERCEL_ENV: z.enum(["development", "preview", "production"]).optional(),
    VERCEL_URL: z.string().optional(),
  },
  shared: {
    NODE_ENV: z.enum(["development", "test", "production"]).optional(),
    PORT: z.coerce.number().default(3000),
    NEXT_PUBLIC_MAPBOX_API_KEY: z.string().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_MAPBOX_API_KEY: process.env["NEXT_PUBLIC_MAPBOX_API_KEY"],
    NODE_ENV: process.env["NODE_ENV"],
    PORT: 3000,
    VERCEL_ENV: process.env["VERCEL_ENV"],
    VERCEL_URL: process.env["VERCEL_URL"],
  },
});
