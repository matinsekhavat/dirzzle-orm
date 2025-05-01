import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "@/data/env";
import * as schema from "./schema";

export const db = drizzle({
  schema,
  connection: {
    database: env.DB_NAME,
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
  },
});
