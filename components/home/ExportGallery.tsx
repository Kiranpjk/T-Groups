'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Farm gate harvest',
    category: 'Field procurement',
    location: 'Nashik & Solapur',
    desc: 'Hand-picking at peak maturity, field grading into aerated crates.',
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    title: 'Electronic sorting',
    category: 'Packhouse',
    location: 'APEDA packhouse',
    desc: 'Optical Sortex lanes calibrated for millimetre sizing.',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    title: 'Pre-cooling',
    category: 'Cold-chain QC',
    location: 'Blast chamber',
    desc: 'Core temperature pulled down within six hours of harvest.',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 4,
    title: 'Export packing',
    category: 'Packaging line',
    location: 'Private label',
    desc: 'Mesh bags and cartons printed to the buyer’s brand.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 5,
    title: 'Reefer stuffing',
    category: 'JNPT logistics',
    location: 'Nhava Sheva',
    desc: '40ft HC reefers with live temperature loggers and customs seals.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 6,
    title: 'Air cargo ULD',
    category: 'Air express',
    location: 'Mumbai cargo',
    desc: 'Insulated pallets for four-hour Gulf perishable flights.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=80',
  },
];

export function ExportGallery() {
  const [front, setFront] = useState(0);

  return (
    <section className="bg-[#041108] text-white overflow-hidden">
      <div className="px-6 sm:px-10 lg:px-16 pt-14 pb-6">
        <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-[0.25em] mb-2 font-sans">
          <Camera className="w-3.5 h-3.5" />
          <span>On-ground operations</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display italic text-white leading-tight tracking-tight">
          Export logistics
        </h2>
        <p className="text-sm text-emerald-200/70 font-sans mt-2 max-w-lg">
          Hover or tap a card — it comes to the front of the pile.
        </p>
      </div>

      <div className="relative h-[62vh] min-h-[380px] max-h-[620px] flex items-stretch overflow-x-auto no-scrollbar">
        {GALLERY_ITEMS.map((item, idx) => {
          const isFront = front === idx;
          return (
            <button
              key={item.id}
              type="button"
              onMouseEnter={() => setFront(idx)}
              onFocus={() => setFront(idx)}
              onClick={() => setFront(idx)}
              aria-pressed={isFront}
              className={`relative h-full overflow-hidden text-left border-r border-black/40 last:border-r-0 transition-[flex,transform,filter] duration-500 ease-out ${
                isFront
                  ? 'flex-[4.2] min-w-[72vw] sm:min-w-0 grayscale-0 brightness-100'
                  : 'flex-[0.7] min-w-[3.25rem] sm:min-w-0 grayscale-[0.35] brightness-75'
              }`}
              style={{ zIndex: isFront ? 30 : 10 + idx }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 40vw, 50vw"
                className={`object-cover transition-transform duration-700 ${
                  isFront ? 'scale-100' : 'scale-110'
                }`}
              />
              <div
                className={`absolute inset-0 transition-colors duration-500 ${
                  isFront ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent' : 'bg-black/35'
                }`}
              />

              <span className="absolute top-5 left-4 font-display italic text-2xl text-white/90">
                0{idx + 1}
              </span>

              <div
                className={`absolute bottom-0 left-0 right-0 p-5 sm:p-7 transition-opacity duration-300 ${
                  isFront ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-gold-400 block mb-1">
                  {item.category} · {item.location}
                </span>
                <h3 className="font-display italic text-2xl sm:text-3xl text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 font-sans mt-2 max-w-md leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {!isFront && (
                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 [writing-mode:vertical-rl] rotate-180 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/80 whitespace-nowrap">
                  {item.title}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
