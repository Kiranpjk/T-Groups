'use client';

import React from 'react';
import { InteractiveWorldMap } from '../export-markets/InteractiveWorldMap';
import { EXPORT_STATS } from '@/data/exportMarketsData';
import { Ship, Sparkles } from 'lucide-react';
import { RollButton } from '@/components/ui/RollButton';

export function ExportMarketsPreview() {
  return (
    <section className="py-16 sm:py-20 bg-[#07180E] relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Worldwide Logistics &amp; Trade Footprint</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-display text-white leading-none">
              EXPORT
              <br />
              <span className="text-emerald-400">DESTINATIONS</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-emerald-200/60 leading-relaxed lg:mb-1">
            Reefer container vessels and air cargo routes connected directly from JNPT (Nhava Sheva) and Mundra ports to 50+ global hubs.
          </p>
        </div>
      </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-y border-emerald-800/70">
          {EXPORT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="px-5 py-8 text-left sm:text-center border-r border-emerald-800/70 last:border-r-0 group"
            >
              <div className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight group-hover:text-gold-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mt-2">
                {stat.label}
              </div>
              <div className="text-[11px] text-emerald-200/50 mt-1">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        <InteractiveWorldMap />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-6 sm:px-10 lg:px-16 py-8 border-t border-emerald-800/70">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0">
              <Ship className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold font-display text-white">
                Exporting to 50+ Countries Across 5 Continents
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200/70 mt-1">
                Explore our full destination seaport directories, customs clearance guidelines, and transit times.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <RollButton
              href="/export-markets"
              text="Explore All Markets"
              variant="gold"
              size="md"
            />
          </div>
        </div>
    </section>
  );
}
