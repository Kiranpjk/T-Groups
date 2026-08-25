'use client';

import React, { useState } from 'react';
import { HelpCircle, X, Check, ArrowRight } from 'lucide-react';

const INCOTERMS = [
  {
    code: 'FOB',
    title: 'Free On Board (JNPT Mumbai / Mundra)',
    responsibility: 'Seller pays for transport & customs up to loading onto the vessel in India. Buyer pays ocean freight, marine insurance & destination import duties.',
    bestFor: 'Buyers with established global shipping line contracts.'
  },
  {
    code: 'CIF',
    title: 'Cost, Insurance & Freight (Your Port)',
    responsibility: 'T Group arranges and pays ocean freight and marine cargo insurance up to your destination port. Buyer handles destination customs clearance.',
    bestFor: 'Most international buyers (Recommended for seamless imports).'
  },
  {
    code: 'CFR / CNF',
    title: 'Cost and Freight (Destination Port)',
    responsibility: 'T Group arranges and pays ocean freight to your destination port. Buyer arranges their own marine cargo insurance and customs import clearance.',
    bestFor: 'Buyers with specialized group insurance policies.'
  },
  {
    code: 'EXW',
    title: 'Ex-Works (Our Packhouse Warehouse)',
    responsibility: 'Buyer takes possession of goods directly at our certified packhouse in India and handles all domestic transport, Indian export customs, and ocean freight.',
    bestFor: 'Domestic buying agents or multinational trading houses.'
  },
  {
    code: 'CIP / CPT',
    title: 'Carriage and Insurance Paid (Air Cargo)',
    responsibility: 'T Group handles air freight and cargo insurance up to the buyer’s international airport terminal.',
    bestFor: 'High-value perishables (G4 Chillies, Drumsticks, Okra via Air Cargo).'
  }
];

export function IncotermHelperModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1 text-[11px] font-bold text-gold-600 hover:text-gold-700 underline transition-colors"
      >
        <HelpCircle className="w-3.5 h-3.5" />
        <span>Incoterm Guide (FOB vs CIF vs CFR)</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden max-h-[85vh] flex flex-col">
            <div className="bg-primary-900 text-white p-5 flex items-center justify-between border-b border-gold-500/30">
              <div className="flex items-center gap-2.5">
                <HelpCircle className="w-5 h-5 text-gold-400" />
                <h3 className="text-lg font-bold font-display">International Incoterms 2020 Guide</h3>
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
                Choose the Incoterm that matches your logistics capability. We offer flexible quotation terms for both sea and air shipments:
              </p>

              <div className="space-y-3">
                {INCOTERMS.map((item) => (
                  <div key={item.code} className="p-3.5 bg-brand-surface rounded-xl border border-emerald-100 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-primary-900 text-sm font-mono">{item.code} - {item.title}</span>
                      {item.code === 'CIF' && (
                        <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.responsibility}</p>
                    <div className="flex items-center gap-1.5 text-primary-800 font-semibold pt-1">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Best for: {item.bestFor}</span>
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
                Got It, Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
