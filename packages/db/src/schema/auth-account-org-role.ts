import { relations } from "drizzle-orm";
import { integer, primaryKey } from "drizzle-orm/pg-core";
import { auditTimeFields } from "./_common";
import { pgPubTable } from "./_table";
import { authAccountTable } from "./auth-account";
import { orgRoleTable } from "./org-role";

export const authAccountOrgRoleTable = pgPubTable(
  "auth_account_org_role",
  {
    auth_account_id: integer()
      .notNull()
      .references(() => authAccountTable.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    org_role_id: integer()
      .notNull()
      .references(() => orgRoleTable.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    ...auditTimeFields,
  },
  (table) => {
    return {
      primaryKey: primaryKey({
        columns: [table.auth_account_id, table.org_role_id],
      }),
    };
  },
);

export const authAccountorgRoleRelations = relations(
  authAccountOrgRoleTable,
  ({ one }) => {
    return {
      authAccount: one(authAccountTable, {
        fields: [authAccountOrgRoleTable.auth_account_id],
        references: [authAccountTable.id],
      }),
      orgRole: one(orgRoleTable, {
        fields: [authAccountOrgRoleTable.org_role_id],
        references: [orgRoleTable.id],
      }),
    };
  },
);
