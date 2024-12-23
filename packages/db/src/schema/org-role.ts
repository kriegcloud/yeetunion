import { relations } from "drizzle-orm";
import { index, integer, serial, text } from "drizzle-orm/pg-core";
import { auditTimeFields } from "./_common";
import { pgPubTable } from "./_table";
import { authAccountOrgRoleTable } from "./auth-account-org-role";
import { orgTable } from "./org";

export const orgRoleTable = pgPubTable(
  "org_role",
  {
    id: serial("org_role_id").primaryKey(),
    org_id: integer()
      .notNull()
      .references(() => orgTable.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    name: text().notNull(),
    description: text(),
    ...auditTimeFields,
  },
  (table) => {
    return {
      orgIdIdx: index("org_role_org_id_idx").on(table.org_id),
    };
  },
);

export const orgRoleRelations = relations(orgRoleTable, ({ one, many }) => {
  return {
    authAccountOrgRole: many(authAccountOrgRoleTable),
    org: one(orgTable),
  };
});
