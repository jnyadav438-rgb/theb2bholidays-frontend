'use client';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import DestinationCard from '@/components/DestinationCard';
import { SkeletonGrid } from '@/components/Skeletons';

// Sort: Bali & Vietnam first, then international, then domestic
function prioritySort(items: any[]) {
  const pinned = ['bali', 'vietnam'];
  return [...items].sort((a, b) => {
    const aName = (a.name || a.country || '').toLowerCase();
    const bName = (b.name || b.country || '').toLowerCase();
    const aPin = pinned.findIndex(p => aName.includes(p));
    const bPin = pinned.findIndex(p => bName.includes(p));
    if (aPin !== -1 && bPin !== -1) return aPin - bPin;
    if (aPin !== -1) return -1;
    if (bPin !== -1) return 1;
    const aIntl = a.type === 'international' ? 0 : 1;
    const bIntl = b.type === 'international' ? 0 : 1;
    if (aIntl !== bIntl) return aIntl - bIntl;
    return 0;
  });
}

export default function Destinations() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState('');
  const [sort, setSort] = useState('order');

  useEffect(() => {
    setLoading(true);
    const p = new URLSearchParams(); if (type) p.set('type', type); p.set('sort', sort); p.set('limit', '24');
    api.get(`/destinations?${p.toString()}`).then(r => setItems(prioritySort(r.data.items))).finally(() => setLoading(false));
  }, [type, sort]);

  return (
    <div className="container-x py-10">
      <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white">Explore Destinations</h1>
      <p className="mt-4 inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-2.5 rounded-full text-lg font-bold shadow-md">
        Domestic & international destinations curated for your clients
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <select value={type} onChange={e => setType(e.target.value)} className="rounded-xl border border-slate-300 bg-white text-black dark:bg-white dark:text-black font-semibold px-4 py-2.5 text-sm shadow-sm cursor-pointer hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E4D8B] transition-all"><option value="">All Types</option><option value="domestic">Domestic</option><option value="international">International</option></select>
        <select value={sort} onChange={e => setSort(e.target.value)} className="rounded-xl border border-slate-300 bg-white text-black dark:bg-white dark:text-black font-semibold px-4 py-2.5 text-sm shadow-sm cursor-pointer hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E4D8B] transition-all"><option value="order">Featured</option><option value="rating">Rating</option><option value="newest">Newest</option></select>
      </div>
      {loading ? <div className="mt-8"><SkeletonGrid count={8} /></div> : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{items.map((d, i) => <DestinationCard key={d._id} dest={d} index={i} />)}</div>
      )}
    </div>
  );
}
