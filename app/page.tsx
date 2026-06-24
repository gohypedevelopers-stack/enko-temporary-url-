import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { OemSection } from '@/components/sections/oem-section';
import { ServiceSection } from '@/components/sections/service-section';
import { MetricsSection } from '@/components/sections/metrics-section';
import { FaqSection } from '@/components/sections/faq-section';
import { BlogSection } from '@/components/sections/blog-section';
import { CtaSection } from '@/components/sections/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { WhyEvSection } from '@/components/sections/why-ev-section';

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <StatsSection />
      <BlogSection />
      <WhyEvSection />
      <ServiceSection />
      {/* <MetricsSection /> */}
      <FaqSection />
      <OemSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
