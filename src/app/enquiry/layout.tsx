import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Send Enquiry — Get a Custom Travel Quote',
  description:
    'Submit your travel enquiry and get a custom quote from The B2B Holidays. We offer the best B2B rates on holiday packages, hotel bookings, and group tours.',
  keywords: [
    'travel enquiry',
    'custom travel quote',
    'B2B holiday quote',
    'group tour enquiry',
  ],
  alternates: { canonical: '/enquiry' },
};

export default function EnquiryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
