'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EXPORT_COUNTRIES } from '@/data/exportMarketsData';
import { InteractiveWorldMap } from '@/components/export-markets/InteractiveWorldMap';

export function ExportMarketsPreview() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
              Global Reach
            </span>
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            From India to Global Markets
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-bold tracking-widest text-neutral-500 uppercase">
            Current &amp; Target Export Markets
          </p>
        </div>

        {/* Real country-outline map */}
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 shadow-inner">
          <InteractiveWorldMap compact />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 flex flex-wrap items-center gap-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-neutral-200 text-[11px] font-semibold text-neutral-700 shadow-sm">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
              <span>India (Origin)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Export Markets</span>
            </div>
          </div>
        </div>

        {/* Export market cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mt-8">
          {EXPORT_COUNTRIES.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedCountry(selectedCountry === country.id ? null : country.id)}
              className={`bg-white rounded-2xl p-4 border transition-all duration-300 text-center flex flex-col items-center justify-center cursor-pointer shadow-sm hover:-translate-y-1.5 hover:shadow-[0_14px_30px_-16px_rgba(11,122,59,0.6)] hover:border-emerald-400 hover:bg-emerald-50/40 group ${country.status === 'active' ? 'border-neutral-200' : 'border-dashed border-neutral-200'}`}
            >
              <span className="text-2xl sm:text-3xl mb-1.5 select-none transition-transform duration-300 group-hover:scale-110">{country.flag}</span>
              <span className="text-xs font-bold text-neutral-900 group-hover:text-[#0B7A3B] truncate w-full transition-colors">{country.name}</span>
              <div className="mt-1 flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${country.status === 'active' ? 'bg-[#0B7A3B]' : 'bg-neutral-400'}`} />
                <span className={`text-[10px] font-bold capitalize ${country.status === 'active' ? 'text-[#0B7A3B]' : 'text-neutral-500'}`}>{country.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
