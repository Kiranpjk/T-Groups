import React from 'react';
import Link from 'next/link';
import { PACKAGING_ITEMS } from '@/data/packagingLogisticsData';
import { ArrowRight } from 'lucide-react';

export function PackagingSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8F8F6] border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
                Packaging
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight">
              Export-Ready Packaging
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-500 leading-relaxed max-w-xl">
              Packaging can be customized according to product, destination-market requirements and buyer specifications.
            </p>
          </div>
          <Link
            href="/contact#rfq-form"
            className="self-start lg:self-end inline-flex items-center gap-2 border border-[#0B7A3B] text-[#0B7A3B] hover:bg-[#0B7A3B] hover:text-white font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-md transition-colors"
          >
            <span>Discuss Packaging Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Packaging Items Grid (6 items) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 pt-2">
          {PACKAGING_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[22px] p-5 border border-[#DEE2E7] shadow-sm hover:-translate-y-1 hover:border-[#0B7A3B] hover:shadow-[0_16px_30px_-18px_rgba(11,122,59,0.5)] transition-all text-center flex flex-col justify-between group"
            >
              <div>
                <div className="text-2xl mb-2">{item.id === 'custom-packaging' ? '⚙️' : item.id.includes('bag') ? '👜' : '📦'}</div>
                <div className="text-base font-black text-neutral-900">
                  {item.capacity.split(' ')[0] === '100g,' ? 'Custom' : item.capacity.split(' ')[0]}
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#0B7A3B]">
                  {item.id.includes('bag') ? item.id === '20kg-bag' ? 'Bag / Mesh' : 'PP Bag' : item.id === 'custom-packaging' ? 'Per Buyer Spec' : 'Carton'}
                </div>
                <p className="mt-3 text-[10px] leading-relaxed text-neutral-500">{item.suitableFor}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100">
                <Link
                  href={`/contact?packaging=${encodeURIComponent(item.name)}#rfq-form`}
                  className="inline-flex items-center gap-1 text-[10px] font-bold text-[#0B7A3B] hover:text-[#096631] transition-colors uppercase"
                >
                  <span>Select</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
