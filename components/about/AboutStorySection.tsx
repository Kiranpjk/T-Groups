'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/companyData';
import { QualitySection } from '../home/QualitySection';
import { WhyChooseUs } from '../home/WhyChooseUs';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Building,
  MapPin,
  Sprout,
  Truck,
  Users
} from 'lucide-react';

export function AboutStorySection() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner */}
      <section className="relative pt-24 pb-20 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=2000&q=80"
            alt="T Group Agricultural Sourcing Network"
            fill
            sizes="100vw"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/20 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
              <span>About T Group Imports &amp; Exports</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Built on Trust. <br />
              <span className="text-[#D4AF37]">Delivered with Care.</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
              {COMPANY_INFO.description}
            </p>

            {/* Quick Authentic Stat Pills */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 flex items-center gap-3">
                <Building className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <div className="text-neutral-400 text-[10px] uppercase font-bold">Headquarters</div>
                  <div className="font-bold text-white">Guntur, Andhra Pradesh</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 flex items-center gap-3">
                <Users className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-neutral-400 text-[10px] uppercase font-bold">Leadership</div>
                  <div className="font-bold text-white">Tarun Boya (Founder &amp; MD)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Who We Are */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="w-4 h-[1.5px] bg-[#D4AF37]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
                Who We Are
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              An India-Based Agricultural &amp; Food Export House
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              T Group Imports &amp; Exports connects international buyers with carefully selected Indian agricultural commodities. Headquartered in Guntur, Andhra Pradesh — the renowned agro and spice nexus of India — we maintain direct procurement relationships across key agricultural belts in Andhra Pradesh, Maharashtra, Karnataka, Tamil Nadu, and North India.
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              We bridge the gap between Indian farm-gate harvests and global destination markets by enforcing strict pre-shipment quality grading, buyer-tailored export packaging, and transparent port logistics.
            </p>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80"
              alt="Indian Agricultural Procurement Fields"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-bold text-[#D4AF37]">
                Direct Farm-to-Port Supply Chain Integrity
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0B7A3B] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 uppercase tracking-wide">
              OUR MISSION
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 uppercase tracking-wide">
              OUR VISION
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {COMPANY_INFO.vision}
            </p>
          </div>
        </div>
      </section>

      {/* 4 & 5. Our Approach & Our Commitment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-4 h-[1.5px] bg-[#D4AF37]" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
                  Our Approach
                </span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Structured, Responsible Export Operations</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                We eliminate the uncertainty often associated with cross-border commodity procurement by standardizing calibrations, conducting pre-cooling where needed, enforcing zero-defect grading, and maintaining continuous communication from booking to container discharge.
              </p>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-4 h-[1.5px] bg-[#D4AF37]" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
                  Our Commitment
                </span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Long-Term Buyer Partnerships</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                We believe sustainable B2B trading is built on repeat buyer satisfaction. Every shipment is treated with meticulous care for contract specifications, weight accuracy, temperature control, and complete statutory documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose T Group */}
      <WhyChooseUs />

      {/* Quality & Certifications */}
      <QualitySection />

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-[#0B7A3B] text-white rounded-3xl p-8 sm:p-12 border border-white/15 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Connect with Our Sourcing Desk
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              Discuss commodity availability, request test certificates, or obtain a formal export quotation.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
            <Link
              href="/contact#rfq-form"
              className="inline-flex items-center gap-2 bg-[#0B7A3B] hover:bg-[#096631] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-lg transition-all"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello Tarun, I would like to enquire about exporting agricultural commodities.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl border border-white/20 transition-all backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp MD Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
