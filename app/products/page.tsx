"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { motion, AnimatePresence } from 'framer-motion';

const flowProducts = [
  {
    num: 1,
    name: 'ENKO Flow 7',
    tag: 'SYSTEM_NODE_01 // AC_SERIES',
    image: '/products/7.4kw (2).png',
    powerOutput: '7.4kW AC Commercial',
    primaryApplication: 'Workplace parking layouts, commercial retail hubs, residential real estate apartments.',
  },
  {
    num: 2,
    name: 'ENKO Flow 11',
    tag: 'SYSTEM_NODE_02 // AC_SERIES',
    image: '/products/11kw-22kw.png',
    powerOutput: '11kW AC Commercial',
    primaryApplication: 'Corporate office campuses, long-stay commercial public parking spaces.',
  },
  {
    num: 3,
    name: 'ENKO Flow 22',
    tag: 'SYSTEM_NODE_03 // AC_SERIES',
    image: '/products/11kw-22kw.png',
    powerOutput: '22kW AC Commercial',
    primaryApplication: 'Fleet operator depots, public parking decks, commercial logistics spaces.',
  },
];

const stormProducts = [
  {
    num: 4,
    name: 'ENKO Storm 30',
    tag: 'SYSTEM_NODE_04 // DC_FAST_SERIES',
    image: '/products/30kw.png',
    powerOutput: '30kW DC Fast Charging',
    primaryApplication: 'Local fleet hubs, commercial retail parking slots, automobile workshops.',
  },
  {
    num: 5,
    name: 'ENKO Storm 60',
    tag: 'SYSTEM_NODE_05 // DC_FAST_SERIES',
    image: '/products/60kw.png',
    powerOutput: '60kW DC Fast Charging',
    primaryApplication: 'Highway fast-charging stops, urban public charging hubs, fleet operations.',
    financialAdvantage: 'Priced 31% below PM E-DRIVE',
  },
  {
    num: 6,
    name: 'ENKO Storm 120',
    tag: 'SYSTEM_NODE_06 // DC_FAST_SERIES',
    image: '/products/120kw.png',
    powerOutput: '120kW DC Fast Charging',
    primaryApplication: 'Express highway corridors, major e-bus fleets, interstate logistics hubs.',
    financialAdvantage: 'Priced 38% below PM E-DRIVE',
  },
];

const blazeProducts = [
  {
    num: 7,
    name: 'ENKO Blaze 240',
    tag: 'SYSTEM_NODE_07 // DC_ULTRA_SERIES',
    image: '/products/240kw.png',
    powerOutput: '240kW+ DC Ultra Charging',
    primaryApplication: 'Heavy-duty commercial EV bus networks, industrial truck corridors, extreme-throughput highway hubs.',
  },
];

const carouselProducts = [
  {
    name: flowProducts[0].name,
    seriesPrefix: 'ENKO FLOW SERIES',
    seriesSuffix: '(AC COMMERCIAL CHARGING)',
    image: flowProducts[0].image,
    specs: ['AC Commercial Charging', flowProducts[0].powerOutput, 'Workplace & Retail Parking', 'OCPP 2.0.1 Compliant', 'Single/Three-Phase Ready', 'Wall-box or Pedestal Mount']
  },
  {
    name: flowProducts[1].name,
    seriesPrefix: 'ENKO FLOW SERIES',
    seriesSuffix: '(AC COMMERCIAL CHARGING)',
    image: flowProducts[1].image,
    specs: ['AC Commercial Charging', flowProducts[1].powerOutput, 'Corporate Office Campuses', 'OCPP 2.0.1 Compliant', 'Single/Three-Phase Ready', 'Wall-box or Pedestal Mount']
  },
  {
    name: flowProducts[2].name,
    seriesPrefix: 'ENKO FLOW SERIES',
    seriesSuffix: '(AC COMMERCIAL CHARGING)',
    image: flowProducts[2].image,
    specs: ['AC Commercial Charging', flowProducts[2].powerOutput, 'Fleet Operator Depots', 'OCPP 2.0.1 Compliant', 'Single/Three-Phase Ready', 'Wall-box or Pedestal Mount']
  },
  {
    name: stormProducts[0].name,
    seriesPrefix: 'ENKO STORM SERIES',
    seriesSuffix: '(DC FAST CHARGING)',
    image: stormProducts[0].image,
    specs: ['DC Fast Charging', stormProducts[0].powerOutput, 'Local Fleet Hubs', 'Dual CCS2 Guns', 'IP54 Protection', 'Smart Power-Sharing']
  },
  {
    name: stormProducts[1].name,
    seriesPrefix: 'ENKO STORM SERIES',
    seriesSuffix: '(DC FAST CHARGING)',
    image: stormProducts[1].image,
    specs: ['DC Fast Charging', stormProducts[1].powerOutput, 'Highway Stops', stormProducts[1].financialAdvantage || 'Dual CCS2 Guns', 'IP54 Protection', 'Smart Power-Sharing']
  },
  {
    name: stormProducts[2].name,
    seriesPrefix: 'ENKO STORM SERIES',
    seriesSuffix: '(DC FAST CHARGING)',
    image: stormProducts[2].image,
    specs: ['DC Fast Charging', stormProducts[2].powerOutput, 'Express Highway Corridors', stormProducts[2].financialAdvantage || 'Dual CCS2 Guns', 'IP54 Protection', 'Smart Power-Sharing']
  },
  {
    name: blazeProducts[0].name,
    seriesPrefix: 'ENKO BLAZE SERIES',
    seriesSuffix: '(DC ULTRA-FAST CHARGING)',
    image: blazeProducts[0].image,
    specs: ['DC Ultra-Fast Charging', blazeProducts[0].powerOutput, 'Heavy-Duty Networks', 'Liquid-Cooled Dual Guns', 'Dynamic Power Sharing', 'Transport Compliant']
  }
];

