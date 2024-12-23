import { relations } from "drizzle-orm";
import { integer, primaryKey } from "drizzle-orm/pg-core";
import { auditTimeFields } from "./_common";
import { pgPubTable } from "./_table";
import { authAccountTable } from "./auth-account";
import { userTable } from "./user";

export const userToAuthAccountTable = pgPubTable(
  "user_to_auth_account",
  {
    userId: integer()
      .notNull()
      .references(() => userTable.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    authAccountId: integer()
      .notNull()
      .references(() => authAccountTable.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    ...auditTimeFields,
  },
  (table) => {
    return {
      primaryKey: primaryKey({
        columns: [table.userId, table.authAccountId],
      }),
    };
  },
);

export const userToAuthAccountRelations = relations(
  userToAuthAccountTable,
  ({ one }) => {
    return {
      user: one(userTable, {
        fields: [userToAuthAccountTable.userId],
        references: [userTable.id],
      }),
      authAccount: one(authAccountTable, {
        fields: [userToAuthAccountTable.authAccountId],
        references: [authAccountTable.id],
      }),
    };
  },
);
