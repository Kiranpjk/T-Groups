import React from 'react';
import { Metadata } from 'next';
import { AboutStorySection } from '@/components/about/AboutStorySection';
import { COMPANY_INFO } from '@/data/companyData';

export const metadata: Metadata = {
  title: `About Us | ${COMPANY_INFO.name}`,
  description: 'Learn about T Group Imports & Exports, our farm-to-port supply chain, mission, values, and global agricultural trading network.',
};

export default function AboutPage() {
  return (
    <div className="bg-brand-surface min-h-screen">
      <AboutStorySection />
    </div>
  );
}
