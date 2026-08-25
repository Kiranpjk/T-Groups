'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/companyData';
import { MessageSquare, FileText, ChevronUp } from 'lucide-react';

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-emerald-100 flex items-center justify-center text-primary-800 hover:bg-primary-50 transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Quick RFQ Quote Button */}
      <Link
        href="/contact"
        className="group flex items-center gap-2 bg-gradient-to-r from-primary-800 to-primary-900 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-luxury hover:shadow-xl border border-gold-500/50 hover:border-gold-400 transition-all hover:scale-105"
      >
        <FileText className="w-4 h-4 text-gold-400" />
        <span className="hidden sm:inline">Request a Quote</span>
        <span className="sm:hidden">RFQ</span>
      </Link>

      {/* Floating WhatsApp with pulsing ring */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group, I am an international buyer looking to import agricultural commodities. Please share your latest price quote and export terms.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-3"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing halo */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25"></span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gold-500 border-2 border-white"></span>
        </span>

        {/* WhatsApp Icon */}
        <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.178.181-.077.355.101.173.449.741.963 1.199.662.589 1.221.771 1.394.858.173.087.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.178L2 22l4.957-1.399C8.423 21.499 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.154c-1.637 0-3.155-.478-4.433-1.3l-.317-.197-2.942.83.843-2.859-.214-.337A8.106 8.106 0 0 1 3.846 12C3.846 7.504 7.504 3.846 12 3.846S20.154 7.504 20.154 12 16.496 20.154 12 20.154z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with Export Manager
        </span>
      </a>
    </div>
  );
}
