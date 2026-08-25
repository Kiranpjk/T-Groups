'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/companyData';
import { CertificationsBar } from '../home/CertificationsBar';
import { WhyChooseUs } from '../home/WhyChooseUs';
import { 
  Target, 
  Eye, 
  Gem, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Users2,
  Globe2,
  Sprout
} from 'lucide-react';

export function AboutStorySection() {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Banner with Logistics Backdrop matching Mockup 1 */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-primary-950 via-emerald-950 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="T Group Container Freight Logistics"
            fill
            priority
            className="object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-gold-500/40 text-gold-400 text-xs font-bold uppercase tracking-widest">
              <span>About T Group Imports & Exports</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
              ABOUT US
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-emerald-200">
              Built on Trust. Delivered with Care.
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
              {COMPANY_INFO.description}
            </p>

            {/* Two Trust Stat Pills */}
            <div className="pt-4 flex flex-wrap gap-4">
              <div className="bg-emerald-900/60 backdrop-blur-md border border-emerald-700/60 rounded-2xl p-4 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
                  <Users2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-emerald-300 uppercase tracking-wider font-semibold">Trusted by</div>
                  <div className="text-xl font-black text-white">500+ Happy Clients</div>
                </div>
              </div>

              <div className="bg-emerald-900/60 backdrop-blur-md border border-emerald-700/60 rounded-2xl p-4 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-emerald-300 uppercase tracking-wider font-semibold">Serving</div>
                  <div className="text-xl font-black text-white">50+ Global Markets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values (Mockup 1 3-Card Row) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm hover:shadow-luxury transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-800 flex items-center justify-center border border-primary-100">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold font-display text-primary-950 uppercase tracking-wide">
                OUR MISSION
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm hover:shadow-luxury transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gold-50 text-gold-700 flex items-center justify-center border border-gold-200">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold font-display text-primary-950 uppercase tracking-wide">
                OUR VISION
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm hover:shadow-luxury transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-200">
                <Gem className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold font-display text-primary-950 uppercase tracking-wide">
                OUR VALUES
              </h3>
              <ul className="space-y-2 text-xs text-gray-700">
                {COMPANY_INFO.values.map((v) => (
                  <li key={v} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose T Group */}
      <WhyChooseUs />

      {/* Our Story: From Local Roots to Global Reach (Mockup 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-surface rounded-3xl p-8 md:p-12 border border-emerald-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block">
              OUR STORY
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-primary-950">
              From Local Roots to Global Reach
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              T Group Imports & Exports was founded with a simple belief &ndash; Indian agriculture has the quality, diversity, and potential to feed the world.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              With a deep understanding of farm-gate sourcing, state-of-the-art sorting, and international multi-modal trade logistics, we bridge the gap between Indian fertile fields and global markets by ensuring unconditional trust, complete transparency, and timely deliveries.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Today, we proudly serve 50+ countries across the Middle East, Southeast Asia, Europe, and North America, continuing to expand our footprint with unyielding dedication.
            </p>
          </div>

          <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-luxury border border-emerald-100">
            <Image
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80"
              alt="Indian Fertile Agricultural Fields at Sunrise"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-bold font-display text-gold-300">
                Direct Farm-to-Port Supply Chain Integrity
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Registrations */}
      <CertificationsBar />

      {/* Bottom CTA Banner (Mockup 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-950 via-primary-900 to-emerald-900 text-white rounded-3xl p-8 sm:p-12 border border-gold-500/40 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
              LET&apos;S BUILD A STRONG BUSINESS TOGETHER
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/80 max-w-xl">
              We are always ready to meet new international trade partners and explore new opportunities for mutual growth.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group, I would like to partner with you for agricultural imports.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl border border-white/20 transition-all backdrop-blur-sm"
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
