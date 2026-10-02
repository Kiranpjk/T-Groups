import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  isDarkBg?: boolean;
}

export function BrandLogo({ className = "", isDarkBg = false }: BrandLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group will-change-transform ${className}`}>
      {/* Supplied TGIE mark */}
      <div className="relative w-8 h-8 flex-shrink-0 overflow-hidden rounded-md bg-black">
        <Image
          src="/images/tgie-logo.jpg"
          alt="TGIE logo"
          fill
          sizes="32px"
          className="object-contain"
        />
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col justify-center text-left">
        <span className={`text-base sm:text-lg font-black tracking-tight leading-tight ${isDarkBg ? 'text-white' : 'text-neutral-900'}`}>
          T GROUP
        </span>
        <span className={`text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase leading-none ${isDarkBg ? 'text-white/60' : 'text-neutral-500'}`}>
          IMPORTS &amp; EXPORTS
        </span>
      </div>
    </Link>
  );
}
