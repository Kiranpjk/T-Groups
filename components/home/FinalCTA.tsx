import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#063b1c] via-[#0B7A3B] to-[#042813] text-white relative overflow-hidden">
      {/* Subtle gold grid effect */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase mb-6">
          <span>Start Your Supply Partnership</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white mb-6">
          Looking for a Reliable <br className="hidden sm:inline" />
          Indian Sourcing Partner?
        </h2>

        <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Tell us your product, quantity and destination. Let&apos;s discuss your export requirement and establish a reliable long-term supply relationship.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact#rfq-form"
            className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-[#0B7A3B] font-extrabold text-xs sm:text-sm tracking-wider uppercase px-8 py-4 rounded-xl shadow-xl transition-all duration-200 active:scale-95 group"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group Export Team, I would like to talk regarding agricultural commodity exports.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/30 text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-7 py-4 rounded-xl transition-all"
          >
            <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            <span>TALK TO EXPORT TEAM</span>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-emerald-200/80 font-medium">
          <span>✓ Direct Mandi &amp; Farm Sourcing</span>
          <span>✓ Pre-Shipment Quality Testing</span>
          <span>✓ FCL &amp; Reefer Port Dispatch</span>
        </div>
      </div>
    </section>
  );
}
