import { HeroSection } from '@/components/sections/hero-section';
import { OemSection } from '@/components/sections/oem-section';
import { ServiceSection } from '@/components/sections/service-section';
import { MetricsSection } from '@/components/sections/metrics-section';
import { FaqSection } from '@/components/sections/faq-section';
import { VideoBanner } from '@/components/sections/video-banner';
import { BlogSection } from '@/components/sections/blog-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <OemSection />
      <ServiceSection />
      <MetricsSection />
      <FaqSection />
      <VideoBanner />
      <BlogSection />
      <SiteFooter />
    </main>
  );
}
