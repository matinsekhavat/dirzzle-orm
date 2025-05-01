import * as dotenv from "dotenv";
dotenv.config();

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schema.ts",
  dialect: "postgresql",
  verbose: true,
  strict: true,
  dbCredentials: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "password",
    database: "dirzzle-orm", // Hardcode to match docker-compose
    ssl: false,
  },
});
