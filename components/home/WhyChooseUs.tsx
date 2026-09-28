import React from 'react';
import { 
  Sprout, 
  ShieldCheck, 
  Package, 
  Truck, 
  Users, 
  MessageSquareText 
} from 'lucide-react';

export function WhyChooseUs() {
  const pillars = [
    {
      id: 'direct-sourcing',
      title: 'DIRECT SOURCING',
      icon: Sprout,
      description: 'We work with established agricultural sourcing networks across India, connecting directly with contracted farms and primary markets.'
    },
    {
      id: 'quality-control',
      title: 'QUALITY CONTROL',
      icon: ShieldCheck,
      description: 'Products are inspected, graded and packed according to buyer requirements, eliminating substandard batches before dispatch.'
    },
    {
      id: 'export-packaging',
      title: 'EXPORT PACKAGING',
      icon: Package,
      description: 'Packaging can be customized according to destination and buyer specifications, including private label retail packing and bulk mesh/PP sacks.'
    },
    {
      id: 'logistics',
      title: 'LOGISTICS',
      icon: Truck,
      description: 'We coordinate inland transportation, customs clearance, port documentation, and international ocean/air freight booking.'
    },
    {
      id: 'buyer-focused',
      title: 'BUYER-FOCUSED',
      icon: Users,
      description: 'Our supply model is built around buyer specifications, destination country import requirements, and strict shipment delivery schedules.'
    },
    {
      id: 'consistent-communication',
      title: 'CONSISTENT COMMUNICATION',
      icon: MessageSquareText,
      description: 'From initial quotation to final destination arrival, buyers receive transparent communication, shipment tracking, and complete documentation.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
              Why T Group?
            </span>
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Built for Global Importers &amp; Wholesalers
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            We operate as your dedicated Indian procurement and export desk, eliminating intermediary variance through disciplined quality and logistics execution.
          </p>
        </div>

        {/* 6 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-neutral-50/70 rounded-2xl p-8 border border-neutral-200/80 hover:border-emerald-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-[#0B7A3B] mb-6 shadow-sm group-hover:bg-[#0B7A3B] group-hover:text-white group-hover:border-[#0B7A3B] transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-black tracking-wider text-neutral-900 mb-3 uppercase group-hover:text-[#0B7A3B] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
