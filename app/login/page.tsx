
'use client';
import { useState } from 'react';
import { z } from 'zod';
import { LoginSchema } from '@/lib/schemas';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    const parsed = LoginSchema.safeParse({ email, password });
    if (!parsed.success) { setErr('Please provide a valid email and 6+ char password.'); return; }
    setLoading(true);
    const res = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify(parsed.data) });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json();
      setErr(data.error || 'Login failed');
      return;
    }
    router.push('/dashboard');
  }

  return (
    <div className="container py-16 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form onSubmit={onSubmit} className="space-y-4" aria-busy={loading}>
        <input className="input" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} aria-label="Email" />
        <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} aria-label="Password" />
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <button className="btn btn-primary w-full" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
      </form>
      <p className="mt-4 text-sm text-gray-600">Demo admin user will be created via <code>npm run seed</code>.</p>
    </div>
  );
}
