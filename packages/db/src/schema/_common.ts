import { timestamp } from "drizzle-orm/pg-core";

export const auditTimeFields = {
  createdAt: timestamp("created_at")
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: timestamp("updated_at").$onUpdateFn(() => new Date()),
};
