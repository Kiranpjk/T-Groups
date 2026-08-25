'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { COMPANY_INFO } from '@/data/companyData';
import { PRODUCTS_DATA } from '@/data/productsData';
import { IncotermHelperModal } from './IncotermHelperModal';
import { ContainerLoadCalculator } from './ContainerLoadCalculator';
import confetti from 'canvas-confetti';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  ShieldCheck,
  DollarSign,
  Truck,
  Package,
  FileCheck2,
  HeadphonesIcon
} from 'lucide-react';

export function QuoteForm() {
  const searchParams = useSearchParams();
  const prefilledCountry = searchParams.get('country') || '';
  const prefilledProduct = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    whatsappPhone: '',
    country: prefilledCountry,
    product: prefilledProduct || 'Indian Red Onion',
    quantityMT: '25',
    packingRequirement: 'Standard Export Packaging',
    destinationPort: '',
    preferredIncoterm: 'CIF',
    preferredShipmentDate: '',
    modeOfFreight: 'By Sea (Reefer / FCL)',
    message: '',
    agreeTerms: true
  });

  useEffect(() => {
    if (prefilledCountry) {
      setFormData(prev => ({ ...prev, country: prefilledCountry }));
    }
    if (prefilledProduct) {
      setFormData(prev => ({ ...prev, product: prefilledProduct }));
    }
  }, [prefilledCountry, prefilledProduct]);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit quote.');
      }

      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (err: any) {
      setError(err.message || 'Error occurred. Please connect on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello T Group Imports & Exports,%0A%0AI am submitting an RFQ on your website:%0A- Name: ${encodeURIComponent(formData.fullName)}%0A- Company: ${encodeURIComponent(formData.companyName)}%0A- Product: ${encodeURIComponent(formData.product)}%0A- Qty: ${formData.quantityMT} MT%0A- Country: ${encodeURIComponent(formData.country)}%0A- Port: ${encodeURIComponent(formData.destinationPort)}%0A- Incoterm: ${formData.preferredIncoterm}%0A- Packing: ${encodeURIComponent(formData.packingRequirement)}%0A- Freight: ${encodeURIComponent(formData.modeOfFreight)}%0A- Notes: ${encodeURIComponent(formData.message)}`;
    return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`;
  };

  return (
    <div className="space-y-16">
      {/* 4 Trust Badges Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900">Quick Response</div>
            <div className="text-[10px] text-gray-500">Proforma within 24h</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900">Best Quality</div>
            <div className="text-[10px] text-gray-500">APEDA & FSSAI certified</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center flex-shrink-0">
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900">Reliable Partnership</div>
            <div className="text-[10px] text-gray-500">Long-term contracts</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center flex-shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900">Global Delivery</div>
            <div className="text-[10px] text-gray-500">50+ destination ports</div>
          </div>
        </div>
      </div>

      {/* Main RFQ Form and Connect Box (Mockup 4 Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-luxury">
        {/* Left: Let's Connect (4 cols) */}
        <div className="lg:col-span-4 bg-brand-surface rounded-2xl p-6 border border-emerald-100 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block">
              Direct B2B Desk
            </span>
            <h3 className="text-2xl font-black font-display text-primary-950">
              LET&apos;S CONNECT
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Whether you have a question about our export grades, container pricing, custom packaging, or port shipping logistics &mdash; our trade specialists are ready to help you.
            </p>
            <p className="text-xs text-gray-500 font-medium">
              Fill out the form or reach us directly via WhatsApp / Email.
            </p>
          </div>

          {/* Stylized Visual Graphic Box */}
          <div className="relative h-44 w-full bg-gradient-to-br from-primary-900 to-emerald-950 rounded-2xl p-4 flex flex-col items-center justify-center text-center text-white border border-gold-500/40 shadow-inner overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:12px_12px]" />
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400 mb-2 relative z-10">
              <span className="font-display font-black text-xl">T</span>
            </div>
            <span className="text-xs font-bold text-white relative z-10">T GROUP IMPORTS & EXPORTS</span>
            <span className="text-[10px] text-gold-400 font-mono relative z-10 mt-0.5">Navi Mumbai, India</span>
          </div>

          {/* Fast WhatsApp trigger */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group, I would like to request an export quote.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 rounded-xl transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp (+91 88765 43210)</span>
          </a>
        </div>

        {/* Right: RFQ Form (8 cols) */}
        <div className="lg:col-span-8">
          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-primary-700">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-display text-gray-900">
                Your Quotation Request is Submitted!
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you! Our international export department has logged your request. We will prepare your official Proforma Invoice / Quotation Sheet with freight calculations within 24 hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-5 rounded-xl transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp for Instant Proforma</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-primary-800 underline"
                >
                  Submit Another RFQ
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
                <h3 className="text-lg font-bold font-display text-primary-950">
                  REQUEST A QUOTE
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

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none"
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
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none"
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
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none"
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
                    placeholder="WhatsApp / Phone with country code"
                    value={formData.whatsappPhone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    placeholder="Destination Country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none"
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
                    className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none"
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
                    Quantity / MT <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="quantityMT"
                    required
                    min="1"
                    placeholder="e.g. 25 MT"
                    value={formData.quantityMT}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Packing Requirement
                  </label>
                  <input
                    type="text"
                    name="packingRequirement"
                    placeholder="e.g. 25 kg Mesh Bags / 50 kg PP / Custom"
                    value={formData.packingRequirement}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Destination Port
                  </label>
                  <input
                    type="text"
                    name="destinationPort"
                    placeholder="e.g. Jebel Ali / Jeddah / Rotterdam / New York"
                    value={formData.destinationPort}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none"
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
                    className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none"
                  >
                    <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                    <option value="FOB">FOB (Free On Board - Indian Port)</option>
                    <option value="CFR">CFR (Cost & Freight)</option>
                    <option value="EXW">EXW (Ex-Works Packhouse)</option>
                    <option value="CIP">CIP (Air Freight to Destination Airport)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Preferred Shipment Date
                  </label>
                  <input
                    type="date"
                    name="preferredShipmentDate"
                    value={formData.preferredShipmentDate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Mode of Freight
                  </label>
                  <select
                    name="modeOfFreight"
                    value={formData.modeOfFreight}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none"
                  >
                    <option value="By Sea (Reefer / FCL)">By Sea (Reefer / FCL Container)</option>
                    <option value="By Sea (Dry FCL 20ft / 40ft)">By Sea (Dry FCL 20ft / 40ft)</option>
                    <option value="By Air Cargo Express">By Air Cargo Express</option>
                    <option value="By Sea (LCL Partial Load)">By Sea (LCL Partial Load)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1 text-xs">
                  Additional Requirements / Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us about your target arrival date, private label branding, target price range, or certifications needed..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-brand-surface border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none"
                />
              </div>

              {/* Consent checkbox */}
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="rounded text-primary-800 focus:ring-primary-500 h-4 w-4"
                />
                <label htmlFor="agreeTerms">
                  I agree to the Terms & Conditions and Privacy Policy for B2B export communications.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-800 hover:bg-primary-900 text-white font-bold text-sm py-4 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 border border-primary-700 hover:border-gold-400 disabled:opacity-50"
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

      {/* WHY BUYERS CHOOSE T GROUP (Mockup 4 bottom feature bar) */}
      <div className="space-y-6 text-center">
        <div>
          <h3 className="text-xl sm:text-2xl font-black font-display text-primary-950">
            WHY BUYERS CHOOSE T GROUP
          </h3>
          <div className="w-12 h-1 bg-gold-500 mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-primary-950">Premium Quality</h4>
            <p className="text-[10px] text-gray-500">Strict quality control at every step</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center mx-auto">
              <DollarSign className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-primary-950">Competitive Pricing</h4>
            <p className="text-[10px] text-gray-500">Best prices with consistent quality</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center mx-auto">
              <Truck className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-primary-950">On-time Delivery</h4>
            <p className="text-[10px] text-gray-500">Ensuring timely vessel shipments</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center mx-auto">
              <Package className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-primary-950">Custom Packaging</h4>
            <p className="text-[10px] text-gray-500">As per buyer requirements</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center mx-auto">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-primary-950">Complete Documentation</h4>
            <p className="text-[10px] text-gray-500">Smooth export with proper paperwork</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center mx-auto">
              <HeadphonesIcon className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-primary-950">Support 24/7</h4>
            <p className="text-[10px] text-gray-500">We are always here to assist you</p>
          </div>
        </div>
      </div>

      {/* CONTACT INFORMATION & LIVE LOCATION (Mockup 4 bottom section) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-sm">
        <div className="lg:col-span-5 space-y-5">
          <h3 className="text-xl font-bold font-display text-primary-950">
            CONTACT INFORMATION
          </h3>

          <div className="space-y-3.5 text-xs text-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-800 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-primary-950 hover:text-gold-600">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-800 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-primary-950 hover:text-gold-600">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-800 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="font-bold text-primary-950">
                {COMPANY_INFO.address}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-800 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="font-bold text-primary-950">
                {COMPANY_INFO.workingHours}
              </div>
            </div>
          </div>
        </div>

        {/* Location Map & Visual Card */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative rounded-2xl overflow-hidden border border-emerald-100 min-h-[180px] bg-emerald-950/10">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
              alt="Navi Mumbai Port Logistics Map"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary-950/40 backdrop-blur-[1px]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
              <MapPin className="w-8 h-8 text-gold-400 drop-shadow mb-1 animate-bounce" />
              <span className="text-sm font-bold font-display">Navi Mumbai, India</span>
              <span className="text-[10px] text-emerald-200">Adjacent to JNPT Seaport</span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-emerald-100 min-h-[180px] bg-primary-950 p-5 text-white flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest">
                Direct Port Dispatch
              </span>
              <h4 className="text-sm font-bold font-display">
                We connect global markets with premium Indian agricultural products.
              </h4>
            </div>
            <p className="text-[10px] text-emerald-200/80">
              JNPT (Nhava Sheva) • Mundra Port • Mumbai Air Cargo Complex
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
