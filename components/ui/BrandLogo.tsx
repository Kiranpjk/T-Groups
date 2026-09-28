import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  className?: string;
  isDarkBg?: boolean;
}

export function BrandLogo({ className = "", isDarkBg = false }: BrandLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group transition-transform duration-200 hover:opacity-95 ${className}`}>
      {/* Sleek Golden Stepped Emblem */}
      <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 40 32" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top Gold Bar */}
          <path d="M6 4H34C35.1046 4 36 4.89543 36 6V8C36 9.10457 35.1046 10 34 10H6C4.89543 10 4 9.10457 4 8V6C4 4.89543 4.89543 4 6 4Z" fill="url(#goldGrad1)" />
          {/* Middle Gold Bar */}
          <path d="M10 12H30C31.1046 12 32 12.8954 32 14V16C32 17.1046 31.1046 18 30 18H10C8.89543 18 8 17.1046 8 16V14C8 12.8954 8.89543 12 10 12Z" fill="url(#goldGrad2)" />
          {/* Bottom Gold Bar */}
          <path d="M14 20H26C27.1046 20 28 20.8954 28 22V24C28 25.1046 27.1046 26 26 26H14C12.8954 26 12 25.1046 12 24V22C12 20.8954 12.8954 20 14 20Z" fill="url(#goldGrad3)" />
          
          <defs>
            <linearGradient id="goldGrad1" x1="4" y1="7" x2="36" y2="7" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E5C07B" />
              <stop offset="0.5" stopColor="#D4AF37" />
              <stop offset="1" stopColor="#B38A2A" />
            </linearGradient>
            <linearGradient id="goldGrad2" x1="8" y1="15" x2="32" y2="15" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E5C07B" />
              <stop offset="0.5" stopColor="#D4AF37" />
              <stop offset="1" stopColor="#B38A2A" />
            </linearGradient>
            <linearGradient id="goldGrad3" x1="12" y1="23" x2="28" y2="23" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E5C07B" />
              <stop offset="0.5" stopColor="#D4AF37" />
              <stop offset="1" stopColor="#B38A2A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col justify-center text-left">
        <span className={`text-base sm:text-lg font-black tracking-tight leading-tight ${isDarkBg ? 'text-white' : 'text-neutral-900'}`}>
          T GROUP
        </span>
        <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-neutral-500 uppercase leading-none">
          IMPORTS &amp; EXPORTS
        </span>
      </div>
    </Link>
  );
}
