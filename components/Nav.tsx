"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "Custom Home Construction", href: "/custom-home-builder" },
  { label: "Home Additions", href: "/home-additions-remodeling" },
  { label: "Roofing", href: "/roofing-contractor" },
  { label: "Septic Installation", href: "/septic-system-installation" },
  { label: "Septic Repair", href: "/septic-repair" },
];

const locationsTN = [
  { label: "Fayetteville TN", href: "/custom-home-builder-fayetteville-tn" },
  { label: "Winchester TN", href: "/custom-home-builder-winchester-tn" },
  { label: "Ardmore TN", href: "/custom-home-builder-ardmore-tn" },
  { label: "Giles County TN", href: "/custom-home-builder-giles-county-tn" },
  { label: "Taft TN", href: "/custom-home-builder-taft-tn" },
];

const locationsAL = [
  { label: "Huntsville AL", href: "/custom-home-builder-huntsville-al" },
  { label: "Athens AL", href: "/custom-home-builder-athens-al" },
  { label: "Madison County AL", href: "/custom-home-builder-madison-county-al" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-navy transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Marberry Construction LLC"
            height={48}
            width={180}
            style={{ height: 48, width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors">
              Services <ChevronDown size={14} />
            </button>
            {servicesOpen && (
              <div className="bg-navy border border-white/10 rounded-lg shadow-xl w-56 absolute top-full left-0 mt-1 z-50 py-2">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/10 text-sm rounded transition"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
          >
            <button className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors">
              Locations <ChevronDown size={14} />
            </button>
            {locationsOpen && (
              <div className="bg-navy border border-white/10 rounded-lg shadow-xl w-64 absolute top-full left-0 mt-1 z-50 py-2">
                <p className="text-white/40 text-xs uppercase tracking-wider px-3 py-1">
                  Tennessee
                </p>
                {locationsTN.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/10 text-sm rounded transition"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="border-t border-white/10 my-1" />
                <p className="text-white/40 text-xs uppercase tracking-wider px-3 py-1">
                  Alabama
                </p>
                {locationsAL.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/10 text-sm rounded transition"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            className="text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/reviews"
            className="text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            Reviews
          </Link>

          <Link
            href="/contact"
            className="bg-gold text-navy font-semibold px-5 py-2 text-sm uppercase tracking-wide hover:bg-yellow-500 transition rounded-sm"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 pb-6 flex flex-col">
          {/* Services accordion */}
          <button
            className="flex items-center justify-between text-white/80 hover:text-white text-sm font-medium py-3 border-b border-white/10 w-full text-left"
            onClick={() => setMobileServicesOpen((o) => !o)}
          >
            Services
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${
                mobileServicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {mobileServicesOpen && (
            <div className="flex flex-col pl-4 py-2 gap-1">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-white/70 hover:text-white text-sm py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          {/* Locations accordion */}
          <button
            className="flex items-center justify-between text-white/80 hover:text-white text-sm font-medium py-3 border-b border-white/10 w-full text-left"
            onClick={() => setMobileLocationsOpen((o) => !o)}
          >
            Locations
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${
                mobileLocationsOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {mobileLocationsOpen && (
            <div className="flex flex-col pl-4 py-2 gap-1">
              <p className="text-white/40 text-xs uppercase tracking-wider py-1">
                Tennessee
              </p>
              {locationsTN.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-white/70 hover:text-white text-sm py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <p className="text-white/40 text-xs uppercase tracking-wider py-1 mt-2">
                Alabama
              </p>
              {locationsAL.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-white/70 hover:text-white text-sm py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/gallery"
            className="text-white/80 hover:text-white text-sm font-medium py-3 border-b border-white/10"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/reviews"
            className="text-white/80 hover:text-white text-sm font-medium py-3 border-b border-white/10"
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </Link>

          <Link
            href="/contact"
            className="bg-gold text-navy font-semibold px-5 py-2 text-sm uppercase tracking-wide hover:bg-yellow-500 transition rounded-sm text-center mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
