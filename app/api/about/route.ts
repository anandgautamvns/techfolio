import { NextRequest, NextResponse } from "next/server";
import { readDb, writeDb } from "@/lib/server/db";

export async function GET() {
  try {
    return NextResponse.json(readDb("about"));
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const current = readDb<Record<string, unknown>>("about");
    const body = (await request.json()) as Record<string, unknown>;
    const updated = { ...current, ...body };
    writeDb("about", updated);
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
