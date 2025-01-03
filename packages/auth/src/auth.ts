import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@ye/db/client";
import { authEnv } from "@ye/env/auth";
import { passkey } from "better-auth/plugins/passkey";
import * as schema from "@ye/db/schema";
import {
  admin,
  jwt,
  organization,
  multiSession,
  oAuthProxy,
} from "better-auth/plugins";
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  socialProviders: {
    discord: {
      clientId: authEnv.DISCORD_CLIENT_ID,
      clientSecret: authEnv.DISCORD_CLIENT_SECRET,
    }
  },
  secret: authEnv.BETTER_AUTH_SECRET,
  logger: {
    disabled: authEnv.NODE_ENV === "production",
    level: "debug",
  },
  plugins: [
    multiSession(),
    oAuthProxy(),
    admin(),
    organization(),
    jwt(),
    passkey({
      rpID: "yeetunion.com",
      rpName: "Yeet Union",
    }),
  ],
  advanced: {
    cookiePrefix: "ye",
    crossSubDomainCookies: {
      enabled: true,
    }
  }
});
