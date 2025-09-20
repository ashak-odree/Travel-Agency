
import db from '@/lib/db';
import Testimonial from '@/models/Testimonial';
import { TestimonialSchema } from '@/lib/schemas';
import { NextResponse } from 'next/server';

export async function GET() {
  await db();
  const data = await Testimonial.find().sort({ createdAt: -1 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  await db();
  const json = await req.json();
  const parsed = TestimonialSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const created = await Testimonial.create(parsed.data);
  return NextResponse.json(created, { status: 201 });
}
