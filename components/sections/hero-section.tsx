"use client";

import { useState, useEffect } from 'react';
import { publicStats, whatsappUrl } from '@/lib/site-data';

const rotatingWords = ["INDIA", "THE FUTURE", "THE DISTANCE"];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setFade(true);
      }, 500); // Wait for fade out before changing word
    }, 4000); // Change word every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-forge border-b border-warm/10 overflow-hidden relative pt-20 pb-16 min-h-[800px] flex items-center">

      {/* Left Side: Car Image Background */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[50%] z-0 pointer-events-none flex items-center justify-start lg:pl-4">
        <img
          src="https://i.postimg.cc/8C31Qkrk/Chat-GPT-Image-Jun-20-2026-03-35-55-PM-copy-removebg-preview-(1).png"
          alt="Electric Car"
          className="w-full h-auto max-h-[80%] object-contain object-left lg:ml-[-5%]"
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">

        {/* Empty left column to push text to the right */}
        <div className="hidden lg:block h-[300px] lg:h-[700px]"></div>

        {/* Right Side: Text, Button, Metrics */}
        <div className="flex flex-col items-start space-y-8 pl-0 lg:pl-10 relative z-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#888] mb-4">India Built EV Infrastructure</p>
            <h1 className="text-5xl md:text-6xl lg:text-[80px] font-black uppercase text-warm leading-[1.05] tracking-tight drop-shadow-sm flex flex-col">
              <span>BUILT FOR</span>
              <span className="flex items-baseline flex-wrap h-[1.1em] overflow-hidden">
                <span className={`transition-all duration-500 ease-in-out inline-block ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  {rotatingWords[wordIndex]}
                </span>
              </span>
            </h1>
            <p className="text-warm/60 mt-6 max-w-lg text-lg leading-relaxed">
              For CPOs, OEMs & Fleet Operators - CCS2 Hardware, OCPP 2.0.1, delivered in South India.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#E8A020] text-forge px-10 py-4 font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-[#c98a1a] transition-colors shadow-lg shadow-[#E8A020]/30 group">
              Whatsapp Us <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
            <a href="/quote" className="inline-block bg-steel text-warm border-2 border-warm/20 px-10 py-4 font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-warm hover:text-forge transition-colors shadow-lg group">
              Request a Quote
            </a>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-8 pt-10 mt-4 w-full">
            {publicStats.slice(0, 3).map((metric, idx) => (
              <div key={idx} className="flex flex-col space-y-2 border-t border-warm/20 pt-4">
                <p className="text-[9px] font-semibold text-warm/60 tracking-wider leading-tight">{metric.label}</p>
                <p className="text-2xl font-black text-warm">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Floating Red Tag on Right Edge (Optional from reference image) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#E8A020] text-forge p-3 rounded-l flex items-center justify-center cursor-pointer shadow-lg hover:pr-5 transition-all">
        <span className="text-[10px] uppercase font-bold tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>Contact</span>
      </div>

    </section>
  );
}
