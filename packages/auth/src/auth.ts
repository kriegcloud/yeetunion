import {db} from "@ye/db/client";
import * as schema from "@ye/db/schema";
import {env} from "@ye/env/yeetunion/server";
import {betterAuth} from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle";
import {
  admin,
  jwt,
  multiSession,
  oAuthProxy,
  organization,
  twoFactor,
  bearer,
  oneTap,
  openAPI,
  oidcProvider,
} from "better-auth/plugins";
import {passkey} from "better-auth/plugins/passkey";
import {nextCookies} from "better-auth/next-js";
import {resend} from "@ye/email/resend";
import {reactInvitationEmail, reactResetPasswordEmail} from "@ye/email/components";

export const auth = betterAuth({
  appName: "Yeet Union",
  session: {
    freshAge: 0,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, }) => {
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
    sendResetPassword: async ({ user, url}) => {
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
    discord: {
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    },
    twitter: {
      clientId: env.X_CLIENT_ID,
      clientSecret: env.X_CLIENT_SECRET,
    },
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
    linkedin: {
      clientId: env.LINKEDIN_CLIENT_ID,
      clientSecret: env.LINKEDIN_CLIENT_SECRET,
    }
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
                  env.BETTER_AUTH_URL ||
                  "https://demo.better-auth.com"
                }/accept-invitation/${data.id}`,
          }),
        });
      },
    }),
    twoFactor({
      otpOptions: {
        sendOTP: async ({ user, otp}) => {
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
})

