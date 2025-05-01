import { db } from "@/drizzle/db";

export default async function Home() {
  const users = await db.query.users.findMany();
  return <div>Drizzle-orm test users:{JSON.stringify(users)}</div>;
}
