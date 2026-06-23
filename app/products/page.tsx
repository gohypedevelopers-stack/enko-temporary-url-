"use client";

import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  return (
    <main className="bg-forge text-warm overflow-hidden">
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

      {/* Logo Ticker Section */}
      <section className="py-12 border-b border-warm/10 bg-forge">
        <div className="container-shell flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <h3 className="text-xl font-bold tracking-widest uppercase">Toyota</h3>
          <h3 className="text-xl font-bold tracking-widest uppercase">Tata</h3>
          <h3 className="text-xl font-bold tracking-widest uppercase">Porsche</h3>
          <h3 className="text-xl font-bold tracking-widest uppercase tracking-[0.3em]">Tesla</h3>
          <h3 className="text-xl font-bold tracking-widest uppercase">Mercedes-Benz</h3>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 relative overflow-hidden bg-forge border-b border-warm/10">
        <div className="container-shell text-center mb-16 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black uppercase mb-4 text-warm">Key Benefits</h2>
          <p className="text-warm/60 max-w-2xl mx-auto text-sm">
            Unlock the core advantages of our EV charger — designed for speed, intelligence, and compatibility with every ride.
          </p>
        </div>

        <div className="container-shell relative max-w-5xl mx-auto h-[600px] md:h-[800px] z-10">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Charger Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-[400px] md:w-[550px] h-[600px] md:h-[800px] z-20 drop-shadow-[0_0_50px_rgba(232,160,32,0.15)]"
            >
              <Image 
                src="/products/240kw.png" 
                alt="EV Charger" 
                fill 
                className="object-contain scale-[1.2] md:scale-[1.3] origin-center" 
              />
            </motion.div>
            
            {/* Connection Lines & Labels (Desktop) */}
            <div className="hidden md:block absolute inset-0 z-10">
              {/* Left side items */}
              <div className="absolute top-[25%] left-0 text-right w-64 h-8">
                <motion.h4 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.7 }}
                  viewport={{ once: true }}
                  className="text-sm font-bold uppercase tracking-widest mb-1 text-warm relative z-10"
                >
                  Easy-to-Use Platform
                </motion.h4>
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
              
              <div className="absolute top-[50%] left-0 text-right w-64 h-8">
                <motion.h4 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.7 }}
                  viewport={{ once: true }}
                  className="text-sm font-bold uppercase tracking-widest mb-1 text-warm relative z-10"
                >
                  Eco-Friendly Commitment
                </motion.h4>
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

              <div className="absolute top-[75%] left-[5%] text-right w-64 h-8">
                <motion.h4 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.7 }}
                  viewport={{ once: true }}
                  className="text-sm font-bold uppercase tracking-widest mb-1 text-warm relative z-10"
                >
                  Transparent Pricing
                </motion.h4>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="h-[1px] w-24 bg-gradient-to-r from-transparent to-charge/50 absolute right-[-96px] top-3 origin-right"
                />
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="w-2 h-2 rounded-full bg-charge absolute right-[-100px] top-[8.5px] shadow-[0_0_10px_#e8a020] z-20"
                />
              </div>

              {/* Right side items */}
              <div className="absolute top-[28%] right-0 text-left w-64 h-8">
                <motion.h4 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.7 }}
                  viewport={{ once: true }}
                  className="text-sm font-bold uppercase tracking-widest mb-1 text-warm relative z-10"
                >
                  Fast & Reliable Charging
                </motion.h4>
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

              <div className="absolute top-[53%] right-0 text-left w-64 h-8">
                <motion.h4 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.7 }}
                  viewport={{ once: true }}
                  className="text-sm font-bold uppercase tracking-widest mb-1 text-warm relative z-10"
                >
                  Multiple Charging Options
                </motion.h4>
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

              <div className="absolute top-[78%] right-[5%] text-left w-64 h-8">
                <motion.h4 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.7 }}
                  viewport={{ once: true }}
                  className="text-sm font-bold uppercase tracking-widest mb-1 text-warm relative z-10"
                >
                  24/7 Customer Support
                </motion.h4>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="h-[1px] w-24 bg-gradient-to-l from-transparent to-charge/50 absolute left-[-96px] top-3 origin-left"
                />
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="w-2 h-2 rounded-full bg-charge absolute left-[-100px] top-[8.5px] shadow-[0_0_10px_#e8a020] z-20"
                />
              </div>
            </div>
            
            {/* Mobile Labels */}
            <div className="md:hidden absolute inset-x-0 bottom-0 top-[20%] flex flex-col justify-between items-center z-30 pointer-events-none">
              <div className="bg-steel/80 backdrop-blur-sm border border-warm/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest w-max mb-auto mt-4 text-warm">Fast & Reliable Charging</div>
              <div className="w-full flex justify-between px-4 mt-12">
                 <div className="bg-steel/80 backdrop-blur-sm border border-warm/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-warm">Easy-to-Use</div>
                 <div className="bg-steel/80 backdrop-blur-sm border border-warm/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-warm">Eco-Friendly</div>
              </div>
              <div className="bg-steel/80 backdrop-blur-sm border border-warm/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest w-max mt-auto mb-10 text-warm">24/7 Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-24 bg-forge relative border-b border-warm/10">
        <div className="container-shell text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black uppercase mb-4 text-warm">How It Works</h2>
        </div>

        <div className="container-shell grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Easy Plug In",
              desc: "Connect your EV to the charger cable - Power up anytime.",
              img: "/images/blog_car_range.png"
            },
            {
              title: "Charge Smart",
              desc: "Use our app to monitor, schedule, and optimize your charge.",
              img: "/images/service_safe.png"
            },
            {
              title: "Drive Clean",
              desc: "Hit the road with a full battery, and a clean conscience.",
              img: "/images/blog_ev_env.png"
            }
          ].map((item, i) => (
            <div key={i} className="group flex flex-col text-left">
              <div className="relative h-64 md:h-80 w-full rounded-3xl overflow-hidden mb-6 border border-warm/10 group-hover:border-charge/50 transition-colors duration-300">
                 <div className="absolute inset-0 bg-gradient-to-t from-forge/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                 <Image src={item.img} alt={item.title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute bottom-4 right-4 z-20 w-8 h-8 rounded-full bg-steel backdrop-blur-sm flex items-center justify-center group-hover:bg-charge group-hover:text-forge transition-colors shadow-sm">
                   <Download className="w-4 h-4 text-warm group-hover:text-forge" />
                 </div>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-2 text-warm">{item.title}</h3>
              <p className="text-sm text-warm/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
