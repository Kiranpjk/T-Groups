'use client';

import React, { useEffect, useRef, useState } from 'react';
import { RollButton } from '@/components/ui/RollButton';

const HERO_CLIPS = [
  {
    label: 'Farm harvest',
    src: 'https://videos.pexels.com/video-files/2760453/2760453-hd_1920_1080_30fps.mp4',
  },
  {
    label: 'Packhouse',
    src: 'https://videos.pexels.com/video-files/3209298/3209298-hd_1920_1080_25fps.mp4',
  },
  {
    label: 'Ocean freight',
    src: 'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4',
  },
] as const;

export function HeroSection() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeClip, setActiveClip] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveClip((i) => (i + 1) % HERO_CLIPS.length);
    }, 9000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return;
      video.muted = true;
      void video.play().catch(() => {});
    });
  }, []);

  return (
    <section className="relative h-[calc(100vh-4.75rem)] min-h-[520px] flex flex-col justify-end overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {HERO_CLIPS.map((clip, i) => (
          <video
            key={clip.src}
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === activeClip ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={clip.src} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent" />
      </div>

      <div className="absolute top-5 left-5 sm:top-8 sm:left-8 z-20 flex flex-col gap-2">
        {HERO_CLIPS.map((clip, i) => (
          <button
            key={clip.label}
            type="button"
            onClick={() => setActiveClip(i)}
            className="flex items-center gap-2 text-left"
            aria-label={clip.label}
          >
            <span
              className={`h-px ${i === activeClip ? 'w-8 bg-white' : 'w-4 bg-white/40'}`}
            />
            <span
              className={`text-[11px] font-sans ${
                i === activeClip ? 'text-white' : 'text-white/55'
              }`}
            >
              {clip.label}
            </span>
          </button>
        ))}
      </div>

      <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20 flex flex-col items-end gap-1.5 text-[11px] font-sans text-white/90">
        <span>APEDA &amp; FSSAI</span>
        <span>ISO 22000:2018</span>
      </div>

      <div className="relative z-10 w-full px-5 sm:px-10 lg:px-16 pb-10 sm:pb-14">
        <p className="text-xs font-sans text-white/80 mb-3">T Group · Navi Mumbai</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white leading-[1.12] max-w-3xl">
          Indian farm produce, packed and shipped for export.
        </h1>
        <p className="text-sm sm:text-base font-sans text-white/80 max-w-lg mt-4 leading-relaxed">
          Onions, rice, bananas, pomegranates and spices — from contracted farms to your port, with cold-chain and documents in order.
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-7">
          <RollButton href="/products" text="View products" variant="white" size="md" />
          <RollButton href="/contact" text="Request a quote" variant="outline" size="md" />
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-8 pt-5 border-t border-white/20 text-white">
          <p className="text-sm font-sans">
            <span className="font-semibold">50+</span> countries
          </p>
          <p className="text-sm font-sans">
            <span className="font-semibold">500+</span> importers
          </p>
          <p className="text-sm font-sans">
            <span className="font-semibold">5,000+</span> MT / year
          </p>
        </div>
      </div>
    </section>
  );
}
