export function OemSection() {
  return (
    <section id="about" className="bg-steel border-b border-warm/10 pt-24 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Left Side: Text */}
        <div className="flex flex-col items-start space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-charge">Partner portal access</p>

          <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-black uppercase leading-[1.05] text-warm tracking-tight">
            OEM READY. ELECTRIFYING TO DRIVE
          </h2>

          <div className="flex flex-col space-y-4 max-w-lg mt-4">
            <div className="pl-4 border-l-2 border-charge">
              <p className="text-sm text-warm/80 font-medium leading-relaxed">
                Deploy our rugged hardware under your own brand. Comprehensive customization options from chassis colorways to firmware and API integration.
              </p>
            </div>
            <div className="pl-4 border-l-2 border-transparent">
              <p className="text-sm text-warm/80 font-medium leading-relaxed">
                Fully integrated systems that connect the charging network with back-end solutions seamlessly.
              </p>
            </div>
          </div>

          <a href="/partners" className="mt-8 inline-block bg-charge text-forge px-10 py-4 font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-warm transition-colors shadow-lg shadow-charge/30">
            Access Portal &rarr;
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="relative w-full h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] rounded-full blur-3xl mix-blend-multiply" />
          <img
            src="/products/240kw.png"
            alt="ENKO Wall Charger"
            className="relative z-10 w-full max-w-[400px] h-auto object-contain filter drop-shadow-2xl mix-blend-screen rounded-3xl"
          />
        </div>

      </div>

      {/* Background scrolling text (Optional matching image) */}
      <div className="absolute -bottom-16 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <h2 className="text-[15vw] font-black uppercase text-warm whitespace-nowrap">TOMORROW READY</h2>
      </div>
    </section>
  );
}
