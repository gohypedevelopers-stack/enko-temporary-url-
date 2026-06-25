import Image from 'next/image';
import { partnerSegments } from '@/lib/site-data';

const features = [
  {
    kicker: 'Segment 01',
    title: `1. ${partnerSegments[0].title}`,
    description: partnerSegments[0].copy,
    cta: partnerSegments[0].cta,
    image: '/partners/franchise.png',
    bg: 'bg-forge'
  },
  {
    kicker: 'Segment 02',
    title: `2. ${partnerSegments[1].title}`,
    description: partnerSegments[1].copy,
    cta: partnerSegments[1].cta,
    image: '/partners/amenity.png',
    bg: 'bg-steel'
  },
  {
    kicker: 'Segment 03',
    title: `3. ${partnerSegments[2].title}`,
    description: partnerSegments[2].copy,
    cta: partnerSegments[2].cta,
    image: '/partners/investment.png',
    bg: 'bg-forge'
  }
];

export function PartnerFeaturesSection() {
  return (
    <section className="flex flex-col border-y border-warm/10 bg-forge">
      {/* Section Header */}
      <div className="min-h-[100dvh] flex flex-col justify-center container-shell py-24">
        <div className="max-w-3xl">
          <p className="label-kicker text-charge font-bold tracking-widest text-sm mb-3">
            4.1 VALUE STRATEGY BY SEGMENT
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-warm leading-[1.05]">
            B2B PARTNERS & USE CASES.
          </h2>
        </div>
      </div>

      {features.map((feature, idx) => {
        const isEven = idx % 2 === 1;
        return (
          <div key={idx} className={`${feature.bg} min-h-[100dvh] flex flex-col justify-center py-20 lg:py-32 border-b border-forge/10 last:border-0`}>
            <div className={`container-shell flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>

              {/* Text Content */}
              <div className="flex-1 w-full text-center lg:text-left">
                <p className="label-kicker text-charge mb-4">{feature.kicker}</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-warm mb-6 leading-[1.1]">
                  {feature.title}
                </h2>
                <p className="text-base md:text-lg text-warm/70 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {feature.description}
                </p>
                <a
                  href="#request-form"
                  className="industrial-button text-charge border-charge hover:bg-charge hover:text-forge"
                >
                  {feature.cta}
                </a>
              </div>

              {/* Image */}
              <div className="flex-1 w-full flex justify-center items-center">
                <div className="relative w-full max-w-[500px] aspect-square rounded-full flex justify-center items-center">
                  <div className="absolute inset-0 bg-charge/5 blur-3xl rounded-full" />
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain relative z-10 drop-shadow-2xl"
                  />
                </div>
              </div>

            </div>
          </div>
        );
      })}
    </section>
  );
}
