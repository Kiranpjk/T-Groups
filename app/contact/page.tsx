import React, { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { QuoteForm } from '@/components/rfq/QuoteForm';
import { COMPANY_INFO } from '@/data/companyData';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: `Contact Us & Request a Quote (RFQ) | ${COMPANY_INFO.name}`,
  description: 'Submit an international RFQ for Indian Red Onions, G4 Chillies, G9 Bananas, Basmati Rice, and Spices. Receive CIF/FOB proforma quotations within 24 hours.',
};

export default function ContactPage() {
  return (
    <div className="bg-brand-surface min-h-screen space-y-12 pb-20">
      {/* Header Banner matching Mockup 4 */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary-950 via-emerald-950 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="International Ocean Vessel and Cargo Logistics"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/80 border border-gold-500/40 text-gold-400 text-xs font-bold uppercase tracking-widest">
              <FileText className="w-3.5 h-3.5" />
              <span>International RFQ Portal</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
              CONTACT US / REQUEST A QUOTE
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
              We are here to assist you with your product requirements. Share your specifications and our export team will get back to you with the best possible FOB / CIF quotation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="py-20 text-center text-primary-900 font-bold">
            Loading quotation form...
          </div>
        }>
          <QuoteForm />
        </Suspense>
      </section>
    </div>
  );
}
