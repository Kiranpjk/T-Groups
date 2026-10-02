import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { INSIGHTS_DATA } from '@/data/insightsData';
import { ArrowRight, Clock, BookOpen, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Export Insights & Procurement Guides | T Group Imports & Exports',
  description: 'In-depth international trade guides for sourcing Indian red onions, G9 bananas, Basmati rice, Incoterms comparison, and GCC export compliance.'
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-neutral-50/50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
              Market Intelligence
            </span>
            <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
            Agricultural Export Insights
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Essential trade guides, product specifications, cold chain standards, and compliance insights for international agricultural buyers.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS_DATA.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0B7A3B] border border-emerald-200 shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-neutral-900 group-hover:text-[#0B7A3B] transition-colors leading-snug mb-3">
                    {article.title}
                  </h2>

                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-neutral-100">
                    {article.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-7 pt-0">
                <Link
                  href={`/insights/${article.slug}`}
                  className="w-full py-3 bg-neutral-50 hover:bg-[#0B7A3B] text-neutral-800 hover:text-white border border-neutral-200 hover:border-[#0B7A3B] rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
