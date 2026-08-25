import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { ProductsClient } from './ProductsClient';
import { COMPANY_INFO } from '@/data/companyData';

export const metadata: Metadata = {
  title: `Our Products & Export Specifications | ${COMPANY_INFO.name}`,
  description: 'Explore export grades, packaging options, state origins, and freight methods for Indian Red Onions, G4 Chillies, G9 Bananas, Basmati Rice, and Spices.',
};

export default function ProductsPage() {
  return (
    <div className="bg-brand-surface min-h-screen">
      <Suspense fallback={
        <div className="pt-40 pb-20 text-center text-primary-900 font-bold">
          Loading agricultural catalog specifications...
        </div>
      }>
        <ProductsClient />
      </Suspense>
    </div>
  );
}
