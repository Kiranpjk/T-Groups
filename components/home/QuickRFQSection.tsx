'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/companyData';
import { PRODUCTS_DATA } from '@/data/productsData';
import { IncotermHelperModal } from '../rfq/IncotermHelperModal';
import { ContainerLoadCalculator } from '../rfq/ContainerLoadCalculator';
import confetti from 'canvas-confetti';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';

export function QuickRFQSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    whatsappPhone: '',
    country: '',
    product: 'Indian Red Onion',
    quantityMT: '25',
    destinationPort: '',
    preferredIncoterm: 'CIF',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          packingRequirement: 'Standard Export Packing',
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit quote.');
      }

      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err: any) {
      setError(err.message || 'Error occurred. Please connect on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello T Group,%0A%0AI would like to request an export quote:%0A- Name: ${encodeURIComponent(formData.fullName)}%0A- Company: ${encodeURIComponent(formData.companyName)}%0A- Product: ${encodeURIComponent(formData.product)}%0A- Quantity: ${formData.quantityMT} MT%0A- Country: ${encodeURIComponent(formData.country)}%0A- Port: ${encodeURIComponent(formData.destinationPort)}%0A- Incoterm: ${formData.preferredIncoterm}%0A- Message: ${encodeURIComponent(formData.message)}`;
    return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`;
  };

  return (
    <section className="py-20 bg-brand-surface relative overflow-hidden" id="rfq-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-1">
                CONTACT / RFQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-primary-950 tracking-tight">
                Get in touch with us
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Whether you have an immediate import requirement or want to discuss seasonal supply agreements, our export trade specialists are at your service.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-3.5 text-xs text-gray-700">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-3 py-3 border-b border-emerald-100 hover:border-gold-400/50 transition-colors"
              >
                <div className="w-8 h-8 bg-primary-800 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-primary-950">{COMPANY_INFO.phone}</div>
                  <div className="text-[10px] text-gray-500">Direct Export Desk</div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 py-3 border-b border-emerald-100 hover:border-gold-400/50 transition-colors"
              >
                <div className="w-8 h-8 bg-primary-800 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-primary-950 break-all">{COMPANY_INFO.email}</div>
                  <div className="text-[10px] text-gray-500">Proforma & Documentation</div>
                </div>
              </a>

              <div className="flex items-center gap-3 py-3 border-b border-emerald-100">
                <div className="w-8 h-8 bg-primary-800 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-primary-950">{COMPANY_INFO.address}</div>
                  <div className="text-[10px] text-gray-500">Corporate Headquarters</div>
                </div>
              </div>

              <div className="flex items-center gap-3 py-3 border-b border-emerald-100">
                <div className="w-8 h-8 bg-primary-800 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-primary-950">{COMPANY_INFO.workingHours}</div>
                  <div className="text-[10px] text-gray-500">Operating Hours</div>
                </div>
              </div>
            </div>

            {/* Social & WhatsApp trigger */}
            <div className="pt-2 flex items-center justify-between border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-primary-800 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-primary-800 hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-primary-800 hover:text-white transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group, I want to discuss an export inquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
              >
                <span>Chat on WhatsApp</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7 lg:border-l lg:border-emerald-100 lg:pl-12">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-primary-700">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900">
                  Quote Request Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you! Our international export desk has received your request. We will review your destination requirements and deliver a competitive proforma quote within 24 hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-5 rounded-xl transition-all shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Message on WhatsApp for Fast Track Review</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-primary-800 underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <h3 className="text-base font-bold font-display text-primary-950">
                    REQUEST A QUOTE (RFQ)
                  </h3>
                  <div className="flex items-center gap-3">
                    <IncotermHelperModal />
                    <ContainerLoadCalculator />
                  </div>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. John Miller"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="e.g. Miller Foods Inc"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@millerfoods.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      WhatsApp / Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="whatsappPhone"
                      required
                      placeholder="+1 555 123 4567"
                      value={formData.whatsappPhone}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Destination Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      placeholder="e.g. USA / UAE / Malaysia"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Product Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    >
                      {PRODUCTS_DATA.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Other Agricultural Commodities">Other Agricultural Commodities</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Quantity (Metric Tons)
                    </label>
                    <input
                      type="number"
                      name="quantityMT"
                      min="1"
                      placeholder="25"
                      value={formData.quantityMT}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Preferred Incoterm
                    </label>
                    <select
                      name="preferredIncoterm"
                      value={formData.preferredIncoterm}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    >
                      <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                      <option value="FOB">FOB (Free On Board - Indian Port)</option>
                      <option value="CFR">CFR (Cost & Freight)</option>
                      <option value="EXW">EXW (Ex-Works Packhouse)</option>
                      <option value="CIP">CIP (Air Freight to Airport)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1 text-xs">
                    Destination Seaport / Airport
                  </label>
                  <input
                    type="text"
                    name="destinationPort"
                    placeholder="e.g. Jebel Ali Port / Port of Los Angeles / Rotterdam"
                    value={formData.destinationPort}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1 text-xs">
                    Message / Special Packaging Specs
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Please specify any custom branding, bag weights (e.g. 25kg / 50kg), or target delivery timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-800 hover:bg-primary-900 text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 border border-primary-700 hover:border-gold-400 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Quotation...</span>
                  ) : (
                    <>
                      <span>SUBMIT REQUEST</span>
                      <Send className="w-4 h-4 text-gold-400" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
