'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '../ui/BrandLogo';
import { COMPANY_INFO } from '@/data/companyData';
import { 
  Menu, 
  X, 
  ChevronDown, 
  MessageSquare, 
  ArrowRight,
  Phone
} from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Export Markets', href: '/export-markets' },
    { name: 'Quality', href: '/quality-compliance' },
    { name: 'Our Process', href: '/our-process' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-white/30 backdrop-blur-3xl saturate-[1.8] border-b border-white/20 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <BrandLogo isDarkBg={!isScrolled} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-medium transition-colors duration-300 ${
                  isScrolled
                    ? isActive(link.href)
                      ? 'text-neutral-900 font-semibold'
                      : 'text-neutral-600 hover:text-neutral-900'
                    : isActive(link.href)
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group Export Team, I would like to talk regarding agricultural commodity exports.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[13px] font-semibold transition-all duration-300 flex items-center gap-1.5 px-4 py-2 rounded-full backdrop-blur-2xl border ${
                isScrolled
                  ? 'text-neutral-700 hover:text-emerald-700 bg-white/50 border-white/40 hover:bg-white/70 hover:shadow-sm'
                  : 'text-white hover:text-white bg-white/15 border-white/25 hover:bg-white/25'
              }`}
            >
              <span>Talk to Export Team</span>
            </Link>

            <Link
              href="/contact#rfq-form"
              className="inline-flex items-center justify-center bg-[#0B7A3B] hover:bg-[#096631] text-white text-xs font-bold tracking-wide uppercase px-5 py-2.5 rounded-md transition-all shadow-sm hover:shadow active:scale-95"
            >
              REQUEST A QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <Link
              href="/contact#rfq-form"
              className="bg-[#0B7A3B] text-white text-[11px] font-bold px-3 py-1.5 rounded-md"
            >
              REQUEST QUOTE
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors ${
                isScrolled
                  ? 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/70 backdrop-blur-2xl saturate-150 border-b border-white/30 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                  isActive(link.href)
                    ? 'bg-emerald-50 text-emerald-900 font-semibold'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100 space-y-2">
            <Link
              href="/contact#rfq-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center bg-[#0B7A3B] hover:bg-[#096631] text-white font-bold py-3 rounded-md text-xs tracking-wider uppercase"
            >
              REQUEST A QUOTE
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group Export Team, I would like to talk regarding agricultural commodity exports.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 border border-neutral-300 text-neutral-800 font-medium py-2.5 rounded-md text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              Talk to Export Team ({COMPANY_INFO.primaryPhone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