type ProductCardProps = {
  product: {
    num: number;
    name: string;
    tag: string;
    image: string;
    powerOutput: string;
    primaryApplication: string;
    financialAdvantage?: string;
  };
  isOpen: boolean;
  onToggle: () => void;
};

function ProductCard({ product, isOpen, onToggle }: ProductCardProps) {
  return (
    <div className="bg-forge border border-warm/10 rounded-2xl overflow-hidden hover:border-charge/40 transition-all duration-300 group flex flex-col">
      <div className="relative bg-[#282828] h-80 flex items-center justify-center p-6 flex-shrink-0">
        <p className="absolute top-3 left-3 text-[7px] font-bold uppercase tracking-[0.2em] text-charge/70">[ {product.tag} ]</p>
        <Image src={product.image} alt={product.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="text-base font-black uppercase text-warm mb-4">{product.num}. {product.name}</h4>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mb-6 border-t border-warm/10 pt-5 space-y-5">
                <div className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-charge" />
                  <div>
                    <p className="mb-1 text-[10px] font-black uppercase tracking-[0.22em] text-warm/50">Power Output</p>
                    <p className="text-sm leading-relaxed text-warm/80">{product.powerOutput}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-charge" />
                  <div>
                    <p className="mb-1 text-[10px] font-black uppercase tracking-[0.22em] text-warm/50">Primary Application</p>
                    <p className="text-sm leading-relaxed text-warm/80">{product.primaryApplication}</p>
                  </div>
                </div>
                {product.financialAdvantage && (
                  <div className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-charge" />
                    <div>
                      <p className="mb-1 text-[10px] font-black uppercase tracking-[0.22em] text-warm/50">Financial Advantage</p>
                      <p className="text-sm leading-relaxed text-warm/80">{product.financialAdvantage}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="w-full border border-warm/20 hover:border-charge hover:text-charge text-warm/60 text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-lg transition-colors duration-300 mt-auto"
        >
          {isOpen ? '[ HIDE TECH SPECS ]' : '[ VIEW TECH SPECS ]'}
        </button>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [openSpecs, setOpenSpecs] = useState<number[]>([]);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % carouselProducts.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [currentCarouselIndex]);

  const toggleSpecs = (productNumber: number) => {
    setOpenSpecs((current) =>
      current.includes(productNumber)
        ? current.filter((num) => num !== productNumber)
        : [...current, productNumber]
    );
  };

  return (
    <main className="bg-forge text-warm overflow-x-clip">
      {/* We use standard header as requested to follow the theme of previous pages */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden border-b border-warm/10">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/bJxqpBdz/Chat-GPT-Image-Jun-22-2026-12-17-14-PM.png"
            alt="EV Charging Background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>





      {/* Key Benefits Section */}
      <section className="pt-32 pb-8 md:pb-12 relative overflow-hidden bg-forge border-b border-warm/10">
        <div className="container-shell text-center mb-16 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black uppercase mb-4 text-warm">Key Benefits</h2>
          <p className="text-warm/60 max-w-2xl mx-auto text-sm">
            Unlock the core advantages of our EV charger — designed for speed, intelligence, and compatibility with every ride.
          </p>
        </div>

        <div className="container-shell relative max-w-5xl mx-auto h-[600px] md:h-[800px] z-10">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Charger Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`carousel-image-${currentCarouselIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-[400px] md:w-[550px] h-[600px] md:h-[800px] z-20 drop-shadow-[0_0_50px_rgba(232,160,32,0.15)]"
              >
                <div className="absolute top-0 md:top-[-2%] left-0 w-full text-center z-30 pointer-events-none">
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-warm">
                    {carouselProducts[currentCarouselIndex].seriesPrefix} <span className="text-charge">{carouselProducts[currentCarouselIndex].seriesSuffix}</span>
                  </h3>
                  <div className="h-px bg-warm/15 w-64 mx-auto mt-2 mb-3" />
                  <h4 className="text-md md:text-lg font-bold uppercase tracking-wider text-warm">
                    {currentCarouselIndex + 1}. {carouselProducts[currentCarouselIndex].name}
                  </h4>
                </div>
                <Image
                  src={carouselProducts[currentCarouselIndex].image}
                  alt={carouselProducts[currentCarouselIndex].name}
                  fill
                  className="object-contain scale-[1.2] md:scale-[1.3] origin-center -translate-y-4 md:-translate-y-8"
                />
              </motion.div>
            </AnimatePresence>

            {/* Connection Lines & Labels (Desktop) */}
            <div className="hidden md:block absolute inset-0 z-10">
              {/* Left side items */}
              <div className="absolute top-[36%] left-0 text-right w-64 h-8">
                <AnimatePresence mode="wait">
                  <motion.h4
                    key={`spec0-${currentCarouselIndex}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-bold uppercase tracking-widest mb-1 text-warm relative z-10 whitespace-nowrap"
                  >
                    {carouselProducts[currentCarouselIndex].specs[0]}
                  </motion.h4>
                </AnimatePresence>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="h-[1px] w-20 bg-gradient-to-r from-transparent to-charge/50 absolute right-[-80px] top-3 origin-right"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="w-2 h-2 rounded-full bg-charge absolute right-[-84px] top-[8.5px] shadow-[0_0_10px_#e8a020] z-20"
                />
              </div>

              <div className="absolute top-[61%] left-0 text-right w-64 h-8">
                <AnimatePresence mode="wait">
                  <motion.h4
                    key={`spec1-${currentCarouselIndex}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-bold uppercase tracking-widest mb-1 text-warm relative z-10 whitespace-nowrap"
                  >
                    {carouselProducts[currentCarouselIndex].specs[1]}
                  </motion.h4>
                </AnimatePresence>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="h-[1px] w-12 bg-gradient-to-r from-transparent to-charge/50 absolute right-[-48px] top-3 origin-right"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="w-2 h-2 rounded-full bg-charge absolute right-[-52px] top-[8.5px] shadow-[0_0_10px_#e8a020] z-20"
                />
              </div>



              {/* Right side items */}
              <div className="absolute top-[39%] right-0 text-left w-64 h-8">
                <AnimatePresence mode="wait">
                  <motion.h4
                    key={`spec3-${currentCarouselIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-bold uppercase tracking-widest mb-1 text-warm relative z-10 whitespace-nowrap"
                  >
                    {carouselProducts[currentCarouselIndex].specs[3]}
                  </motion.h4>
                </AnimatePresence>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="h-[1px] w-20 bg-gradient-to-l from-transparent to-charge/50 absolute left-[-80px] top-3 origin-left"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="w-2 h-2 rounded-full bg-charge absolute left-[-84px] top-[8.5px] shadow-[0_0_10px_#e8a020] z-20"
                />
              </div>

              <div className="absolute top-[64%] right-0 text-left w-64 h-8">
                <AnimatePresence mode="wait">
                  <motion.h4
                    key={`spec4-${currentCarouselIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-bold uppercase tracking-widest mb-1 text-warm relative z-10 whitespace-nowrap"
                  >
                    {carouselProducts[currentCarouselIndex].specs[4]}
                  </motion.h4>
                </AnimatePresence>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="h-[1px] w-12 bg-gradient-to-l from-transparent to-charge/50 absolute left-[-48px] top-3 origin-left"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="w-2 h-2 rounded-full bg-charge absolute left-[-52px] top-[8.5px] shadow-[0_0_10px_#e8a020] z-20"
                />
              </div>


            </div>

            {/* Mobile Labels */}
            <div className="md:hidden absolute inset-x-0 bottom-0 top-[20%] flex flex-col justify-between items-center z-30 pointer-events-none">
              <div className="bg-steel/80 backdrop-blur-sm border border-warm/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest w-max mb-auto mt-4 text-warm">{carouselProducts[currentCarouselIndex].specs[0]}</div>
              <div className="w-full flex justify-between px-4 mt-12">
                <div className="bg-steel/80 backdrop-blur-sm border border-warm/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-warm">{carouselProducts[currentCarouselIndex].specs[1]}</div>
                <div className="bg-steel/80 backdrop-blur-sm border border-warm/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-warm">{carouselProducts[currentCarouselIndex].specs[2]}</div>
              </div>
              <div className="bg-steel/80 backdrop-blur-sm border border-warm/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest w-max mt-auto mb-10 text-warm">{carouselProducts[currentCarouselIndex].specs[3]}</div>
            </div>
          </div>
          
          {/* Thumbnails Navigation */}
          <div className="absolute bottom-0 md:bottom-6 left-0 right-0 flex justify-center items-end gap-3 z-30 px-4 pt-10 pb-8 overflow-x-auto overflow-y-hidden hide-scrollbar">
            {carouselProducts.map((product, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentCarouselIndex(idx)}
                className={`relative w-12 h-16 md:w-16 md:h-24 transition-all duration-500 flex-shrink-0 group ${
                  currentCarouselIndex === idx 
                    ? 'scale-[1.25] drop-shadow-[0_0_15px_rgba(232,160,32,0.5)] z-10 opacity-100' 
                    : 'opacity-40 hover:opacity-100 grayscale hover:grayscale-0 hover:scale-110'
                }`}
              >
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-contain p-2" 
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="py-20 bg-steel border-b border-warm/10">
        <div className="container-shell">

          {/* Header */}
          <div className="mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-charge mb-3">
              [ HARDWARE SYSTEMS COMPONENT ARCHITECTURE ]
            </p>
            <h2 className="text-4xl lg:text-5xl font-black uppercase text-warm mb-4 leading-tight">
              Full-Spectrum CCS2<br />Charging Assets.
            </h2>
            <p className="text-warm/55 text-sm max-w-xl">
              From entry-level commercial AC plug-ins to high-power highway DC ultra-chargers, select the exact hardware footprint your network requires.
            </p>
          </div>

          {/* ── Series 1: FLOW AC ── */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-3">
              <h3 className="text-lg font-black uppercase tracking-widest text-warm">
                ENKO Flow Series <span className="text-charge">(AC Commercial Charging)</span>
              </h3>
            </div>
            <div className="h-px bg-warm/15 mb-6" />
            <p className="text-xs text-warm/55 mb-8">
              <span className="font-bold text-warm/80">Common Specifications:</span> OCPP 2.0.1 compliant, single/three-phase electrical compatibility, Wall-box or Pedestal mount ready.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {flowProducts.map((product) => (
                <ProductCard
                  key={product.num}
                  product={product}
                  isOpen={openSpecs.includes(product.num)}
                  onToggle={() => toggleSpecs(product.num)}
                />
              ))}
            </div>
          </div>

          {/* ── Series 2: STORM DC ── */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-3">
              <h3 className="text-lg font-black uppercase tracking-widest text-warm">
                ENKO Storm Series <span className="text-charge">(DC Fast Charging)</span>
              </h3>
            </div>
            <div className="h-px bg-warm/15 mb-6" />
            <p className="text-xs text-warm/55 mb-8">
              <span className="font-bold text-warm/80">Common Specifications:</span> Dual CCS2 guns, IP54 industrial protection, smart power-sharing modules, high-visibility user UI screens.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {stormProducts.map((product) => (
                <ProductCard
                  key={product.num}
                  product={product}
                  isOpen={openSpecs.includes(product.num)}
                  onToggle={() => toggleSpecs(product.num)}
                />
              ))}
            </div>
          </div>

          {/* ── Series 3: BLAZE ULTRA ── */}
          <div>
            <div className="flex items-center gap-4 mb-3">
              <h3 className="text-lg font-black uppercase tracking-widest text-warm">
                ENKO Blaze Series <span className="text-charge">(DC Ultra-Fast Charging)</span>
              </h3>
            </div>
            <div className="h-px bg-warm/15 mb-6" />
            <p className="text-xs text-warm/55 mb-8">
              <span className="font-bold text-warm/80">Common Specifications:</span> Liquid-cooled dual guns, 240kW+ modular output, dynamic power sharing, heavy-duty transport compliant.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {blazeProducts.map((product) => (
                <ProductCard
                  key={product.num}
                  product={product}
                  isOpen={openSpecs.includes(product.num)}
                  onToggle={() => toggleSpecs(product.num)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* B2B Deployment Flow Section */}
      <section className="py-24 bg-forge relative border-b border-warm/10">
        <div className="container-shell text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-charge mb-4">
            SEAMLESS INTEGRATION
          </p>
          <h2 className="text-4xl lg:text-5xl font-black uppercase mb-4 text-warm">B2B Deployment Flow</h2>
        </div>

        <div className="container-shell">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-[110px] left-[12.5%] right-[12.5%] h-[2px] bg-warm/10 z-0">
              <div className="absolute top-0 left-0 h-full bg-charge w-0 animate-[fillLine_3s_ease-out_forwards]"></div>
            </div>

            {[
              {
                step: "01",
                title: "Select Hardware",
                desc: "Choose the optimal mix of AC & DC fast chargers tailored to your fleet or site requirements.",
                icon: "/images/metrics_public.png"
              },
              {
                step: "02",
                title: "Configure CMS",
                desc: "Seamlessly integrate with your preferred OCPP 2.0.1 Central Management System for white-label control.",
                icon: "/images/blog_car_range.png"
              },
              {
                step: "03",
                title: "Deploy & Integrate",
                desc: "Our expert teams handle the physical installation, grid integration, and site commissioning.",
                icon: "/images/service_safe.png"
              },
              {
                step: "04",
                title: "Monitor Remotely",
                desc: "Manage your charging assets from your dashboard with our robust field AMC support backing you up.",
                icon: "/images/white_electric_car.png"
              }
            ].map((item, i) => (
              <div key={i} className="group flex flex-col text-center relative z-10">
                <div className="relative h-48 md:h-56 w-full rounded-3xl overflow-hidden mb-8 border border-warm/10 group-hover:border-charge/50 transition-colors duration-300">
                  <div className="absolute inset-0 bg-forge/80 group-hover:bg-forge/60 transition-colors z-10 flex items-center justify-center">
                    <span className="text-6xl font-black text-warm/20 group-hover:text-charge/40 transition-colors duration-500 transform group-hover:scale-110">{item.step}</span>
                  </div>
                  <Image src={item.icon} alt={item.title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                </div>
                <div className="bg-steel absolute top-[-16px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-forge flex items-center justify-center z-20">
                  <div className="w-2 h-2 rounded-full bg-charge group-hover:animate-ping"></div>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-3 text-warm">{item.title}</h3>
                <p className="text-sm text-warm/60 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Chart Section */}
      <section className="py-16 bg-steel border-b border-warm/10">
        <div className="container-shell max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black uppercase mb-2 text-warm">Connector Compatibility</h2>
            <p className="text-warm/60 text-sm">Universal standard charging for every major EV fleet.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-warm/10 bg-forge">
            <table className="w-full text-left text-sm">
              <thead className="bg-steel text-warm/80 uppercase text-xs tracking-wider border-b border-warm/10">
                <tr>
                  <th className="px-6 py-4 font-bold">Car Brand / Fleet</th>
                  <th className="px-6 py-4 font-bold">Connector Type</th>
                  <th className="px-6 py-4 font-bold">Supported ENKO Product</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm/10 text-warm">
                <tr className="hover:bg-steel/50 transition-colors">
                  <td className="px-6 py-4 font-medium">Tata (Nexon, Tiago, Punch)</td>
                  <td className="px-6 py-4">CCS2</td>
                  <td className="px-6 py-4 text-charge font-bold">FLOW AC / STORM DC</td>
                </tr>
                <tr className="hover:bg-steel/50 transition-colors">
                  <td className="px-6 py-4 font-medium">Mahindra (XUV400)</td>
                  <td className="px-6 py-4">CCS2</td>
                  <td className="px-6 py-4 text-charge font-bold">FLOW AC / STORM DC</td>
                </tr>
                <tr className="hover:bg-steel/50 transition-colors">
                  <td className="px-6 py-4 font-medium">MG, BYD, Hyundai, Kia</td>
                  <td className="px-6 py-4">CCS2</td>
                  <td className="px-6 py-4 text-charge font-bold">STORM DC / BLAZE ULTRA</td>
                </tr>
                <tr className="hover:bg-steel/50 transition-colors">
                  <td className="px-6 py-4 font-medium">Commercial E-Buses (Tata, Olectra)</td>
                  <td className="px-6 py-4">CCS2 Dual Gun</td>
                  <td className="px-6 py-4 text-charge font-bold">BLAZE ULTRA (120kW+)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
