import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider';
import { COMPANY_INFO } from '@/data/companyData';

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} | Indian Agricultural Products Delivered Globally`,
  description: 'Premier India-based exporter of Red Onions, G9 Bananas, G4 Green Chilli, Basmati Rice, Pomegranates, and Spices. APEDA & FSSAI certified with cold-chain shipping to 50+ countries.',
  keywords: [
    'Indian Onion Exporter',
    'Basmati Rice Exporter India',
    'G9 Cavendish Banana Exporters',
    'G4 Green Chilli Export',
    'APEDA Certified Exporter',
    'Indian Agricultural Commodities',
    'T Group Imports & Exports'
  ],
  authors: [{ name: 'T Group Imports & Exports' }],
  openGraph: {
    title: `${COMPANY_INFO.name} - Built on Trust. Delivered with Care.`,
    description: 'Exporting premium quality Indian agricultural commodities worldwide with full traceability and cold-chain reliability.',
    type: 'website',
    locale: 'en_US',
    siteName: COMPANY_INFO.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased font-sans bg-brand-surface text-gray-900 selection:bg-gold-500 selection:text-primary-950">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
