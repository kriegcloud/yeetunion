import { relations } from "drizzle-orm";
import { text, serial, } from "drizzle-orm/pg-core";
import { pgPubTable } from "./_table";
import { orgRoleTable } from "./org-role";
import {auditTimeFields} from "./_common";

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
