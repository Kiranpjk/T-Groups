import React from 'react';
import { HowWeExportTimeline } from '@/components/home/HowWeExportTimeline';
import { ExportGallery } from '@/components/home/ExportGallery';
import { LogisticsSection } from '@/components/home/LogisticsSection';
import { FinalCTA } from '@/components/home/FinalCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Export Process & Workflow | T Group Imports & Exports',
  description: 'Learn how T Group executes agricultural commodity exports from initial buyer specifications and quality inspection to container port dispatch and delivery.'
};

export default function OurProcessPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-neutral-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: `linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase mb-4">
            <span>Standard Operating Procedure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Our Export Process
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            A transparent, disciplined 8-step export lifecycle from buyer requirement to vessel loading and destination port delivery.
          </p>
        </div>
      </div>

      {/* 8-Step Timeline */}
      <HowWeExportTimeline />

      {/* Export Traceability Gallery */}
      <ExportGallery />

      {/* Logistics & Ports Details */}
      <LogisticsSection />

      {/* CTA */}
      <FinalCTA />
    </main>
  );
}
