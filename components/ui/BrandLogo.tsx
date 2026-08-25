import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  className?: string;
  isDarkBg?: boolean;
}

export function BrandLogo({ className = "", isDarkBg = false }: BrandLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02] ${className}`}>
      {/* SVG Modern Geometric T-Emblem with Gold & Emerald styling */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Outer hexagonal shield / badge */}
          <path
            d="M50 4 L88 24 L88 76 L50 96 L12 76 L12 24 Z"
            fill={isDarkBg ? "#0A3E1B" : "#0F5132"}
            stroke="#C5A059"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Inner Golden T Structure */}
          <path
            d="M26 28 L74 28 L74 38 L56 38 L56 78 L44 78 L44 38 L26 38 Z"
            fill="url(#goldGradient)"
          />
          {/* Left golden leaf accent */}
          <path
            d="M32 50 C26 44 28 36 36 34 C36 42 34 48 32 50 Z"
            fill="#D4AF37"
            opacity="0.85"
          />
          {/* Right golden leaf accent */}
          <path
            d="M68 50 C74 44 72 36 64 34 C64 42 66 48 68 50 Z"
            fill="#D4AF37"
            opacity="0.85"
          />
          {/* Gradients */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F6E7BC" />
              <stop offset="40%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#9A7B38" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-xl md:text-2xl font-black tracking-tight font-display ${isDarkBg ? 'text-white' : 'text-primary-900'}`}>
            T GROUP
          </span>
        </div>
        <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-gold-600 uppercase mt-0.5">
          IMPORTS & EXPORTS
        </span>
        <span className={`text-[8px] font-medium tracking-wide ${isDarkBg ? 'text-gray-400' : 'text-gray-500'}`}>
          Built on Trust. Delivered with Care.
        </span>
      </div>
    </Link>
  );
}
