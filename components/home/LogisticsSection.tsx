import React from 'react';
import { 
  INDIAN_PORTS, 
  SHIPPING_MODES, 
  INCOTERMS_DATA, 
  EXPORT_DOCUMENTS_LIST 
} from '@/data/packagingLogisticsData';
import { Anchor, Ship, FileText, CheckCircle2 } from 'lucide-react';

export function LogisticsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8F8F6] border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
              Logistics
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight">
            Logistics &amp; International Shipping
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white rounded-[28px] p-6 border border-[#DEE2E7] min-h-[245px]">
            <div className="flex items-center gap-3 mb-6"><Anchor className="w-5 h-5 text-[#0B7A3B]" /><h3 className="text-sm font-bold">Ports</h3></div>
            <div className="space-y-3">{INDIAN_PORTS.slice(0, 4).map((port) => <p key={port.name} className="flex gap-2 text-xs text-[#737B8C]"><span className="w-2 h-2 mt-1 rounded-full bg-[#D4AF37] shrink-0" />{port.name.replace(' / Nhava Sheva (Mumbai)', '').replace(' & Visakhapatnam Ports', '')}</p>)}</div>
          </div>
          <div className="bg-white rounded-[28px] p-6 border border-[#DEE2E7] min-h-[245px]">
            <div className="flex items-center gap-3 mb-6"><Ship className="w-5 h-5 text-[#0B7A3B]" /><h3 className="text-sm font-bold">Shipping Modes</h3></div>
            <div className="space-y-3">{SHIPPING_MODES.map((mode) => <p key={mode.mode} className="flex gap-2 text-xs text-[#737B8C]"><span className="w-2 h-2 mt-1 rounded-full bg-[#D4AF37] shrink-0" />{mode.mode}</p>)}</div>
          </div>
          <div className="bg-white rounded-[28px] p-6 border border-[#DEE2E7] min-h-[245px]">
            <div className="flex items-center gap-3 mb-6"><FileText className="w-5 h-5 text-[#0B7A3B]" /><h3 className="text-sm font-bold">Incoterms</h3></div>
            <div className="flex flex-wrap gap-2">{INCOTERMS_DATA.map((inco) => <span key={inco.term} className="rounded-full border border-[#DEE2E7] px-3 py-2 text-xs font-bold text-[#0B7A3B]">{inco.term.split(' ')[0]}</span>)}</div>
          </div>
          <div className="bg-white rounded-[28px] p-6 border border-[#DEE2E7] min-h-[245px]">
            <div className="flex items-center gap-3 mb-6"><CheckCircle2 className="w-5 h-5 text-[#0B7A3B]" /><h3 className="text-sm font-bold">Documentation</h3></div>
            <div className="space-y-3">{EXPORT_DOCUMENTS_LIST.slice(0, 6).map((doc) => <p key={doc.name} className="flex gap-2 text-xs text-[#737B8C]"><span className="w-2 h-2 mt-1 rounded-full bg-[#D4AF37] shrink-0" />{doc.name.replace(' & Customs Clearance', '')}</p>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
