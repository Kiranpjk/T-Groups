import React from 'react';
import { ArrowRight } from 'lucide-react';

export function ExportGallery() {
  const journeySteps = [
    { step: '01', name: 'Farm Gate', desc: 'Contracted harvest', image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=400&q=80' },
    { step: '02', name: 'Collection', desc: 'Pre-cooling intake', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80' },
    { step: '03', name: 'Sorting', desc: 'Size calibration', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=400&q=80' },
    { step: '04', name: 'Inspection', desc: 'MRL & quality check', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80' },
    { step: '05', name: 'Packing', desc: 'Buyer packaging', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80' },
    { step: '06', name: 'Loading', desc: 'Palletized stuffing', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80' },
    { step: '07', name: 'Container', desc: 'Reefer data logging', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80' },
    { step: '08', name: 'Port Dispatch', desc: 'Customs & seal', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <section className="py-20 bg-white border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
              Operational Traceability
            </span>
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Our Export Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            A continuous, controlled chain of custody from Indian soil to destination vessel.
          </p>
        </div>

        {/* Gallery Carousel / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {journeySteps.map((item, idx) => (
            <div
              key={item.step}
              className="bg-neutral-50 rounded-2xl p-3 border border-neutral-200 shadow-sm flex flex-col group hover:border-emerald-300 transition-all"
            >
              <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3 bg-neutral-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 text-[9px] font-black text-white bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded">
                  {item.step}
                </span>
              </div>
              <h4 className="text-xs font-bold text-neutral-900 truncate">{item.name}</h4>
              <p className="text-[10px] text-neutral-500 mt-0.5 truncate">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
