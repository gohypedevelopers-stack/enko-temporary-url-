import { ArrowRight, FileText, Zap } from 'lucide-react';

export function PartnerHeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-warm/10 bg-forge py-16 lg:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_top_right,rgba(232,160,32,0.18),transparent_58%)]"></div>
      </div>

      <div className="relative z-10 grid w-full items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 xl:px-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-charge/30 bg-charge/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-charge">
            <Zap className="h-3.5 w-3.5" />
            EV Charging Infrastructure Partnerships
          </div>

          <h2 className="mt-7 text-4xl font-black uppercase leading-[0.98] text-warm sm:text-5xl md:text-6xl xl:text-7xl">
            Charging hardware and deployment support for CPOs, OEMs, and fleets
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-warm/70 sm:text-lg">
            Purpose-built DC and AC chargers. Domestic assembly. Built for commercial scale.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#request-form"
              className="industrial-button border-charge bg-charge text-forge hover:bg-warm hover:text-forge"
            >
              <FileText className="mr-2 h-4 w-4" />
              Request Quote
            </a>
            <a
              href="#product-range"
              className="industrial-button border-warm/35 bg-transparent text-warm hover:border-charge hover:text-charge"
            >
              View Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden border border-warm/10 bg-steel/35 p-6 shadow-2xl sm:min-h-[420px]">
          <div className="absolute inset-x-6 top-8 h-px bg-charge/50"></div>
          <div className="absolute bottom-8 left-6 right-6 grid grid-cols-3 gap-3 text-[10px] font-black uppercase tracking-[0.16em] text-warm/45">
            <span>Depot</span>
            <span className="text-center">CPO Hub</span>
            <span className="text-right">Fleet Lane</span>
          </div>
          <div className="absolute left-[16%] top-[30%] h-40 w-px rotate-[-58deg] bg-charge/50"></div>
          <div className="absolute right-[18%] top-[28%] h-44 w-px rotate-[54deg] bg-charge/40"></div>
          <div className="absolute left-1/2 top-[24%] h-52 w-px -translate-x-1/2 bg-warm/20"></div>
          <div className="absolute left-[15%] top-[55%] h-3 w-3 rounded-full bg-charge shadow-[0_0_22px_rgba(232,160,32,0.8)]"></div>
          <div className="absolute right-[16%] top-[53%] h-3 w-3 rounded-full bg-charge shadow-[0_0_22px_rgba(232,160,32,0.8)]"></div>
          <img
            src="/products/120kw.png"
            alt="ENKO DC fast charger"
            className="relative z-10 mx-auto h-[320px] w-auto object-contain drop-shadow-2xl sm:h-[390px]"
          />
        </div>
      </div>
    </section>
  );
}
