export function BlogSection() {
  const posts = [
    {
      date: "NOVEMBER 12, 2023 | 12 COMMENTS",
      title: "ELECTRIC CARS WITH THE LONGEST RANGE",
      img: "/images/blog_car_range.png"
    },
    {
      date: "NOVEMBER 14, 2023 | 6 COMMENTS",
      title: "BENEFITS OF ELECTRIC CARS ON THE ENVIRONMENT",
      img: "/images/blog_ev_env.png"
    },
    {
      date: "NOVEMBER 22, 2023 | 24 COMMENTS",
      title: "MEET THE MOST ELECTRIFYING MOTORBIKES 2023",
      img: "/images/blog_motorbike.png"
    }
  ];

  return (
    <section className="bg-forge py-24 border-b border-warm/10 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 flex justify-between items-end border-b-2 border-warm/10 pb-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-charge mb-2">News & Articles</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-warm leading-tight">
              CHECK OUR COMPANY<br/>INSIDE STORY
            </h2>
          </div>
          <a href="/blog" className="hidden md:inline-block bg-charge text-forge px-8 py-3 font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-warm transition-colors">
            Read More
          </a>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="w-full aspect-square overflow-hidden bg-steel mb-6 relative rounded-lg">
                 <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-screen opacity-80" />
              </div>
              <p className="text-[8px] uppercase tracking-widest font-bold text-warm/50 mb-3">{post.date}</p>
              <h3 className="text-xl font-black uppercase leading-tight text-warm group-hover:text-charge transition-colors mb-4">{post.title}</h3>
              <span className="text-xs font-bold text-charge uppercase tracking-widest group-hover:underline">Read More &rarr;</span>
            </div>
          ))}
        </div>

      </div>

      {/* Background scrolling text */}
      <div className="absolute -bottom-16 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.03]">
         <h2 className="text-[15vw] font-black uppercase text-warm whitespace-nowrap text-right">TOMORROW READY</h2>
      </div>
    </section>
  );
}
