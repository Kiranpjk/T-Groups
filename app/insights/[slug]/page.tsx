import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { INSIGHTS_DATA, getInsightBySlug } from '@/data/insightsData';
import { ArrowLeft, Clock, Calendar, Tag, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import type { Metadata } from 'next';

interface InsightDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return INSIGHTS_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: InsightDetailPageProps): Promise<Metadata> {
  const article = getInsightBySlug(params.slug);
  if (!article) return { title: 'Article Not Found - T Group Imports & Exports' };

  return {
    title: `${article.title} | T Group Export Insights`,
    description: article.summary
  };
}

export default function InsightDetailPage({ params }: InsightDetailPageProps) {
  const article = getInsightBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-50/50 pb-20">
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-[#0B7A3B] transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Insights</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-white border-b border-neutral-200 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#0B7A3B] border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
            <span>{article.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 pb-6 border-b border-neutral-100">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span>•</span>
            <span className="font-semibold text-neutral-800">Published by T Group Exports Desk</span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm">
          {/* Hero Banner Image */}
          <div className="h-64 sm:h-96 rounded-2xl overflow-hidden mb-8 bg-neutral-100">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Lead Summary */}
          <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-sm font-medium text-emerald-950 mb-8 leading-relaxed">
            {article.summary}
          </div>

          {/* Paragraphs */}
          <div className="space-y-6 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-neutral-400 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Tags:
            </span>
            {article.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1 rounded-lg font-medium">
                #{tag}
              </span>
            ))}
          </div>

          {/* Discuss Enquiry CTA Box */}
          <div className="mt-12 bg-gradient-to-br from-[#0B7A3B] to-[#063b1c] text-white p-8 rounded-2xl text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Looking to source this commodity from India?</h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-lg mx-auto mb-6">
              Our export specialists are available to share live harvest rates, container loadability, and port dispatch schedules.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact#rfq-form"
                className="px-6 py-3 bg-white text-[#0B7A3B] font-bold text-xs rounded-xl uppercase tracking-wider shadow-md hover:bg-neutral-100 transition-colors"
              >
                Request a Formal Quotation
              </Link>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Hello T Group, I read your guide on "${article.title}" and would like to enquire.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black/30 border border-white/30 text-white font-bold text-xs rounded-xl uppercase tracking-wider hover:bg-black/50 transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>Talk to Export Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
