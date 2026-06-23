"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/site-data';

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isContactActive = pathname === '/contact';

  return (
    <header className="sticky top-0 z-50 bg-forge border-b border-warm/10">
      <div className="container-shell flex items-center justify-between py-4 text-[11px] font-semibold uppercase tracking-[0.18em]">
        <a href="/" className="flex items-center">
          <img src="/Enko logo.png" alt="ENKO Logo" className="h-32 w-auto object-contain -my-10 scale-125 origin-left" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden gap-6 lg:flex">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className={`transition ${pathname === item.href ? 'text-charge' : 'text-warm/70 hover:text-warm'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action & Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="/contact"
            className={`hidden sm:inline-block border px-4 py-2 transition hover:bg-charge hover:text-forge hover:border-charge ${isContactActive ? 'border-charge bg-charge text-forge' : 'border-warm bg-warm text-forge'}`}
          >
            Request Quote
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center border border-warm/15 bg-transparent text-warm hover:bg-warm/5 lg:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg className="h-5 w-5 animate-fade-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5 animate-fade-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden border-b border-warm/10 bg-steel ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col gap-4 p-6 text-[11px] font-semibold uppercase tracking-[0.18em]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`py-1 transition-colors ${pathname === item.href ? 'text-charge' : 'text-warm/70 hover:text-warm'}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`mt-4 sm:hidden block text-center border px-4 py-3 transition hover:bg-charge hover:text-forge hover:border-charge ${isContactActive ? 'border-charge bg-charge text-forge' : 'border-warm bg-warm text-forge'}`}
          >
            Request Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
