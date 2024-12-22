import { relations } from "drizzle-orm";
import { index, integer, serial, text, json } from "drizzle-orm/pg-core";
import { pgPubTable } from "./_table";
import { sessionTable } from "./session";
import { userToAuthAccountTable } from "./user-to-auth-account";
import {auditTimeFields} from "./_common";

export const userTable = pgPubTable(
  "user",
  {
    id:  serial("user_id").primaryKey(),
    username: text(),
    firstName: text(),
    lastName: text(),
    additional_info: json(),
    ...auditTimeFields,
  },
);

export const userRelations = relations(userTable, ({ many, one }) => {
  return {
    userToAuthAccount: many(userToAuthAccountTable),
    sessions: many(sessionTable),
  };
});
