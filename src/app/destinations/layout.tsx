import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore Destinations — Domestic & International Travel',
  description:
    'Browse 60+ handpicked domestic and international travel destinations. Find the best B2B rates on holidays to Maldives, Dubai, Bali, Kashmir, Goa, and more.',
  keywords: [
    'travel destinations',
    'domestic destinations India',
    'international holiday destinations',
    'B2B destination packages',
    'Maldives packages',
    'Dubai tour packages',
  ],
  alternates: { canonical: '/destinations' },
};

export default function DestinationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
