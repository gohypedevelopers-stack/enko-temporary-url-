import { navItems } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="bg-steel text-warm">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-2 xl:grid-cols-6 border-t border-warm/10">
        <div className="xl:col-span-2">
          <img src="/Enko logo.png" alt="ENKO Logo" className="h-48 w-auto object-contain -my-16 -ml-8 scale-125 origin-left" />
          <p className="mt-4 max-w-xs text-sm leading-7 text-warm/55">
            ENKO Energy Pvt Ltd
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-warm/70">System Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-warm/55">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-charge transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-warm/70">Regional Hub Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-warm/55">
            <li>Tamil Nadu Sector</li>
            <li>Kerala Sector</li>
            <li>Andhra Pradesh Sector</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-warm/70">Technical Node Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-warm/55">
            <li>Hardware Specifications</li>
            <li>OCPP Integration Status</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-warm/70">Secure Connect Line</h3>
          <p className="mt-4 text-sm text-warm/55">WhatsApp Secure Channel Integration</p>
        </div>
      </div>
      
      <div className="border-t border-warm/10 bg-forge">
        <div className="container-shell py-6 flex items-center justify-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm/40 text-center">
            &copy; 2026 ENKO ENERGY. ACTION, PROTOCOL, ALL SYSTEMS OPERATIONAL.
          </p>
        </div>
      </div>
    </footer>
  );
}
