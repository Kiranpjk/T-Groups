'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/data/productsData';
import { Package, MapPin, Send, ArrowRight } from 'lucide-react';

interface ProductGridViewProps {
  products: Product[];
  onSelectProductForQuote: (product: Product) => void;
}

export function ProductGridView({ products, onSelectProductForQuote }: ProductGridViewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          id={product.id}
          className="bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
        >
          {/* Product Image */}
          <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-neutral-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border border-neutral-200">
              {product.category}
            </span>

            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="text-base font-bold text-white drop-shadow">
                {product.name}
              </h3>
            </div>
          </div>

          {/* Details */}
          <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
            <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
              {product.shortDescription || product.description}
            </p>

            {/* Spec pills */}
            <div className="bg-neutral-50 rounded-xl p-3 text-[11px] space-y-1.5 border border-neutral-200">
              <div className="flex items-start gap-1 text-neutral-700">
                <span className="font-bold text-neutral-950 flex-shrink-0">Grade:</span>
                <span className="text-neutral-600 line-clamp-1">{product.availableGrades.join(', ')}</span>
              </div>
              <div className="flex items-start gap-1 text-neutral-700">
                <Package className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-600 line-clamp-1">{product.packagingOptions[0]}</span>
              </div>
              <div className="flex items-start gap-1 text-neutral-700">
                <MapPin className="w-3.5 h-3.5 text-[#0B7A3B] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-600 line-clamp-1">{product.origin.split('(')[0]}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link
                href={`/products/${product.slug}`}
                className="w-full py-2 text-center text-[11px] font-bold text-neutral-700 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg transition-colors uppercase tracking-wider"
              >
                View Specs
              </Link>
              <button
                type="button"
                onClick={() => onSelectProductForQuote(product)}
                className="w-full flex items-center justify-center gap-1 bg-[#0B7A3B] hover:bg-[#096631] text-white text-[11px] font-bold py-2 px-2 rounded-lg transition-colors shadow-sm uppercase tracking-wider"
              >
                <Send className="w-3 h-3" />
                <span>Quote</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
