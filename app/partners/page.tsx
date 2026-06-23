import { PartnersSection } from '@/components/sections/partners-section';
import { PageHero } from '@/components/page-hero';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function PartnersPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="B2B Partners"
        description="Built for charge point operators, OEMs, and fleet logistics providers."
        kicker="Network Integration"
      />
      <PartnersSection />
      <SiteFooter />
    </main>
  );
}
