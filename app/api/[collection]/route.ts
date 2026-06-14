import { NextRequest, NextResponse } from "next/server";
import { readDb, writeDb, nextId } from "@/lib/server/db";

type Doc = Record<string, unknown> & { id: number };

// Maps URL segment → JSON filename (only differs for hyphenated names)
const NAME_MAP: Record<string, string> = {
  "tech-love": "techLove",
  "tech-stack": "techStack",
};

function dbName(collection: string): string {
  return NAME_MAP[collection] ?? collection;
}

type Context = { params: Promise<{ collection: string }> };

export async function GET(_req: NextRequest, { params }: Context) {
  const { collection } = await params;
  try {
    return NextResponse.json(readDb<Doc[]>(dbName(collection)));
  } catch {
    return NextResponse.json({ error: "Collection not found" }, { status: 404 });
  }
}

export async function POST(request: NextRequest, { params }: Context) {
  const { collection } = await params;
  try {
    const data = readDb<Doc[]>(dbName(collection));
    const body = (await request.json()) as Record<string, unknown>;
    const newDoc: Doc = { ...body, id: nextId(data) };
    data.push(newDoc);
    writeDb(dbName(collection), data);
    return NextResponse.json(newDoc, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
