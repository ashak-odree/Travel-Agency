
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET as string;
if (!JWT_SECRET) throw new Error('Missing JWT_SECRET');

export type TokenPayload = { sub: string; email: string; name: string };

export function signToken(payload: TokenPayload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch {
    return null;
  }
}

export function setAuthCookie(token: string) {
  cookies().set('auth', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7
  });
}

export function getAuthFromCookie(): TokenPayload | null {
  const c = cookies().get('auth');
  if (!c?.value) return null;
  return verifyToken(c.value);
}

export function clearAuthCookie() {
  cookies().set('auth', '', { httpOnly: true, maxAge: 0, path: '/' });
}
