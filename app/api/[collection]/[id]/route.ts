import { NextRequest, NextResponse } from "next/server";
import { readDb, writeDb } from "@/lib/server/db";

type Doc = Record<string, unknown> & { id: number };

const NAME_MAP: Record<string, string> = {
  "tech-love": "techLove",
  "tech-stack": "techStack",
};

function dbName(collection: string): string {
  return NAME_MAP[collection] ?? collection;
}

type Context = { params: Promise<{ collection: string; id: string }> };

export async function GET(_req: NextRequest, { params }: Context) {
  const { collection, id } = await params;
  try {
    const data = readDb<Doc[]>(dbName(collection));
    const item = data.find((d) => d.id === Number(id));
    if (!item) return NextResponse.json({ error: "Record not found" }, { status: 404 });
    return NextResponse.json(item);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: Context) {
  const { collection, id } = await params;
  try {
    const data = readDb<Doc[]>(dbName(collection));
    const idx = data.findIndex((d) => d.id === Number(id));
    if (idx === -1) return NextResponse.json({ error: "Record not found" }, { status: 404 });
    const body = (await request.json()) as Record<string, unknown>;
    data[idx] = { ...data[idx], ...body, id: data[idx].id };
    writeDb(dbName(collection), data);
    return NextResponse.json(data[idx]);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Context) {
  const { collection, id } = await params;
  try {
    const data = readDb<Doc[]>(dbName(collection));
    const idx = data.findIndex((d) => d.id === Number(id));
    if (idx === -1) return NextResponse.json({ error: "Record not found" }, { status: 404 });
    const [deleted] = data.splice(idx, 1);
    writeDb(dbName(collection), data);
    return NextResponse.json(deleted);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
