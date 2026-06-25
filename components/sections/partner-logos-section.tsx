export function PartnerLogosSection() {
  const logos = [
    { name: 'Smart', initials: 'Sm' },
    { name: 'GMR', initials: 'GM' },
    { name: 'Mahindra', initials: 'Ma' },
    { name: 'TATA MOTORS', initials: 'TM' },
    { name: 'REVA', initials: 'RE' },
    { name: 'adani', initials: 'ad' },
  ];

  return (
    <section className="bg-[#0c0c0c] py-20 border-b border-warm/10">
      <div className="container-shell text-center">
        <h2 className="text-2xl font-bold text-warm mb-12">Our Partners</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded bg-warm/10 flex items-center justify-center font-black text-warm/80">
                {logo.initials}
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-warm">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
