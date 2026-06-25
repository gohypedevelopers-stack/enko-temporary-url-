import Image from 'next/image';

export function PartnerHeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center w-full bg-forge overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/partners/hero_bg.png"
          alt="Partnership Handshake"
          fill
          className="object-cover opacity-30 object-center"
          priority
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-forge via-forge/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forge via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-shell relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-black uppercase text-warm leading-[1.05] tracking-tight mb-6">
            Partner With Us
          </h1>
          <p className="text-lg md:text-xl text-warm/80 mb-10">
            Manage, Monitor, and Optimize Your EV Charging Network.
          </p>
          <a
            href="#request-form"
            className="industrial-button border-charge bg-charge text-forge hover:bg-warm hover:text-forge hover:border-warm"
          >
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
