"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Our Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

const portalLinks = [
  { label: "Tenant Login", href: "https://app.propertyware.com/pw/index.html#/login/tenant/arbellatn" },
  { label: "Owner Login", href: "https://app.propertyware.com/pw/portals/arbellatn/owner.action" },
  { label: "HOA Login", href: "https://home.arbellatn.com/login" },
  { label: "Maintenance", href: "https://app.propertymeld.com/tenant/arbella-properties-inc/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-100/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05),0_4px_24px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      {/* Top utility bar */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="bg-brand-600/95 backdrop-blur text-white/90 text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
            <span className="font-medium">Arbella Properties Inc: Tennessee</span>
            <div className="hidden sm:flex items-center gap-4">
              {portalLinks.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {p.label}
                </a>
              ))}
            </div>
            <a
              href="tel:+14234468154"
              className="sm:hidden flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              (423) 446-8154
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center group flex-shrink-0">
            <Image
              src={scrolled ? "/images/arbella-logo-red.png" : "/images/arbella-logo-white.png"}
              alt="Arbella Properties"
              width={200}
              height={60}
              className="h-12 w-auto max-w-[180px] sm:max-w-[220px] object-contain transition-opacity"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  scrolled
                    ? "text-slate-600 hover:text-brand-500 hover:bg-brand-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+14234468154"
              className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
                scrolled ? "text-slate-500 hover:text-brand-500" : "text-white/70 hover:text-white"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              (423) 446-8154
            </a>
            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                scrolled
                  ? "bg-navy-900 hover:bg-navy-800 text-white shadow-md shadow-navy-900/20 hover:shadow-lg hover:shadow-navy-900/30"
                  : "bg-white hover:bg-white/90 text-slate-900 shadow-md"
              }`}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-slate-600 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-slate-700 hover:text-brand-500 hover:bg-brand-50 rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 space-y-1">
                <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Portals</p>
                {portalLinks.map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm text-slate-500 hover:text-brand-500 rounded-lg transition-colors"
                  >
                    {p.label}
                  </a>
                ))}
              </div>
              <div className="pt-3 border-t border-slate-100 mt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-brand-500 hover:bg-brand-600 text-white px-5 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
