import { ProcurementSection } from '@/components/sections/procurement-section';
import { FaqSection } from '@/components/sections/faq-section';
import { PageHero } from '@/components/page-hero';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Request a Quote"
        description="Share your deployment profile and receive an engineered hardware spec sheet with product fit, quantity guidance, and next-step pricing."
        kicker="B2B Hardware Procurement"
      />
      <ProcurementSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
