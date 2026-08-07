import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Holiday Packages — Best B2B Tour Packages & Fixed Departures',
  description:
    'Explore 850+ curated holiday packages at exclusive B2B rates. Domestic, international, honeymoon, family, adventure, and fixed departure tour packages for travel agents.',
  keywords: [
    'holiday packages',
    'B2B tour packages',
    'fixed departure packages',
    'honeymoon packages',
    'family holiday packages',
    'adventure tour packages',
    'corporate group tours',
  ],
  alternates: { canonical: '/packages' },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
