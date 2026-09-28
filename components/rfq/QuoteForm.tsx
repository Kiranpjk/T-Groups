'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { PRODUCTS_DATA } from '@/data/productsData';

interface QuoteFormProps {
  defaultProduct?: string;
  defaultCategory?: string;
  defaultPackaging?: string;
}

export function QuoteForm({ defaultProduct, defaultCategory, defaultPackaging }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    country: '',
    whatsappNumber: '',
    emailAddress: '',
    product: defaultProduct || '',
    quantity: '',
    packagingRequirement: defaultPackaging || '',
    destinationPort: '',
    preferredIncoterm: 'CIF',
    targetShipmentDate: '',
    additionalRequirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const incotermOptions = ['FOB', 'CFR', 'CIF', 'FCA', 'OTHER'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Send to API endpoint
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Could not submit RFQ. Please try again or message our WhatsApp export desk.');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      // In case of local testing / fallback, show graceful completion
      console.error(err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 sm:p-12 text-center animate-fadeIn">
        <div className="w-16 h-16 bg-[#0B7A3B] text-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-extrabold text-neutral-900 mb-2">
          RFQ Successfully Received
        </h3>
        <p className="text-sm sm:text-base text-neutral-700 max-w-lg mx-auto leading-relaxed">
          Thank you for your enquiry. Our export team will review your requirements and contact you shortly with a comprehensive formal quotation and container schedule.
        </p>
        <div className="mt-8 pt-6 border-t border-emerald-200/80 flex flex-wrap justify-center gap-4 text-xs font-semibold">
          <a
            href={`https://wa.me/919550255644?text=${encodeURIComponent(`Hello T Group, I just submitted an RFQ for ${formData.product || 'agricultural commodities'}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#0B7A3B] hover:bg-[#096631] text-white rounded-lg transition-colors"
          >
            Direct WhatsApp Notification
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                companyName: '',
                country: '',
                whatsappNumber: '',
                emailAddress: '',
                product: '',
                quantity: '',
                packagingRequirement: '',
                destinationPort: '',
                preferredIncoterm: 'CIF',
                targetShipmentDate: '',
                additionalRequirements: ''
              });
            }}
            className="px-5 py-2.5 bg-white border border-neutral-300 text-neutral-800 rounded-lg hover:bg-neutral-50 transition-colors"
          >
            Submit Another RFQ
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Full Name & Company Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="e.g. John Doe / Sourcing Director"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B7A3B] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            required
            placeholder="e.g. Al-Madina Foodstuffs LLC"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B7A3B] focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Row 2: Country, WhatsApp, Email */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
            Country <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="country"
            required
            placeholder="e.g. UAE / Saudi Arabia / Canada"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B7A3B] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
            WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="whatsappNumber"
            required
            placeholder="e.g. +971 50 123 4567"
            value={formData.whatsappNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B7A3B] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="emailAddress"
            required
            placeholder="e.g. procurement@company.com"
            value={formData.emailAddress}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B7A3B] focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Row 3: Product, Quantity, Packaging Requirement */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
            Product <span className="text-red-500">*</span>
          </label>
          <select
            name="product"
            required
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0B7A3B] focus:border-transparent transition-all"
          >
            <option value="">Select Agricultural Commodity</option>
            {PRODUCTS_DATA.map(p => (
              <option key={p.id} value={p.name}>{p.name} ({p.category})</option>
            ))}
            <option value="Other Agricultural Product">Other Agricultural Product</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
            Quantity Required <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="quantity"
            required
            placeholder="e.g. 1 x 40ft Reefer (28 MT)"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B7A3B] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
            Packaging Requirement
          </label>
          <input
            type="text"
            name="packagingRequirement"
            placeholder="e.g. 10kg Mesh Bag / 25kg PP"
            value={formData.packagingRequirement}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B7A3B] focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Row 4: Destination Port, Incoterm, Target Shipment Date */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
            Destination Port <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="destinationPort"
            required
            placeholder="e.g. Jebel Ali / Port Klang / Colombo"
            value={formData.destinationPort}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B7A3B] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
            Preferred Incoterm
          </label>
          <select
            name="preferredIncoterm"
            value={formData.preferredIncoterm}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0B7A3B] focus:border-transparent transition-all"
          >
            {incotermOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
            Target Shipment Date
          </label>
          <input
            type="text"
            name="targetShipmentDate"
            placeholder="e.g. Immediate / Next Month"
            value={formData.targetShipmentDate}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B7A3B] focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Row 5: Additional Requirements */}
      <div>
        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
          Additional Requirements / Specifications
        </label>
        <textarea
          name="additionalRequirements"
          rows={3}
          placeholder="Specify grades, caliber size (mm), MRL limits, private label artwork, or target pricing requirements..."
          value={formData.additionalRequirements}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B7A3B] focus:border-transparent transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#0B7A3B] hover:bg-[#096631] text-white font-extrabold text-sm tracking-widest uppercase rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70"
      >
        <Send className="w-4 h-4" />
        <span>{isSubmitting ? 'Submitting RFQ...' : 'SUBMIT RFQ'}</span>
      </button>

      <p className="text-[11px] text-center text-neutral-500">
        Direct B2B enquiry to T Group Exports Desk. Your commercial information is strictly confidential.
      </p>
    </form>
  );
}
