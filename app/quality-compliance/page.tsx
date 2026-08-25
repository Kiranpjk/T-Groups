import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CertificateViewer } from '@/components/quality/CertificateViewer';
import { QualityParameters } from '@/components/quality/QualityParameters';
import { COMPANY_INFO } from '@/data/companyData';
import { 
  ShieldCheck, 
  Award, 
  FlaskConical, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Lock
} from 'lucide-react';

export const metadata: Metadata = {
  title: `Quality & Compliance Accreditations | ${COMPANY_INFO.name}`,
  description: 'Verified statutory licenses and food safety accreditations: APEDA, FSSAI, ISO 22000:2018, IEC, Spices Board, and Phytosanitary quarantine compliance.',
};

export default function QualityCompliancePage() {
  return (
    <div className="bg-brand-surface min-h-screen space-y-16 pb-20">
      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary-950 via-emerald-950 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="Quality Control and Laboratory Inspection"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-gold-500/40 text-gold-400 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>International Food Safety Standards</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
              QUALITY & COMPLIANCE
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-emerald-200">
              Zero Compromise on International Standards
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
              We follow stringent international food safety standards and hold valid statutory licenses and verified registrations for safe, compliant, and uninterrupted global exports.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Certificate Inspection Cards (View-Only Protected) */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black font-display text-primary-950">
              OFFICIAL REGULATORY ACCREDITATIONS
            </h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-2 rounded-full" />
            <p className="text-xs text-gray-500 mt-2">
              Inspect license registration numbers, issuing authorities, and authorized scopes.
            </p>
          </div>

          <CertificateViewer />
        </div>

        {/* 5-Stage Quality Protocol */}
        <QualityParameters />

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-primary-950 via-primary-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 border border-gold-500/40 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Need a Custom Lab Test or SGS Pre-Shipment Inspection?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/80">
              We coordinate tailored third-party inspections and residue analyses based on your country&apos;s specific food authority requirements.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold text-xs sm:text-sm py-3 px-6 rounded-xl transition-all shadow-md"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group, I would like to inquire about SGS inspection and compliance for export.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl border border-white/20 transition-all backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
