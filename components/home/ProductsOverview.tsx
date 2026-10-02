import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProductsOverviewProps {
  onOpenQuoteModal?: (productOrCategory?: string) => void;
}

export function ProductsOverview({ onOpenQuoteModal }: ProductsOverviewProps) {
  const categories = [
    {
      id: 'fresh-fruits',
      name: 'Fresh Fruits',
      tag: 'SEASONAL',
      tagClass: 'bg-emerald-50 text-[#0B7A3B] border-emerald-200',
      items: 'Mango · G9 Banana · Pomegranate',
      image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80',
      categoryQuery: 'Fresh Fruits'
    },
    {
      id: 'fresh-vegetables',
      name: 'Fresh Vegetables',
      tag: 'YEAR ROUND',
      tagClass: 'bg-emerald-50 text-[#0B7A3B] border-emerald-200',
      items: 'Fresh Onion · Green Chilli · Tomato · Okra',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      categoryQuery: 'Fresh Vegetables'
    },
    {
      id: 'rice-grains',
      name: 'Rice & Grains',
      tag: 'BULK AVAILABLE',
      tagClass: 'bg-emerald-50 text-[#0B7A3B] border-emerald-200',
      items: '1121 Basmati · Sona Masoori · IR64 · Swarna',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
      categoryQuery: 'Rice & Grains'
    },
    {
      id: 'spices',
      name: 'Spices',
      tag: 'EXPORT GRADE',
      tagClass: 'bg-emerald-50 text-[#0B7A3B] border-emerald-200',
      items: 'Dry Red Chilli · Turmeric · Cumin · Coriander',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
      categoryQuery: 'Spices'
    },
    {
      id: 'other-agro',
      name: 'Other Agro Products',
      tag: 'EXPANDING',
      tagClass: 'bg-amber-50 text-amber-800 border-amber-200',
      items: 'Semi-Husk Coconut · Drumstick · Seasonal Produce',
      description: 'This category is continuously expanding as we establish new sourcing relationships across India. Contact us for custom product requirements.',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
      categoryQuery: 'Other Agro Products',
      isWide: true
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
                Product Range
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Our Products
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-neutral-600 max-w-xl">
              Carefully sourced Indian agricultural and food products for international markets.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 border border-neutral-300 hover:border-[#0B7A3B] hover:text-[#0B7A3B] text-neutral-800 font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-lg transition-all self-start md:self-auto group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Categories Grid (Screenshot 3 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-[0_22px_50px_-12px_rgba(11,122,59,0.35)] hover:-translate-y-1 hover:border-emerald-200 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-neutral-900">{cat.name}</h3>
                    <span className={`text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${cat.tagClass}`}>
                      {cat.tag}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 font-medium">{cat.items}</p>
                </div>
                <div className="grid grid-cols-2 gap-2.5 mt-6 pt-4 border-t border-neutral-100">
                  <Link
                    href={`/products?category=${encodeURIComponent(cat.categoryQuery)}`}
                    className="w-full py-2.5 text-center text-xs font-bold text-neutral-700 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg transition-colors uppercase tracking-wider"
                  >
                    View Products
                  </Link>
                  <Link
                    href={`/contact?product=${encodeURIComponent(cat.name)}#rfq-form`}
                    className="w-full py-2.5 text-center text-xs font-bold text-white bg-[#0B7A3B] hover:bg-[#096631] rounded-lg transition-colors uppercase tracking-wider shadow-sm"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row (Spices & Other Agro Products) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Spices Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-[0_22px_50px_-12px_rgba(11,122,59,0.35)] hover:-translate-y-1 hover:border-emerald-200 transition-all duration-300 flex flex-col">
            <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
              <img
                src={categories[3].image}
                alt={categories[3].name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-neutral-900">{categories[3].name}</h3>
                  <span className={`text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${categories[3].tagClass}`}>
                    {categories[3].tag}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 font-medium">{categories[3].items}</p>
              </div>
              <div className="grid grid-cols-2 gap-2.5 mt-6 pt-4 border-t border-neutral-100">
                <Link
                  href={`/products?category=${encodeURIComponent(categories[3].categoryQuery)}`}
                  className="w-full py-2.5 text-center text-xs font-bold text-neutral-700 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg transition-colors uppercase tracking-wider"
                >
                  View Products
                </Link>
                <Link
                  href={`/contact?product=${encodeURIComponent(categories[3].name)}#rfq-form`}
                  className="w-full py-2.5 text-center text-xs font-bold text-white bg-[#0B7A3B] hover:bg-[#096631] rounded-lg transition-colors uppercase tracking-wider shadow-sm"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Other Agro Products Card (Wide split card as in screenshot 3) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-[0_22px_50px_-12px_rgba(11,122,59,0.35)] hover:-translate-y-1 hover:border-emerald-200 transition-all duration-300 grid grid-cols-1 sm:grid-cols-12">
            <div className="sm:col-span-5 relative h-56 sm:h-full overflow-hidden bg-neutral-100">
              <img
                src={categories[4].image}
                alt={categories[4].name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="sm:col-span-7 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-neutral-900">{categories[4].name}</h3>
                  <span className={`text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${categories[4].tagClass}`}>
                    {categories[4].tag}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 font-medium mb-3">{categories[4].items}</p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {categories[4].description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2.5 mt-6 pt-4 border-t border-neutral-100">
                <Link
                  href={`/products?category=${encodeURIComponent(categories[4].categoryQuery)}`}
                  className="w-full py-2.5 text-center text-xs font-bold text-neutral-700 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg transition-colors uppercase tracking-wider"
                >
                  View Products
                </Link>
                <Link
                  href={`/contact?product=${encodeURIComponent(categories[4].name)}#rfq-form`}
                  className="w-full py-2.5 text-center text-xs font-bold text-white bg-[#0B7A3B] hover:bg-[#096631] rounded-lg transition-colors uppercase tracking-wider shadow-sm"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
