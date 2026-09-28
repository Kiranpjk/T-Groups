import React from 'react';
import { PackagingSection } from '@/components/home/PackagingSection';
import { LogisticsSection } from '@/components/home/LogisticsSection';
import { FinalCTA } from '@/components/home/FinalCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Packaging Standards & Export Logistics | T Group Imports & Exports',
  description: 'Explore export-ready packaging options including corrugated cartons, mesh bags, BOPP woven sacks, and port freight handling across India.'
};

export default function PackagingLogisticsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-neutral-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase mb-4">
            <span>Cargo Integrity &amp; Transit</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Packaging &amp; Logistics
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Buyer-customized export packaging, cold-chain preservation, and efficient freight routing through premier Indian seaports.
          </p>
        </div>
      </div>

      {/* Packaging Section */}
      <PackagingSection />

      {/* Logistics & Ports */}
      <LogisticsSection />

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}
