import React from 'react';
import { ShieldCheck, CheckSquare, PackageCheck, Globe2 } from 'lucide-react';

export function TrustSection() {
  const trustFeatures = [
    {
      id: 'direct-sourcing',
      title: 'Direct Sourcing',
      icon: ShieldCheck,
      description: 'Established agricultural sourcing networks across multiple Indian growing regions, connected directly to farms and collection centres.'
    },
    {
      id: 'quality-control',
      title: 'Quality Control',
      icon: CheckSquare,
      description: 'Products are inspected, graded and packed according to buyer requirements and international export standards before shipment.'
    },
    {
      id: 'export-ready',
      title: 'Export Ready',
      icon: PackageCheck,
      description: 'Buyer-specific packaging, export documentation, customs coordination and logistics management from source to destination.'
    },
    {
      id: 'global-delivery',
      title: 'Global Delivery',
      icon: Globe2,
      description: 'Coordination across road, sea and air freight depending on product type, shipment volume and destination requirements.'
    }
  ];

  return (
    <section className="relative py-20 bg-neutral-50/70 border-b border-neutral-200/60 overflow-hidden">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
              Your Trusted Partner
            </span>
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Your Trusted Sourcing Partner from India
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            T Group connects international buyers with Indian agricultural and food products through responsible sourcing, quality control, export packaging, documentation and logistics coordination.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="bg-white rounded-2xl p-7 border border-neutral-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(11,122,59,0.12)] hover:border-emerald-200 transition-all duration-300 flex flex-col group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50/80 border border-emerald-100 flex items-center justify-center text-[#0B7A3B] mb-6 group-hover:scale-110 group-hover:bg-[#0B7A3B] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2.5 group-hover:text-[#0B7A3B] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
