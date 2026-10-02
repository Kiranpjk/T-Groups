'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { PRODUCTS_DATA } from '@/data/productsData';

interface QuoteFormProps {
  defaultProduct?: string;
  defaultCategory?: string;
  defaultPackaging?: string;
}

const EMPTY_FORM = {
  fullName: '',
  companyName: '',
  country: '',
  whatsappNumber: '',
  emailAddress: '',
  product: '',
  quantity: '',
  packagingRequirement: '',
  destinationPort: '',
  preferredIncoterm: '',
  targetShipmentDate: '',
  additionalRequirements: '',
};

export function QuoteForm({ defaultProduct, defaultCategory, defaultPackaging }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    ...EMPTY_FORM,
    product: defaultProduct || '',
    packagingRequirement: defaultPackaging || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const incotermOptions = ['FOB', 'CFR', 'CIF', 'FCA', 'EXW', 'OTHER'];
  const fieldClass =
    'w-full px-5 py-3.5 rounded-full bg-[#F3F5F3] border-0 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B7A3B]/25 transition-all';
  const labelClass = 'block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-2';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          companyName: formData.companyName,
          email: formData.emailAddress,
          whatsappPhone: formData.whatsappNumber,
          country: formData.country,
          product: formData.product,
          quantityMT: formData.quantity,
          packingRequirement: formData.packagingRequirement,
          destinationPort: formData.destinationPort,
          preferredIncoterm: formData.preferredIncoterm,
          preferredShipmentDate: formData.targetShipmentDate,
          message: formData.additionalRequirements,
        }),
      });

      if (!res.ok) {
        const result = await res.json().catch(() => null);
        throw new Error(result?.error || 'Could not submit RFQ. Please try again or message our WhatsApp export desk.');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrorMessage(err instanceof Error ? err.message : 'Could not submit RFQ. Please try again or message our WhatsApp export desk.');
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
        <h3 className="text-2xl font-extrabold text-neutral-900 mb-2">RFQ Successfully Received</h3>
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
              setFormData({ ...EMPTY_FORM, product: defaultProduct || '', packagingRequirement: defaultPackaging || '' });
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
    <form onSubmit={handleSubmit} className="space-y-5">
      {errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Full Name <span className="text-[#0B7A3B]">*</span>
          </label>
          <input type="text" name="fullName" required placeholder="Your full name" value={formData.fullName} onChange={handleChange} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass}>
            Company Name <span className="text-[#0B7A3B]">*</span>
          </label>
          <input type="text" name="companyName" required placeholder="Your company" value={formData.companyName} onChange={handleChange} className={fieldClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Country <span className="text-[#0B7A3B]">*</span>
          </label>
          <input type="text" name="country" required placeholder="Your country" value={formData.country} onChange={handleChange} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass}>WhatsApp Number</label>
          <input type="tel" name="whatsappNumber" placeholder="+123 567 8900" value={formData.whatsappNumber} onChange={handleChange} className={fieldClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Email Address <span className="text-[#0B7A3B]">*</span>
          </label>
          <input type="email" name="emailAddress" required placeholder="your@email.com" value={formData.emailAddress} onChange={handleChange} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass}>
            Product <span className="text-[#0B7A3B]">*</span>
          </label>
          <select name="product" required value={formData.product} onChange={handleChange} className={`${fieldClass} appearance-none`}>
            <option value="">Select product</option>
            {PRODUCTS_DATA.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Other Agricultural Product">Other Agricultural Product</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Quantity (MT / Containers)</label>
          <input type="text" name="quantity" placeholder="e.g. 1 x 40ft FCL, 20 MT" value={formData.quantity} onChange={handleChange} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass}>Packaging Requirement</label>
          <input type="text" name="packagingRequirement" placeholder="e.g. 10kg carton, custom label" value={formData.packagingRequirement} onChange={handleChange} className={fieldClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Destination Port</label>
          <input type="text" name="destinationPort" placeholder="e.g. Jebel Ali, UAE" value={formData.destinationPort} onChange={handleChange} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass}>Preferred Incoterm</label>
          <select name="preferredIncoterm" value={formData.preferredIncoterm} onChange={handleChange} className={`${fieldClass} appearance-none`}>
            <option value="">Select Incoterm</option>
            {incotermOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Target Shipment Date</label>
        <input type="text" name="targetShipmentDate" placeholder="e.g. September 2026, Q4 2026" value={formData.targetShipmentDate} onChange={handleChange} className={fieldClass} />
      </div>

      <div>
        <label className={labelClass}>Additional Requirements</label>
        <textarea
          name="additionalRequirements"
          rows={4}
          placeholder="Quality specs, certifications required, other requirements..."
          value={formData.additionalRequirements}
          onChange={handleChange}
          className="w-full px-5 py-4 rounded-3xl bg-[#F3F5F3] border-0 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B7A3B]/25 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#0B7A3B] hover:bg-[#096631] text-white font-extrabold text-sm tracking-widest uppercase rounded-full shadow-[0_12px_30px_rgba(11,122,59,0.28)] hover:shadow-[0_16px_36px_rgba(11,122,59,0.35)] transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70"
      >
        <span>{isSubmitting ? 'Submitting RFQ...' : 'Submit RFQ'}</span>
        <Send className="w-4 h-4" />
      </button>

      <p className="text-[11px] text-center text-neutral-500 leading-relaxed px-2">
        By submitting this form you agree to be contacted by our export team regarding your enquiry. We do not share your information with third parties.
      </p>
    </form>
  );
}
