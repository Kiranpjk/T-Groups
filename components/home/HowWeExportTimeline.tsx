import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HowWeExportTimeline() {
  const steps = [
    {
      step: '01',
      title: 'Buyer Requirement',
      description: 'We receive your product, quantity, quality and destination specifications.'
    },
    {
      step: '02',
      title: 'Product Sourcing',
      description: 'We source the product from our established agricultural network across India.'
    },
    {
      step: '03',
      title: 'Quality Inspection',
      description: 'Products are inspected at source to meet export quality standards.'
    },
    {
      step: '04',
      title: 'Grading & Packing',
      description: 'Graded and packed per buyer specifications and destination requirements.'
    },
    {
      step: '05',
      title: 'Documentation',
      description: 'All export documents are prepared — invoice, packing list, certificates.'
    },
    {
      step: '06',
      title: 'Customs Clearance',
      description: 'Export customs clearance and regulatory compliance are coordinated.'
    },
    {
      step: '07',
      title: 'International Shipment',
      description: 'FCL, LCL or air cargo dispatched from the applicable Indian port.'
    },
    {
      step: '08',
      title: 'Delivery',
      description: 'Shipment arrives at destination port per agreed Incoterm.'
    }
  ];

  return (
    <section className="relative py-20 bg-neutral-50/70 border-b border-neutral-200/60 overflow-hidden">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
              Export Workflow
            </span>
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            From Requirement to Delivery
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            A structured, transparent export process from your first enquiry to arrival at your destination port.
          </p>
        </div>

        {/* 8-Step Grid (Screenshot 4 layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col group"
            >
              {/* Step Header with Green Dot and connector hint */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-black text-[#0B7A3B] tracking-wider font-mono">
                  {item.step}
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0B7A3B] ring-4 ring-emerald-50" />
                  {idx < steps.length - 1 && (
                    <span className="w-6 h-[1.5px] bg-[#D4AF37]/50 hidden lg:inline-block" />
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-[#0B7A3B] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <Link
            href="/contact#rfq-form"
            className="inline-flex items-center gap-2.5 bg-[#0B7A3B] hover:bg-[#096631] text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all group active:scale-95"
          >
            <span>Start Your Export Enquiry</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
