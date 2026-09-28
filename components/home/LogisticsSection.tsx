import React from 'react';
import { 
  INDIAN_PORTS, 
  SHIPPING_MODES, 
  INCOTERMS_DATA, 
  EXPORT_DOCUMENTS_LIST 
} from '@/data/packagingLogisticsData';
import { Anchor, Ship, FileText, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function LogisticsSection() {
  return (
    <section className="py-20 bg-neutral-50/70 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
              Global Shipping
            </span>
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Logistics &amp; International Shipping
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            From premier Indian deep-water seaports and air cargo terminals to destination ports worldwide under international Incoterms.
          </p>
        </div>

        {/* 4-Column / Multi-Tab Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Seaports & Air Terminals */}
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0B7A3B] flex items-center justify-center">
                  <Anchor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Major Indian Export Ports</h3>
                  <p className="text-xs text-neutral-500">Fastest transit corridors for perishable &amp; dry cargo</p>
                </div>
              </div>

              <div className="space-y-4">
                {INDIAN_PORTS.slice(0, 4).map((port) => (
                  <div key={port.name} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-neutral-900">{port.name}</span>
                      <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                        {port.state}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-600 mt-1">{port.connectivity}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-neutral-500">Air Cargo Hubs:</span>
              <span className="font-semibold text-neutral-800">Hyderabad (HYD) · Mumbai (BOM) · Chennai (MAA)</span>
            </div>
          </div>

          {/* Incoterms & Shipping Modes */}
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0B7A3B] flex items-center justify-center">
                  <Ship className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Incoterms &amp; Shipping Modes</h3>
                  <p className="text-xs text-neutral-500">Flexible international trade settlement terms</p>
                </div>
              </div>

              <div className="space-y-4">
                {INCOTERMS_DATA.map((inco) => (
                  <div key={inco.term} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-neutral-900">{inco.term}</span>
                      <span className="text-[10px] text-neutral-500 font-medium">{inco.location}</span>
                    </div>
                    <p className="text-[11px] text-neutral-600 mt-1">{inco.responsibility}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-neutral-500">Shipping Modes:</span>
              <span className="font-semibold text-emerald-800">FCL (Reefer/Dry) · LCL Cargo · Air Freight</span>
            </div>
          </div>
        </div>

        {/* Documentation Section */}
        <div className="mt-8 bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0B7A3B] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900">Comprehensive Export Documentation</h3>
              <p className="text-xs text-neutral-500">Complete regulatory dossiers tailored to destination customs</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {EXPORT_DOCUMENTS_LIST.map((doc) => (
              <div key={doc.name} className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B7A3B] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">{doc.name}</h4>
                  <p className="text-[10px] text-neutral-500 mt-0.5">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
