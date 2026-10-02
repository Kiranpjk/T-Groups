import React, { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { QuoteForm } from '@/components/rfq/QuoteForm';
import { COMPANY_INFO } from '@/data/companyData';
import { 
  FileText, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Building,
  UserCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: `Contact Us & Request a Quote (RFQ) | ${COMPANY_INFO.name}`,
  description: 'Submit an international B2B RFQ for Indian Fresh Onions, G4 Chillies, G9 Bananas, Basmati Rice, and Spices. Direct export desk in Guntur, Andhra Pradesh.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-50/50 pb-20">
      {/* Header Banner */}
      <section className="relative pt-24 pb-20 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="International Ocean Cargo & Sourcing Desk"
            fill
            sizes="100vw"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/20 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
              <FileText className="w-3.5 h-3.5" />
              <span>International Trade &amp; RFQ Desk</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Contact Us &amp; <br />
              <span className="text-[#D4AF37]">Request a Quote</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
              Connect with our agricultural export team in Guntur, Andhra Pradesh. Share your specifications, container volume, and destination port for an immediate formal quotation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Left Details & Right Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Verified Contact Information */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Executive Contact Card */}
            <div className="bg-white rounded-3xl p-7 border border-neutral-200 shadow-sm space-y-6">
              <div className="pb-4 border-b border-neutral-100 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0B7A3B] flex items-center justify-center">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-neutral-900">{COMPANY_INFO.founder.name}</h2>
                  <p className="text-xs text-neutral-500">{COMPANY_INFO.founder.title}</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-neutral-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0B7A3B] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-neutral-900">Headquarters Location</span>
                    <span>{COMPANY_INFO.location.fullAddress}</span>
                    <span className="text-neutral-500 block text-[11px] mt-0.5">Primary Agricultural &amp; Spice Export Hub</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0B7A3B] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-neutral-900">Direct Phone Numbers</span>
                    <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="hover:text-[#0B7A3B] block font-semibold text-neutral-900">
                      {COMPANY_INFO.primaryPhone}
                    </a>
                    <a href={`tel:${COMPANY_INFO.secondaryPhone}`} className="hover:text-[#0B7A3B] block text-neutral-600">
                      {COMPANY_INFO.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0B7A3B] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-neutral-900">Official RFQ Inboxes</span>
                    <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="hover:text-[#0B7A3B] block break-all font-semibold text-neutral-900">
                      {COMPANY_INFO.primaryEmail}
                    </a>
                    <a href={`mailto:${COMPANY_INFO.secondaryEmail}`} className="hover:text-[#0B7A3B] block break-all text-neutral-600">
                      {COMPANY_INFO.secondaryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#0B7A3B] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-neutral-900">Desk Operations</span>
                    <span>{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 space-y-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello Tarun, I would like to request an export quote.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Live Desk</span>
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm text-xs">
              <h3 className="font-bold text-neutral-900 mb-3 uppercase tracking-wider text-[11px]">Official Corporate Profiles</h3>
              <div className="space-y-2">
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-50 hover:bg-emerald-50 border border-neutral-200 flex items-center justify-between text-neutral-800 transition-colors"
                >
                  <span className="font-semibold">LinkedIn: T-Group Imports &amp; Exports</span>
                  <span className="text-[#0B7A3B] font-bold">&rarr;</span>
                </a>
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-50 hover:bg-emerald-50 border border-neutral-200 flex items-center justify-between text-neutral-800 transition-colors"
                >
                  <span className="font-semibold">Instagram: @tgroupimpex</span>
                  <span className="text-[#0B7A3B] font-bold">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Compliance Guarantee */}
            <div className="bg-emerald-950 text-emerald-100 rounded-3xl p-6 border border-emerald-900">
              <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Registrations</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                APEDA Registered · FSSAI Food Safety Compliant · Directorate General of Foreign Trade (IEC) Licensed.
              </p>
            </div>
          </div>

          {/* Right Column: Complete RFQ Form */}
          <div id="rfq-form" className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-lg scroll-mt-24">
            <div className="mb-8">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                Official B2B RFQ Form
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-2">
                Submit Your Export Specification
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Fill in your commercial requirements below. Our export desk will review and reply within 2 to 4 business hours.
              </p>
            </div>

            <Suspense fallback={<div className="py-12 text-center text-xs text-neutral-500 font-bold">Loading RFQ Form...</div>}>
              <QuoteForm />
            </Suspense>
          </div>

        </div>
      </section>
    </main>
  );
}
