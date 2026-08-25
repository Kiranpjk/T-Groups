'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Ship, Plane } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function LogisticsTransitionBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const meetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=90%',
          pin: true,
          scrub: 0.85,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        shipRef.current,
        { x: '-70vw', opacity: 0.4 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      )
        .fromTo(
          planeRef.current,
          { x: '70vw', opacity: 0.4 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          meetRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, ease: 'power2.out' },
          0.45
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-[#031006] text-white overflow-hidden"
    >
      <div className="absolute inset-x-0 top-[42%] h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-emerald-950/50 to-transparent pointer-events-none" />

      <div
        ref={shipRef}
        className="absolute top-1/2 left-[8%] sm:left-[14%] -translate-y-1/2 flex flex-col items-center gap-3 z-10"
      >
        <Ship className="w-16 h-16 sm:w-24 sm:h-24 text-gold-400" strokeWidth={1.25} />
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-gold-400">
          Sea · JNPT / Mundra
        </span>
      </div>

      <div
        ref={planeRef}
        className="absolute top-[38%] right-[8%] sm:right-[14%] -translate-y-1/2 flex flex-col items-center gap-3 z-10"
      >
        <Plane className="w-16 h-16 sm:w-24 sm:h-24 text-emerald-300 -rotate-12" strokeWidth={1.25} />
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-emerald-300">
          Air · BOM cargo
        </span>
      </div>

      <div
        ref={meetRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 pointer-events-none"
        style={{ opacity: 0 }}
      >
        <p className="text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-gold-400 mb-3">
          They meet here
        </p>
        <h3 className="font-display italic text-3xl sm:text-5xl text-white tracking-tight max-w-xl leading-tight">
          Ocean and air, one dispatch
        </h3>
        <p className="text-sm text-emerald-200/70 font-sans mt-3 max-w-md">
          Reefers from the west coast. Express pallets from Mumbai. Next: send the RFQ.
        </p>
      </div>
    </section>
  );
}
