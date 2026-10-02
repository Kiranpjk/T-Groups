import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider';
import { PageLoader } from '@/components/ui/PageLoader';
import { COMPANY_INFO } from '@/data/companyData';
import { DEFAULT_OG_IMAGE, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: COMPANY_INFO.name,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: 'Premier India-based exporter of Red Onions, G9 Bananas, G4 Green Chilli, Basmati Rice, Pomegranates, and Spices. Headquartered in Guntur, Andhra Pradesh with APEDA & FSSAI certified cold-chain and dry freight dispatch worldwide.',
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
  icons: {
    icon: '/images/tgie-logo.jpg',
    shortcut: '/images/tgie-logo.jpg',
    apple: '/images/tgie-logo.jpg',
  },
  openGraph: {
    title: `${COMPANY_INFO.name} - Built on Trust. Delivered with Care.`,
    description: 'Exporting premium quality Indian agricultural commodities worldwide with full traceability and cold-chain reliability.',
    type: 'website',
    locale: 'en_US',
    siteName: COMPANY_INFO.name,
    url: SITE_URL.toString(),
    images: [{ url: DEFAULT_OG_IMAGE, alt: COMPANY_INFO.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_INFO.name} - Built on Trust. Delivered with Care.`,
    description: 'Exporting premium quality Indian agricultural commodities worldwide with full traceability and cold-chain reliability.',
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
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
          <PageLoader />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </SmoothScrollProvider>
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
