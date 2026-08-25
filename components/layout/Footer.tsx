'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from '../ui/BrandLogo';
import { COMPANY_INFO } from '@/data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Linkedin, 
  Instagram, 
  Youtube, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#081E10] text-gray-300 border-t border-emerald-900/60 pt-16 pb-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/50">
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo isDarkBg={true} />
            <p className="text-sm text-emerald-100/70 leading-relaxed max-w-sm">
              {COMPANY_INFO.subTagline} Built on trust, certified by APEDA & FSSAI, delivering farm-fresh consistency to 50+ countries.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-300 hover:text-white hover:bg-primary-700 hover:border-gold-500 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-300 hover:text-white hover:bg-primary-700 hover:border-gold-500 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-300 hover:text-white hover:bg-primary-700 hover:border-gold-500 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-300 hover:text-white hover:bg-emerald-600 hover:border-gold-500 transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.178.181-.077.355.101.173.449.741.963 1.199.662.589 1.221.771 1.394.858.173.087.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold text-gold-400 uppercase tracking-widest border-b border-emerald-900/80 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                  <span>Our Products</span>
                </Link>
              </li>
              <li>
                <Link href="/export-markets" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                  <span>Export Markets</span>
                </Link>
              </li>
              <li>
                <Link href="/quality-compliance" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                  <span>Quality & Compliance</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                  <span>Request a Quote (RFQ)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold text-gold-400 uppercase tracking-widest border-b border-emerald-900/80 pb-2">
              Our Products
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/products?category=Fresh+Vegetables" className="hover:text-gold-400 transition-colors">
                  Fresh Red Onions
                </Link>
              </li>
              <li>
                <Link href="/products?category=Fresh+Vegetables" className="hover:text-gold-400 transition-colors">
                  G4 Green Chilli
                </Link>
              </li>
              <li>
                <Link href="/products?category=Fresh+Fruits" className="hover:text-gold-400 transition-colors">
                  G9 Cavendish Bananas
                </Link>
              </li>
              <li>
                <Link href="/products?category=Rice+%26+Grains" className="hover:text-gold-400 transition-colors">
                  1121 Basmati Rice
                </Link>
              </li>
              <li>
                <Link href="/products?category=Fresh+Fruits" className="hover:text-gold-400 transition-colors">
                  Bhagwa Pomegranate
                </Link>
              </li>
              <li>
                <Link href="/products?category=Spices+%26+Superfoods" className="hover:text-gold-400 transition-colors">
                  Makhana & Dry Chillies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold text-gold-400 uppercase tracking-widest border-b border-emerald-900/80 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-gold-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold-400 transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Navi Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-2 text-emerald-300/80">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter & Catalogue (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold text-gold-400 uppercase tracking-widest border-b border-emerald-900/80 pb-2">
              Newsletter
            </h3>
            <p className="text-[11px] text-emerald-200/70 leading-normal">
              Subscribe for seasonal crop forecasts, market prices, and export shipping schedules.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-3 py-2 text-xs bg-emerald-950/90 border border-emerald-800 rounded-lg text-white placeholder-emerald-400/50 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-3 bg-primary-700 hover:bg-primary-600 text-white font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 border border-primary-600 hover:border-gold-400 shadow-sm"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>SUBSCRIBE</span>
                    <Send className="w-3 h-3 text-gold-400" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-[11px] text-emerald-200/60 space-y-3 md:space-y-0">
          <p>© {new Date().getFullYear()} T Group Imports & Exports. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/quality-compliance" className="hover:text-gold-400 transition-colors">
              Compliance
            </Link>
            <Link href="/contact" className="hover:text-gold-400 transition-colors">
              Incoterm Support
            </Link>
            <span className="text-emerald-400 font-medium">
              Designed with <span className="text-red-500">❤️</span> for Global Trade
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
