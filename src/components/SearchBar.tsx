'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Search, MapPin, Wallet, Sparkles } from 'lucide-react';

export default function SearchBar() {
  const router = useRouter();
  const [q, setQ] = useState('');
  const [type, setType] = useState('');
  const [theme, setTheme] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (type) params.set('type', type);
    if (theme) params.set('theme', theme);
    router.push(`/packages?${params.toString()}`);
  };

  return (
    <form onSubmit={submit} className="glass mx-auto grid w-full max-w-4xl gap-3 rounded-2xl p-4 shadow-premium md:grid-cols-4">
      <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 md:col-span-2">
        <MapPin size={18} className="text-primary" />
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Destination or keyword" className="w-full bg-transparent text-sm outline-none" />
      </div>
      <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5">
        <Sparkles size={18} className="text-primary" />
        <select value={theme} onChange={e => setTheme(e.target.value)} className="w-full bg-transparent text-sm outline-none">
          <option value="">Any Theme</option>
          {['luxury','family','honeymoon','adventure','corporate','pilgrimage','weekend','cruise'].map(t => <option key={t} value={t}>{t[0].toUpperCase()+t.slice(1)}</option>)}
        </select>
      </div>
      <button className="btn-primary md:col-span-4 md:mx-auto md:w-56"><Search size={18} /> Search Holidays</button>
    </form>
  );
}
