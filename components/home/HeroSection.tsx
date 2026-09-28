'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Check } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-neutral-900 text-white">
      {/* High-Resolution Agricultural Farm Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=2000&q=85"
          alt="Indian agricultural fields and farm harvesting"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Apple-like subtle dark gradient overlays to ensure razor-sharp typography readability */}
        <div className="absolute inset-0 bg-neutral-950/45" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950/60 to-transparent" />
      </div>

      {/* Top spacing */}
      <div className="relative z-10 pt-10 sm:pt-14 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider text-neutral-200 uppercase mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span>India-Based Agricultural Exporter</span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight leading-[1.08] max-w-4xl text-white">
          Premium Indian <br className="hidden sm:inline" />
          <span className="text-[#D4AF37]">Agricultural</span> <br className="hidden sm:inline" />
          Products, <br className="hidden sm:inline" />
          Delivered <br className="hidden sm:inline" />
          to the World.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-200 max-w-2xl font-normal leading-relaxed">
          T Group Imports &amp; Exports connects international buyers with carefully sourced Indian agricultural and food products — from farm to your destination port.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact#rfq-form"
            className="inline-flex items-center gap-2 bg-[#0B7A3B] hover:bg-[#096631] text-white font-bold text-sm tracking-wide px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group Export Team, I would like to talk regarding agricultural commodity exports.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 hover:border-white/40 text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Talk to Export Team</span>
          </Link>
        </div>
      </div>

      {/* Bottom Row: Left Compliance Pills & Right Stats Cards */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full pb-8 pt-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          {/* Left Compliance Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-emerald-500/30 text-xs font-semibold text-emerald-200">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              APEDA Registered
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-emerald-500/30 text-xs font-semibold text-emerald-200">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              FSSAI Compliant
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-emerald-500/30 text-xs font-semibold text-emerald-200">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              IEC Certified
            </span>
          </div>

          {/* Right Stats Cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full lg:w-auto">
            <div className="bg-white/90 backdrop-blur-md text-neutral-900 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border border-white/40 shadow-lg text-center">
              <div className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">5+</div>
              <div className="text-[10px] sm:text-[11px] font-bold text-neutral-600 uppercase tracking-wider mt-0.5">Product Categories</div>
            </div>
            <div className="bg-white/90 backdrop-blur-md text-neutral-900 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border border-white/40 shadow-lg text-center">
              <div className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">8+</div>
              <div className="text-[10px] sm:text-[11px] font-bold text-neutral-600 uppercase tracking-wider mt-0.5">Export Markets</div>
            </div>
            <div className="bg-white/90 backdrop-blur-md text-neutral-900 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border border-white/40 shadow-lg text-center">
              <div className="text-lg sm:text-2xl font-black text-neutral-950 tracking-tight">FCL/LCL</div>
              <div className="text-[10px] sm:text-[11px] font-bold text-neutral-600 uppercase tracking-wider mt-0.5">Shipment Options</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex flex-col items-center justify-center text-neutral-400 text-[10px] font-semibold tracking-widest uppercase">
          <span>Scroll</span>
          <div className="w-px h-4 bg-neutral-500/50 mt-1 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
