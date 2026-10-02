import React from 'react';
import { Globe2, MapPin, Building2, Users2, Layers, TrendingUp } from 'lucide-react';

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
    <section className="py-16 sm:py-20 bg-[#F8F8F6] border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative overflow-hidden rounded-[32px] h-[420px] lg:h-[540px]">
            <img
              src="/images/Fresh%20vegetables.png"
              alt="Indian agricultural farmland"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 rounded-[24px] bg-white/90 backdrop-blur-md p-5 text-center">
              <div><strong className="block text-lg text-[#0B7A3B]">2nd</strong><span className="text-[8px] uppercase text-neutral-500">Largest agri producer</span></div>
              <div><strong className="block text-lg text-[#0B7A3B]">15%</strong><span className="text-[8px] uppercase text-neutral-500">Global spice supply</span></div>
              <div><strong className="block text-lg text-[#0B7A3B]">$50B+</strong><span className="text-[8px] uppercase text-neutral-500">Annual agri exports</span></div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
                Sourcing Advantage
            </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight">Why Source from India?</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#737B8C]">India is one of the world&apos;s largest producers and exporters of agricultural products. T Group helps international buyers connect with the right Indian sourcing regions for their product requirements.</p>
            <div className="mt-7 space-y-3">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-[20px] px-4 py-3 border border-[#E0E3E7] hover:border-[#0B7A3B] transition-all flex items-start gap-3 group"
              >
                <span className="w-2 h-2 mt-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                <div><h3 className="text-[11px] font-bold text-neutral-900 group-hover:text-[#0B7A3B] transition-colors">{item.title}</h3><p className="mt-1 text-[10px] text-[#737B8C] leading-relaxed">{item.desc}</p></div>
              </div>
            );
          })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
