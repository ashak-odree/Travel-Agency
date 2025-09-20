
'use client';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { TestimonialSchema as schema } from '@/lib/schemas';

type Item = any;

export default function Page() {
  const [items, setItems] = useState<Item[]>([]);
  const [form, setForm] = useState<any>({ name: '', comment: '', avatarUrl: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [empty, setEmpty] = useState(false);

  async function load() {
    setLoading(true);
    setError(null);
    const res = await fetch('/api/testimonials');
    if (!res.ok) { setError('Failed to load'); setLoading(false); return; }
    const data = await res.json();
    setItems(data);
    setEmpty(!data.length);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse(form);
    if (!parsed.success) { setError('Invalid input'); return; }
    const method = editingId ? 'PUT' : 'POST';
    const path = editingId ? '/api/testimonials/' + editingId : '/api/testimonials';
    const res = await fetch(path, { method, body: JSON.stringify(parsed.data) });
    if (!res.ok) { setError('Request failed'); return; }
    setForm({ name: '', comment: '', avatarUrl: '' });
    setEditingId(null);
    load();
  }

  function edit(it: any) {
    setForm(it);
    setEditingId(it._id);
  }

  async function del(id: string) {
    if (!confirm('Delete item?')) return;
    const res = await fetch('/api/testimonials/' + id, { method: 'DELETE' });
    if (res.ok) load(); else setError('Delete failed');
  }

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-4">Testimonials</h1>
      <form onSubmit={submit} className="grid gap-3 card mb-6">
        
<input className="input" placeholder="Name" value={form.name || ''} onChange={e=>setForm({...form, name: e.target.value})} />
<textarea className="input" placeholder="Comment" value={form.comment || ''} onChange={e=>setForm({...form, comment: e.target.value})} />
<input className="input" placeholder="Avatar URL" value={form.avatarUrl || ''} onChange={e=>setForm({...form, avatarUrl: e.target.value})} />

        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button className="btn btn-primary w-full">{editingId ? 'Update' : 'Create'}</button>
      </form>
      {loading && <p>Loading...</p>}
      {empty && <p>No data yet.</p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <div className="card" key={it._id}>
            
<div className="flex items-center gap-3">
  <img src={it.avatarUrl} alt={it.name} className="h-10 w-10 rounded-full object-cover" />
  <div>
    <p className="font-medium">{it.name}</p>
    <p className="text-sm text-gray-600 line-clamp-2">{it.comment}</p>
  </div>
</div>

            <div className="flex gap-2 mt-3">
              <button className="btn border" onClick={() => edit(it)}>Edit</button>
              <button className="btn border" onClick={() => del(it._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
