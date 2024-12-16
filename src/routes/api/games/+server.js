// src/routes/api/games/+server.ts
import { db } from "$lib/db"; // Drizzle ORM 설정된 DB
import { gameTable } from "$db/schema";
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  const { name, type, datetime, location } = await request.json();
  const newGame = await db.insert(gameTable).values({ name, type, datetime, location }).returning();
  return json(newGame);
}

export async function PUT({ request }) {
  const { id, name, type, datetime, location } = await request.json();
  const updatedGame = await db.update(gameTable).set({ name, type, datetime, location }).where(game.id.eq(id)).returning();
  return json(updatedGame);
}

export async function DELETE({ request }) {
  const { id } = await request.json();
  await db.delete(gameTable).where(gameTable.id.eq(id));
  return new Response(null, { status: 204 });
}

export async function GET() {
  console.log("api/games GET")
  try {
    const games = await db.select().from(gameTable).limit(10).execute();
    return json(games); // 데이터를 JSON 형식으로 반환
  } catch (error) {
    console.error("Failed to fetch games:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
