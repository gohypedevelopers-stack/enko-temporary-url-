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
        title="Contact"
        description="Submit your network specifications and review common deployment questions."
        kicker="Reach Out"
      />
      <FaqSection />
      <ProcurementSection />
      <SiteFooter />
    </main>
  );
}
