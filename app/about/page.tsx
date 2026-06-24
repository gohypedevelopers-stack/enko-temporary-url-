"use client";

import { useState } from 'react';

import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { publicStats } from '@/lib/site-data';
import { Check, CheckCheck, Play, Star, CheckCircle2, ShieldCheck, Globe } from 'lucide-react';

type CardBlock = { title: string; body: string; accent: boolean };
type Card = { tag: string; heading: string; blocks: CardBlock[] };

function StaggeredCards({ cards }: { cards: Card[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start">

      {/* Left: Stacked numbered cards — all same width */}
      <div className="flex flex-col gap-3 w-full lg:w-[400px] shrink-0">
        {cards.map((card, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`group text-left rounded-2xl border transition-all duration-300 overflow-hidden w-full
              ${active === idx
                ? 'border-charge bg-forge shadow-xl shadow-charge/10'
                : 'border-warm/10 bg-steel hover:border-warm/25 hover:bg-forge/40'
              }
            `}
          >
            {/* Fixed height inner row — ensures all cards are identical */}
            <div className="flex items-center gap-3 px-4 h-[82px]">
              <span className={`text-2xl font-black tabular-nums shrink-0 w-10 transition-colors
                ${active === idx ? 'text-charge' : 'text-warm/15 group-hover:text-warm/30'}`}>
                0{idx + 1}
              </span>
              <div className="min-w-0 flex-1 overflow-hidden">
                <p className={`text-[7px] font-bold uppercase tracking-[0.2em] mb-1 transition-colors truncate
                  ${active === idx ? 'text-charge' : 'text-warm/30 group-hover:text-warm/50'}`}>
                  {card.tag}
                </p>
                <h3 className={`text-xs font-black uppercase leading-snug transition-colors line-clamp-2
                  ${active === idx ? 'text-warm' : 'text-warm/50 group-hover:text-warm/75'}`}>
                  {card.heading}
                </h3>
              </div>
              <span className={`text-base shrink-0 transition-all duration-300
                ${active === idx ? 'text-charge opacity-100' : 'opacity-0'}`}>
                →
              </span>
            </div>
            {active === idx && <div className="h-[2px] w-full bg-charge" />}
          </button>
        ))}
      </div>


      {/* Right: Content panel */}
      <div className="flex-1 min-w-0 bg-steel border border-warm/10 rounded-2xl p-7 lg:p-9 min-h-[290px]">
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-charge mb-2">
          {cards[active].tag}
        </p>
        <h2 className="text-xl lg:text-2xl font-black uppercase text-warm mb-6 leading-tight border-b border-warm/10 pb-5">
          {cards[active].heading}
        </h2>
        <div className="space-y-5">
          {cards[active].blocks.map((block, bIdx) => (
            <div key={bIdx} className={`border-l-[3px] pl-5 ${block.accent ? 'border-charge' : 'border-warm/15'}`}>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-warm mb-2">{block.title}</h4>
              <p className="text-warm/65 text-sm leading-relaxed">{block.body}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}



export default function AboutPage() {
  return (
    <main className="bg-forge text-warm">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container-shell py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-warm/10">
        <div className="flex flex-col items-start">

          <h1 className="text-5xl lg:text-7xl font-black uppercase leading-[0.95] mb-6">
            Crafting Excellence Together
          </h1>
          <p className="text-warm/75 text-lg leading-relaxed mb-8">
            At ENKO we are committed to revolutionizing the EV infrastructure industry with innovative, sustainable, and cost-effective solutions. With a proven track record of delivering exceptional charging hubs, we combine state-of-the-art technology, skilled expertise, and customer-centric approaches to bring visions to life.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 h-[400px] lg:h-[500px]">
          <div className="col-span-1 h-full rounded-2xl overflow-hidden bg-steel relative">
            <Image src="/images/white_electric_car.png" alt="Engineering" fill className="object-cover" />
          </div>
          <div className="col-span-1 grid grid-rows-2 gap-4 h-full">
            <div className="row-span-1 rounded-2xl overflow-hidden bg-steel relative">
              <div className="absolute inset-0 bg-charge/20 mix-blend-multiply"></div>
              <Image src="/images/metrics_public.png" alt="Team" fill className="object-cover" />
            </div>
            <div className="row-span-1 rounded-2xl overflow-hidden bg-steel relative flex items-center justify-center p-6">
              {/* Decorative badge */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="#e8a020" strokeWidth="2" strokeDasharray="10 5" />
                </svg>
                <span className="text-charge font-black uppercase text-center text-sm tracking-widest leading-tight">Future<br />Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="container-shell py-12 border-b border-warm/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-warm/10">
          {publicStats.map((metric, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <h3 className="text-4xl lg:text-5xl font-black uppercase mb-2 text-warm">{metric.value}</h3>
              <p className="text-xs lg:text-sm font-bold text-warm/60 uppercase tracking-widest">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>



      {/* Mission Section */}
      <section className="py-16 lg:py-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          <div className="relative h-[450px] lg:h-[550px] w-full pr-4 lg:pr-0">
            <div className="absolute top-0 left-4 lg:left-12 w-[90%] lg:w-[85%] h-[85%] rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-steel">
              <Image src="/images/white_electric_car.png" alt="Mission Layout 1" fill className="object-cover" />
            </div>
            <div className="absolute bottom-[5%] right-[5%] lg:right-0 w-[60%] h-[55%] rounded-[2rem] overflow-hidden border-[10px] border-forge shadow-lg bg-steel z-10">
              <Image src="/images/metrics_public.png" alt="Mission Layout 2" fill className="object-cover" />
            </div>
          </div>
          <div className="px-4 lg:pl-0 lg:pr-[max(1rem,calc(50vw-590px))]">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-warm">Our Mission</h2>
            <p className="text-warm/75 text-sm lg:text-base leading-relaxed mb-8">
              To provide exceptional infrastructure services that exceed client expectations through innovation, quality craftsmanship, and a commitment to sustainability. We aim to build lasting relationships and create spaces that enhance communities. Through precision, expertise, and a customer-centric approach, we strive to exceed expectations in every project.
            </p>
            <ul className="space-y-5">
              {[
                "Fostering Sustainable Growth and Green Development",
                "Innovating for a Sustainable Future",
                "Customer-Centric Approach",
                "Building Stronger Communities"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-sm lg:text-base font-bold text-warm/80">
                  <CheckCheck className="w-5 h-5 text-charge mr-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-24 overflow-hidden bg-forge border-y border-warm/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          <div className="order-2 lg:order-1 px-4 lg:pr-0 lg:pl-[max(1rem,calc(50vw-590px))]">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-warm">Our Vision</h2>
            <p className="text-warm/75 text-sm lg:text-base leading-relaxed mb-8">
              At ENKO, our vision is to lead the infrastructure industry through innovation, sustainability, and excellence. We aim to set the benchmark for infrastructure standards globally, paving the way for a more sustainable and resilient future. By combining cutting-edge technology with eco-friendly practices, we strive to redefine the way infrastructure systems are built.
            </p>
            <ul className="space-y-5">
              {[
                "Inspiring Modern Architecture",
                "Pioneering Sustainable Innovation",
                "Empowering Communities Through Innovation",
                "Leading the Future of Building Solutions"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-sm lg:text-base font-bold text-warm/80">
                  <CheckCheck className="w-5 h-5 text-charge mr-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative h-[450px] lg:h-[550px] w-full pl-4 lg:pl-0">
            <div className="absolute top-0 right-4 lg:right-12 w-[90%] lg:w-[85%] h-[85%] rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-steel">
              <Image src="/images/metrics_public.png" alt="Vision Layout 1" fill className="object-cover" />
            </div>
            <div className="absolute bottom-[5%] left-[5%] lg:left-0 w-[60%] h-[55%] rounded-[2rem] overflow-hidden border-[10px] border-forge shadow-lg bg-steel z-10">
              <Image src="/images/white_electric_car.png" alt="Vision Layout 2" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 lg:py-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          <div className="relative h-[450px] lg:h-[550px] w-full pr-4 lg:pr-0">
            <div className="absolute top-0 left-4 lg:left-12 w-[90%] lg:w-[85%] h-[85%] rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-steel">
              <Image src="/images/metrics_public.png" alt="History Layout 1" fill className="object-cover" />
            </div>
            <div className="absolute bottom-[5%] right-[5%] lg:right-0 w-[60%] h-[55%] rounded-[2rem] overflow-hidden border-[10px] border-forge shadow-lg bg-steel z-10">
              <Image src="/images/white_electric_car.png" alt="History Layout 2" fill className="object-cover" />
            </div>
          </div>
          <div className="px-4 lg:pl-0 lg:pr-[max(1rem,calc(50vw-590px))]">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-warm">Our History</h2>
            <p className="text-warm/75 text-sm lg:text-base leading-relaxed mb-8">
              Founded on a commitment to quality and innovation, ENKO began as a small team with a big vision. Over the years, we have grown into a trusted name in the EV infrastructure industry, delivering exceptional projects that stand the test of time. Our journey is marked by milestones of success, driven by passion and a dedication to excellence.
            </p>
            <ul className="space-y-5">
              {[
                "Humble Beginnings",
                "Milestones and Achievements",
                "Building a Legacy of Trust",
                "Shaping the Future, Rooted in the Past"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-sm lg:text-base font-bold text-warm/80">
                  <CheckCheck className="w-5 h-5 text-charge mr-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container-shell py-16 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-black uppercase mb-4 text-warm">Crafting Excellence as a Team</h2>
            <p className="text-warm/75 leading-relaxed">
              Our success is built on the dedication and expertise of our team, who work together to bring innovative ideas to life and deliver outstanding results on every project. Together, we can achieve the quality.
            </p>
          </div>
          <button className="industrial-button shrink-0 self-start md:self-auto bg-charge border-charge text-forge hover:bg-warm hover:text-forge hover:border-warm">
            Explore All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "John Dodgart", role: "Working Coordinator", img: "/images/metrics_public.png" },
            { name: "Romisa Nofel Zinh", role: "Working Coordinator", img: "/images/white_electric_car.png" },
            { name: "Daniel Steward", role: "Working Coordinator", img: "/images/metrics_public.png" },
            { name: "Jemy Wilson", role: "Working Coordinator", img: "/images/white_electric_car.png" }
          ].map((member, i) => (
            <div key={i} className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-4 bg-steel">
                <Image src={member.img} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-charge flex items-center justify-center text-forge text-xs font-bold cursor-pointer hover:bg-warm">in</div>
                  <div className="w-8 h-8 rounded-full bg-warm flex items-center justify-center text-forge text-xs font-bold cursor-pointer hover:bg-charge">tw</div>
                </div>
              </div>
              <h3 className="text-xl font-black uppercase mb-1 text-warm">{member.name}</h3>
              <p className="text-sm font-bold text-warm/50 uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Staggered Interactive Cards Section */}
      <section className="container-shell py-20 border-b border-warm/10">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-charge mb-4">WHO WE ARE</p>
          <h2 className="text-4xl lg:text-5xl font-black uppercase text-warm">Our Core Identity</h2>
        </div>

        {(() => {
          const cards = [
            {
              tag: '[ The Infrastructure Layer ]',
              heading: 'The Backbone Behind the Network.',
              blocks: [
                {
                  title: 'Core Statement',
                  body: 'ENKO was founded to solve a specific gap in the Indian EV charging market—quality CCS2 chargers built to handle local conditions, at prices Indian business models can scale with.',
                  accent: true,
                },
                {
                  title: 'Strategic Stance',
                  body: "We are not a charge point network operator. We don't compete for prime real estate. Instead, we act strictly as the engineering infrastructure layer that India's leading charging networks run on.",
                  accent: false,
                },
              ],
            },
            {
              tag: '[ Field-Tested Reliability ]',
              heading: 'Real-World Field Data.',
              blocks: [
                {
                  title: 'Proven in the Field',
                  body: 'Reliability isn\'t calculated in a lab. Over the past two years, ENKO has quietly deployed hardware across demanding commercial sectors in Tamil Nadu, Kerala, and Andhra Pradesh. With 9x120kW DC Fast Chargers running at high-throughput live sites, our hardware is continuously validated.',
                  accent: true,
                },
                {
                  title: 'Capital Efficiency',
                  body: 'We are a 100% bootstrapped, profitable enterprise that has generated ₹1Cr+ in revenue through pure product performance. This ensures our long-term stability and guarantees we will always be here to support your infrastructure.',
                  accent: false,
                },
              ],
            },
            {
              tag: '[ Manufacturing Lineage ]',
              heading: '50+ Years of Combined Production Expertise.',
              blocks: [
                {
                  title: 'Biographical Framework',
                  body: 'Samir Kamra & Ellappane (Founding Directors): Bringing a combined 50+ years of deep domain experience in the industrial manufacturing segment. Their backgrounds span large-scale production management, quality control protocols, and advanced industrial operations.',
                  accent: true,
                },
                {
                  title: 'The Blueprint',
                  body: 'This manufacturing heritage means ENKO does not rely on fragile import supply chains. Every component selection, thermal cooling path, and structural enclosure design is overseen by industrial veterans to ensure continuous high-uptime operation.',
                  accent: false,
                },
              ],
            },
          ];

          return (
            <StaggeredCards cards={cards} />
          );
        })()}
      </section>

      {/* Certifications & Compliance Section */}
      <section className="py-20 bg-steel border-y border-warm/10 relative overflow-hidden">
        <div className="container-shell text-center mb-16 relative z-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-charge mb-4">
            INDUSTRY STANDARDS
          </p>
          <h2 className="text-4xl lg:text-5xl font-black uppercase mb-4 text-warm">Certifications & Compliance</h2>
          <p className="text-warm/60 max-w-2xl mx-auto text-sm">
            Our hardware is built to the highest safety and performance standards. Every ENKO charging unit undergoes rigorous testing to guarantee reliability across demanding commercial environments.
          </p>
        </div>

        <div className="container-shell relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "BIS Certified",
                desc: "Bureau of Indian Standards compliance for ultimate safety in domestic deployments.",
                icon: <CheckCircle2 className="w-12 h-12 text-charge mb-4" />
              },
              {
                title: "CMVR Approved",
                desc: "Meets Central Motor Vehicles Rules regulations for electric vehicle infrastructure.",
                icon: <ShieldCheck className="w-12 h-12 text-charge mb-4" />
              },
              {
                title: "CE & OCPP 2.0.1",
                desc: "European standard safety marks with universal open charge point protocol integration.",
                icon: <Globe className="w-12 h-12 text-charge mb-4" />
              }
            ].map((cert, idx) => (
              <div key={idx} className="bg-forge border border-warm/10 rounded-3xl p-8 flex flex-col items-center text-center hover:border-charge/50 transition-colors duration-500">
                {cert.icon}
                <h3 className="text-xl font-black uppercase tracking-widest mb-3 text-warm">{cert.title}</h3>
                <p className="text-sm text-warm/60 leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Wrapper inside main content */}
      <section className="bg-steel text-warm py-16 border-t border-warm/10">
        <div className="container-shell grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-b border-warm/10 pb-16 mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-black uppercase mb-4">Let's Create Your Ideal Space</h2>
            <p className="text-warm/60 text-sm max-w-md">
              Ready to start your project with ENKO? Get in touch with us to discuss your ideas, ask questions. From concepts, completion, let's explore quality and make it a reality.
            </p>
          </div>
          <div className="flex w-full max-w-md lg:ml-auto">
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-forge text-warm px-6 py-3 rounded-l-full w-full outline-none focus:ring-2 ring-charge text-sm font-bold placeholder:text-warm/40 border border-warm/10 border-r-0"
            />
            <button className="bg-charge text-forge px-6 py-3 rounded-r-full font-black uppercase tracking-widest text-sm hover:bg-warm transition-colors border border-charge">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer info is already in SiteFooter, but we can leave this here since the image has a specific top-footer section */}
      </section>

      <SiteFooter />
    </main>
  );
}
