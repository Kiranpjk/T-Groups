import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { MarqueeTicker } from '@/components/ui/MarqueeTicker';
import { HorizontalProductsGSAP } from '@/components/home/HorizontalProductsGSAP';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { HowWeExportTimeline } from '@/components/home/HowWeExportTimeline';
import { ExportMarketsPreview } from '@/components/home/ExportMarketsPreview';
import { CertificationsBar } from '@/components/home/CertificationsBar';
import { ExportGallery } from '@/components/home/ExportGallery';
import { LogisticsTransitionBanner } from '@/components/home/LogisticsTransitionBanner';
import { QuickRFQSection } from '@/components/home/QuickRFQSection';
import { FaqAccordion } from '@/components/home/FaqAccordion';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Cinematic Video Hero Banner */}
      <HeroSection />

      {/* 2. Top Marquee Ribbon */}
      <MarqueeTicker theme="dark" speed="normal" />

      {/* 3. Flagship GSAP Pinned Horizontal Catalog */}
      <HorizontalProductsGSAP />

      {/* 4. Why Choose T Group (Blurred Banner + Glassmorphism Grid) */}
      <WhyChooseUs />

      {/* 5. Gold Marquee Ribbon */}
      <MarqueeTicker
        theme="gold"
        speed="fast"
        items={[
          'FOB / CIF / CFR GLOBAL SHIPPING',
          'JNPT MUMBAI & MUNDRA PORT DISPATCH',
          'SGS / GEO-CHEM INSPECTION',
          'CUSTOM PRIVATE-LABEL PACKAGING',
          'DIRECT FARMER PROCUREMENT NETWORK',
          'TEMPERATURE-CONTROLLED REEFER CONTAINERS',
        ]}
      />

      {/* 6. How to book + how we export (merged timeline) */}
      <HowWeExportTimeline />

      {/* 8. Export Markets & Realistic SVG World Map */}
      <ExportMarketsPreview />

      {/* 9. Statutory Certifications & Registrations */}
      <CertificationsBar />

      {/* 10. Stacked Logistics & Packhouse Gallery */}
      <ExportGallery />

      {/* 11. Animated Airplane & Cargo Ship Scroll Transition Banner */}
      <LogisticsTransitionBanner />

      {/* 12. Quick RFQ Section */}
      <QuickRFQSection />

      {/* 13. International Buyer FAQ Accordion */}
      <FaqAccordion />
    </div>
  );
}
