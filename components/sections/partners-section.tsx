export function PartnersSection() {
  return (
    <section id="partners" className="border-b border-warm/10 bg-forge">
      <div className="container-shell py-16 lg:py-24">
        <div className="max-w-3xl mb-12">
          <p className="label-kicker text-charge">4.1 Value Strategy By Segment</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black uppercase text-warm leading-[1.05] md:text-5xl md:leading-[0.95]">
            B2B Partners & Use Cases.
          </h2>
        </div>
        
        <div className="mt-6 grid gap-6 grid-cols-1">
          {/* Segment 1 */}
          <article className="border border-warm/15 p-8 lg:p-10 bg-steel transition-colors hover:border-charge group">
            <p className="label-kicker text-warm/40 group-hover:text-charge transition-colors">Segment 01</p>
            <h2 className="mt-4 text-2xl lg:text-3xl font-black uppercase text-charge">1. Charge Point Operators (CPOs)</h2>
            <p className="mt-4 text-base leading-relaxed text-warm/80">
              Maximize your infrastructure rollouts. Purchase robust CCS2 chargers at <strong className="text-warm">31% to 36% below the PM E-DRIVE benchmark</strong> while keeping your profit margins intact. Secure reliable hardware assets built for high-throughput environments across urban centers and highway routes.
            </p>
          </article>
          
          {/* Segment 2 */}
          <article className="border border-warm/15 p-8 lg:p-10 bg-steel transition-colors hover:border-charge group">
            <p className="label-kicker text-warm/40 group-hover:text-charge transition-colors">Segment 02</p>
            <h2 className="mt-4 text-2xl lg:text-3xl font-black uppercase text-charge">2. Original Equipment Manufacturers (OEMs)</h2>
            <p className="mt-4 text-base leading-relaxed text-warm/80">
              Focus on your vehicle rollouts and let us handle the power architecture. Leverage our established domestic assembly lines to secure a steady supply of market-ready CCS2 charging hardware built to match high automotive standards.
            </p>
          </article>
          
          {/* Segment 3 */}
          <article className="border border-warm/15 p-8 lg:p-10 bg-steel transition-colors hover:border-charge group">
            <p className="label-kicker text-warm/40 group-hover:text-charge transition-colors">Segment 03</p>
            <h2 className="mt-4 text-2xl lg:text-3xl font-black uppercase text-charge">3. Fleet & Depot Operators</h2>
            <p className="mt-4 text-base leading-relaxed text-warm/80">
              Reduce vehicle turnaround times. Deploy multi-unit DC fast-charging configurations (30kW to 240kW+) tailored for high-utilization logistics fleets, delivery vans, and heavy transport vehicles.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
