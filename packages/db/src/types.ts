import type {BuildQueryResult, DBQueryConfig, ExtractTablesWithRelations} from 'drizzle-orm';
import type {PostgresJsDatabase} from 'drizzle-orm/postgres-js';

import * as schema from "./schema";

export type Schema = typeof schema;

export  type Database = PostgresJsDatabase<Schema>;

type TSchema = ExtractTablesWithRelations<Schema>;

export type IncludeRelation<TTableName extends keyof TSchema> = DBQueryConfig<
  'one' | 'many',
  boolean,
  TSchema,
  TSchema[TTableName]
>["with"];

export type InferResultType<
  TTableName extends keyof TSchema,
  TWith extends IncludeRelation<TTableName> | undefined = undefined
> = BuildQueryResult<
  TSchema,
  TSchema[TTableName],
  {
    with: TWith
  }
>

export type UserSchema = Schema["user"];
export type UserResult = UserSchema["$inferSelect"];
export type UserInsert = UserSchema["$inferInsert"];

export type AccountSchema = Schema["account"];
export type AccountResult = AccountSchema["$inferSelect"];
export type AccountInsert = AccountSchema["$inferInsert"];

export type SessionSchema = Schema["session"];
export type SessionResult = SessionSchema["$inferSelect"];
export type SessionInsert = SessionSchema["$inferInsert"];

export type VerificationSchema = Schema["verification"];
export type VerificationResult = VerificationSchema["$inferSelect"];
export type VerificationInsert = VerificationSchema["$inferInsert"];

export type OrganizationSchema = Schema["organization"];
export type OrganizationResult = OrganizationSchema["$inferSelect"];
export type OrganizationInsert = OrganizationSchema["$inferInsert"];

export type MemberSchema = Schema["member"];
export type MemberResult = MemberSchema["$inferSelect"];
export type MemberInsert = MemberSchema["$inferInsert"];

export type InvitationSchema = Schema["invitation"];
export type InvitationResult = InvitationSchema["$inferSelect"];
export type InvitationInsert = InvitationSchema["$inferInsert"];

export type TwoFactorSchema = Schema["twoFactor"];
export type TwoFactorResult = TwoFactorSchema["$inferSelect"];
export type TwoFactorInsert = TwoFactorSchema["$inferInsert"];

export type PasskeySchema = Schema["passkey"];
export type PasskeyResult = PasskeySchema["$inferSelect"];
export type PasskeyInsert = PasskeySchema["$inferInsert"];

export type OAuthApplicationSchema = Schema["oauthApplication"];
export type OAuthApplicationResult = OAuthApplicationSchema["$inferSelect"];
export type OAuthApplicationInsert = OAuthApplicationSchema["$inferInsert"];

export type OAuthAccessTokenSchema = Schema["oauthAccessToken"];
export type OAuthAccessTokenResult = OAuthAccessTokenSchema["$inferSelect"];
export type OAuthAccessTokenInsert = OAuthAccessTokenSchema["$inferInsert"];

export type OAuthConsentSchema = Schema["oauthConsent"];
export type OAuthConsentResult = OAuthConsentSchema["$inferSelect"];
export type OAuthConsentInsert = OAuthConsentSchema["$inferInsert"];

export type JWKSchema = Schema["jwks"];
export  type JWKResult = JWKSchema["$inferSelect"];
export  type JWKInsert = JWKSchema["$inferInsert"];

