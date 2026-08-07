import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/lib/providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://theb2bholidays.com'),
  title: {
    default: 'The B2B Holidays | B2B Travel & Holiday Packages for Travel Agents',
    template: '%s | The B2B Holidays',
  },
  description:
    'The B2B Holidays is India\'s premium B2B travel platform providing holiday packages, hotel bookings, fixed departures, and curated travel services exclusively for travel agents and partners.',
  keywords: [
    'B2B travel platform',
    'travel agent portal',
    'B2B holiday packages',
    'fixed departure tours',
    'hotel booking for agents',
    'domestic holiday packages',
    'international tour packages',
    'group tour packages India',
    'travel trade rates',
    'B2B travel India',
  ],
  openGraph: {
    title: 'The B2B Holidays | B2B Travel & Holiday Packages',
    description:
      'India\'s premium B2B travel platform. Curated holidays, hotel bookings, and fixed departures for travel agents.',
    type: 'website',
    siteName: 'The B2B Holidays',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The B2B Holidays | B2B Travel & Holiday Packages',
    description:
      'Curated holidays, hotel bookings, and fixed departures for travel agents. Join 12,000+ partners.',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
