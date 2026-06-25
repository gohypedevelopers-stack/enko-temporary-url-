import { PartnerHeroSection } from '@/components/sections/partner-hero-section';
import { PartnerFeaturesSection } from '@/components/sections/partner-features-section';

import { WhyPartnerSection } from '@/components/sections/why-partner-section';
import { PartnerFaqSection } from '@/components/sections/partner-faq-section';
import { PartnerRequestForm } from '@/components/sections/partner-request-form';

import { FastChargingSolutionsSection } from '@/components/sections/fast-charging-solutions-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function PartnersPage() {
  return (
    <main>
      <SiteHeader />
      
      {/* New Partner Landing Page Sections */}
      <PartnerHeroSection />
      <PartnerFeaturesSection />

      <WhyPartnerSection />
      
      {/* Existing Content */}
      <FastChargingSolutionsSection />

      {/* Forms & FAQ */}
      <PartnerFaqSection />
      <PartnerRequestForm />
      
      <SiteFooter />
    </main>
  );
}
