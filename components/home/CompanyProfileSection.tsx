'use client';

import React, { useState } from 'react';
import { COMPANY_INFO } from '@/data/companyData';
import { Download, FileText, CheckCircle2, X, Building, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function CompanyProfileSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-[#F8F8F6] border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">About T Group</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.08] text-neutral-900 mb-5">
              Built on Trust.<br />Delivered with Care.
            </h2>
            <p className="text-sm leading-relaxed text-[#737B8C] max-w-xl">{COMPANY_INFO.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
              <div className="rounded-[20px] border border-[#DEE2E7] bg-white p-5">
                <span className="text-[#0B7A3B]">◉</span>
                <h3 className="mt-5 text-[11px] font-bold uppercase">Our Mission</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-[#737B8C]">{COMPANY_INFO.mission}</p>
              </div>
              <div className="rounded-[20px] border border-[#DEE2E7] bg-white p-5">
                <span className="text-[#D4AF37]">☆</span>
                <h3 className="mt-5 text-[11px] font-bold uppercase">Our Vision</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-[#737B8C]">{COMPANY_INFO.vision}</p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2.5 bg-[#0B7A3B] hover:bg-[#096631] text-white font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-md transition-all active:scale-95 group"
                >
                  <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Download Company Profile</span>
                </button>

                <Link
                  href="/contact#rfq-form"
                  className="inline-flex items-center gap-2 border border-[#DEE2E7] hover:border-[#0B7A3B] text-neutral-800 font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-md transition-colors"
                >
                  <span>Request a Quote</span>
                </Link>
              </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] h-[420px] lg:h-[540px]">
            <img src="/images/Fresh%20vegetables.png" alt="T Group agricultural produce facility" className="w-full h-full object-cover" />
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
