'use client';

import React, { useState } from 'react';
import { COMPANY_INFO } from '@/data/companyData';
import { Download, FileText, CheckCircle2, X, Building, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function CompanyProfileSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-20 bg-white border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-[#0A3E1B] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Subtle gold decorative accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B7A3B]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase mb-6">
                <span>Corporate Overview</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
                Get to Know T Group
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
                {COMPANY_INFO.description}
              </p>

              {/* Mission & Vision Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/15">
                <div>
                  <h3 className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase mb-2">
                    Our Mission
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {COMPANY_INFO.mission}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase mb-2">
                    Our Vision
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {COMPANY_INFO.vision}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2.5 bg-[#0B7A3B] hover:bg-[#096631] text-white font-bold text-xs tracking-wider uppercase px-7 py-4 rounded-xl shadow-lg transition-all active:scale-95 group"
                >
                  <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Download Company Profile</span>
                </button>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-bold text-xs tracking-wider uppercase px-6 py-4 rounded-xl transition-colors"
                >
                  <span>Learn More About Us</span>
                </Link>
              </div>
            </div>

            {/* Right Card: Quick Corporate Card */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 text-white">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/15">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#D4AF37]">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">T Group Imports &amp; Exports</h3>
                  <p className="text-xs text-neutral-400">Headquarters: Guntur, Andhra Pradesh, India</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-neutral-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block text-white">Registered Sourcing Desk</span>
                    <span>Guntur, Andhra Pradesh, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block text-white">Managing Director: Tarun Boya</span>
                    <span>{COMPANY_INFO.primaryPhone} / {COMPANY_INFO.secondaryPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block text-white">Official Trade Enquiries</span>
                    <span className="break-all">{COMPANY_INFO.primaryEmail}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Compliance: APEDA · FSSAI · IEC</span>
                <span className="text-[#D4AF37] font-semibold">Verified Exporter</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Profile Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-neutral-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-200">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0B7A3B] flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-emerald-800 tracking-wider uppercase px-2 py-0.5 rounded bg-emerald-100">
                  Official Corporate Dossier
                </span>
                <h3 className="text-xl font-extrabold text-neutral-900">T Group Imports &amp; Exports Profile</h3>
              </div>
            </div>

            <div className="space-y-4 text-xs text-neutral-700">
              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                <h4 className="font-bold text-neutral-900 text-sm mb-1">Company Summary</h4>
                <p>{COMPANY_INFO.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-50 p-3.5 rounded-xl border border-neutral-200">
                  <span className="text-neutral-500 font-medium block">Leadership</span>
                  <span className="font-bold text-neutral-900">Tarun Boya (Tarun B.)</span>
                  <span className="text-neutral-500 block text-[11px]">Founder &amp; Managing Director</span>
                </div>
                <div className="bg-neutral-50 p-3.5 rounded-xl border border-neutral-200">
                  <span className="text-neutral-500 font-medium block">Headquarters</span>
                  <span className="font-bold text-neutral-900">Guntur, Andhra Pradesh</span>
                  <span className="text-neutral-500 block text-[11px]">India</span>
                </div>
              </div>

              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                <h4 className="font-bold text-neutral-900 text-sm mb-2">Export Capabilities &amp; Lines</h4>
                <ul className="grid grid-cols-2 gap-2 text-[11px]">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#0B7A3B]" /> Fresh Red Onions &amp; Veggies</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#0B7A3B]" /> G9 Cavendish Bananas</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#0B7A3B]" /> 1121 Basmati &amp; Non-Basmati Rice</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#0B7A3B]" /> Guntur Dry Red Chillies &amp; Spices</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#0B7A3B]" /> Semi-Husked Coconuts &amp; Makhana</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#0B7A3B]" /> FCL / LCL / Reefer Logistics</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  window.print();
                }}
                className="flex-1 py-3 text-center bg-[#0B7A3B] hover:bg-[#096631] text-white font-bold text-xs rounded-xl uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Save / Print Profile (PDF)</span>
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-6 py-3 border border-neutral-300 text-neutral-700 font-bold text-xs rounded-xl hover:bg-neutral-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
