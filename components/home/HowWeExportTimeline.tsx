'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    step: '01',
    phase: 'Book',
    title: 'Submit your requirement',
    desc: 'Share commodity grade, FCL quantity, bag weights, and destination port (FOB / CIF). We reply within two hours.',
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1400&q=80',
  },
  {
    step: '02',
    phase: 'Book',
    title: 'Proforma invoice & spec sheet',
    desc: 'Locked pricing, harvest batch photos, moisture and purity parameters, and the next vessel sailing.',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=1400&q=80',
  },
  {
    step: '03',
    phase: 'Book',
    title: 'Farm procurement',
    desc: 'Once you confirm, we pull from verified contract growers across Nashik, Jalgaon, Guntur, and Punjab.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=80',
  },
  {
    step: '04',
    phase: 'Book',
    title: 'Packhouse grading & SGS',
    desc: 'Cleaning, Sortex grading, moisture-barrier packing, and third-party inspection (SGS / Geo-Chem).',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    step: '05',
    phase: 'Export',
    title: 'Documentation',
    desc: 'Phytosanitary, Certificate of Origin, FSSAI health certificate, and inspection reports issued for your consignee.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    step: '06',
    phase: 'Export',
    title: 'Customs & clearance',
    desc: 'DGFT filing, terminal inwarding, and statutory clearance at origin port.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=80',
  },
  {
    step: '07',
    phase: 'Export',
    title: 'Reefer dispatch',
    desc: 'Pre-cooled stuffing at JNPT or Mundra with live temperature loggers and BL copy on sailing.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    step: '08',
    phase: 'Export',
    title: 'Port discharge',
    desc: 'Arrival at your seaport with vessel tracking and document courier ahead of berthing.',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11af0c3c5d?auto=format&fit=crop&w=1400&q=80',
  },
];

function TimelineRow({
  step,
  phase,
  title,
  desc,
  image,
  imageOnLeft,
}: (typeof STEPS)[number] & { imageOnLeft: boolean }) {
  const copy = (
    <div className="export-workflow-card flex flex-col justify-center py-2 lg:py-8">
      <span className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-gold-600 mb-2">
        {phase} · {step} / 08
      </span>
      <h3 className="font-display italic text-2xl sm:text-3xl lg:text-4xl text-primary-950 tracking-tight">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed font-sans mt-3 max-w-md lg:max-w-none">{desc}</p>
    </div>
  );

  const photo = (
    <div className="export-workflow-card relative h-52 sm:h-64 lg:h-72 overflow-hidden">
      <Image src={image} alt={title} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
    </div>
  );

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_8rem_minmax(0,1fr)] items-center gap-4 lg:gap-0">
      <div className="lg:hidden">
        {photo}
        {copy}
      </div>
      <div className={`hidden lg:flex flex-col justify-center pr-6 ${imageOnLeft ? '' : 'items-end text-right'}`}>
        {imageOnLeft ? photo : copy}
      </div>
      <div className="hidden lg:block" aria-hidden />
      <div className="hidden lg:flex flex-col justify-center pl-6">
        {imageOnLeft ? copy : photo}
      </div>
    </div>
  );
}

function BookNowButton({ className = '' }: { className?: string }) {
  return (
    <Link
      href="#rfq-section"
      className={`group w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-red-600 hover:bg-emerald-500 text-white flex flex-col items-center justify-center text-center border-4 border-white shadow-[0_0_0_6px_rgba(220,38,38,0.18)] hover:shadow-[0_0_0_8px_rgba(16,185,129,0.28)] transition-colors duration-300 ${className}`}
    >
      <span className="font-display italic text-base sm:text-lg leading-none">Book now</span>
      <span className="text-[8px] font-sans uppercase tracking-[0.16em] mt-1 opacity-80">RFQ</span>
    </Link>
  );
}

export function HowWeExportTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.export-workflow-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 56, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="how-to-book" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14">
          <p className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-gold-600 mb-2">
            Booking to vessel
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display italic text-primary-950 leading-tight tracking-tight">
            How to book <span className="text-primary-700 not-italic">with us</span>
          </h2>
          <p className="max-w-lg text-sm text-gray-500 leading-relaxed font-sans mt-3">
            Scroll the steps. The Book now button stays on the line and moves with you.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-emerald-200" />

          <div className="hidden lg:flex absolute inset-y-0 left-1/2 -translate-x-1/2 z-20 justify-center pointer-events-none">
            <div className="sticky top-[42vh] h-fit pointer-events-auto">
              <BookNowButton />
            </div>
          </div>

          <div className="lg:hidden sticky top-20 z-30 flex justify-center py-2 mb-4 bg-white/90">
            <BookNowButton />
          </div>

          <div className="space-y-10 lg:space-y-16">
            {STEPS.map((item, i) => (
              <TimelineRow key={item.step} {...item} imageOnLeft={i % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
