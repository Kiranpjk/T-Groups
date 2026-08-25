'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/productsData';
import { Package, MapPin, Ship, Plane, Send, Sparkles } from 'lucide-react';

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
          className="bg-white rounded-2xl border border-emerald-100/90 shadow-sm hover:shadow-luxury-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
        >
          {/* Product Image */}
          <div className="relative h-48 w-full overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-primary-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border border-emerald-100">
              {product.category}
            </span>

            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="text-base font-bold text-white font-display drop-shadow">
                {product.name}
              </h3>
            </div>
          </div>

          {/* Details */}
          <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
            <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            {/* Spec pills */}
            <div className="bg-primary-50/50 rounded-xl p-3 text-[11px] space-y-1.5 border border-primary-100/60">
              <div className="flex items-start gap-1 text-gray-700">
                <span className="font-bold text-primary-950 flex-shrink-0">Grade:</span>
                <span className="text-gray-600 line-clamp-1">{product.exportGrade}</span>
              </div>
              <div className="flex items-start gap-1 text-gray-700">
                <Package className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 line-clamp-1">{product.packingOptions}</span>
              </div>
              <div className="flex items-start gap-1 text-gray-700">
                <MapPin className="w-3.5 h-3.5 text-primary-700 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 line-clamp-1">{product.origin}</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => onSelectProductForQuote(product)}
              className="w-full flex items-center justify-center gap-1.5 bg-primary-800 hover:bg-primary-900 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors shadow-sm border border-primary-700 hover:border-gold-400"
            >
              <Send className="w-3 h-3 text-gold-400" />
              <span>Request Quote for this Product</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
