'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EXPORT_COUNTRIES, ExportCountry } from '@/data/exportMarketsData';
import { Ship, Plane, ArrowRight, Anchor } from 'lucide-react';

export function CountryCardsGrid() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = ['All', 'Middle East', 'Asia', 'North America', 'Europe'];

  const filteredCountries = selectedRegion === 'All'
    ? EXPORT_COUNTRIES
    : EXPORT_COUNTRIES.filter(c => c.region === selectedRegion);

  return (
    <div className="space-y-8">
      {/* Region filter pills */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedRegion === region
                  ? 'bg-primary-800 text-white shadow-md'
                  : 'bg-brand-surface text-gray-700 hover:bg-primary-50 hover:text-primary-800 border border-emerald-100'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        <span className="text-xs text-gray-500 font-medium">
          Showing <strong>{filteredCountries.length}</strong> export market corridors
        </span>
      </div>

      {/* Grid of Countries matching Mockup 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredCountries.map((country) => (
          <div
            key={country.id}
            className="bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-luxury transition-all duration-300 p-5 flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              {/* Header: Flag + Country Name */}
              <div className="flex items-center gap-3.5 pb-3 border-b border-gray-100">
                <div className="relative w-12 h-8 rounded-md overflow-hidden border border-gray-200 shadow-sm flex-shrink-0">
                  <Image
                    src={country.flag}
                    alt={`${country.name} Flag`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-gold-600 uppercase tracking-wider block">
                    {country.region}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 font-display group-hover:text-primary-800 transition-colors">
                    {country.name}
                  </h4>
                </div>
              </div>

              {/* Ports and top commodities */}
              <div className="py-3.5 space-y-2 text-xs text-gray-600">
                <div>
                  <span className="text-[11px] font-bold text-primary-950 block mb-0.5">
                    Major Discharge Ports:
                  </span>
                  <div className="text-[11px] text-gray-600 line-clamp-2">
                    {country.ports.join(', ')}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-primary-950 block mb-0.5">
                    Key Commodities Imported:
                  </span>
                  <div className="text-[11px] text-emerald-800 font-medium line-clamp-1">
                    {country.topProducts.join(', ')}
                  </div>
                </div>

                {/* Transit times */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500">
                  <div className="flex items-center gap-1">
                    <Ship className="w-3 h-3 text-emerald-700" />
                    <span>Sea: {country.transitTimeSea}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <Link
                href={`/contact?country=${encodeURIComponent(country.name)}`}
                className="w-full flex items-center justify-center gap-1.5 bg-primary-50 hover:bg-primary-800 text-primary-900 hover:text-white font-bold text-xs py-2 px-3 rounded-xl transition-all border border-primary-200 hover:border-primary-800"
              >
                <span>Get Quote for {country.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
