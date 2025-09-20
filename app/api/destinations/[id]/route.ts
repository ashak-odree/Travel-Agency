
import db from '@/lib/db';
import Destination from '@/models/Destination';
import { DestinationSchema } from '@/lib/schemas';
import { NextResponse } from 'next/server';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await db();
  const json = await req.json();
  const parsed = DestinationSchema.partial().safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const updated = await Destination.findByIdAndUpdate(params.id, parsed.data, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  await db();
  await Destination.findByIdAndDelete(params.id);
  return NextResponse.json({ ok: true });
}
