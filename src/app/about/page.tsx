import { ShieldCheck, Globe2, Users, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — India\'s Premium B2B Travel Platform',
  description:
    'Learn about The B2B Holidays — India\'s trusted B2B travel platform with 12,000+ partners, 60+ destinations, and 850+ curated holiday packages for travel agents.',
  keywords: ['about B2B Holidays', 'B2B travel company India', 'travel agent platform', 'travel partner network'],
  alternates: { canonical: '/about' },
};
export default function About() {
  return (
    <div className="container-x py-14">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-slate-800">About THE B2B HOLIDAYS</h1>
        <p className="mt-4 text-slate-600">THE B2B HOLIDAYS is India&apos;s premium B2B travel booking platform, built exclusively for travel agents and partners. We combine curated luxury holidays, unbeatable trade rates, and powerful tools — wallet, credit, instant vouchers and dedicated support — to help you grow your travel business.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[[Users,'12,000+ Partners'],[Globe2,'60+ Destinations'],[Award,'850+ Packages'],[ShieldCheck,'Secure Platform']].map(([Icon,t]:any,i)=>(
          <div key={i} className="card p-6 text-center"><Icon className="mx-auto text-primary" size={34} /><div className="mt-3 font-bold text-slate-800">{t}</div></div>
        ))}
      </div>
    </div>
  );
}
