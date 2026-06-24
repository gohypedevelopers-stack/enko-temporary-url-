const businessRoles = ['Charge Point Operator (CPO)', 'Vehicle OEM', 'Fleet Logistics Provider', 'Institutional Real Estate Buyer'];
const regions = ['Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'Karnataka (Operational)', 'Telangana', 'Other Expansion State'];
const series = ['FLOW AC Series', 'STORM DC Series', 'BLAZE ULTRA Series'];

export function ProcurementSection() {
  return (
    <section id="procurement" className="grid-paper border-b border-warm/10 bg-forge">
      <div className="container-shell py-16 lg:py-24">
        <div className="max-w-4xl mx-auto mb-10 text-left">
          <p className="label-kicker text-charge">5.2 B2B Procurement Intake Form Fields</p>
          <h2 className="mt-4 text-3xl font-black uppercase text-warm leading-[1.05] md:text-4xl md:leading-[1.1]">
            ENKO CORE SYSTEM HARDWARE CONFIGURATOR
          </h2>
          <p className="mt-4 text-sm lg:text-base leading-7 text-warm/80 italic">
            Submit your network specifications to receive an engineered pricing spec sheet.
          </p>
        </div>
        <form className="border border-warm/15 bg-steel p-8 md:p-12 shadow-soft max-w-4xl mx-auto">
          {/* 1. Contact Metrics */}
          <div className="mb-12">
            <h3 className="text-xl font-black uppercase text-charge border-b border-warm/10 pb-4 mb-6">1. Contact Metrics:</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {['Full Name', 'Corporate Email Address', 'Contact Phone Number', 'Company Entity Name'].map((field) => (
                <label key={field} className="block">
                  <span className="label-kicker text-warm/50">{field}</span>
                  <input className="mt-2 h-12 w-full border border-warm/20 bg-forge/30 px-3 text-sm text-warm outline-none focus:border-charge transition-colors" />
                </label>
              ))}
            </div>
          </div>

          {/* 2. Operational Parameters */}
          <div className="mb-12">
            <h3 className="text-xl font-black uppercase text-charge border-b border-warm/10 pb-4 mb-6">2. Operational Parameters:</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="label-kicker text-warm/50">Primary Business Role</span>
                <select className="mt-2 h-12 w-full border border-warm/20 bg-forge/30 px-3 text-sm text-warm outline-none focus:border-charge transition-colors">
                  {businessRoles.map((role) => (
                    <option key={role}>{role}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="label-kicker text-warm/50">Target Region of Deployment</span>
                <select className="mt-2 h-12 w-full border border-warm/20 bg-forge/30 px-3 text-sm text-warm outline-none focus:border-charge transition-colors">
                  {regions.map((region) => (
                    <option key={region}>{region}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {/* 3. Hardware Profile Requirement */}
          <div className="mb-12">
            <h3 className="text-xl font-black uppercase text-charge border-b border-warm/10 pb-4 mb-6">3. Hardware Profile Requirement:</h3>
            <div className="mb-6">
              <span className="label-kicker text-warm/50">Selected Product Series</span>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                {series.map((item) => (
                  <label key={item} className="flex items-center gap-3 border border-warm/20 bg-forge/30 p-3 text-sm font-bold cursor-pointer transition-colors hover:bg-forge text-warm">
                    <input type="checkbox" className="h-4 w-4 accent-charge" />
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <label className="block max-w-sm">
              <span className="label-kicker text-warm/50">Estimated Unit Quantity</span>
              <input className="mt-2 h-12 w-full border border-warm/20 bg-forge/30 px-3 text-sm text-warm outline-none focus:border-charge transition-colors" type="number" />
            </label>
          </div>

          {/* Submission Triggers (No header) */}
          <div className="pt-4 border-t border-warm/10">
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="industrial-button bg-warm text-forge w-full sm:w-auto hover:bg-white transition-colors" type="button">
                SUBMIT PROCUREMENT SPECIFICATION
              </button>
              <button className="industrial-button bg-charge text-forge w-full sm:w-auto hover:bg-[#d89117] transition-colors" type="button">
                CONNECT DIRECT VIA WHATSAPP
              </button>
            </div>
            <p className="mt-4 text-sm text-warm/60">
              You'll receive your engineered spec sheet within 24 business hours.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
