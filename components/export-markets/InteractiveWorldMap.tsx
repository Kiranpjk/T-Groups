'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Line,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import {
  COUNTRY_GEO,
  EXPORT_COUNTRIES,
  ExportCountry,
  INDIA_ISO,
  INDIA_ORIGIN,
} from '@/data/exportMarketsData';
import { Ship, Plane, Globe } from 'lucide-react';
import { RollButton } from '@/components/ui/RollButton';

const GEO_URL = '/maps/countries-110m.json';

interface InteractiveWorldMapProps {
  onSelectCountry?: (country: ExportCountry) => void;
}

function isoOf(geoId: string | number | undefined) {
  return String(geoId ?? '').padStart(3, '0');
}

export function InteractiveWorldMap({ onSelectCountry }: InteractiveWorldMapProps) {
  const [activeCountry, setActiveCountry] = useState<ExportCountry | null>(EXPORT_COUNTRIES[0]);
  const [hoverIso, setHoverIso] = useState<string | null>(null);

  const destByIso = useMemo(() => {
    const map = new Map<string, ExportCountry>();
    EXPORT_COUNTRIES.forEach((c) => {
      const geo = COUNTRY_GEO[c.id];
      if (geo) map.set(geo.iso.padStart(3, '0'), c);
    });
    return map;
  }, []);

  const selectCountry = (country: ExportCountry) => {
    setActiveCountry(country);
    onSelectCountry?.(country);
  };

  return (
    <div className="relative bg-[#04180A] overflow-hidden text-white">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 sm:px-10 lg:px-16 py-6 border-b border-emerald-800/50">
        <div>
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-widest mb-1.5 font-sans">
            <Globe className="w-4 h-4" />
            <span>Interactive Global Trade Routes</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-display italic text-white tracking-tight">
            From India to the world
          </h3>
          <p className="text-xs sm:text-sm text-emerald-200/70 mt-1 font-sans">
            Real country outlines. Hover or tap a destination to see transit days, ports, and commodities.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs font-medium font-sans">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gold-400 border-2 border-white shadow-gold-glow" />
            <span className="text-emerald-200">Origin — India (JNPT / Mundra)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="text-emerald-200">Active export countries</span>
          </div>
        </div>
      </div>

      <div className="relative w-full aspect-[2.05/1] min-h-[340px] max-h-[640px] bg-[#06140C] overflow-hidden">
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{ scale: 155, center: [18, 8] }}
          width={980}
          height={480}
          className="w-full h-full"
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomableGroup minZoom={1} maxZoom={4} center={[18, 8]}>
            <Graticule stroke="#0F3D23" strokeWidth={0.4} strokeOpacity={0.45} />

            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const iso = isoOf(geo.id);
                  const isIndia = iso === INDIA_ISO;
                  const dest = destByIso.get(iso);
                  const isActiveDest = dest && activeCountry?.id === dest.id;
                  const isHover = hoverIso === iso;

                  let fill = '#0A2816';
                  let stroke = '#164A2C';
                  if (dest) {
                    fill = isActiveDest || isHover ? '#1F7A4A' : '#0E4A28';
                    stroke = isActiveDest || isHover ? '#E8C56A' : '#2A8F55';
                  }
                  if (isIndia) {
                    fill = '#C5A059';
                    stroke = '#F5E6B8';
                  }

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fill}
                      stroke={stroke}
                      strokeWidth={isIndia || isActiveDest ? 0.7 : 0.35}
                      style={{
                        default: { outline: 'none', transition: 'fill 200ms ease, stroke 200ms ease' },
                        hover: {
                          outline: 'none',
                          fill: isIndia ? '#D4AF37' : dest ? '#25965C' : '#123820',
                          cursor: dest || isIndia ? 'pointer' : 'default',
                        },
                        pressed: { outline: 'none' },
                      }}
                      onMouseEnter={() => setHoverIso(iso)}
                      onMouseLeave={() => setHoverIso(null)}
                      onClick={() => {
                        if (dest) selectCountry(dest);
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {EXPORT_COUNTRIES.map((country) => {
              const geo = COUNTRY_GEO[country.id];
              if (!geo) return null;
              const isActive = activeCountry?.id === country.id;
              return (
                <Line
                  key={`route-${country.id}`}
                  from={INDIA_ORIGIN}
                  to={geo.lngLat}
                  stroke={isActive ? '#F5D76E' : '#C5A059'}
                  strokeWidth={isActive ? 1.5 : 0.55}
                  strokeLinecap="round"
                  strokeOpacity={isActive ? 0.95 : 0.28}
                  strokeDasharray={isActive ? '0' : '4 4'}
                />
              );
            })}

            <Marker coordinates={INDIA_ORIGIN}>
              <g>
                <circle r={7} fill="#C5A059" stroke="#fff" strokeWidth={1.4} />
                <circle r={12} fill="none" stroke="#C5A059" strokeWidth={0.8} opacity={0.55} />
                <text
                  textAnchor="middle"
                  y={-14}
                  className="font-sans"
                  style={{ fontSize: 8, fill: '#F5E6B8', fontWeight: 700, letterSpacing: '0.08em' }}
                >
                  INDIA · JNPT
                </text>
              </g>
            </Marker>

            {EXPORT_COUNTRIES.map((country) => {
              const geo = COUNTRY_GEO[country.id];
              if (!geo) return null;
              const isActive = activeCountry?.id === country.id;
              return (
                <Marker
                  key={country.id}
                  coordinates={geo.lngLat}
                  onClick={() => selectCountry(country)}
                  onMouseEnter={() => selectCountry(country)}
                >
                  <g style={{ cursor: 'pointer' }}>
                    {isActive && (
                      <circle r={8} fill="#F5D76E" opacity={0.25} />
                    )}
                    <circle
                      r={isActive ? 4.5 : 3.2}
                      fill={isActive ? '#F5D76E' : '#34D399'}
                      stroke="#04180A"
                      strokeWidth={1}
                    />
                    {isActive && (
                      <text
                        textAnchor="middle"
                        y={-10}
                        style={{
                          fontSize: 7.5,
                          fill: '#F8FAF8',
                          fontWeight: 600,
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {country.name}
                      </text>
                    )}
                  </g>
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {activeCountry && (
        <div className="mt-0 bg-[#071F11] border-t border-gold-500/30 p-5 md:px-10 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 flex items-center gap-4">
              <div className="relative w-14 h-10 overflow-hidden flex-shrink-0">
                <Image
                  src={activeCountry.flag}
                  alt={`${activeCountry.name} Flag`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-sans font-bold text-gold-400 uppercase tracking-widest">
                  {activeCountry.region} Market
                </span>
                <h4 className="text-xl font-display italic text-white">{activeCountry.name}</h4>
                <p className="text-[11px] text-emerald-200/70 font-sans mt-0.5">
                  {activeCountry.ports[0]}
                </p>
              </div>
            </div>

            <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs border-y md:border-y-0 md:border-x border-emerald-800/60 py-3 md:py-0 md:px-6 font-sans">
              <div>
                <span className="text-gold-300/90 font-bold block mb-1 text-[11px]">
                  Top exported commodities
                </span>
                <p className="text-emerald-100 font-medium leading-relaxed">
                  {activeCountry.topProducts.join(', ')}
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-200">
                  <Ship className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>
                    Sea: <strong>{activeCountry.transitTimeSea}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-emerald-200">
                  <Plane className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    Air: <strong>{activeCountry.transitTimeAir}</strong>
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 flex justify-start md:justify-end">
              <RollButton
                href={`/contact?country=${encodeURIComponent(activeCountry.name)}`}
                text={`Quote for ${activeCountry.name}`}
                variant="gold"
                size="sm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
