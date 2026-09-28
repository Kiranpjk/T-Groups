'use client';

import React, { useState } from 'react';
import { CERTIFICATIONS_DATA, Certification } from '@/data/certificationsData';
import { ShieldCheck, FileCheck, CheckCircle, X, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function QualitySection() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section className="py-20 bg-neutral-50/70 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
              Quality &amp; Compliance
            </span>
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Certified Statutory Standards
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Quality control, export documentation and destination compliance are integrated into every shipment. We operate under strict statutory standards set by Indian regulatory export boards.
          </p>
        </div>

        {/* 4 Statutory Registration Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-[#0B7A3B] border border-emerald-200 uppercase">
                    {cert.code}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#0B7A3B]" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-[#0B7A3B] transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs text-neutral-500 mb-3 font-medium">
                  {cert.authority}
                </p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {cert.description}
                </p>
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
            </div>
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
