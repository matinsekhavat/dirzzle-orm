import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  DB_PASSWORD: z.string().min(1).nonempty(),
  DB_NAME: z.string().min(1).nonempty(),
  DB_USER: z.string().min(1).nonempty(),
  DB_HOST: z.string().min(1).nonempty(),
  DATABASE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
