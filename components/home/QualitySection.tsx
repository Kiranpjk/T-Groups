'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS_DATA, Certification } from '@/data/certificationsData';
import { ShieldCheck, FileCheck, CheckCircle, X, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function QualitySection() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-[#F8F8F6] border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
            Registrations &amp; Compliance
          </h2>
          <p className="mt-5 text-xs sm:text-sm text-[#737B8C] leading-relaxed">
            The following registrations and compliance details are part of our export operations. Certificate documents are available upon request to verified buyers.
          </p>
        </div>

        {/* 4 Statutory Registration Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-xl p-6 border border-[#DEE2E7] shadow-none hover:-translate-y-1 hover:shadow-[0_14px_30px_-18px_rgba(11,122,59,0.5)] hover:border-[#0B7A3B] hover:bg-emerald-50/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-center mb-5">
                  <span className="w-14 h-14 rounded-full flex items-center justify-center text-xs font-black tracking-tight bg-white text-[#0B7A3B] border border-[#DEE2E7] uppercase">
                    {cert.code}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-neutral-900 mb-2 text-center group-hover:text-[#0B7A3B] transition-colors">
                  {cert.name}
                </h3>
                <p className="text-[10px] text-neutral-500 mb-3 font-medium text-center uppercase leading-relaxed">
                  {cert.authority}
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed text-center">
                  {cert.description}
                </p>
                <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase text-[#0B7A3B]">
                  <span className="w-2 h-2 rounded-full bg-[#0B7A3B]" />
                  <span>{cert.id === 'fssai' ? 'Compliant' : 'Registration Held'}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => setActiveCert(cert)}
                  className="w-full py-2.5 text-center text-xs font-bold text-[#0B7A3B] hover:text-white bg-emerald-50 hover:bg-[#0B7A3B] border border-emerald-200 rounded-lg transition-colors uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-neutral-200 shadow-2xl relative">
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-[#0B7A3B]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-emerald-800 tracking-wider uppercase px-2 py-0.5 rounded bg-emerald-100">
                  Verified Statutory Credential
                </span>
                <h3 className="text-lg font-bold text-neutral-900 mt-1">{activeCert.name}</h3>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-neutral-700 bg-neutral-50 p-4 rounded-xl border border-neutral-200 mb-6">
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-neutral-500 font-medium">Authority:</span>
                <span className="font-semibold text-right max-w-[240px] text-neutral-900">{activeCert.authority}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-neutral-500 font-medium">Category:</span>
                <span className="font-semibold text-neutral-900">{activeCert.category}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-neutral-500 font-medium">Statutory Scope:</span>
                <span className="font-semibold text-right max-w-[240px] text-neutral-900">{activeCert.scope}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">Verification Status:</span>
                <span className="inline-flex items-center gap-1 font-bold text-emerald-700">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Active Exporter Verification
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed mb-6">
              {activeCert.description} Official statutory certificates and compliance dossiers are shared with verified buyers upon commercial contract finalization.
            </p>

            <div className="flex gap-3">
              <Link
                href="/contact#rfq-form"
                onClick={() => setActiveCert(null)}
                className="flex-1 py-3 text-center bg-[#0B7A3B] hover:bg-[#096631] text-white font-bold text-xs rounded-xl uppercase tracking-wider transition-colors shadow-sm"
              >
                Request Compliance Dossier
              </Link>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="px-5 py-3 border border-neutral-300 text-neutral-700 font-bold text-xs rounded-xl hover:bg-neutral-100 transition-colors"
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
