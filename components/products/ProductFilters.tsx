'use client';

import React from 'react';
import { CATEGORIES } from '@/data/productsData';
import { Search, LayoutGrid, TableProperties } from 'lucide-react';

interface ProductFiltersProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: 'table' | 'grid';
  onViewModeChange: (mode: 'table' | 'grid') => void;
  totalResults: number;
}

export function ProductFilters({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  totalResults
}: ProductFiltersProps) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-primary-800 text-white shadow-md'
                  : 'bg-brand-surface text-gray-700 hover:bg-primary-50 hover:text-primary-800 border border-emerald-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl self-start md:self-auto">
          <button
            onClick={() => onViewModeChange('table')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'table'
                ? 'bg-white text-primary-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            title="B2B Specification Table View"
          >
            <TableProperties className="w-3.5 h-3.5" />
            <span>Table View</span>
          </button>
          <button
            onClick={() => onViewModeChange('grid')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'grid'
                ? 'bg-white text-primary-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            title="Visual Card Grid View"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Grid View</span>
          </button>
        </div>
      </div>

      {/* Search Bar & Result counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-gray-100">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by commodity name, grade, or state origin..."
            className="w-full pl-10 pr-4 py-2 text-xs bg-brand-surface border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="text-xs text-gray-500 font-medium">
          Showing <span className="font-bold text-primary-900">{totalResults}</span> export commodities
        </div>
      </div>
    </div>
  );
}
