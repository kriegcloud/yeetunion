import { db } from "@ye/db/client";
import * as schema from "@ye/db/schema";
import {
  reactInvitationEmail,
  reactResetPasswordEmail,
} from "@ye/email/components";
import { resend } from "@ye/email/resend";
import { env } from "@ye/env/yeetunion/server";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import {
  admin,
  bearer,
  jwt,
  multiSession,
  oAuthProxy,
  oidcProvider,
  oneTap,
  openAPI,
  organization,
  twoFactor,
} from "better-auth/plugins";
import { passkey } from "better-auth/plugins/passkey";

const SUPPORTED_PROVIDERS = [
  "discord",
  "twitter",
  "google",
  "linkedin",
] as const;
type SupportedProvider = (typeof SUPPORTED_PROVIDERS)[number];

export const ProviderSecrets = {
  discord: {
    clientId: "DISCORD_CLIENT_ID",
    clientSecret: "DISCORD_CLIENT_SECRET",
  },
  twitter: {
    clientId: "X_CLIENT_ID",
    clientSecret: "X_CLIENT_SECRET",
  },
  google: {
    clientId: "GOOGLE_CLIENT_ID",
    clientSecret: "GOOGLE_CLIENT_SECRET",
  },
  linkedin: {
    clientId: "LINKEDIN_CLIENT_ID",
    clientSecret: "LINKEDIN_CLIENT_SECRET",
  },
} as const;

const SupportedProviders = SUPPORTED_PROVIDERS.map((provider) => {
  if (
    env[ProviderSecrets[provider].clientId] &&
    env[ProviderSecrets[provider].clientSecret]
  ) {
    return {
      [provider]: {
        clientId: env[ProviderSecrets[provider].clientId],
        clientSecret: env[ProviderSecrets[provider].clientSecret],
      },
    };
  }
  return undefined;
}).reduce((acc, curr) => {
  if (curr) {
    return { ...acc, ...curr };
  }
  return acc;
});

export const auth = betterAuth({
  appName: "Yeet Union",
  session: {
    freshAge: 0,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      const res = await resend.emails.send({
        from: env.BETTER_AUTH_EMAIL,
        to: env.NODE_ENV === "production" ? user.email : env.TEST_EMAIL,
        subject: "Verify your email address",
        html: `<a href="${url}">Verify your email address</a>`,
      });
      console.log(res, user.email);
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      const res = await resend.emails.send({
        from: env.BETTER_AUTH_EMAIL,
        to: user.email,
        subject: "Reset your password",
        react: reactResetPasswordEmail({
          username: user.email,
          resetLink: url,
        }),
      });
      console.log(res, user.email);
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  socialProviders: {
    ...SupportedProviders,
  },
  secret: env.BETTER_AUTH_SECRET,
  logger: {
    disabled: env.NODE_ENV === "production",
    level: "debug",
  },
  plugins: [
    multiSession(),
    oAuthProxy(),
    admin(),
    organization({
      sendInvitationEmail: async (data) => {
        await resend.emails.send({
          from: env.BETTER_AUTH_EMAIL,
          to: data.email,
          subject: "You've been invited to join an organization",
          react: reactInvitationEmail({
            username: data.email,
            invitedByUsername: data.inviter.user.name,
            invitedByEmail: data.inviter.user.email,
            teamName: data.organization.name,
            inviteLink:
              process.env.NODE_ENV === "development"
                ? `http://localhost:3000/accept-invitation/${data.id}`
                : `${
                    env.BETTER_AUTH_URL || "https://demo.better-auth.com"
                  }/accept-invitation/${data.id}`,
          }),
        });
      },
    }),
    twoFactor({
      otpOptions: {
        sendOTP: async ({ user, otp }) => {
          await resend.emails.send({
            from: env.BETTER_AUTH_EMAIL,
            to: user.email,
            subject: "Your OTP",
            html: `Your OTP is ${otp}`,
          });
        },
      },
    }),
    passkey(),
    openAPI(),
    bearer(),
    admin(),
    multiSession(),
    oneTap(),
    oAuthProxy(),
    nextCookies(),
    oidcProvider({
      loginPage: "/sign-in",
    }),
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
    },
  },
});
