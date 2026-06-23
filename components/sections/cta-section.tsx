export function CtaSection() {
  return (
    <section className="bg-steel w-full border-t border-warm/10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
         {/* Left Image */}
         <div className="h-[400px] lg:h-[600px] relative overflow-hidden bg-forge flex items-center justify-center p-8 lg:p-12">
            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-warm/5">
               <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938cb?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover filter saturate-0 contrast-125 mix-blend-screen opacity-80" />
               <div className="absolute inset-0 bg-steel/10 mix-blend-overlay" />
            </div>
         </div>
         
         {/* Right Content */}
         <div className="flex flex-col justify-center px-8 lg:px-20 py-16 bg-steel">
            <h2 className="text-4xl lg:text-6xl font-black uppercase text-warm leading-[0.9] mb-8">
              Ready to<br/>scale your<br/>
              <span className="text-2xl text-charge font-black">infrastructure?</span>
            </h2>
            <p className="text-sm text-warm/70 max-w-md leading-relaxed font-medium mb-10">
              Secure a custom deployment configuration tailored to your specific fleet or network requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="/contact" className="industrial-button bg-warm text-forge w-full sm:w-auto text-center hover:bg-white">
                Request pricing spec
              </a>
              <a href="/contact" className="industrial-button bg-transparent border-2 border-warm text-warm hover:bg-warm hover:text-forge w-full sm:w-auto text-center">
                Contact sales team
              </a>
            </div>
         </div>
      </div>
    </section>
  );
}
