'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS_DATA, Product } from '@/data/productsData';
import { ArrowRight, MapPin, Send, Eye } from 'lucide-react';
import { ProductQuoteModal } from '../products/ProductQuoteModal';

gsap.registerPlugin(ScrollTrigger);

export function HorizontalProductsGSAP() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<Product | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth < 1024) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: () => {
            const nav = document.querySelector('header');
            const offset = nav ? nav.getBoundingClientRect().height : 72;
            return `top ${offset}px`;
          },
          end: () => `+=${getDistance()}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    const t1 = window.setTimeout(refresh, 200);
    const t2 = window.setTimeout(refresh, 800);
    window.addEventListener('load', refresh);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener('load', refresh);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-white border-t border-emerald-50 lg:h-screen lg:overflow-hidden flex flex-col"
      >
        <div className="flex-shrink-0 px-4 sm:px-8 lg:px-12 py-5 lg:py-6 flex flex-col md:flex-row md:items-end justify-between gap-3 bg-white z-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-600 mb-1">
              Export catalogue
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-primary-950 tracking-tight">
              Our products
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-primary-800 hover:text-gold-600 border-b border-primary-200 hover:border-gold-500 pb-0.5"
          >
            Full specification catalog →
          </Link>
        </div>

        <div
          ref={trackRef}
          className="flex items-stretch flex-1 min-h-[420px] lg:min-h-0 overflow-x-auto lg:overflow-visible no-scrollbar will-change-transform"
          style={{ width: 'max-content' }}
        >
          {PRODUCTS_DATA.map((product, idx) => (
            <div
              key={product.id}
              className="w-[260px] sm:w-[300px] lg:w-[22vw] lg:min-w-[280px] lg:max-w-[340px] h-auto lg:h-full flex-shrink-0 bg-white overflow-hidden border-r border-gray-100 flex flex-col"
            >
              <div className="relative h-52 lg:h-[55%] overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="320px"
                  className="object-cover"
                  priority={idx < 4}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-widest text-white bg-black/50 px-2 py-1">
                  {product.category}
                </span>
                <span className="absolute bottom-3 right-3 font-mono text-[11px] text-white/70">
                  {String(idx + 1).padStart(2, '0')} / {String(PRODUCTS_DATA.length).padStart(2, '0')}
                </span>
                <div className="absolute bottom-3 left-3 right-12">
                  <h3 className="text-base font-display text-white leading-tight">{product.name}</h3>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between p-4">
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{product.description}</p>
                  <div className="space-y-1 text-[11px] text-gray-700">
                    <div className="flex gap-2">
                      <span className="w-14 text-gray-400 flex-shrink-0">Grade</span>
                      <span className="line-clamp-1">{product.availableGrades[0]}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="w-14 text-gray-400 flex-shrink-0">
                        <MapPin className="w-3 h-3" />
                      </span>
                      <span className="line-clamp-1">{product.origin.split('(')[0].trim()}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-14 text-gray-400 flex-shrink-0">Packing</span>
                      <span className="line-clamp-1">{product.packagingOptions[0]}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProductForQuote(product)}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-primary-950 hover:bg-primary-800 text-white text-[11px] font-bold py-2.5"
                  >
                    <Send className="w-3 h-3 text-gold-400" />
                    Get quote
                  </button>
                  <Link
                    href={`/products#${product.id}`}
                    className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-500 hover:text-primary-800"
                  >
                    <Eye className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="w-[260px] sm:w-[300px] lg:w-[22vw] lg:min-w-[280px] lg:h-full flex-shrink-0 bg-primary-950 flex flex-col justify-between p-6">
            <div className="space-y-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-400">Custom sourcing</span>
              <h3 className="text-xl font-display text-white leading-tight">Need a grade we have not listed?</h3>
              <p className="text-sm text-emerald-200/70 leading-relaxed">
                We source custom packs and non-listed commodities on request.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold text-sm py-3"
            >
              Request sourcing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {selectedProductForQuote && (
        <ProductQuoteModal
          product={selectedProductForQuote}
          onClose={() => setSelectedProductForQuote(null)}
        />
      )}
    </>
  );
}
