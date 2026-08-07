import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Blogs & Guides — Tips, Trends & Destination Insights',
  description:
    'Read the latest travel blogs, destination guides, and industry tips from The B2B Holidays. Expert insights to help travel agents serve their clients better.',
  keywords: [
    'travel blog',
    'travel guides India',
    'destination tips',
    'travel industry trends',
    'B2B travel insights',
  ],
  alternates: { canonical: '/blogs' },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
