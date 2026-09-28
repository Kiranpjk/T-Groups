'use client';

import React, { useState } from 'react';
import { FAQ_DATA } from '@/data/faqData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import Link from 'next/link';

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-neutral-50/70 border-b border-neutral-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
              Buyer Questions
            </span>
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            Clear, factual answers regarding export procedures, container MOQ, packaging options, and shipping terms.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-50/70 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#0B7A3B]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-neutral-900">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#0B7A3B]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/40 animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-neutral-900">Have a specific commodity requirement or destination question?</h4>
            <p className="text-xs text-neutral-500 mt-0.5">Our export desk is available for immediate commercial assistance.</p>
          </div>
          <Link
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group, I have a question regarding agricultural commodity exports.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-[#0B7A3B] border border-emerald-200 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat with Export Team</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
