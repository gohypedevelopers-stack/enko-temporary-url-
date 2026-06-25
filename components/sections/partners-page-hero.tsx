import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function PartnersPageHero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden border-b border-warm/10 bg-forge">
      <Image
        src="/partners/hero_bg.png"
        alt="ENKO partnership infrastructure"
        fill
        className="object-cover object-center opacity-45"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forge via-forge/80 to-forge/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-forge via-transparent to-forge/30" />

      <div className="container-shell relative z-10 flex min-h-[100dvh] items-center pt-24 pb-16">
        <div className="max-w-3xl">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-charge">
            Partner Network
          </p>
          <h1 className="mt-5 text-5xl font-black uppercase leading-[0.98] text-warm sm:text-6xl lg:text-7xl">
            Partner with ENKO
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-warm/75 sm:text-lg">
            Build, operate, and scale commercial EV charging networks with hardware, field support, and deployment programs designed for Indian infrastructure.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#request-form"
              className="industrial-button border-charge bg-charge text-forge hover:bg-warm hover:text-forge"
            >
              Talk to an Expert
            </a>
            <a
              href="#partner-options"
              className="industrial-button border-warm/35 bg-forge/40 text-warm backdrop-blur-sm hover:border-charge hover:text-charge"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
