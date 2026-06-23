"use client";

import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Check, CheckCheck, Play, Star } from 'lucide-react';

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
                 <span className="text-charge font-black uppercase text-center text-sm tracking-widest leading-tight">Future<br/>Ready</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="container-shell py-12 border-b border-warm/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-warm/10">
          {[
            { value: "150+", label: "Completed Hubs" },
            { value: "100+", label: "Team Members" },
            { value: "200+", label: "Live Deployments" },
            { value: "30", label: "Winning Awards" }
          ].map((metric, i) => (
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
          {/* Image touches left edge with a small gap */}
          <div className="relative h-[450px] lg:h-[550px] w-full pr-4 lg:pr-0">
             <div className="absolute top-0 left-4 lg:left-12 w-[90%] lg:w-[85%] h-[85%] rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-steel">
               <Image src="/images/white_electric_car.png" alt="Mission Layout 1" fill className="object-cover" />
             </div>
             <div className="absolute bottom-[5%] right-[5%] lg:right-0 w-[60%] h-[55%] rounded-[2rem] overflow-hidden border-[10px] border-forge shadow-lg bg-steel z-10">
               <Image src="/images/metrics_public.png" alt="Mission Layout 2" fill className="object-cover" />
             </div>
          </div>
          {/* Text aligns with container */}
          <div className="px-4 lg:pl-0 lg:pr-[max(1rem,calc(50vw-590px))]">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-warm">Our Mission</h2>
            <p className="text-warm/75 text-sm lg:text-base leading-relaxed mb-8">
              To provide exceptional infrastructure services that exceed client expectations through innovation, quality craftsmanship, and a commitment to sustainability. We aim to build lasting relationships and create spaces that enhance communities. We aim to create spaces that inspire and improve the lives of our clients and communities. Through precision, expertise, and a customer-centric approach, we strive to exceed expectations in every project. Our dedication to integrity and excellence drives us to build lasting relationships and a legacy of trust.
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
          {/* Text aligns with container */}
          <div className="order-2 lg:order-1 px-4 lg:pr-0 lg:pl-[max(1rem,calc(50vw-590px))]">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-warm">Our Vision</h2>
            <p className="text-warm/75 text-sm lg:text-base leading-relaxed mb-8">
              At ENKO, our vision is to lead the infrastructure industry through innovation, sustainability, and excellence. We aim to set the benchmark for infrastructure standards globally, paving the way for a more sustainable and resilient future. By combining cutting-edge technology with eco-friendly practices, we strive to redefine the way infrastructure systems are built. Our focus is on delivering value, quality, and integrity in every project we undertake. Together, we envision a world where our infrastructure projects positively impact lives.
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
          {/* Image touches right edge with a small gap */}
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
          {/* Image touches left edge with a small gap */}
          <div className="relative h-[450px] lg:h-[550px] w-full pr-4 lg:pr-0">
             <div className="absolute top-0 left-4 lg:left-12 w-[90%] lg:w-[85%] h-[85%] rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-steel">
               <Image src="/images/metrics_public.png" alt="History Layout 1" fill className="object-cover" />
             </div>
             <div className="absolute bottom-[5%] right-[5%] lg:right-0 w-[60%] h-[55%] rounded-[2rem] overflow-hidden border-[10px] border-forge shadow-lg bg-steel z-10">
               <Image src="/images/white_electric_car.png" alt="History Layout 2" fill className="object-cover" />
             </div>
          </div>
          {/* Text aligns with container */}
          <div className="px-4 lg:pl-0 lg:pr-[max(1rem,calc(50vw-590px))]">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-warm">Our History</h2>
            <p className="text-warm/75 text-sm lg:text-base leading-relaxed mb-8">
              Founded on a commitment to quality and innovation, ENKO began as a small team with a big vision. Over the years, we have grown into a trusted name in the EV infrastructure industry, delivering exceptional projects that stand the test of time. Our journey is marked by milestones of success, driven by passion and a dedication to excellence. From humble beginnings to industry leaders, our history is a testament to strong relationships and impactful results. Our history is the foundation of our future, inspiring us to keep raising the bar in infrastructure.
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

      {/* How We Do Work Video Section */}
      <section className="py-16 lg:py-24 bg-steel border-y border-warm/10">
        <div className="container-shell text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-black uppercase mb-6 text-warm">How We do Work</h2>
          <p className="text-warm/75 leading-relaxed">
            We follow a collaborative and transparent process, ensuring clear communication and exceptional quality at every stage of the project. From initial concept to final delivery.
          </p>
        </div>
        <div className="container-shell">
           <div className="relative h-[300px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden group cursor-pointer">
              <Image src="/images/white_electric_car.png" alt="Video Thumbnail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-forge/60 flex items-center justify-center transition-colors duration-300 group-hover:bg-forge/40">
                 <div className="w-20 h-20 bg-charge rounded-full flex items-center justify-center text-forge transform transition-transform duration-300 group-hover:scale-110 shadow-xl">
                    <Play fill="currentColor" className="w-8 h-8 ml-1" />
                 </div>
              </div>
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

      {/* Testimonials Section */}
      <section className="bg-forge py-16 lg:py-24 border-t border-warm/10">
        <div className="container-shell text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black uppercase mb-6 text-warm">Why Say Our Customers</h2>
          <p className="text-warm/75 leading-relaxed">
            Our commitment to reliability, excellence, detail, and dedication in delivering projects on time, outshines technology. Hear what Renovix's clients have experienced top quality and performance from the best experts in the construction industry.
          </p>
        </div>

        <div className="container-shell grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Maria V.",
              role: "Homeowner",
              text: "Working with ENKO was an amazing experience from the beginning to the completion. Their dedication, professionalism, and commitment to deliver a top-tier final product was very apparent. Five stars!"
            },
            {
              name: "Alex C.",
              role: "Commercial",
              text: "The ENKO team exceeded all expectations! The team was professional, punctual, and incredibly skilled. They handled every challenge with ease and delivered a stunning result. We now have a workspace that inspires creativity."
            },
            {
              name: "Thomas S.",
              role: "Project Manager",
              text: "We hired them for our commercial project and the results are breathtaking. The team was communicative, committing the care of a gorgeous, usable space. Their work has truly enhanced our brand's curb appeal."
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-steel border border-warm/10 p-8 rounded-2xl flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-forge overflow-hidden relative">
                    <Image src="/images/metrics_public.png" alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm text-warm">{testimonial.name}</h4>
                    <p className="text-[10px] text-warm/50 uppercase font-bold tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex text-charge">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-warm/80 text-sm leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
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
