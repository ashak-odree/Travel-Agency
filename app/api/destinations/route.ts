
import db from '@/lib/db';
import Destination from '@/models/Destination';
import { DestinationSchema } from '@/lib/schemas';
import { NextResponse } from 'next/server';

export async function GET() {
  await db();
  const data = await Destination.find().sort({ createdAt: -1 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  await db();
  const json = await req.json();
  const parsed = DestinationSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const created = await Destination.create(parsed.data);
  return NextResponse.json(created, { status: 201 });
}
