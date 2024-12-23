import { relations } from "drizzle-orm";
import { integer, serial, text, timestamp } from "drizzle-orm/pg-core";
import { auditTimeFields } from "./_common";
import { pgPubTable } from "./_table";
import { userTable } from "./user";

export type SelectSession = typeof sessionTable.$inferSelect;

export const sessionTable = pgPubTable("session", {
  id: serial("session_id").primaryKey(),
  session_token_hash: text(),
  browser_name: text(),
  browser_version: text(),
  os_name: text(),
  ip_address: text().notNull(),
  userId: integer()
    .notNull()
    .references(() => userTable.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  expires_at: timestamp("expires", { mode: "date" }).notNull(),
  ...auditTimeFields,
});

export const sessionRelations = relations(sessionTable, ({ one }) => {
  return {
    user: one(userTable),
  };
});
