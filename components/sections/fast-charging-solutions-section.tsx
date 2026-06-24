const productRanges = [
  {
    name: 'ENKO STORM',
    output: 'DC - 30-120 KW',
    use: 'Commercial & fleet',
  },
  {
    name: 'ENKO BLAZE',
    output: 'DC ULTRA - 240 KW',
    use: 'Buses & highways',
  },
  {
    name: 'ENKO FLOW',
    output: 'AC - 7.4-22 KW',
    use: 'Homes & offices',
  },
];

const marketStats = [
  ['20L+', 'EVS FY2025'],
  ['19%', 'CAGR TO 2032'],
  ['1:235', 'EV-CHARGER RATIO'],
  ['29K', 'CHARGERS TODAY'],
  ['375K', 'NEEDED BY 2030'],
];

const sectorsServed = [
  {
    title: 'WORKPLACE',
    copy: 'Smart office charging',
    image: '/images/service_solutions.png',
  },
  {
    title: 'FLEETS',
    copy: 'Scalable fleet infra',
    image: '/images/service_network.png',
  },
  {
    title: 'RESIDENTIAL',
    copy: 'Home charging',
    image: '/images/white_electric_car.png',
  },
  {
    title: 'CPOS',
    copy: 'Hardware for networks',
    image: '/images/ev_wheel.png',
  },
  {
    title: 'RETAIL',
    copy: 'Attracts guests',
    image: '/images/night_station.png',
  },
  {
    title: 'HEAVY DUTY',
    copy: 'Buses & trucks',
    image: '/images/service_supply.png',
  },
];

export function FastChargingSolutionsSection() {
  return (
    <section className="border-b border-warm/10 bg-forge text-warm">
      <div className="container-shell py-14 lg:py-20">
        <div className="relative overflow-hidden border border-warm/10 bg-[#060606] px-5 py-8 shadow-2xl sm:px-8 lg:px-10">
          <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(238,235,228,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(238,235,228,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="absolute inset-x-0 top-[112px] hidden h-px bg-warm/25 lg:block" />

          <div className="relative">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h2 className="text-4xl font-black uppercase leading-[0.92] text-warm sm:text-5xl md:text-6xl lg:text-7xl">
                  Fast Charging Solutions
                </h2>
                <div className="mt-5 flex items-center gap-4">
                  <span className="h-px flex-1 bg-warm/20" />
                  <span className="border border-charge/45 bg-forge px-4 py-2 font-mono text-[10px] uppercase tracking-[0.32em] text-charge">
                    ENKO Product Range
                  </span>
                  <span className="h-px flex-1 bg-warm/20" />
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-3 text-charge lg:pt-2">
                <span className="grid gap-2">
                  <span className="block h-1 w-10 bg-charge" />
                  <span className="block h-1 w-10 bg-charge" />
                  <span className="block h-1 w-10 bg-charge" />
                </span>
                <div>
                  <p className="text-5xl font-light lowercase leading-none text-charge">enko</p>
                  <p className="mt-1 border-t border-charge/70 pt-1 text-[9px] font-bold uppercase tracking-[0.28em]">
                    Powering Every Mile
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {productRanges.map((range) => (
                <article key={range.name} className="border border-warm/15 border-t-4 border-t-charge bg-black/80 p-5">
                  <h3 className="text-2xl font-black uppercase leading-none text-charge md:text-3xl">
                    {range.name}
                  </h3>
                  <p className="mt-3 text-base font-black uppercase text-warm md:text-lg">
                    {range.output}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-warm/60">{range.use}</p>
                </article>
              ))}
            </div>

            <div className="mt-7">
              <p className="label-kicker text-warm/55">India EV Market</p>
              <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {marketStats.map(([value, label]) => (
                  <article key={label} className="border border-warm/15 border-t-4 border-t-charge bg-black/75 p-4">
                    <p className="text-3xl font-black uppercase leading-none text-charge md:text-4xl">{value}</p>
                    <p className="mt-3 text-[10px] font-black uppercase tracking-[0.12em] text-warm">{label}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className="label-kicker text-warm/55">Sectors Served</p>
              <div className="mt-3 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {sectorsServed.map((sector) => (
                  <article
                    key={sector.title}
                    className="group relative min-h-[150px] overflow-hidden border border-warm/15 bg-steel"
                  >
                    <img
                      src={sector.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-70 grayscale transition duration-300 group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
                    <div className="relative flex min-h-[150px] flex-col justify-end p-4">
                      <h3 className="text-2xl font-black uppercase leading-none text-warm">{sector.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-warm/80">{sector.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
