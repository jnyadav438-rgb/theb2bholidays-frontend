import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Get 24/7 Partner Support',
  description:
    'Contact The B2B Holidays for partner support, travel queries, and business enquiries. Reach us via email, phone, or our contact form. 24/7 support for travel agents.',
  keywords: [
    'contact B2B Holidays',
    'travel agent support',
    'B2B travel enquiry',
    'travel partner helpline',
  ],
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
