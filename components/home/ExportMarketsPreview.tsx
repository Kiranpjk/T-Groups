'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EXPORT_COUNTRIES } from '@/data/exportMarketsData';
import { ExportCapabilities } from './ExportCapabilities';
import { Globe, ArrowRight, Plane, Ship } from 'lucide-react';

export function ExportMarketsPreview() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const activeMarkets = EXPORT_COUNTRIES.filter(c => c.status === 'active');
  const targetMarkets = EXPORT_COUNTRIES.filter(c => c.status === 'target');

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

        {/* World Map Container (Matches Screenshot 5 visual styling) */}
        <div className="relative bg-neutral-50/50 rounded-3xl border border-neutral-200/80 p-4 sm:p-8 lg:p-12 overflow-hidden shadow-inner">
          {/* SVG Map Visualization */}
          <div className="relative w-full aspect-[2/1] min-h-[300px] flex items-center justify-center">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Stylized Continents Outlines/Blobs matching screenshot 5 */}
              {/* North America */}
              <ellipse cx="230" cy="180" rx="90" ry="60" fill="#E2F0D9" fillOpacity="0.65" />
              {/* South America */}
              <ellipse cx="330" cy="330" rx="60" ry="75" fill="#E2F0D9" fillOpacity="0.65" />
              {/* Europe & Africa */}
              <ellipse cx="490" cy="270" rx="65" ry="90" fill="#E2F0D9" fillOpacity="0.65" />
              {/* Middle East & Asia */}
              <ellipse cx="610" cy="230" rx="95" ry="70" fill="#E2F0D9" fillOpacity="0.65" />
              {/* Southeast Asia / Australia */}
              <ellipse cx="780" cy="340" rx="60" ry="50" fill="#E2F0D9" fillOpacity="0.65" />

              {/* Connecting Flight/Shipping Arcs from India (Origin: 620, 260) */}
              {/* Arc to Canada (230, 160) */}
              <path
                d="M 620 260 Q 420 100 230 160"
                stroke="#0B7A3B"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                strokeOpacity="0.4"
              />
              {/* Arc to Guyana (330, 290) */}
              <path
                d="M 620 260 Q 470 300 330 290"
                stroke="#0B7A3B"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                strokeOpacity="0.4"
              />
              {/* Arc to UAE (560, 230) */}
              <path
                d="M 620 260 Q 590 235 560 230"
                stroke="#0B7A3B"
                strokeWidth="2"
                strokeOpacity="0.7"
              />
              {/* Arc to Saudi Arabia (530, 245) */}
              <path
                d="M 620 260 Q 570 245 530 245"
                stroke="#0B7A3B"
                strokeWidth="2"
                strokeOpacity="0.7"
              />
              {/* Arc to Sri Lanka (635, 305) */}
              <path
                d="M 620 260 Q 630 280 635 305"
                stroke="#0B7A3B"
                strokeWidth="2"
                strokeOpacity="0.7"
              />
              {/* Arc to Nepal (645, 230) */}
              <path
                d="M 620 260 Q 635 240 645 230"
                stroke="#0B7A3B"
                strokeWidth="2"
                strokeOpacity="0.7"
              />
              {/* Arc to Bangladesh (665, 245) */}
              <path
                d="M 620 260 Q 645 250 665 245"
                stroke="#0B7A3B"
                strokeWidth="2"
                strokeOpacity="0.7"
              />
              {/* Arc to Malaysia (730, 295) */}
              <path
                d="M 620 260 Q 680 290 730 295"
                stroke="#0B7A3B"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                strokeOpacity="0.5"
              />

              {/* Origin Marker: INDIA */}
              <circle cx="620" cy="260" r="14" fill="#0B7A3B" fillOpacity="0.2" className="animate-ping" />
              <circle cx="620" cy="260" r="7" fill="#0B7A3B" />
              <circle cx="620" cy="260" r="3" fill="#D4AF37" />
              <text x="620" y="285" fill="#0B7A3B" fontSize="12" fontWeight="800" textAnchor="middle" letterSpacing="1">
                INDIA
              </text>

              {/* Destination Markers */}
              {/* Canada (CA) */}
              <circle cx="230" cy="160" r="4" fill="#6B7280" />
              <text x="230" y="150" fill="#4B5563" fontSize="10" fontWeight="600" textAnchor="middle">CA</text>

              {/* Guyana (GY) */}
              <circle cx="330" cy="290" r="4" fill="#6B7280" />
              <text x="330" y="280" fill="#4B5563" fontSize="10" fontWeight="600" textAnchor="middle">GY</text>

              {/* UAE */}
              <circle cx="560" cy="230" r="5" fill="#0B7A3B" />
              <text x="560" y="220" fill="#0B7A3B" fontSize="10" fontWeight="700" textAnchor="middle">UAE</text>

              {/* Saudi Arabia (KSA) */}
              <circle cx="530" cy="245" r="5" fill="#0B7A3B" />
              <text x="530" y="260" fill="#0B7A3B" fontSize="9" fontWeight="700" textAnchor="middle">KSA</text>

              {/* Nepal (NPL) */}
              <circle cx="645" cy="230" r="4.5" fill="#0B7A3B" />
              <text x="655" y="222" fill="#0B7A3B" fontSize="9" fontWeight="700">NPL</text>

              {/* Bangladesh (BD) */}
              <circle cx="665" cy="245" r="4.5" fill="#0B7A3B" />
              <text x="675" y="243" fill="#0B7A3B" fontSize="9" fontWeight="700">BD</text>

              {/* Sri Lanka (LK) */}
              <circle cx="635" cy="305" r="4.5" fill="#0B7A3B" />
              <text x="650" y="308" fill="#0B7A3B" fontSize="9" fontWeight="700">LK</text>

              {/* Malaysia (MY) */}
              <circle cx="730" cy="295" r="4" fill="#6B7280" />
              <text x="730" y="312" fill="#4B5563" fontSize="9" fontWeight="600" textAnchor="middle">MY</text>
            </svg>

            {/* Map Legend */}
            <div className="absolute bottom-3 left-4 sm:bottom-6 sm:left-8 flex flex-wrap items-center gap-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-neutral-200 text-[11px] font-semibold text-neutral-700 shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0B7A3B]" />
                <span>India (Origin)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Active Markets</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                <span>Target Markets</span>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Country Cards Grid (Screenshot 5 layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mt-8">
          {EXPORT_COUNTRIES.map((country) => (
            <div
              key={country.id}
              onClick={() => setSelectedCountry(selectedCountry === country.id ? null : country.id)}
              className={`bg-white rounded-2xl p-4 border transition-all text-center flex flex-col items-center justify-center cursor-pointer shadow-sm hover:shadow ${
                country.status === 'active'
                  ? 'border-neutral-200 hover:border-emerald-300'
                  : 'border-dashed border-neutral-200 hover:border-neutral-400'
              }`}
            >
              <span className="text-2xl sm:text-3xl mb-1.5 select-none">{country.flag}</span>
              <span className="text-xs font-bold text-neutral-900 truncate w-full">{country.name}</span>
              <div className="mt-1 flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${country.status === 'active' ? 'bg-[#0B7A3B]' : 'bg-neutral-400'}`} />
                <span className={`text-[10px] font-bold capitalize ${country.status === 'active' ? 'text-[#0B7A3B]' : 'text-neutral-500'}`}>
                  {country.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Export Capabilities Section (Screenshot 5) */}
        <ExportCapabilities />
      </div>
    </section>
  );
}
