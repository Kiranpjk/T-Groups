import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { QualitySection } from '@/components/home/QualitySection';
import { COMPANY_INFO } from '@/data/companyData';

const STANDARDS = [
  {
    title: 'Source Inspection',
    description: 'Products are inspected at the point of collection for quality, freshness, and grade compliance.',
  },
  {
    title: 'Grading & Sorting',
    description: 'Produce is graded and sorted to meet buyer-specified size, weight, and quality standards.',
  },
  {
    title: 'Packing Standards',
    description: 'Packed according to destination-market requirements and buyer specifications.',
  },
  {
    title: 'Documentation',
    description: 'All required export certificates, phytosanitary certificates, and compliance documents are arranged.',
  },
];

export const metadata: Metadata = {
  title: `Quality & Compliance Standards | ${COMPANY_INFO.name}`,
  description: 'Statutory registrations, APEDA, FSSAI, IEC credentials, and 5-stage export quality assurance protocols.',
};

export default function QualityCompliancePage() {
  return (
    <main className="min-h-screen bg-[#F8F8F6] pb-20 text-[#202020]">
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-24 pb-20 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-start">
          <div className="pt-3">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#087A3B] uppercase">
                Standards &amp; Compliance
              </span>
            </div>
            <h1 className="max-w-xl text-4xl sm:text-5xl lg:text-[52px] leading-[1.08] font-black tracking-tight">
              Quality &amp; Compliance
            </h1>
            <p className="max-w-xl mt-5 text-sm sm:text-base leading-relaxed text-[#737B8C]">
              Quality, documentation and destination-market requirements are integral to every shipment we coordinate. We work to ensure that products meet the standards required for international export and destination-market entry.
            </p>
          </div>

          <div className="space-y-4">
            {STANDARDS.map((standard, index) => (
              <div
                key={standard.title}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-fadeIn opacity-0 rounded-[22px] border border-[#E0E3E7] bg-white px-6 py-5 shadow-[0_4px_14px_rgba(31,38,45,0.02)] hover:border-[#0B7A3B] hover:shadow-[0_14px_32px_rgba(11,122,59,0.1)] transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
                  <div>
                    <h2 className="text-sm font-bold">{standard.title}</h2>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#737B8C]">{standard.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Descriptive Quality & Compliance Hero Visual */}
        <div className="mt-12 relative overflow-hidden rounded-[28px] h-[340px] sm:h-[420px] shadow-lg border border-[#E0E3E7]">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80"
            alt="Quality Control and Laboratory Inspection for Export Produce"
            fill
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                Batch Quality & Traceability Protocols
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Farm-Gate to Destination Port Quality Assurance
              </h3>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                Every consignment undergoes multi-stage inspections: physical sorting, MRL chemical residue screening, moisture calibration, and sealed export packaging.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
              <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
                ✓ APEDA Certified
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
                ✓ FSSAI Standards
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
                ✓ Phytosanitary Cleared
              </span>
            </div>
          </div>
        </div>
      </section>

      <QualitySection />
    </main>
  );
}
