'use client';

import React, { useState } from 'react';
import { Product } from '@/data/productsData';
import { COMPANY_INFO } from '@/data/companyData';
import confetti from 'canvas-confetti';
import { 
  X, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Package, 
  MapPin, 
  Truck,
  MessageSquare
} from 'lucide-react';

interface ProductQuoteModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductQuoteModal({ product, onClose }: ProductQuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    whatsappPhone: '',
    country: '',
    quantityMT: '25',
    packingRequirement: product.packagingOptions[0] || 'Standard Export Packaging',
    destinationPort: '',
    preferredIncoterm: 'CIF',
    preferredShipmentDate: '',
    modeOfFreight: product.freightMethod.includes('Air') ? 'By Air Cargo' : 'By Sea (FCL / Reefer)',
    message: `Inquiring for export quotation of ${product.name} (Grade: ${product.availableGrades[0]}). Please provide CIF / FOB price and earliest shipment schedule.`
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
          fullName: formData.fullName,
          companyName: formData.companyName,
          emailAddress: formData.email,
          whatsappNumber: formData.whatsappPhone,
          country: formData.country,
          quantity: `${formData.quantityMT} MT`,
          packagingRequirement: formData.packingRequirement,
          destinationPort: formData.destinationPort,
          preferredIncoterm: formData.preferredIncoterm,
          targetShipmentDate: formData.preferredShipmentDate,
          product: product.name,
          additionalRequirements: formData.message
        }),
      });

      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err: any) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello T Group Imports & Exports,%0A%0AI am requesting an export price quotation:%0A- Product: ${encodeURIComponent(product.name)}%0A- Grade: ${encodeURIComponent(product.availableGrades.join(', '))}%0A- Quantity: ${formData.quantityMT} MT%0A- Destination Country: ${encodeURIComponent(formData.country || 'International')}%0A- Destination Port: ${encodeURIComponent(formData.destinationPort || 'Major Port')}%0A- Incoterm: ${formData.preferredIncoterm}%0A- Company: ${encodeURIComponent(formData.companyName || 'Import Buyer')}%0A%0APlease share your best CIF/FOB quote and shipping schedule.`;
    return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-neutral-900 text-white p-5 sm:p-6 flex items-center justify-between border-b border-neutral-800">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
              Request Export Quotation
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-[#0B7A3B]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-neutral-900">
                Quotation Request Received!
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you for your interest in <strong>{product.name}</strong>. Our export desk has received your specifications and will respond with a full proforma quotation shortly.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B7A3B] hover:bg-[#096631] text-white font-bold text-xs py-3 px-5 rounded-xl transition-all shadow-md uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp Desk</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto text-xs font-bold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 py-3 px-5 rounded-xl transition-colors uppercase tracking-wider"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product quick summary pill */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3 flex flex-wrap items-center justify-between text-xs gap-2">
                <div className="flex items-center gap-2 text-neutral-900 font-bold">
                  <Package className="w-4 h-4 text-[#D4AF37]" />
                  <span>Grade: {product.availableGrades[0]}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <MapPin className="w-4 h-4 text-[#0B7A3B]" />
                  <span>Origin: {product.origin.split('(')[0]}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Truck className="w-4 h-4 text-[#0B7A3B]" />
                  <span>{product.freightMethod.split('(')[0]}</span>
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Form inputs grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-bold text-neutral-800 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. John Doe / Sourcing Manager"
                    className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#0B7A3B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-800 mb-1">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Al-Madina Foodstuffs LLC"
                    className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#0B7A3B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-800 mb-1">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="buyer@domain.com"
                    className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#0B7A3B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-800 mb-1">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsappPhone"
                    required
                    value={formData.whatsappPhone}
                    onChange={handleChange}
                    placeholder="+971 50 1234567"
                    className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#0B7A3B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-800 mb-1">
                    Destination Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. UAE / Saudi Arabia / Canada"
                    className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#0B7A3B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-800 mb-1">
                    Destination Port <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="destinationPort"
                    required
                    value={formData.destinationPort}
                    onChange={handleChange}
                    placeholder="e.g. Jebel Ali / Jeddah / Port Klang"
                    className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#0B7A3B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-800 mb-1">
                    Required Quantity (MT / Containers) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="quantityMT"
                    required
                    value={formData.quantityMT}
                    onChange={handleChange}
                    placeholder="e.g. 28 MT / 1 x 40ft Reefer"
                    className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#0B7A3B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-800 mb-1">
                    Preferred Incoterm
                  </label>
                  <select
                    name="preferredIncoterm"
                    value={formData.preferredIncoterm}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#0B7A3B] focus:outline-none bg-white"
                  >
                    <option value="CIF">CIF (Cost, Insurance, Freight)</option>
                    <option value="FOB">FOB (Free On Board - Indian Port)</option>
                    <option value="CFR">CFR (Cost &amp; Freight)</option>
                    <option value="FCA">FCA (Free Carrier)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-neutral-800 mb-1 text-xs">
                  Additional Requirements / Specifications
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-xl text-xs focus:ring-2 focus:ring-[#0B7A3B] focus:outline-none resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-[#0B7A3B] hover:text-[#096631] text-xs font-bold flex items-center gap-1.5 p-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp Desk &rarr;</span>
                </a>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-[#0B7A3B] hover:bg-[#096631] text-white font-bold text-xs py-3 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Quotation...</span>
                  ) : (
                    <>
                      <span>SUBMIT RFQ</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
