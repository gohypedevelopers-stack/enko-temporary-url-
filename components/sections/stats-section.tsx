"use client";

export function StatsSection() {
  const stats = [
    {
      metric: "METRIC 01",
      value: "31% - 36%",
      desc: "BELOW PM E-DRIVE GOVERNMENT BENCHMARK PRICING AT FULL MARGIN.",
      dark: true
    },
    {
      metric: "METRIC 02",
      value: "67+ UNITS",
      desc: "INDUSTRIAL HARDWARE UNITS SHIPPED AND FIELD-TESTED ACROSS ACTIVE REGIONS.",
      dark: false
    },
    {
      metric: "METRIC 03",
      value: "50+ YEARS",
      desc: "COMBINED DIRECTOR MANUFACTURING EXPERIENCE AND INDUSTRIAL OPERATIONS.",
      dark: true
    },
    {
      metric: "METRIC 04",
      value: "OCPP 2.0.1",
      desc: "OPEN CHARGE POINT PROTOCOL CERTIFIED ACROSS THE ENTIRE PORTFOLIO.",
      dark: false
    }
  ];

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center w-full bg-[#111]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-full">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className={`group relative flex flex-col justify-center items-center text-center p-6 lg:p-8 h-[160px] lg:h-[220px] overflow-hidden cursor-pointer transition-colors duration-500 ${stat.dark ? 'bg-[#0a0a0a] hover:bg-[#111]' : 'bg-[#f4f2eb] hover:bg-[#eae6d8]'}`}
          >
            {/* The Main Value that is always visible, shifting up on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center transform transition-transform duration-500 group-hover:-translate-y-8">
               <h3 className="text-3xl lg:text-4xl font-black text-[#E8A020] tracking-tight uppercase">
                 {stat.value}
               </h3>
            </div>

            {/* The Hidden Content that fades in and slides up on hover */}
            <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex flex-col items-center justify-end h-full opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
               <p className={`text-[9px] font-bold tracking-[0.2em] mb-2 ${stat.dark ? 'text-white/40' : 'text-black/40'}`}>
                 {stat.metric}
               </p>
               <p className={`text-[9px] lg:text-[10px] font-black uppercase tracking-[0.1em] leading-relaxed max-w-[250px] ${stat.dark ? 'text-white' : 'text-[#111]'}`}>
                 {stat.desc}
               </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
