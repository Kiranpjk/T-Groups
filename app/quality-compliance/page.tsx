import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { QualitySection } from '@/components/home/QualitySection';
import { QualityParameters } from '@/components/quality/QualityParameters';
import { COMPANY_INFO } from '@/data/companyData';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare 
} from 'lucide-react';

export const metadata: Metadata = {
  title: `Quality & Compliance Standards | ${COMPANY_INFO.name}`,
  description: 'Statutory registrations, APEDA, FSSAI, IEC credentials, and 5-stage export quality assurance protocols.',
};

export default function QualityCompliancePage() {
  return (
    <main className="min-h-screen bg-neutral-50/50 pb-20">
      {/* Header Banner */}
      <section className="relative pt-24 pb-20 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="Quality Control and Laboratory Inspection"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/20 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Statutory Compliance &amp; Assurance</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Quality &amp; Compliance
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
              We operate under strict statutory standards set by Indian regulatory export bodies. Quality inspection, phytosanitary certification, and destination compliance are integrated into every shipment.
            </p>
          </div>
        </div>
      </section>

      {/* Statutory Certifications Section */}
      <QualitySection />

      {/* 5-Stage Protocol */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <QualityParameters />
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-[#0B7A3B] text-white rounded-3xl p-8 sm:p-10 border border-white/15 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need a Custom Lab Test or Third-Party Inspection?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300">
              We coordinate SGS / Geo-Chem / Intertek pre-shipment inspections tailored to your destination requirements.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <Link
              href="/contact#rfq-form"
              className="inline-flex items-center gap-2 bg-[#0B7A3B] hover:bg-[#096631] text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-xl transition-all shadow-md"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group, I would like to inquire regarding SGS testing and export compliance.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider py-3 px-5 rounded-xl border border-white/20 transition-all backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
