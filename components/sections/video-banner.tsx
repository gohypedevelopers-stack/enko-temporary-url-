export function VideoBanner() {
  return (
    <section className="w-full relative h-[400px] md:h-[600px] overflow-hidden bg-forge">
      <img 
        src="https://images.unsplash.com/photo-1593941707882-a5bba14938cb?auto=format&fit=crop&q=80&w=2000" 
        className="absolute inset-0 w-full h-full object-cover filter contrast-[1.1] grayscale-[0.2] opacity-80 mix-blend-screen"
      />
      
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="w-20 h-20 bg-steel rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-charge border-b-[10px] border-b-transparent ml-2"></div>
        </button>
      </div>
    </section>
  );
}
