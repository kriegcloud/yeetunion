import { relations } from "drizzle-orm";
import { json, serial, text } from "drizzle-orm/pg-core";
import { auditTimeFields } from "./_common";
import { pgPubTable } from "./_table";
import { sessionTable } from "./session";
import { userToAuthAccountTable } from "./user-to-auth-account";

export const userTable = pgPubTable("user", {
  id: serial("user_id").primaryKey(),
  username: text(),
  firstName: text(),
  lastName: text(),
  additional_info: json(),
  ...auditTimeFields,
});

export const userRelations = relations(userTable, ({ many }) => {
  return {
    userToAuthAccount: many(userToAuthAccountTable),
    sessions: many(sessionTable),
  };
});
