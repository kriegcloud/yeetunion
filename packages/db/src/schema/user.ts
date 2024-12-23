import { relations } from "drizzle-orm";
import { serial, text } from "drizzle-orm/pg-core";
import { auditTimeFields } from "./_common";
import { pgPubTable } from "./_table";
import { sessionTable } from "./session";
import { userToAuthAccountTable } from "./user-to-auth-account";

export const userTable = pgPubTable("user", {
  id: serial("user_id").notNull().primaryKey(),
  username: text().notNull(),
  firstName: text().notNull(),
  lastName: text().notNull(),
  ...auditTimeFields,
});

export const userRelations = relations(userTable, ({ many }) => {
  return {
    userToAuthAccount: many(userToAuthAccountTable),
    sessions: many(sessionTable),
  };
});
