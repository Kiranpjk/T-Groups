'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS_DATA, Product } from '@/data/productsData';
import { ProductFilters } from '@/components/products/ProductFilters';
import { ProductTableView } from '@/components/products/ProductTableView';
import { ProductGridView } from '@/components/products/ProductGridView';
import { ProductQuoteModal } from '@/components/products/ProductQuoteModal';
import { Sparkles, ArrowRight, MessageSquare, Ship, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export function ProductsClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.exportGrade.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-12 pb-20">
      {/* Header Banner matching Mockup 3 */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary-950 via-emerald-950 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=2000&q=80"
            alt="Agricultural Produce Sourcing"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/80 border border-gold-500/40 text-gold-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complete Export Specification Catalog</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
              OUR PRODUCTS
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
              We export a wide range of premium quality agricultural products from India to global markets. Every batch is graded, sorted, and packed to comply with destination country standards.
            </p>
          </div>
        </div>
      </section>

      {/* Main Filter & Catalog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Filters */}
        <ProductFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          totalResults={filteredProducts.length}
        />

        {/* View Mode Render */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-emerald-100 space-y-3">
            <p className="text-gray-600 text-sm font-semibold">
              No products found matching &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-primary-800 underline"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === 'table' ? (
          <ProductTableView
            products={filteredProducts}
            onSelectProductForQuote={setSelectedProductForQuote}
          />
        ) : (
          <ProductGridView
            products={filteredProducts}
            onSelectProductForQuote={setSelectedProductForQuote}
          />
        )}

        {/* Bottom CTA bar matching Mockup 3 */}
        <div className="bg-gradient-to-r from-primary-950 via-primary-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 border border-gold-500/40 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              LOOKING FOR SOMETHING SPECIFIC?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/80">
              Get in touch with our team for customized grades, custom packing, or non-listed agricultural commodities at competitive prices.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold text-xs sm:text-sm py-3 px-6 rounded-xl transition-all shadow-md"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello T Group, I am looking for a specific agricultural product export quotation.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl border border-white/20 transition-all backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {selectedProductForQuote && (
        <ProductQuoteModal
          product={selectedProductForQuote}
          onClose={() => setSelectedProductForQuote(null)}
        />
      )}
    </div>
  );
}
