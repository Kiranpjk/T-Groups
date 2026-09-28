import React from 'react';
import Link from 'next/link';
import { INSIGHTS_DATA } from '@/data/insightsData';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

export function InsightsSection() {
  return (
    <section className="py-20 bg-white border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B7A3B] uppercase">
                Export Insights &amp; Guides
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
              International Trade Intelligence
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-neutral-600 max-w-xl">
              Procurement guides, destination compliance notes, and container shipping analysis for global buyers.
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B7A3B] hover:text-[#096631] transition-colors group self-start md:self-auto"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS_DATA.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="bg-neutral-50/70 rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0B7A3B] border border-emerald-200">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-neutral-400 mb-2.5">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#0B7A3B] transition-colors line-clamp-2 mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B7A3B] group-hover:text-[#096631] transition-colors uppercase tracking-wider"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
