import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { InteractiveWorldMap } from '@/components/export-markets/InteractiveWorldMap';
import { CountryCardsGrid } from '@/components/export-markets/CountryCardsGrid';
import { EXPORT_STATS } from '@/data/exportMarketsData';
import { COMPANY_INFO } from '@/data/companyData';
import { 
  Globe2, 
  ShieldCheck, 
  Handshake, 
  Ship, 
  ArrowRight, 
  MessageSquare 
} from 'lucide-react';

export const metadata: Metadata = {
  title: `Export Markets & Global Trade Network | ${COMPANY_INFO.name}`,
  description: 'Exporting Indian agricultural produce to 50+ countries across the Middle East, Southeast Asia, Europe, and North America.',
};

export default function ExportMarketsPage() {
  return (
    <div className="bg-brand-surface min-h-screen space-y-16 pb-20">
      {/* Header Banner matching Mockup 2 */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary-950 via-emerald-950 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="International Ocean Freight and Trade"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-gold-500/40 text-gold-400 text-xs font-bold uppercase tracking-widest">
              <Globe2 className="w-3.5 h-3.5" />
              <span>International Trade Corridors</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
              EXPORT MARKETS
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-emerald-200">
              FROM INDIA TO THE WORLD
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
              T Group Imports & Exports proudly serves clients across the globe with premium quality Indian agricultural products, backed by reliable multimodal shipping lines.
            </p>
          </div>

          {/* 3 Top Trust Badges (Mockup 2) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-emerald-900/40 backdrop-blur-md border border-emerald-700/50 rounded-2xl p-4 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Global Reach</h4>
                <p className="text-[11px] text-emerald-200/70">Serving 50+ countries worldwide</p>
              </div>
            </div>

            <div className="bg-emerald-900/40 backdrop-blur-md border border-emerald-700/50 rounded-2xl p-4 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                <Handshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Trusted Worldwide</h4>
                <p className="text-[11px] text-emerald-200/70">Building long-term relationships</p>
              </div>
            </div>

            <div className="bg-emerald-900/40 backdrop-blur-md border border-emerald-700/50 rounded-2xl p-4 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quality Assured</h4>
                <p className="text-[11px] text-emerald-200/70">Consistent quality, every shipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Interactive World Map */}
        <InteractiveWorldMap />

        {/* 5 Stats Strip (Mockup 2) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {EXPORT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-emerald-100 rounded-2xl p-5 text-center shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-black text-primary-900 font-display">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-gray-800 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-gray-500 mt-0.5">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Countries We Export To Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black font-display text-primary-950">
              COUNTRIES WE EXPORT TO
            </h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-2 rounded-full" />
            <p className="text-xs text-gray-500 mt-2">
              Browse our regular export destinations and direct shipping routes.
            </p>
          </div>

          <CountryCardsGrid />
        </div>

        {/* Bottom Banner matching Mockup 2 */}
        <div className="bg-gradient-to-r from-primary-950 via-primary-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 border border-gold-500/40 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              LET&apos;S GROW TOGETHER
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/80">
              Looking for a reliable supplier of Indian agricultural products? We are here to serve your market.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold text-xs sm:text-sm py-3 px-6 rounded-xl transition-all shadow-md"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group, I would like to explore import opportunities for my country.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl border border-white/20 transition-all backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
