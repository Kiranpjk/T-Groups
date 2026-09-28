import React from 'react';
import Link from 'next/link';
import { PACKAGING_ITEMS } from '@/data/packagingLogisticsData';
import { ArrowRight, Package } from 'lucide-react';

export function PackagingSection() {
  return (
    <section className="py-20 bg-white border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
              Packaging Standards
            </span>
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Export-Ready Packaging
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Packaging can be customized according to product, destination-market requirements and buyer specifications.
          </p>
        </div>

        {/* Packaging Items Grid (6 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGING_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-50/70 rounded-2xl p-6 border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 hover:bg-white transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0B7A3B] flex items-center justify-center group-hover:bg-[#0B7A3B] group-hover:text-white transition-colors">
                    <Package className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-md">
                    {item.capacity}
                  </span>
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1.5 group-hover:text-[#0B7A3B] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-neutral-500 font-medium mb-3">
                  Suitable for: <span className="text-neutral-700">{item.suitableFor}</span>
                </p>
                <div className="space-y-1.5 pt-3 border-t border-neutral-200/60">
                  {item.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B7A3B]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3">
                <Link
                  href={`/contact?packaging=${encodeURIComponent(item.name)}#rfq-form`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B7A3B] hover:text-[#096631] transition-colors"
                >
                  <span>Select this packaging</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 text-center">
          <Link
            href="/contact#rfq-form"
            className="inline-flex items-center gap-2.5 bg-[#0B7A3B] hover:bg-[#096631] text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all group active:scale-95"
          >
            <span>Discuss Packaging Requirements</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
