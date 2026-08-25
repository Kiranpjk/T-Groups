'use client';

import React from 'react';
import { 
  ThermometerSnowflake, 
  FlaskConical, 
  ScanLine, 
  ShieldCheck, 
  FileCheck, 
  CheckCircle 
} from 'lucide-react';

const QUALITY_PILLARS = [
  {
    icon: ThermometerSnowflake,
    title: 'Unbroken Cold Chain Management',
    desc: 'Rapid forced-air pre-cooling within 4 hours of harvest, storage at commodity-specific temperatures (e.g. 0°C for Grapes, 13.5°C for G9 Bananas), and live IoT data-logger tracked Reefer containers.'
  },
  {
    icon: FlaskConical,
    title: 'Pesticide MRL & Residue Testing',
    desc: 'Every agricultural batch is tested at NABL-accredited laboratories for pesticide Maximum Residue Limits (MRLs), heavy metals, aflatoxins, and microbiological purity conforming to EU & USFDA standards.'
  },
  {
    icon: ScanLine,
    title: 'Electronic Sortex & Sizing',
    desc: 'High-speed Sortex optical sorting machines eliminate discolored, defected, or under-sized produce, ensuring 100% uniformity in export grades (45mm+ / 55mm+ Onions, 8.35mm+ Basmati Rice).'
  },
  {
    icon: ShieldCheck,
    title: 'Pre-Shipment Third-Party Inspection',
    desc: 'Consignments are verified by independent international inspection authorities (SGS, Bureau Veritas, Intertek, TUV) for weight calibration, count, packing integrity, and container stuffing.'
  },
  {
    icon: FileCheck,
    title: 'Phytosanitary & Quarantine Clearance',
    desc: 'Authorized plant quarantine officers inspect each shipment for freedom from quarantine pests, issuing official Phytosanitary Certificates (PSC) recognized by global destination customs.'
  }
];

export function QualityParameters() {
  return (
    <section className="bg-brand-surface rounded-3xl p-8 md:p-12 border border-emerald-100 shadow-sm space-y-10">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gold-600 mb-2">
          <span>Standard Operating Procedures</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-primary-950 font-display tracking-tight">
          OUR 5-STAGE QUALITY CONTROL PROTOCOL
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          From farm-gate sourcing to container vessel departure, we maintain strict adherence to international food safety management systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {QUALITY_PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:shadow-luxury transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-gold-600">STAGE 0{idx + 1}</span>
                <h4 className="text-sm font-bold text-primary-950 font-display">
                  {pillar.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed pt-1">
                  {pillar.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
