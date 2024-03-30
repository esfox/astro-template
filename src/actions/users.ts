import { db } from '../database/connection';

export async function getUsers() {
  const data = await db.query.users.findMany();
  return data;
}
