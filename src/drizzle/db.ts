// import { drizzle } from "drizzle-orm/node-postgres";
// import { env } from "@/data/env";
// import * as schema from "./schema";

// export const db = drizzle({
//   schema,
//   connection: {
//     database: env.DB_NAME,
//     host: env.DB_HOST,
//     user: env.DB_USER,
//     password: env.DB_PASSWORD,
//   },
// });

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "@/drizzle/schema";
import { env } from "@/data/env/index";

const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

// TODO: logger true
export const db = drizzle(pool, { schema });

export type DB = typeof db;
