import type { DiscordUser } from "@dank/auth/provider";
import { relations } from "drizzle-orm";
import { index, text, json, serial } from "drizzle-orm/pg-core";
import { pgPubTable } from "./_table";
import { authAccountOrgRoleTable } from "./auth-account-org-role";
import { orgTable } from "./org";
import { userToAuthAccountTable } from "./user-to-auth-account";
import {auditTimeFields} from "./_common";

export type SelectAuthAccount = typeof authAccountTable.$inferSelect;
export const AUTH_ACCOUNT_TYPE = ["regular", "2fa"] as const;

export const authAccountTable = pgPubTable(
  "auth_account",
  {
    id: serial("account_id").primaryKey(),
    authProviderId: text("auth_provider_id").notNull(),
    authProviderInfo: json("auth_provider_info")
      .$type<DiscordUser>()
      .notNull(),
    type: text({ enum: AUTH_ACCOUNT_TYPE }).notNull(),
    ...auditTimeFields,
  },
  (table) => {
    return {
      authProviderIdIdx: index("auth_account_auth_provider_id_idx").on(
        table.authProviderId,
      ),
    };
  },
);

export const authAccountRelations = relations(authAccountTable, ({ many }) => {
  return {
    orgs: many(orgTable),
    authAccountOrgRole: many(authAccountOrgRoleTable),
    userToAuthAccount: many(userToAuthAccountTable),
  };
});
