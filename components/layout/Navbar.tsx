'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '../ui/BrandLogo';
import { COMPANY_INFO } from '@/data/companyData';
import { CATEGORIES } from '@/data/productsData';
import { RollButton } from '../ui/RollButton';
import { 
  Phone, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  MessageSquare, 
  ArrowRight,
  Package
} from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { 
      name: 'PRODUCTS', 
      href: '/products',
      hasDropdown: true 
    },
    { name: 'EXPORT MARKETS', href: '/export-markets' },
    { name: 'QUALITY & COMPLIANCE', href: '/quality-compliance' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isHome = pathname === '/';

  return (
    <header className={`${isHome ? 'sticky' : 'fixed'} top-0 left-0 right-0 z-50`}>
      {!isHome && (
      <div className={`bg-primary-950 text-emerald-100 text-xs py-2 px-4 transition-all duration-300 border-b border-primary-900/50 hidden md:block ${isScrolled ? 'opacity-0 -translate-y-full h-0 py-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold-500" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="flex items-center gap-1.5 text-emerald-300/80">
              <Clock className="w-3.5 h-3.5 text-gold-500" />
              <span>{COMPANY_INFO.workingHours}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-900/60 border border-emerald-700/50 text-[11px] font-semibold text-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              APEDA &amp; FSSAI Registered Exporter
            </span>
            <Link 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group, I would like to inquire about exporting agricultural commodities.")}`} 
              target="_blank"
              className="text-emerald-300 hover:text-gold-400 transition-colors flex items-center gap-1.5 font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              WhatsApp Live Desk
            </Link>
          </div>
        </div>
      </div>
      )}

      <nav className={`transition-all duration-300 border-b ${
        isHome
          ? 'bg-white py-2.5 border-gray-200'
          : isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-gray-100'
            : 'bg-white/90 backdrop-blur-sm py-4 border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <BrandLogo />

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-3.5 py-2 text-xs xl:text-[13px] font-semibold tracking-wide uppercase transition-colors ${
                        isActive(link.href)
                          ? 'text-primary-950 border-b-2 border-primary-800 font-black'
                          : 'text-gray-700 hover:text-primary-800'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-primary-800 transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Mega Dropdown */}
                    <div 
                      className={`absolute top-full left-0 w-80 bg-white shadow-lg border border-gray-200 py-3 px-2 z-50 ${
                        productsDropdownOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 py-1.5 border-b border-gray-100 flex items-center justify-between">
                        <span>Product Categories</span>
                        <Package className="w-3.5 h-3.5 text-gold-600" />
                      </div>
                      <div className="mt-1 space-y-1">
                        {CATEGORIES.slice(1).map((cat) => (
                          <Link
                            key={cat}
                            href={`/products?category=${encodeURIComponent(cat)}`}
                            className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-800 rounded-lg transition-colors group/item"
                            onClick={() => setProductsDropdownOpen(false)}
                          >
                            <span>{cat}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transform translate-x-0 group-hover/item:translate-x-1 transition-all text-primary-700" />
                          </Link>
                        ))}
                      </div>
                      <div className="mt-2 pt-2 border-t border-gray-100 px-3">
                        <Link 
                          href="/products" 
                          className="text-xs font-bold text-gold-700 hover:text-gold-800 flex items-center gap-1.5"
                          onClick={() => setProductsDropdownOpen(false)}
                        >
                          View Full Product Catalog &amp; Specs &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-xs xl:text-[13px] font-semibold tracking-wide uppercase transition-colors ${
                    isActive(link.href)
                      ? 'text-primary-950 border-b-2 border-primary-800 font-black'
                      : 'text-gray-700 hover:text-primary-800'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* WhatsApp direct trigger */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group, I would like to request an export quote.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-gray-200 text-emerald-800 hover:bg-emerald-50 transition-colors"
              title="Chat on WhatsApp"
            >
              <svg className="w-4 h-4 fill-emerald-600" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.178.181-.077.355.101.173.449.741.963 1.199.662.589 1.221.771 1.394.858.173.087.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.178L2 22l4.957-1.399C8.423 21.499 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.154c-1.637 0-3.155-.478-4.433-1.3l-.317-.197-2.942.83.843-2.859-.214-.337A8.106 8.106 0 0 1 3.846 12C3.846 7.504 7.504 3.846 12 3.846S20.154 7.504 20.154 12 16.496 20.154 12 20.154z" />
              </svg>
            </a>

            {/* Fixonic-style Request a quote CTA */}
            <RollButton
              href="/contact"
              text="REQUEST A QUOTE"
              variant="dark"
              size="sm"
            />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link
              href="/contact"
              className="bg-primary-950 text-white text-[11px] font-bold px-3 py-1.5 rounded-full"
            >
              RFQ
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-primary-800 hover:bg-primary-50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-bold ${
                    isActive(link.href)
                      ? 'bg-primary-50 text-primary-950 font-extrabold border-l-4 border-primary-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-100 space-y-2">
              <RollButton
                href="/contact"
                text="REQUEST A QUOTE"
                variant="gold"
                size="md"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              />
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group, I would like to request an export quote.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-full text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp (+91 88765 43210)
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
