'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

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
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 text-neutral-700 hover:text-neutral-950 shadow-md flex items-center justify-center transition-all hover:scale-105"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating WhatsApp Pill (Matches Screenshot 1-5 style: bright green pill with "Chat with Export Team") */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group Export Team, I would like to inquire about exporting agricultural commodities.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group border border-white/20"
        title="Chat with Export Team on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span className="text-xs font-bold tracking-wide">
          Chat with Export Team
        </span>
      </a>
    </div>
  );
}
