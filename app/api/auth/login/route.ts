
import db from '@/lib/db';
import User from '@/models/User';
import { LoginSchema } from '@/lib/schemas';
import { NextResponse } from 'next/server';
import { setAuthCookie, signToken } from '@/lib/jwt';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  await db();
  const body = await req.json();
  const parsed = LoginSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const { email, password } = parsed.data;
  const user = await User.findOne({ email });
  if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  const token = signToken({ sub: String(user._id), email: user.email, name: user.name });
  setAuthCookie(token);
  return NextResponse.json({ ok: true });
}
