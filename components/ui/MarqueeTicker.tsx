'use client';

import React from 'react';

interface MarqueeTickerProps {
  items?: string[];
  speed?: 'slow' | 'normal' | 'fast';
  theme?: 'dark' | 'gold' | 'light';
  className?: string;
}

const DEFAULT_ITEMS = [
  'APEDA & FSSAI CERTIFIED',
  '100% COLD-CHAIN MONITORED',
  'EXPORT GRADE NASHIK RED ONIONS',
  'PREMIUM BASMATI 1121 & 1509 RICE',
  'G9 CAVENDISH BANANAS',
  'G4 GREEN CHILLIES',
  'DIRECT FARM PROCUREMENT',
  'GLOBAL SHIPPING TO 50+ PORTS',
  'ISO 22000:2018 QUALITY COMPLIANT',
  'SGS THIRD-PARTY LAB TESTED',
];

export function MarqueeTicker({
  items = DEFAULT_ITEMS,
  speed = 'normal',
  theme = 'dark',
  className = '',
}: MarqueeTickerProps) {
  const themeStyles = {
    dark: 'bg-[#07180E] text-white border-y border-emerald-900/60',
    gold: 'bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-primary-950 border-y border-gold-400 font-black',
    light: 'bg-white text-primary-950 border-y border-emerald-100',
  };

  const speedStyles = {
    slow: 'animate-[marquee_45s_linear_infinite]',
    normal: 'animate-[marquee_30s_linear_infinite]',
    fast: 'animate-[marquee_18s_linear_infinite]',
  };

  return (
    <div className={`relative overflow-hidden py-4 select-none ${themeStyles[theme]} ${className}`}>
      <div className="flex w-max">
        {/* Track 1 */}
        <div className={`flex items-center gap-8 pr-8 whitespace-nowrap ${speedStyles[speed]} will-change-transform`}>
          {items.map((item, idx) => (
            <div key={`t1-${idx}`} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] font-display">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-gold-400/80 shadow-[0_0_8px_rgba(212,175,55,0.8)] inline-block flex-shrink-0" />
            </div>
          ))}
        </div>

        {/* Track 2 for infinite seamless loop */}
        <div className={`flex items-center gap-8 pr-8 whitespace-nowrap ${speedStyles[speed]} will-change-transform`} aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`t2-${idx}`} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] font-display">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-gold-400/80 shadow-[0_0_8px_rgba(212,175,55,0.8)] inline-block flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
