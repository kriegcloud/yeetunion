import * as S from "@effect/schema/Schema";

export const SUPPORTED_OAUTH_PROVIDERS = [
  "discord",
] as const;

export const SupportedOauthProvidersSchema = S.Union(
  ...SUPPORTED_OAUTH_PROVIDERS.map((provider) => S.Literal(provider)),
);
export type SupportedOauthProviders = S.Schema.Type<
  typeof SupportedOauthProvidersSchema
>;
