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
    packingRequirement: product.packingOptions.split(',')[0] || 'Standard Export Packaging',
    destinationPort: '',
    preferredIncoterm: 'CIF',
    preferredShipmentDate: '',
    modeOfFreight: product.methodOfFreight.includes('Air') ? 'By Air Cargo' : 'By Sea (FCL / Reefer)',
    message: `Inquiring for export quotation of ${product.name} (Grade: ${product.exportGrade}). Please provide CIF / FOB price and earliest shipment schedule.`
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
          product: product.name,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit quote request.');
      }

      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try WhatsApp directly.');
    } finally {
      setLoading(false);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello T Group Imports & Exports,%0A%0AI am requesting an export price quotation:%0A- Product: ${encodeURIComponent(product.name)}%0A- Grade: ${encodeURIComponent(product.exportGrade)}%0A- Quantity: ${formData.quantityMT} MT%0A- Destination Country: ${encodeURIComponent(formData.country || 'International')}%0A- Destination Port: ${encodeURIComponent(formData.destinationPort || 'Major Port')}%0A- Incoterm: ${formData.preferredIncoterm}%0A- Company: ${encodeURIComponent(formData.companyName || 'Import Buyer')}%0A%0APlease share your best CIF/FOB quote and shipping schedule.`;
    return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-900 to-emerald-900 text-white p-5 flex items-center justify-between border-b border-gold-500/30">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
              Request Export Quotation
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-display text-white">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-primary-700">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 font-display">
                Quotation Request Received!
              </h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you for your interest in <strong>{product.name}</strong>. Our export desk has received your specifications and will respond with a full proforma quotation within 24 hours.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-5 rounded-xl transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp for Instant Response</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 py-3 px-5 rounded-xl transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product quick summary pill */}
              <div className="bg-primary-50/70 border border-primary-100 rounded-xl p-3 flex flex-wrap items-center justify-between text-xs gap-2">
                <div className="flex items-center gap-2 text-primary-950 font-bold">
                  <Package className="w-4 h-4 text-gold-600" />
                  <span>Grade: {product.exportGrade}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-4 h-4 text-primary-700" />
                  <span>Origin: {product.origin.split(',')[0]}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Truck className="w-4 h-4 text-emerald-700" />
                  <span>{product.methodOfFreight}</span>
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
                  <label className="block font-bold text-gray-700 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Company / Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Gulf Fresh Trading LLC"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="buyer@domain.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    WhatsApp / Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsappPhone"
                    required
                    value={formData.whatsappPhone}
                    onChange={handleChange}
                    placeholder="+971 50 1234567"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
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
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. UAE / Saudi Arabia / Canada"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Destination Seaport / Airport
                  </label>
                  <input
                    type="text"
                    name="destinationPort"
                    value={formData.destinationPort}
                    onChange={handleChange}
                    placeholder="e.g. Jebel Ali / Jeddah / Rotterdam"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Required Quantity (Metric Tons)
                  </label>
                  <input
                    type="number"
                    name="quantityMT"
                    min="1"
                    value={formData.quantityMT}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none bg-white"
                  >
                    <option value="CIF">CIF (Cost, Insurance, Freight)</option>
                    <option value="FOB">FOB (Free On Board - Indian Port)</option>
                    <option value="CFR">CFR (Cost & Freight)</option>
                    <option value="EXW">EXW (Ex-Works Warehouse)</option>
                    <option value="CIP">CIP (Carriage & Insurance Paid - Air)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1 text-xs">
                  Additional Packaging or Custom Requirements
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-primary-500 focus:outline-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-emerald-700 hover:text-emerald-800 text-xs font-bold flex items-center gap-1.5 p-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Or Send Direct on WhatsApp &rarr;</span>
                </a>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-primary-800 hover:bg-primary-900 text-white font-bold text-xs py-3 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 border border-primary-700 hover:border-gold-400 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Quotation...</span>
                  ) : (
                    <>
                      <span>SUBMIT QUOTE REQUEST</span>
                      <Send className="w-3.5 h-3.5 text-gold-400" />
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
