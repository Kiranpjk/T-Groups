import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PRODUCTS_DATA, getProductBySlug } from '@/data/productsData';
import { QuoteForm } from '@/components/rfq/QuoteForm';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Package, 
  Ship, 
  ShieldCheck, 
  FileText, 
  MapPin, 
  Layers, 
  Clock, 
  Calendar,
  Globe2,
  Phone,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import type { Metadata } from 'next';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: 'Product Not Found - T Group Imports & Exports' };

  return {
    title: `${product.name} Exporter India | Bulk B2B Supplier - T Group`,
    description: `Export-quality ${product.name} from India. Graded calibrations, container loadability, Phytosanitary certification, and FCL/air shipments worldwide.`
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-50/50 pb-20">
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-[#0B7A3B] transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Products Catalog</span>
            </Link>
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Product Overview */}
      <div className="bg-white border-b border-neutral-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Product Image */}
            <div className="lg:col-span-5 bg-neutral-100 rounded-3xl overflow-hidden border border-neutral-200 shadow-sm relative aspect-square max-h-[480px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold tracking-wider px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-neutral-900 border border-neutral-200 shadow-sm uppercase">
                  {product.categoryBadge}
                </span>
              </div>
            </div>

            {/* Right Main Info */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-4 h-[1.5px] bg-[#D4AF37]" />
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
                    Origin: {product.origin.split('(')[0].trim()}
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight mb-4">
                  {product.name}
                </h1>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Key Quick Specifications Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs">
                  <div>
                    <span className="text-neutral-400 block font-medium">Available Grades</span>
                    <span className="font-bold text-neutral-900 mt-0.5 block">{product.availableGrades.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block font-medium">Supply Mode</span>
                    <span className="font-bold text-neutral-900 mt-0.5 block">{product.supplyType}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block font-medium">Container MOQ</span>
                    <span className="font-bold text-emerald-800 mt-0.5 block">{product.moq}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block font-medium">Seasonality</span>
                    <span className="font-bold text-neutral-900 mt-0.5 block">{product.seasonality}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block font-medium">Shelf Life</span>
                    <span className="font-bold text-neutral-900 mt-0.5 block">{product.shelfLife}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block font-medium">Transit Modes</span>
                    <span className="font-bold text-neutral-900 mt-0.5 block">{product.freightMethod.split('(')[0].trim()}</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#product-rfq"
                  className="inline-flex items-center justify-center bg-[#0B7A3B] hover:bg-[#096631] text-white font-extrabold text-xs tracking-wider uppercase px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  REQUEST {product.name.toUpperCase()} QUOTATION
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Hello T Group, I would like to request an export quote for ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-neutral-300 hover:border-emerald-500 bg-white text-neutral-800 font-bold text-xs tracking-wider uppercase px-6 py-4 rounded-xl transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Talk to Product Specialist</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications & Packaging */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Details (Specs, Packaging, QA, Ports) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* 1. Specifications Table */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
              <h2 className="text-xl font-bold text-neutral-900 mb-6 pb-3 border-b border-neutral-100 flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-[#0B7A3B]" />
                <span>Technical Specifications</span>
              </h2>
              <div className="divide-y divide-neutral-100 text-xs sm:text-sm">
                {product.specifications.map((spec) => (
                  <div key={spec.key} className="py-3 flex justify-between gap-4">
                    <span className="font-medium text-neutral-500">{spec.key}</span>
                    <span className="font-bold text-neutral-900 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Packaging Options & Loadability */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
              <h2 className="text-xl font-bold text-neutral-900 mb-6 pb-3 border-b border-neutral-100 flex items-center gap-2.5">
                <Package className="w-5 h-5 text-[#0B7A3B]" />
                <span>Packaging &amp; Container Loadability</span>
              </h2>
              
              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2">Available Packaging Types:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.packagingOptions.map((pack, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-700 font-medium">
                        {pack}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-100">
                  <h3 className="font-bold text-neutral-800 mb-1">Standard Loadability:</h3>
                  <p className="text-neutral-600">{product.loadability}</p>
                </div>
              </div>
            </div>

            {/* 3. Quality Assurance & Documents */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
              <h2 className="text-xl font-bold text-neutral-900 mb-6 pb-3 border-b border-neutral-100 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#0B7A3B]" />
                <span>Quality Requirements &amp; Export Documentation</span>
              </h2>

              <div className="space-y-6 text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2">Quality Control Protocols:</h3>
                  <ul className="space-y-2">
                    {product.qualityAssurance.map((qa, i) => (
                      <li key={i} className="flex items-start gap-2 text-neutral-600">
                        <CheckCircle2 className="w-4 h-4 text-[#0B7A3B] mt-0.5 flex-shrink-0" />
                        <span>{qa}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-neutral-100">
                  <h3 className="font-bold text-neutral-800 mb-2">Included Export Documents:</h3>
                  <ul className="space-y-2">
                    {product.exportDocuments.map((doc, i) => (
                      <li key={i} className="flex items-start gap-2 text-neutral-600">
                        <FileText className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Ports & Target Markets */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
              <h2 className="text-xl font-bold text-neutral-900 mb-6 pb-3 border-b border-neutral-100 flex items-center gap-2.5">
                <Ship className="w-5 h-5 text-[#0B7A3B]" />
                <span>Applicable Indian Ports &amp; Global Markets</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2">Dispatched From Seaports:</h3>
                  <div className="space-y-1 text-neutral-600">
                    {product.applicablePorts.map((p, i) => (
                      <div key={i}>• {p}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2">Established Destination Markets:</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {product.targetMarkets.map((m, i) => (
                      <span key={i} className="px-2.5 py-1 rounded bg-neutral-100 text-neutral-800 font-semibold text-xs">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right RFQ Form sticky block */}
          <div id="product-rfq" className="lg:col-span-5 sticky top-24">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-lg">
              <div className="mb-6">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest px-2.5 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                  Request for Quotation
                </span>
                <h3 className="text-xl font-extrabold text-neutral-900 mt-2">
                  Get a Quote for {product.name}
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Specify your required volume, packaging preference, and destination port.
                </p>
              </div>

              <QuoteForm defaultProduct={product.name} defaultPackaging={product.packagingOptions[0]} />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
