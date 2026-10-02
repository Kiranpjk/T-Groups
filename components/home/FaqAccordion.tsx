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
    <section className="py-16 sm:py-20 bg-[#F8F8F6] border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-16 items-start">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight max-w-sm">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-sm text-[#737B8C] max-w-md leading-relaxed">
            Clear, factual answers regarding export procedures, container MOQ, packaging options, and shipping terms.
          </p>
          <Link
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group, I have a question regarding agricultural commodity exports.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-7 items-center gap-2 bg-[#0B7A3B] hover:bg-[#096631] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Our Export Team</span>
          </Link>
        </div>

        {/* FAQ List */}
        <div className="space-y-2.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-[20px] border border-[#DEE2E7] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-neutral-50/70 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
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

        </div>
      </div>
    </section>
  );
}
