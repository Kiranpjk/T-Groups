import React from 'react';
import { QuoteForm } from '@/components/rfq/QuoteForm';
import { COMPANY_INFO } from '@/data/companyData';
import { Phone, Mail, Clock, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';

export function QuickRFQSection() {
  return (
    <section id="rfq-form" className="py-20 bg-neutral-50/80 border-b border-neutral-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
              International Trade Enquiry
            </span>
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Request a Quote
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto">
            Tell us what you need. Our export team will review your requirements and get back to you with competitive pricing and vessel schedules.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contacts & Value Prompts */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 shadow-sm">
              <h3 className="text-base font-bold text-neutral-900 mb-4 pb-3 border-b border-neutral-100">
                Direct Export Desk
              </h3>

              <div className="space-y-4 text-xs text-neutral-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0B7A3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-neutral-900">Direct Calling</span>
                    <span>{COMPANY_INFO.primaryPhone}</span>
                    <span className="block text-neutral-500">{COMPANY_INFO.secondaryPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0B7A3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-neutral-900">Official RFQ Inbox</span>
                    <span className="break-all">{COMPANY_INFO.primaryEmail}</span>
                    <span className="block text-neutral-500 break-all">{COMPANY_INFO.secondaryEmail}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0B7A3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-neutral-900">Desk Operations</span>
                    <span>{COMPANY_INFO.workingHours}</span>
                    <span className="block text-emerald-700 font-medium">Fast 2-4 Hr RFQ Turnaround</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group, I would like to request an export quote.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#0B7A3B] hover:bg-[#096631] text-white font-bold py-3 rounded-xl text-xs tracking-wider uppercase transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Desk</span>
                </a>
              </div>
            </div>

            {/* Compliance Guarantee */}
            <div className="bg-emerald-950 text-emerald-100 rounded-2xl p-6 border border-emerald-900/60 shadow-md">
              <div className="flex items-center gap-2.5 text-[#D4AF37] font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Exporter Assurance</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                All consignments are packed under APEDA &amp; FSSAI guidelines with pre-shipment quality inspection and complete phytosanitary clearance.
              </p>
            </div>
          </div>

          {/* Right Column: Full RFQ Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
