import React from 'react';
import { QuoteForm } from '@/components/rfq/QuoteForm';
import { COMPANY_INFO } from '@/data/companyData';
import { Mail } from 'lucide-react';

export function QuickRFQSection() {
  return (
    <section
      id="rfq-form"
      className="relative py-20 sm:py-24 scroll-mt-20 overflow-hidden"
      style={{
        backgroundColor: '#F4F7F4',
        backgroundImage:
          'linear-gradient(to right, rgba(15,81,50,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,81,50,0.06) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
                Export Enquiry
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Request a Quote
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md">
              Tell us what you need. Our export team will review your requirements and get back to you with pricing, availability, and shipment details.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello T Group, I would like to request an export quote.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-white shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="w-10 h-10 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.16em] text-neutral-500 uppercase">
                    WhatsApp Export Team
                  </p>
                  <p className="text-sm font-bold text-neutral-900 mt-0.5">
                    {COMPANY_INFO.primaryPhone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.primaryEmail}`}
                className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-white shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B7A3B] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.16em] text-neutral-500 uppercase">
                    Email
                  </p>
                  <p className="text-sm font-bold text-neutral-900 mt-0.5 break-all">
                    {COMPANY_INFO.primaryEmail}
                  </p>
                </div>
              </a>

              <div className="rounded-2xl px-5 py-4 border border-emerald-200/80 bg-white/80">
                <p className="text-[11px] font-bold tracking-[0.14em] text-[#0B7A3B] uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0B7A3B]" />
                  Typical Response Time
                </p>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Our export team typically responds to RFQ submissions within 1–2 business days.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_-24px_rgba(15,81,50,0.18)] border border-white">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
