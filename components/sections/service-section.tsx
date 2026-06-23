export function ServiceSection() {
  const features = [
    { title: "SUPPLY NEXT TO DOORS", desc: "Our systems are strategically operational across Tamil Nadu, Kerala, and Andhra Pradesh. We provide a reliable backbone." },
    { title: "HIGH QUALITY NETWORK", desc: "Our systems are strategically operational across Tamil Nadu, Kerala, and Andhra Pradesh. We provide a reliable backbone." },
    { title: "YOUR SOLUTIONS", desc: "Our systems are strategically operational across Tamil Nadu, Kerala, and Andhra Pradesh. We provide a reliable backbone." },
    { title: "SAFE CHARGING", desc: "Our systems are strategically operational across Tamil Nadu, Kerala, and Andhra Pradesh. We provide a reliable backbone." }
  ];

  const images = [
    "/images/service_supply.png",
    "/images/service_network.png",
    "/images/service_solutions.png",
    "/images/service_safe.png"
  ];

  return (
    <section id="network" className="w-full bg-[#E8A020] py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
           <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-forge/70 mb-4">India Built EV Infrastructure</p>
           <h2 className="text-3xl md:text-5xl font-black uppercase text-forge leading-tight max-w-3xl">
             MOBILE INTERNET CHARGING SOLUTION WITH AN EXTENSIVE NETWORK
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {features.map((feature, idx) => (
             <div key={idx} className="flex flex-col space-y-4">
                <div className="h-40 w-full overflow-hidden rounded-md">
                   <img src={images[idx]} alt={feature.title} className="w-full h-full object-cover" />
                </div>
                <div>
                   <h3 className="text-lg font-black uppercase text-forge tracking-wide mb-2">{feature.title}</h3>
                   <p className="text-sm text-forge/80 leading-relaxed font-medium">{feature.desc}</p>
                   <a href="#" className="inline-block mt-4 text-forge text-xs tracking-widest uppercase hover:underline opacity-60">Read More &rarr;</a>
                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
