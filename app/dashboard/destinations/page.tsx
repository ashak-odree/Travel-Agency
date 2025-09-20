
'use client';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { DestinationSchema as schema } from '@/lib/schemas';

type Item = any;

export default function Page() {
  const [items, setItems] = useState<Item[]>([]);
  const [form, setForm] = useState<any>({ title: '', description: '', price: 0, imageUrl: '', rating: 4.5 });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [empty, setEmpty] = useState(false);

  async function load() {
    setLoading(true);
    setError(null);
    const res = await fetch('/api/destinations');
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
    const path = editingId ? '/api/destinations/' + editingId : '/api/destinations';
    const res = await fetch(path, { method, body: JSON.stringify(parsed.data) });
    if (!res.ok) { setError('Request failed'); return; }
    setForm({ title: '', description: '', price: 0, imageUrl: '', rating: 4.5 });
    setEditingId(null);
    load();
  }

  function edit(it: any) {
    setForm(it);
    setEditingId(it._id);
  }

  async function del(id: string) {
    if (!confirm('Delete item?')) return;
    const res = await fetch('/api/destinations/' + id, { method: 'DELETE' });
    if (res.ok) load(); else setError('Delete failed');
  }

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-4">Destinations</h1>
      <form onSubmit={submit} className="grid gap-3 card mb-6">
        
<input className="input" placeholder="Title" value={form.title || ''} onChange={e=>setForm({...form, title: e.target.value})} />
<textarea className="input" placeholder="Description" value={form.description || ''} onChange={e=>setForm({...form, description: e.target.value})} />
<input className="input" type="number" placeholder="Price" value={form.price ?? 0} onChange={e=>setForm({...form, price: Number(e.target.value)})} />
<input className="input" placeholder="Image URL" value={form.imageUrl || ''} onChange={e=>setForm({...form, imageUrl: e.target.value})} />
<input className="input" type="number" step="0.1" placeholder="Rating" value={form.rating ?? 4.5} onChange={e=>setForm({...form, rating: Number(e.target.value)})} />

        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button className="btn btn-primary w-full">{editingId ? 'Update' : 'Create'}</button>
      </form>
      {loading && <p>Loading...</p>}
      {empty && <p>No data yet.</p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <div className="card" key={it._id}>
            
<img src={it.imageUrl} alt={it.title} className="h-40 w-full object-cover rounded-xl" />
<h3 className="font-semibold mt-2">{it.title}</h3>
<p className="text-sm text-gray-600 line-clamp-2">{it.description}</p>
<div className="mt-1 text-sm">Price: ${it.price} • ⭐ {it.rating ?? 4.5}</div>

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
