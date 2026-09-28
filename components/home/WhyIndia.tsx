import React from 'react';
import { 
  Globe2, 
  MapPin, 
  Building2, 
  Users2, 
  Layers, 
  TrendingUp 
} from 'lucide-react';
import Link from 'next/link';

export function WhyIndia() {
  const advantages = [
    {
      title: 'Diverse Agricultural Production',
      icon: Globe2,
      desc: 'With multiple agro-climatic zones, India produces an extensive range of fruits, vegetables, grains, and spices throughout all 12 months.'
    },
    {
      title: 'Multiple Regional Belts',
      icon: MapPin,
      desc: 'Specialized regional clusters (e.g., Guntur for chillies, Nashik for onions, Jalgaon for bananas, Punjab for Basmati) ensure high crop quality.'
    },
    {
      title: 'Established Export Infrastructure',
      icon: Building2,
      desc: 'Modern APEDA packhouses, irradiation facilities, automated sortex mills, and major deep-water ports guarantee efficient cargo turnaround.'
    },
    {
      title: 'Extensive Farming Networks',
      icon: Users2,
      desc: 'Direct agricultural sourcing gives international buyers reliable access to large harvest volumes and price stability.'
    },
    {
      title: 'Flexible Packaging Options',
      icon: Layers,
      desc: 'Customized packaging capabilities from 100g retail bags to 50kg bulk bags and private-label supermarket branding.'
    },
    {
      title: 'Strong Global Sourcing Demand',
      icon: TrendingUp,
      desc: 'Indian agricultural commodities are recognized worldwide for authentic aroma, taste, superior grain elongation, and nutrition.'
    }
  ];

  return (
    <section className="py-20 bg-neutral-50/70 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
              Strategic Sourcing
            </span>
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Why Source from India?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            India is the world&apos;s powerhouse in agricultural production. T Group acts as your on-ground partner, connecting you to the right sourcing regions with guaranteed quality.
          </p>
        </div>

        {/* 6 Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0B7A3B] flex items-center justify-center mb-5 group-hover:bg-[#0B7A3B] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-[#0B7A3B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
