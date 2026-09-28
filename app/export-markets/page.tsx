import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ExportMarketsPreview } from '@/components/home/ExportMarketsPreview';
import { EXPORT_COUNTRIES, EXPORT_STATS } from '@/data/exportMarketsData';
import { COMPANY_INFO } from '@/data/companyData';
import { 
  Globe2, 
  ShieldCheck, 
  Handshake, 
  Ship, 
  ArrowRight, 
  MessageSquare,
  Clock,
  Anchor
} from 'lucide-react';

export const metadata: Metadata = {
  title: `Current & Target Export Markets | ${COMPANY_INFO.name}`,
  description: 'Global agricultural supply corridors from India to UAE, Saudi Arabia, Sri Lanka, Nepal, Bangladesh, Malaysia, Canada, and Guyana.',
};

export default function ExportMarketsPage() {
  const active = EXPORT_COUNTRIES.filter(c => c.status === 'active');
  const target = EXPORT_COUNTRIES.filter(c => c.status === 'target');

  return (
    <main className="min-h-screen bg-neutral-50/50 pb-20">
      {/* Header Banner */}
      <section className="relative pt-24 pb-20 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="International Ocean Freight and Trade"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/20 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
              <Globe2 className="w-3.5 h-3.5" />
              <span>International Trade Corridors</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Export Markets
            </h1>

            <p className="text-base sm:text-lg text-[#D4AF37] font-semibold">
              Current &amp; Target Export Destinations
            </p>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
              T Group connects global buyers with Indian agricultural and food products through responsible sourcing, strict quality control, and seamless multimodal shipping coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Main Map & Capabilities */}
      <ExportMarketsPreview />

      {/* Detailed Country Cards breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
              Destination Directory
            </span>
            <span className="w-4 h-[1.5px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Markets We Serve &amp; Target
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600">
            Direct vessel connections, transit timelines, and fast-moving export lines per region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPORT_COUNTRIES.map((country) => (
            <div
              key={country.id}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{country.flag}</span>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    country.status === 'active' ? 'bg-emerald-50 text-[#0B7A3B] border border-emerald-200' : 'bg-neutral-100 text-neutral-600'
                  }`}>
                    {country.status === 'active' ? 'Active Market' : 'Target Market'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 mb-1">{country.name}</h3>
                <span className="text-[11px] text-neutral-500 font-medium block mb-3">{country.region}</span>

                <div className="space-y-2 text-xs text-neutral-600 pt-3 border-t border-neutral-100">
                  <div className="flex items-start gap-1.5">
                    <Anchor className="w-3.5 h-3.5 text-[#0B7A3B] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-neutral-800">Primary Ports:</span>
                      <p className="text-[11px] text-neutral-600">{country.ports.join(', ')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-neutral-800">Transit (Sea):</span>
                      <p className="text-[11px] text-neutral-600">{country.transitTimeSea}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-100">
                <Link
                  href={`/contact?country=${encodeURIComponent(country.name)}#rfq-form`}
                  className="w-full py-2 text-center text-xs font-bold text-[#0B7A3B] hover:text-white bg-emerald-50 hover:bg-[#0B7A3B] rounded-lg transition-colors uppercase tracking-wider block"
                >
                  Request Rate to {country.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
