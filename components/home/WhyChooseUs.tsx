'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sprout, ShieldCheck, Package, Globe, FileCheck2, Users, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    icon: Sprout,
    title: 'Direct sourcing',
    desc: 'Verified farmer contracts across Nashik, Jalgaon, Guntur, and Punjab.',
    accent: '#22C55E',
  },
  {
    icon: ShieldCheck,
    title: 'Zero-defect QC',
    desc: 'NABL lab testing, MRL pesticide checks, and Sortex size grading.',
    accent: '#EAB308',
  },
  {
    icon: Package,
    title: 'Custom packing',
    desc: 'Private-label cartons, multi-lingual print, mesh bags, vacuum packing.',
    accent: '#10B981',
  },
  {
    icon: Globe,
    title: 'Reefer cold chain',
    desc: 'Temperature-logged reefers to 50+ international seaport hubs.',
    accent: '#38BDF8',
  },
  {
    icon: FileCheck2,
    title: 'Export compliance',
    desc: 'Phytosanitary, APEDA, FSSAI, COO, SGS and fast-track customs.',
    accent: '#F59E0B',
  },
  {
    icon: Users,
    title: 'Buyer desk',
    desc: 'Vessel tracking, document couriers, and a dedicated trade manager.',
    accent: '#34D399',
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pillar-card',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-brand-surface">
      <div className="relative h-[38vh] min-h-[240px] max-h-[360px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80"
          alt="Export logistics banner"
          fill
          className="object-cover object-center scale-110 blur-md"
          priority={false}
        />
        <div className="absolute inset-0 bg-primary-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-primary-950/20 to-primary-950/40" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-gold-300 text-[11px] font-bold uppercase tracking-[0.25em] mb-3 font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why partner with us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display italic text-white leading-tight tracking-tight max-w-3xl">
            Why choose <span className="text-gold-300 not-italic">T Group</span>
          </h2>
          <p className="max-w-xl text-sm text-emerald-50/90 leading-relaxed font-sans mt-3">
            India&apos;s farmlands to global tables — without compromising quality, freight time, or paperwork.
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full border-t border-brand-border bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="pillar-card p-6 sm:p-7 flex flex-col border-b border-r border-brand-border last:border-r-0 xl:[&:nth-child(6n)]:border-r-0 group"
                style={{ opacity: 0 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center"
                    style={{ backgroundColor: `${pillar.accent}18`, border: `1px solid ${pillar.accent}40` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: pillar.accent }} />
                  </div>
                  <span className="font-display italic text-lg text-primary-700/30">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-base text-primary-950 leading-snug group-hover:text-primary-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[12px] text-gray-600 leading-relaxed mt-1.5 font-sans">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
