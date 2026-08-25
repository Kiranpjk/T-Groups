'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CERTIFICATIONS_DATA } from '@/data/certificationsData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function CertificationsBar() {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cert-badge',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rowRef.current,
            start: 'top 80%',
          },
        }
      );
    }, rowRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-brand-surface border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Two-column: label left, badges right */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          {/* Left label */}
          <div className="lg:w-64 flex-shrink-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-600 mb-3">
              Verified & Active
            </p>
            <h3 className="text-2xl font-black font-display text-primary-950 leading-snug">
              CERTIFIED
              <br />
              COMPLIANT
            </h3>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              All statutory registrations verified by Govt. of India authorities.
            </p>
            <Link
              href="/quality-compliance"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-primary-800 hover:text-gold-600 transition-colors border-b border-primary-200 hover:border-gold-500 pb-0.5"
            >
              Inspect full compliance records
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right: badges as horizontal wrap */}
          <div ref={rowRef} className="flex flex-wrap gap-4 flex-1">
            {CERTIFICATIONS_DATA.map((cert) => (
              <Link
                key={cert.id}
                href="/quality-compliance"
                className="cert-badge group flex items-center gap-3 bg-transparent border-r border-b border-emerald-100 px-5 py-4 hover:bg-white transition-colors"
                style={{ opacity: 0 }}
              >
                {/* Badge code */}
                <div className="w-10 h-10 bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-[9px] font-black font-mono text-primary-800 text-center leading-tight px-1">
                    {cert.code}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-snug group-hover:text-primary-800 transition-colors">
                    {cert.code === 'ISO 22000:2018' ? 'ISO 22000' : cert.code}
                  </p>
                  <p className="text-[10px] text-gray-500 leading-tight mt-0.5">
                    {cert.category.split(' ')[0]}
                  </p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-1 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
