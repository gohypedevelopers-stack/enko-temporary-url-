import ElectricBorder from '@/components/ElectricBorder';
import { Reveal } from '@/components/reveal';

interface PageHeroProps {
  title: string;
  description: string;
  kicker?: string;
}

export function PageHero({ title, description, kicker }: PageHeroProps) {
  return (
    <section className="min-h-[50dvh] flex flex-col items-center justify-center border-b border-warm/10 bg-forge text-warm overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <ElectricBorder
          color="#e8a020"
          speed={0.8}
          chaos={0.1}
          borderRadius={0}
          className="h-full w-full opacity-30"
        />
      </div>
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-4 w-full max-w-4xl mx-auto relative z-10">
        <Reveal>
          <div className="flex flex-col items-center text-center w-full space-y-4">
            {kicker && <p className="label-kicker text-charge">{kicker}</p>}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-[0.95]">
              {title}
            </h1>
            <p className="text-base md:text-lg leading-7 text-warm/70 max-w-xl mx-auto">
              {description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
