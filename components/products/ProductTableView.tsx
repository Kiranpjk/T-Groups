'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/productsData';
import { Package, MapPin, Ship, Plane, Send, CheckCircle2 } from 'lucide-react';

interface ProductTableViewProps {
  products: Product[];
  onSelectProductForQuote: (product: Product) => void;
}

export function ProductTableView({ products, onSelectProductForQuote }: ProductTableViewProps) {
  return (
    <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary-950 text-white text-[11px] font-extrabold uppercase tracking-wider border-b border-gold-500/40">
              <th className="py-4 px-6 min-w-[260px]">Product</th>
              <th className="py-4 px-5 min-w-[180px]">Export Grade</th>
              <th className="py-4 px-5 min-w-[200px]">Packing Options</th>
              <th className="py-4 px-5 min-w-[180px]">Origin</th>
              <th className="py-4 px-5 min-w-[180px]">Method of Freight</th>
              <th className="py-4 px-5 text-right min-w-[140px]">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-xs">
            {products.map((product, idx) => (
              <tr
                key={product.id}
                id={product.id}
                className={`hover:bg-primary-50/40 transition-colors group ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFCFA]'
                }`}
              >
                {/* Product Column */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 border border-emerald-100 shadow-sm">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 font-display text-sm group-hover:text-primary-800 transition-colors">
                        {product.name}
                      </div>
                      <p className="text-[11px] text-gray-500 line-clamp-1 max-w-xs mt-0.5">
                        {product.description}
                      </p>
                      <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Export Grade Column */}
                <td className="py-4 px-5 text-gray-700 font-medium">
                  <div className="space-y-1">
                    {product.exportGrade.split(',').map((grade, i) => (
                      <div key={i} className="text-[11px] text-gray-800">
                        • {grade.trim()}
                      </div>
                    ))}
                  </div>
                </td>

                {/* Packing Options Column */}
                <td className="py-4 px-5 text-gray-600">
                  <div className="flex items-start gap-1.5">
                    <Package className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{product.packingOptions}</span>
                  </div>
                </td>

                {/* Origin Column */}
                <td className="py-4 px-5 text-gray-600">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary-700 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{product.origin}</span>
                  </div>
                </td>

                {/* Method of Freight Column */}
                <td className="py-4 px-5 text-gray-700">
                  <div className="space-y-1">
                    {product.methodOfFreight.includes('Sea') && (
                      <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                        <Ship className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Sea Freight (Reefer / FCL)</span>
                      </div>
                    )}
                    {product.methodOfFreight.includes('Air') && (
                      <div className="flex items-center gap-1.5 text-primary-800 font-semibold">
                        <Plane className="w-3.5 h-3.5 text-primary-600" />
                        <span>Air Cargo Express</span>
                      </div>
                    )}
                  </div>
                </td>

                {/* Action Column */}
                <td className="py-4 px-5 text-right">
                  <button
                    onClick={() => onSelectProductForQuote(product)}
                    className="inline-flex items-center gap-1.5 bg-primary-800 hover:bg-primary-900 text-white font-bold text-xs py-2 px-3.5 rounded-lg shadow-sm hover:shadow transition-all border border-primary-700 hover:border-gold-400"
                  >
                    <Send className="w-3 h-3 text-gold-400" />
                    <span>Get Quote</span>
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
