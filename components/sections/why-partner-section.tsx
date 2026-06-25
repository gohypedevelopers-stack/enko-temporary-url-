export function WhyPartnerSection() {
  const cards = [
    {
      num: '01',
      title: 'Reliability',
      desc: 'Unprecedented uptime across our India-wide EV charging infrastructure.'
    },
    {
      num: '02',
      title: 'Transparency',
      desc: 'Complete visibility of your chargers performance through our Proprietary Partner Management Software Platform.'
    },
    {
      num: '03',
      title: 'Flexibility',
      desc: 'Tailor-made solutions to suit your specific business requirements, ensuring optimal performance and efficiency.'
    }
  ];

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center bg-[#0c0c0c] py-24 border-b border-warm/10">
      <div className="container-shell">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center text-warm mb-16">
          Why <span className="text-charge">Partner</span> With Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-steel/30 backdrop-blur-md border border-warm/10 p-8 rounded-lg hover:border-charge/50 transition-colors group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-full bg-forge border border-warm/20 flex items-center justify-center text-warm group-hover:text-charge transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-3xl font-black text-warm/20 group-hover:text-warm/40 transition-colors">
                  {card.num}
                </span>
              </div>
              <h3 className="text-xl font-bold text-warm mb-3">{card.title}</h3>
              <p className="text-sm text-warm/60 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
