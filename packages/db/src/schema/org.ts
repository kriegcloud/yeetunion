import { relations } from "drizzle-orm";
import { serial, text } from "drizzle-orm/pg-core";
import { auditTimeFields } from "./_common";
import { pgPubTable } from "./_table";
import { orgRoleTable } from "./org-role";

export const orgTable = pgPubTable("org", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text(),
  ...auditTimeFields,
});

export const orgRelations = relations(orgTable, ({ many }) => {
  return {
    orgRoles: many(orgRoleTable),
  };
});
