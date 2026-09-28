'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/data/productsData';
import { Package, MapPin, Ship, Plane, Send, Eye } from 'lucide-react';

interface ProductTableViewProps {
  products: Product[];
  onSelectProductForQuote: (product: Product) => void;
}

export function ProductTableView({ products, onSelectProductForQuote }: ProductTableViewProps) {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-neutral-900 text-white text-[11px] font-extrabold uppercase tracking-wider border-b border-neutral-800">
              <th className="py-4 px-6 min-w-[260px]">Product</th>
              <th className="py-4 px-5 min-w-[180px]">Available Grades</th>
              <th className="py-4 px-5 min-w-[200px]">Packaging Options</th>
              <th className="py-4 px-5 min-w-[180px]">Origin</th>
              <th className="py-4 px-5 min-w-[180px]">Freight Mode</th>
              <th className="py-4 px-5 text-right min-w-[180px]">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 text-xs">
            {products.map((product, idx) => (
              <tr
                key={product.id}
                id={product.id}
                className={`hover:bg-neutral-50/70 transition-colors group ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50/40'
                }`}
              >
                {/* Product Column */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0 border border-neutral-200 shadow-sm">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <Link 
                        href={`/products/${product.slug}`}
                        className="font-bold text-neutral-900 hover:text-[#0B7A3B] text-sm transition-colors block"
                      >
                        {product.name}
                      </Link>
                      <p className="text-[11px] text-neutral-500 line-clamp-1 max-w-xs mt-0.5">
                        {product.shortDescription || product.description}
                      </p>
                      <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Available Grades Column */}
                <td className="py-4 px-5 text-neutral-700 font-medium">
                  <div className="space-y-1">
                    {product.availableGrades.slice(0, 3).map((grade, i) => (
                      <div key={i} className="text-[11px] text-neutral-800">
                        • {grade.trim()}
                      </div>
                    ))}
                  </div>
                </td>

                {/* Packaging Options Column */}
                <td className="py-4 px-5 text-neutral-600">
                  <div className="flex items-start gap-1.5">
                    <Package className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{product.packagingOptions[0]}</span>
                  </div>
                </td>

                {/* Origin Column */}
                <td className="py-4 px-5 text-neutral-600">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0B7A3B] flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{product.origin.split('(')[0]}</span>
                  </div>
                </td>

                {/* Freight Mode Column */}
                <td className="py-4 px-5 text-neutral-700">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-semibold text-[11px]">
                      <Ship className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{product.freightMethod.split('(')[0].trim()}</span>
                    </div>
                  </div>
                </td>

                {/* Action Column */}
                <td className="py-4 px-5 text-right space-x-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-xs py-2 px-3 rounded-lg transition-colors uppercase tracking-wider"
                  >
                    <Eye className="w-3 h-3" />
                    <span>Specs</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => onSelectProductForQuote(product)}
                    className="inline-flex items-center gap-1 bg-[#0B7A3B] hover:bg-[#096631] text-white font-bold text-xs py-2 px-3 rounded-lg shadow-sm transition-all uppercase tracking-wider"
                  >
                    <Send className="w-3 h-3" />
                    <span>Quote</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
