'use client';

import React, { useState } from 'react';
import { FAQ_DATA } from '@/data/faqData';
import { Plus, Minus, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Two-column header — label & intro copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-600 mb-4">
              Buyer Knowledge Base
            </p>
            <h2 className="text-4xl sm:text-5xl font-black font-display text-primary-950 leading-none">
              QUESTIONS?
              <br />
              <span className="text-primary-700">ANSWERED.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
              Everything international importers need to know — from payment terms and MOQs to third-party inspections and cold-chain protocols.
            </p>
          </div>
        </div>

        {/* Accordion list */}
        <div className="divide-y divide-gray-100">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question} className="group">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left focus:outline-none"
                >
                  <div className="flex items-start gap-5 flex-1">
                    <span className="font-mono text-[11px] font-bold text-gray-300 pt-1 flex-shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-primary-950 group-hover:text-primary-700 transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 group-hover:border-primary-300 flex items-center justify-center transition-colors mt-0.5">
                    {isOpen
                      ? <Minus className="w-3.5 h-3.5 text-primary-700" />
                      : <Plus className="w-3.5 h-3.5 text-gray-500" />
                    }
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-7 pl-10 animate-fadeIn">
                    <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                    {/* Category tag */}
                    <span className="inline-block mt-4 text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                      {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-bold text-gray-900 text-base">Still have a specific question?</p>
            <p className="text-sm text-gray-500 mt-0.5">Our export compliance team responds within 2 hours on business days.</p>
          </div>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group, I have a question about your export procedures.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3.5 px-6 rounded-2xl transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
