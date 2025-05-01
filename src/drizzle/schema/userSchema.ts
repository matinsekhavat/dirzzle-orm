import { text } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelpers";

export const UserTable = pgTable("users", {
  id,
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt,
  updatedAt,
});
