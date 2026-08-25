'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface RollButtonProps {
  href?: string;
  onClick?: () => void;
  text: string;
  variant?: 'gold' | 'dark' | 'white' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function RollButton({
  href,
  onClick,
  text,
  variant = 'gold',
  size = 'md',
  icon = true,
  className = '',
  type = 'button',
  disabled = false,
}: RollButtonProps) {
  // Styles based on variant
  const variantStyles = {
    gold: 'bg-gradient-to-r from-gold-500 to-gold-400 text-primary-950 hover:shadow-[0_10px_30px_rgba(197,160,89,0.35)]',
    dark: 'bg-[#0A1F12] text-white border border-emerald-800/60 hover:border-gold-500/50 hover:shadow-[0_10px_30px_rgba(7,24,14,0.6)]',
    white: 'bg-white text-primary-950 border border-gray-200 hover:border-gold-500 hover:shadow-luxury-lg',
    outline: 'bg-transparent text-white border border-white/25 hover:border-gold-400 hover:text-gold-300',
  };

  const sizeStyles = {
    sm: 'px-4 py-2.5 text-xs',
    md: 'px-6 py-3.5 text-xs sm:text-sm',
    lg: 'px-8 py-4.5 text-sm sm:text-base',
  };

  const content = (
    <span className="relative flex items-center gap-3 overflow-hidden font-bold uppercase tracking-wider select-none">
      {/* Rolling text effect */}
      <span className="relative block overflow-hidden">
        <span className="block transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
          {text}
        </span>
        <span className="absolute inset-0 block transform translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 text-current">
          {text}
        </span>
      </span>

      {/* Animated Arrow Icon */}
      {icon && (
        <span className="relative w-4 h-4 flex items-center justify-center overflow-hidden flex-shrink-0">
          <ArrowUpRight className="w-4 h-4 transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-4 group-hover:-translate-y-4" />
          <ArrowUpRight className="w-4 h-4 absolute transform -translate-x-4 translate-y-4 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
        </span>
      )}
    </span>
  );

  const baseClasses = `group relative inline-flex items-center justify-center rounded-full font-display cursor-pointer transition-all duration-500 active:scale-95 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {content}
    </button>
  );
}
