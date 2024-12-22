import { pgTableCreator } from "drizzle-orm/pg-core";

export const pgPubTable = pgTableCreator((name) => `public_${name}`);
export const pgAppTable = pgTableCreator((name) => `app_${name}`);