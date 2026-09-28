import React from 'react';
import Link from 'next/link';
import { PRODUCTS_DATA } from '@/data/productsData';
import { ArrowRight, Box, Anchor, ShieldCheck } from 'lucide-react';

export function FeaturedProducts() {
  const featured = PRODUCTS_DATA.filter((p) => p.featured).slice(0, 8);

  return (
    <section className="py-20 bg-neutral-50/60 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
                Featured Export Products
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Export-Ready Commodities
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-xl">
              High-demand agricultural produce graded and packed for international supermarkets, distributors, and wholesalers.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B7A3B] hover:text-[#096631] transition-colors group"
          >
            <span>Explore All Commodities</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 8 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-300 flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-neutral-800 shadow-sm border border-neutral-200">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#0B7A3B] transition-colors mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>

                  <div className="space-y-1.5 py-3 border-y border-neutral-100 text-[11px] text-neutral-600">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400">Grades:</span>
                      <span className="font-semibold text-neutral-800 truncate max-w-[150px]">{product.availableGrades[0]}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400">Packing:</span>
                      <span className="font-semibold text-neutral-800 truncate max-w-[150px]">{product.packagingOptions[0]}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400">MOQ:</span>
                      <span className="font-semibold text-emerald-800 truncate max-w-[150px]">FCL / Air Cargo</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-1">
                  <Link
                    href={`/products/${product.slug}`}
                    className="w-full py-2 text-center text-[11px] font-bold text-neutral-700 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg transition-colors uppercase tracking-wider"
                  >
                    View Specs
                  </Link>
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}#rfq-form`}
                    className="w-full py-2 text-center text-[11px] font-bold text-white bg-[#0B7A3B] hover:bg-[#096631] rounded-lg transition-colors uppercase tracking-wider shadow-sm"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
