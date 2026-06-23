'use client';

import { faqs } from '@/lib/site-data';

export function FaqSection() {
  const stats = [
    { value: "1000+", label: "Kilometers Driven", icon: "M13 10V3L4 14h7v7l9-11h-7z" }, // Lightning bolt icon
    { value: "100+", label: "Types of Cars", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" }, // Image icon
    { value: "140+", label: "Skilled Professionals", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" }, // People icon
    { value: "300+", label: "Charger Stations", icon: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" }, // Grid icon
  ];

  return (
    <section className="bg-steel py-24 border-b border-warm/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-charge mb-3">FAQ's Questions</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-warm leading-tight max-w-3xl">
            WE HOPE YOU FIND WHAT YOU ARE LOOKING FOR. EXPLORE FAQ'S.
          </h2>
        </div>
        
        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-24">
          {faqs.slice(0, 6).map((faq, index) => (
            <div key={index} className="flex items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-charge mt-2 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-base font-bold text-charge uppercase tracking-wide leading-tight mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-warm/70 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-warm/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center space-x-4">
               <div className="w-8 h-8 flex-shrink-0 text-charge">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={stat.icon} />
                  </svg>
               </div>
               <div>
                 <p className="text-xl font-black text-warm">{stat.value}</p>
                 <p className="text-[10px] font-bold uppercase text-warm/60">{stat.label}</p>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
