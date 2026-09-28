import React from 'react';
import { 
  Package, 
  Briefcase, 
  Snowflake, 
  Ship, 
  ClipboardCheck, 
  Container 
} from 'lucide-react';

export function ExportCapabilities() {
  const capabilities = [
    {
      id: 'sourcing',
      title: 'Sourcing',
      icon: Package,
      description: 'Multi-state sourcing network across India directly connected to producer clusters.'
    },
    {
      id: 'packing',
      title: 'Packing',
      icon: Briefcase,
      description: 'Buyer-specific export packaging tailored to destination regulations.'
    },
    {
      id: 'cold-chain',
      title: 'Cold Chain',
      icon: Snowflake,
      description: 'Cold-chain coordination for temperature-sensitive perishable products.'
    },
    {
      id: 'freight',
      title: 'Freight',
      icon: Ship,
      description: 'Air and ocean freight coordination across premier shipping lines.'
    },
    {
      id: 'documentation',
      title: 'Documentation',
      icon: ClipboardCheck,
      description: 'Export documentation and customs coordination from origin to port.'
    },
    {
      id: 'containerization',
      title: 'Containerization',
      icon: Container,
      description: 'FCL / LCL / air cargo based on shipment volume and timeline requirements.'
    }
  ];

  return (
    <div className="mt-20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          Export Capabilities
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-neutral-600">
          End-to-end export coordination from India to your destination.
        </p>
      </div>

      {/* 6 Capability Cards Grid (Screenshot 5 layout) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {capabilities.map((cap) => {
          const Icon = cap.icon;
          return (
            <div
              key={cap.id}
              className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all text-center flex flex-col items-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center text-[#0B7A3B] mb-4 group-hover:scale-110 group-hover:bg-[#0B7A3B] group-hover:text-white transition-all duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-neutral-900 mb-1.5 group-hover:text-[#0B7A3B] transition-colors">
                {cap.title}
              </h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed">
                {cap.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
