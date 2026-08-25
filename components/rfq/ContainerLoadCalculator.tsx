'use client';

import React, { useState } from 'react';
import { Truck, Box, Layers, HelpCircle, X } from 'lucide-react';

const CONTAINER_SPECS = [
  {
    type: '20ft FCL Dry Container',
    bestFor: 'Rice, Grains, Heavy Packaged Spices, Makhana in bags',
    payload: '25.0 - 27.5 Metric Tons (MT)',
    volume: '33.2 CBM (Cubic Meters)',
    bagCount: 'Approx. 520 to 550 Bags (50 kg each)'
  },
  {
    type: '40ft High Cube Reefer (Cold-Chain)',
    bestFor: 'Fresh Red Onions, G9 Bananas, Pomegranates, Fresh Veggies',
    payload: '20.0 - 29.0 Metric Tons (MT)',
    volume: '67.0 CBM with Microclimate Airflow Control',
    bagCount: 'Approx. 1,540 Banana Cartons or 1,160 Onion Mesh Bags (25 kg)'
  },
  {
    type: 'Air Cargo Express Pallets (LD3 / PMC)',
    bestFor: 'G4 Green Chillies, Fresh Drumsticks, Okra, Tindora',
    payload: '500 kg to 5,000 kg per consignment',
    volume: 'Rapid Airport-to-Airport Transit (12 - 24 Hours)',
    bagCount: 'Air-Ventilated 4 kg / 5 kg Corrugated Boxes'
  }
];

export function ContainerLoadCalculator() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 underline transition-colors"
      >
        <Truck className="w-3.5 h-3.5" />
        <span>Container Load Capacity Guide</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden max-h-[85vh] flex flex-col">
            <div className="bg-gradient-to-r from-emerald-900 to-primary-950 text-white p-5 flex items-center justify-between border-b border-gold-500/30">
              <div className="flex items-center gap-2.5">
                <Box className="w-5 h-5 text-gold-400" />
                <h3 className="text-lg font-bold font-display">Container Loadability & Freight Capacity Guide</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs text-gray-700">
              <p className="text-gray-600 leading-relaxed">
                Refer to our standard ocean and air freight load configurations to optimize container freight costs per metric ton:
              </p>

              <div className="space-y-3">
                {CONTAINER_SPECS.map((spec) => (
                  <div key={spec.type} className="p-4 bg-primary-50/50 rounded-xl border border-primary-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-primary-950 text-sm">{spec.type}</span>
                      <span className="bg-primary-800 text-gold-400 font-bold px-2 py-0.5 rounded text-[10px]">
                        {spec.payload}
                      </span>
                    </div>
                    <p className="text-gray-600"><strong>Commodities:</strong> {spec.bestFor}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-700 pt-1 border-t border-primary-200/50">
                      <div><strong>Volume:</strong> {spec.volume}</div>
                      <div><strong>Packing Units:</strong> {spec.bagCount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 bg-primary-800 hover:bg-primary-900 text-white font-bold rounded-lg text-xs"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
