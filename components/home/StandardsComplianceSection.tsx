import React from 'react';

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

export function StandardsComplianceSection() {
  return (
    <section className="bg-[#F8F8F6] border-b border-neutral-200/60 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-start">
          <div className="pt-3">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#087A3B] uppercase">
                Standards &amp; Compliance
              </span>
            </div>
            <h2 className="max-w-xl text-4xl sm:text-5xl lg:text-[52px] leading-[1.08] font-black tracking-tight text-[#202020]">
              Quality &amp; Compliance
            </h2>
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
                    <h3 className="text-sm font-bold text-[#202020]">{standard.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#737B8C]">{standard.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}