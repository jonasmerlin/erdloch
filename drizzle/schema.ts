import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const fooTable = sqliteTable("foo", {
  bar: text("bar").notNull().default("Hey!"),
});

export const guestbook = sqliteTable('guestbook', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    message: text('message').notNull(),
    timestamp: integer('timestamp', { mode: 'timestamp' }).default(sql`(unixepoch())`),
    approved: integer('approved', { mode: 'boolean' }).default(true),
});