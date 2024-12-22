import { relations } from "drizzle-orm";
import { integer, primaryKey } from "drizzle-orm/pg-core";
import { pgPubTable } from "./_table";
import { authAccountTable } from "./auth-account";
import { orgRoleTable } from "./org-role";
import {auditTimeFields} from "./_common";

export const authAccountOrgRoleTable = pgPubTable(
  "auth_account_team_role",
  {
    auth_account_id: integer()
      .notNull()
      .references(() => authAccountTable.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    team_role_id: integer()
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
        columns: [table.auth_account_id, table.team_role_id],
      }),
    };
  },
);

export const authAccountTeamRoleRelations = relations(
  authAccountOrgRoleTable,
  ({ one }) => {
    return {
      authAccount: one(authAccountTable, {
        fields: [authAccountOrgRoleTable.auth_account_id],
        references: [authAccountTable.id],
      }),
      teamRole: one(orgRoleTable, {
        fields: [authAccountOrgRoleTable.team_role_id],
        references: [orgRoleTable.id],
      }),
    };
  },
);
