'use client';

import React, { useState } from 'react';
import { CERTIFICATIONS_DATA, Certification } from '@/data/certificationsData';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Lock, 
  FileCheck, 
  Building, 
  Calendar, 
  Eye, 
  X,
  AlertCircle
} from 'lucide-react';

export function CertificateViewer() {
  const [inspectedCert, setInspectedCert] = useState<Certification | null>(null);

  return (
    <div className="space-y-8">
      {/* Security notice banner */}
      <div className="bg-emerald-900/10 border border-emerald-300/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-emerald-900">
        <Lock className="w-5 h-5 text-emerald-800 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-emerald-950 text-sm">
            Official Regulatory Accreditations (Protected View-Only Verification)
          </h4>
          <p className="text-emerald-800/90 mt-0.5 leading-relaxed">
            All statutory licenses, RCMC export registrations, and ISO certifications are verified by the Government of India and accredited international registrar bodies. Direct raw document downloading is disabled to maintain legal documentation security.
          </p>
        </div>
      </div>

      {/* Grid of Verified Certificate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS_DATA.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-luxury-lg transition-all duration-300 p-6 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Top golden decorative ribbon */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-gold-500 to-primary-800" />

            <div className="space-y-4">
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-900 flex items-center justify-center font-black font-mono text-sm border border-emerald-200">
                  {cert.code}
                </div>
                <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full text-[11px] border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Active</span>
                </span>
              </div>

              {/* Title & Authority */}
              <div>
                <span className="text-[10px] font-mono font-bold text-gold-700 uppercase tracking-widest block">
                  {cert.category}
                </span>
                <h3 className="text-base font-bold font-display text-primary-950 group-hover:text-primary-800 transition-colors mt-0.5">
                  {cert.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {cert.authority}
                </p>
              </div>

              {/* Registration & Validity summary */}
              <div className="bg-brand-surface rounded-xl p-3.5 text-xs space-y-2 border border-emerald-100">
                <div className="flex items-center justify-between text-gray-700">
                  <span className="font-semibold text-gray-500">Reg No:</span>
                  <span className="font-mono font-bold text-primary-950">{cert.registrationNumber}</span>
                </div>
                <div className="flex items-center justify-between text-gray-700">
                  <span className="font-semibold text-gray-500">Status:</span>
                  <span className="font-bold text-emerald-700">{cert.validity}</span>
                </div>
                <div className="text-[11px] text-gray-600 pt-1 border-t border-gray-200/60">
                  <strong>Authorized Scope:</strong> {cert.scope}
                </div>
              </div>
            </div>

            {/* Inspect Button */}
            <div className="pt-4 mt-2">
              <button
                onClick={() => setInspectedCert(cert)}
                className="w-full flex items-center justify-center gap-2 bg-primary-50 hover:bg-primary-800 text-primary-900 hover:text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all border border-primary-200 hover:border-primary-800"
              >
                <Eye className="w-4 h-4" />
                <span>Inspect Certification Parameters</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Inspection Modal */}
      {inspectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-emerald-200 overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-primary-950 via-primary-900 to-emerald-950 text-white p-6 flex items-center justify-between border-b border-gold-500/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500 text-primary-950 font-black font-mono flex items-center justify-center text-sm shadow-md">
                  {inspectedCert.code}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">
                    Government / Regulatory Verification
                  </span>
                  <h3 className="text-lg font-bold font-display text-white">
                    {inspectedCert.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setInspectedCert(null)}
                className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs text-gray-700">
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Statutory Compliance Status: Verified Active & Compliant</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-xs">
                  {inspectedCert.description}
                </p>
              </div>

              {/* Detailed specs table */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-100">
                <div className="p-3.5 bg-gray-50 flex justify-between">
                  <span className="font-bold text-gray-600">Statutory License Code</span>
                  <span className="font-bold text-primary-900">{inspectedCert.code}</span>
                </div>
                <div className="p-3.5 bg-white flex justify-between">
                  <span className="font-bold text-gray-600">Registration / License ID</span>
                  <span className="font-mono font-bold text-gray-900">{inspectedCert.registrationNumber}</span>
                </div>
                <div className="p-3.5 bg-gray-50 flex justify-between">
                  <span className="font-bold text-gray-600">Issuing Authority</span>
                  <span className="font-medium text-gray-800 text-right max-w-xs">{inspectedCert.authority}</span>
                </div>
                <div className="p-3.5 bg-white flex justify-between">
                  <span className="font-bold text-gray-600">Category</span>
                  <span className="font-medium text-gray-800">{inspectedCert.category}</span>
                </div>
                <div className="p-3.5 bg-gray-50 flex justify-between">
                  <span className="font-bold text-gray-600">Authorized Export Scope</span>
                  <span className="font-medium text-gray-800 text-right max-w-xs">{inspectedCert.scope}</span>
                </div>
                <div className="p-3.5 bg-white flex justify-between">
                  <span className="font-bold text-gray-600">Validity & Audit Frequency</span>
                  <span className="font-bold text-emerald-700">{inspectedCert.validity}</span>
                </div>
              </div>

              {/* Security watermark footer */}
              <div className="flex items-center justify-between text-[11px] text-gray-500 pt-2">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-gray-400" />
                  <span>Verified Digital Record for T Group Imports & Exports</span>
                </div>
                <span>Navi Mumbai, India</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setInspectedCert(null)}
                className="px-6 py-2.5 bg-primary-800 hover:bg-primary-900 text-white font-bold rounded-xl text-xs"
              >
                Close Verification Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
