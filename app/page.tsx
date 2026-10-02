import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustSection } from '@/components/home/TrustSection';
import { ProductsOverview } from '@/components/home/ProductsOverview';
import { HowWeExportTimeline } from '@/components/home/HowWeExportTimeline';
import { ExportMarketsPreview } from '@/components/home/ExportMarketsPreview';
import { ExportCapabilities } from '@/components/home/ExportCapabilities';
import { StandardsComplianceSection } from '@/components/home/StandardsComplianceSection';
import { QualitySection } from '@/components/home/QualitySection';
import { PackagingSection } from '@/components/home/PackagingSection';
import { LogisticsSection } from '@/components/home/LogisticsSection';
import { WhyIndia } from '@/components/home/WhyIndia';
import { CompanyProfileSection } from '@/components/home/CompanyProfileSection';
import { QuickRFQSection } from '@/components/home/QuickRFQSection';
import { FaqAccordion } from '@/components/home/FaqAccordion';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <main className="space-y-0">
      {/* 1. Hero Section (Screenshot 1) */}
      <HeroSection />

      {/* 2. Trust / Value Proposition Section (Screenshot 2) */}
      <TrustSection />

      {/* Our Products */}
      <ProductsOverview />

      {/* From Requirement to Export Workflow */}
      <HowWeExportTimeline />

      {/* Global Reach */}
      <ExportMarketsPreview />

      {/* Export Capabilities */}
      <ExportCapabilities />

      {/* Quality & Compliance Standards */}
      <StandardsComplianceSection />

      {/* Registrations & Compliance (IEC, GST, APEDA, FSSAI) */}
      <QualitySection />

      {/* 10. Export-Ready Packaging */}
      <PackagingSection />

      {/* 11. Logistics & International Shipping */}
      <LogisticsSection />

      {/* 13. Why Source from India? */}
      <WhyIndia />

      {/* 14. Company Profile ("Get to Know T Group" + Download Profile) */}
      <CompanyProfileSection />

      {/* Frequently Asked Questions */}
      <FaqAccordion />

      {/* Looking for a Reliable Indian Sourcing Partner? */}
      <FinalCTA />

      {/* Request a Quote — sits directly under the sourcing CTA */}
      <QuickRFQSection />
    </main>
  );
}
