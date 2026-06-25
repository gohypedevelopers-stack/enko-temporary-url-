export function FastChargingSolutionsSection() {
  const products = [
    {
      category: 'DC Chargers',
      name: 'ENKO Storm',
      power: 'DC 30-120 kW',
      environment: 'Commercial & fleet',
      customer: 'CPOs and logistics depots',
      value: 'High-throughput CCS2 charging for depots, public hubs, and corridor rollouts.',
      image: '/products/120kw.png',
    },
    {
      category: 'DC Chargers',
      name: 'ENKO Blaze',
      power: 'DC Ultra 240 kW',
      environment: 'Buses & highways',
      customer: 'Heavy-duty and highway corridors',
      value: 'Ultra-fast capacity for buses, industrial fleets, and high-demand highway sites.',
      image: '/products/240kw.png',
    },
    {
      category: 'AC Chargers',
      name: 'ENKO Flow',
      power: 'AC 7.4-22 kW',
      environment: 'Homes & offices',
      customer: 'Workplace and residential installs',
      value: 'Compact commercial charging for long-dwell parking and daily destination use.',
      image: '/products/11kw-22kw.png',
    },
  ];

  return (
    <section id="product-range" className="border-b border-warm/10 bg-forge text-warm">
      <div className="container-shell py-16 lg:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="label-kicker text-charge">ENKO Product Range</p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] text-warm sm:text-4xl lg:text-5xl">
              AC and DC charging hardware for commercial deployment.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-warm/60">
            Compare the three core product families by power band, site environment, and ideal buyer profile.
          </p>
        </div>

        <div className="mt-12">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-charge">DC charging solutions</p>
          <div className="grid gap-6 lg:grid-cols-2">
            {products.slice(0, 2).map((product) => (
              <article key={product.name} className="grid gap-6 border border-warm/10 bg-steel/45 p-6 md:grid-cols-[0.9fr_1.1fr]">
                <div className="flex min-h-64 items-center justify-center bg-forge/60">
                  <img src={product.image} alt={product.name} className="h-60 w-auto object-contain p-4" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-warm/45">{product.category}</p>
                  <h3 className="mt-3 text-2xl font-black uppercase text-warm">{product.name}</h3>
                  <p className="mt-3 text-lg font-black text-charge">{product.power}</p>
                  <p className="mt-4 text-sm leading-6 text-warm/70">{product.value}</p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-warm/55">Best for {product.customer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-charge">AC charging solutions</p>
          <div className="grid gap-6 lg:grid-cols-[0.62fr_0.38fr]">
            <article className="grid gap-6 border border-warm/10 bg-steel/45 p-6 md:grid-cols-[0.75fr_1.25fr]">
              <div className="flex min-h-56 items-center justify-center bg-forge/60">
                <img src={products[2].image} alt={products[2].name} className="h-52 w-auto object-contain p-4" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-warm/45">{products[2].category}</p>
                <h3 className="mt-3 text-2xl font-black uppercase text-warm">{products[2].name}</h3>
                <p className="mt-3 text-lg font-black text-charge">{products[2].power}</p>
                <p className="mt-4 text-sm leading-6 text-warm/70">{products[2].value}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-warm/55">Best for {products[2].customer}</p>
              </div>
            </article>
            <div className="border border-charge/25 bg-charge/10 p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-charge">Portfolio note</p>
              <p className="mt-4 text-sm leading-6 text-warm/70">
                DC families cover fast public and fleet operations, while Flow covers destination charging where vehicles stay parked longer.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-x-auto border border-warm/10">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead className="bg-steel text-[10px] uppercase tracking-[0.16em] text-warm/55">
              <tr>
                <th className="px-5 py-4">Charger</th>
                <th className="px-5 py-4">Power</th>
                <th className="px-5 py-4">Environment</th>
                <th className="px-5 py-4">Ideal Customer</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.name} className="border-t border-warm/10 bg-forge/80">
                  <td className="px-5 py-4 font-black uppercase text-warm">{product.name}</td>
                  <td className="px-5 py-4 text-charge">{product.power}</td>
                  <td className="px-5 py-4 text-warm/70">{product.environment}</td>
                  <td className="px-5 py-4 text-warm/70">{product.customer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
