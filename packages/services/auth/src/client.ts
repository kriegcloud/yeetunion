import {organizationClient} from "better-auth/client/plugins";
import {adminClient} from "better-auth/client/plugins";
import {passkeyClient} from "better-auth/client/plugins";
import {createAuthClient} from "better-auth/react";
import {
  genericOAuthClient,
  multiSessionClient,
  oidcClient,
  twoFactorClient,
} from "better-auth/client/plugins";
import {toast} from "sonner";
import { Match} from "effect";
import {
  type SupportedSocialProviders
} from "./auth";

export const authClient = createAuthClient({
  plugins: [
    organizationClient(),
    twoFactorClient({
      onTwoFactorRedirect() {
        window.location.href = "/two-factor";
      },
    }),
    passkeyClient(),
    adminClient(),
    multiSessionClient(),
    oidcClient(),
    genericOAuthClient(),
  ],
  fetchOptions: {
    onError(e) {
      if (e.error.status === 429) {
        toast.error("Too many requests. Please try again later.");
      }
    },
  },
});

type SignInMethodPayload =
  | {
  provider: "credentials";
  onError: (message: string) => void;
  payload: {
    email: string;
    password: string;
    rememberMe: boolean;
  };

}
  | {
  provider: "passkey";
  onError: (message: string) => void;
  onSuccess: () => void;
}
  | {
  provider: SupportedSocialProviders;
  onError: (message: string) => void;
}

const matchSignInMethod = Match.type<SignInMethodPayload>().pipe(
  Match.when({provider: "credentials"}, async ({payload, onError}) => authClient.signIn.email({
    callbackURL: "/dashboard",
    ...payload,
  }, {
    onError: (ctx) => onError(ctx.error.message)
  })),
  Match.when({provider: "passkey"}, async  ({onError, onSuccess}) => authClient.signIn.passkey({
    fetchOptions: {
      onSuccess: () => {
        onSuccess();
      },
      onError: (ctx) => onError(ctx.error.message)
    }
  })),
  Match.orElse(async ({provider, onError }) => authClient.signIn.social({
    provider,
    callbackURL: "/dashboard",
  }, {
    onError: (ctx) => onError(ctx.error.message)
  })),
)


export const signInRequest = async (params: SignInMethodPayload) =>
  matchSignInMethod(params)


export const {
  signUp,
  signIn,
  signOut,
  useSession,
  organization,
  useListOrganizations,
  useActiveOrganization,
} = authClient;
