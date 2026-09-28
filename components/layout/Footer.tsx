import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '../ui/BrandLogo';
import { COMPANY_INFO } from '@/data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Company Profile (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo isDarkBg={true} />
            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              &ldquo;Premium Indian Agricultural Products, Delivered to the World.&rdquo;
            </p>
            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <p className="font-semibold text-neutral-200">
                {COMPANY_INFO.founder.name}
              </p>
              <p className="text-neutral-400">
                {COMPANY_INFO.founder.title} · {COMPANY_INFO.location.city}, {COMPANY_INFO.location.state}, {COMPANY_INFO.location.country}
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2 text-[11px] font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>APEDA · FSSAI · IEC Statutory Compliant</span>
            </div>
          </div>

          {/* Column 2: Quick Links (Col 5-6) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-400 transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/export-markets" className="hover:text-emerald-400 transition-colors">Export Markets</Link>
              </li>
              <li>
                <Link href="/quality-compliance" className="hover:text-emerald-400 transition-colors">Quality &amp; Compliance</Link>
              </li>
              <li>
                <Link href="/our-process" className="hover:text-emerald-400 transition-colors">Our Process</Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-emerald-400 transition-colors">Insights &amp; Guides</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products (Col 7-9) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/products?category=Fresh%20Fruits" className="hover:text-emerald-400 transition-colors">
                  Fresh Fruits (Mango, G9 Banana, Pomegranate)
                </Link>
              </li>
              <li>
                <Link href="/products?category=Fresh%20Vegetables" className="hover:text-emerald-400 transition-colors">
                  Fresh Vegetables (Onion, Chilli, Tomato, Okra)
                </Link>
              </li>
              <li>
                <Link href="/products?category=Rice%20%26%20Grains" className="hover:text-emerald-400 transition-colors">
                  Rice &amp; Grains (1121 Basmati, Sona Masoori, IR64)
                </Link>
              </li>
              <li>
                <Link href="/products?category=Spices" className="hover:text-emerald-400 transition-colors">
                  Spices (Dry Red Chilli, Turmeric, Cumin, Coriander)
                </Link>
              </li>
              <li>
                <Link href="/products?category=Other%20Agro%20Products" className="hover:text-emerald-400 transition-colors">
                  Other Agro Products (Semi-Husk Coconut, Makhana)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              Contact Desk
            </h4>
            
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.location.fullAddress}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="hover:text-white block">
                    {COMPANY_INFO.primaryPhone}
                  </a>
                  <a href={`tel:${COMPANY_INFO.secondaryPhone}`} className="hover:text-white block text-neutral-500">
                    {COMPANY_INFO.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="hover:text-white block break-all">
                    {COMPANY_INFO.primaryEmail}
                  </a>
                  <a href={`mailto:${COMPANY_INFO.secondaryEmail}`} className="hover:text-white block break-all text-neutral-500">
                    {COMPANY_INFO.secondaryEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-3">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-2">Connect</span>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-emerald-500 text-xs font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-emerald-500 text-xs font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group Export Team, I would like to inquire about exporting agricultural commodities.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-900/60 border border-emerald-700/60 hover:border-emerald-400 text-xs font-medium text-emerald-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <MessageSquare className="w-3 h-3 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} T Group Imports &amp; Exports. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-neutral-300 transition-colors">Terms &amp; Conditions</Link>
            <Link href="/cookie-policy" className="hover:text-neutral-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
