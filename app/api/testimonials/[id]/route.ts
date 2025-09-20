
import db from '@/lib/db';
import Testimonial from '@/models/Testimonial';
import { TestimonialSchema } from '@/lib/schemas';
import { NextResponse } from 'next/server';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await db();
  const json = await req.json();
  const parsed = TestimonialSchema.partial().safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const updated = await Testimonial.findByIdAndUpdate(params.id, parsed.data, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  await db();
  await Testimonial.findByIdAndDelete(params.id);
  return NextResponse.json({ ok: true });
}
