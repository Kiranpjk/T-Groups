import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustSection } from '@/components/home/TrustSection';
import { ProductsOverview } from '@/components/home/ProductsOverview';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { HowWeExportTimeline } from '@/components/home/HowWeExportTimeline';
import { ExportMarketsPreview } from '@/components/home/ExportMarketsPreview';
import { QualitySection } from '@/components/home/QualitySection';
import { PackagingSection } from '@/components/home/PackagingSection';
import { LogisticsSection } from '@/components/home/LogisticsSection';
import { ExportGallery } from '@/components/home/ExportGallery';
import { WhyIndia } from '@/components/home/WhyIndia';
import { CompanyProfileSection } from '@/components/home/CompanyProfileSection';
import { QuickRFQSection } from '@/components/home/QuickRFQSection';
import { InsightsSection } from '@/components/home/InsightsSection';
import { FaqAccordion } from '@/components/home/FaqAccordion';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <main className="space-y-0">
      {/* 1. Hero Section (Screenshot 1) */}
      <HeroSection />

      {/* 2. Trust / Value Proposition Section (Screenshot 2) */}
      <TrustSection />

      {/* 3. Product Categories Range (Screenshot 3) */}
      <ProductsOverview />

      {/* 4. Featured Selected Products */}
      <FeaturedProducts />

      {/* 5. Why T Group? (6 Blocks) */}
      <WhyChooseUs />

      {/* 6. Export Workflow (8 Steps) (Screenshot 4) */}
      <HowWeExportTimeline />

      {/* 8. Export Markets & Capabilities (Screenshot 5) */}
      <ExportMarketsPreview />

      {/* 9. Quality & Compliance (IEC, GST, APEDA, FSSAI) */}
      <QualitySection />

      {/* 10. Export-Ready Packaging */}
      <PackagingSection />

      {/* 11. Logistics & International Shipping */}
      <LogisticsSection />

      {/* 12. Export Journey / Traceability Gallery */}
      <ExportGallery />

      {/* 13. Why Source from India? */}
      <WhyIndia />

      {/* 14. Company Profile ("Get to Know T Group" + Download Profile) */}
      <CompanyProfileSection />

      {/* 15. Request a Quote (Full RFQ Form) */}
      <QuickRFQSection />

      {/* 17. Insights & Trade Guides (5 Articles) */}
      <InsightsSection />

      {/* 18. Frequently Asked Questions (10 FAQs) */}
      <FaqAccordion />

      {/* 19. Final Dark-Green CTA */}
      <FinalCTA />
    </main>
  );
}
