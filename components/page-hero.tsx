import ElectricBorder from '@/components/ElectricBorder';

interface PageHeroProps {
  title: string;
  description: string;
  kicker?: string;
}

export function PageHero({ title, description, kicker }: PageHeroProps) {
  return (
    <section className="min-h-[50dvh] flex flex-col justify-center border-b border-warm/10 bg-forge text-warm overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <ElectricBorder
          color="#e8a020"
          speed={0.8}
          chaos={0.1}
          borderRadius={0}
          className="h-full w-full opacity-30"
        />
      </div>
      <div className="container-shell relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
          {kicker && <p className="label-kicker text-charge mb-4">{kicker}</p>}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-[0.95]">
            {title}
          </h1>
          <p className="mt-6 text-base md:text-lg leading-7 text-warm/70 max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
