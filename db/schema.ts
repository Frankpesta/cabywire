import { sql } from "drizzle-orm";
import { text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const waitlist = pgTable("waitlist", {
	id: text("id")
		.primaryKey()
		.default(sql`gen_random_uuid()`),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	city: text("city").notNull(),
	phone: text("phone").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});
