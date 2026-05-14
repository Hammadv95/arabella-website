"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Search, Wrench, Home, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background — Johnson City skyline */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=80"
          alt="Tennessee mountains"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/55 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/90 mb-8"
            >
              <Home className="w-4 h-4 text-brand-300" />
              <span className="font-medium">Serving Tennessee Since 2011</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold font-[var(--font-heading)] text-white leading-[1.08] tracking-tight mb-6">
              Your Tennessee{" "}
              <span className="relative">
                <span className="relative z-10 text-brand-300">
                  Property Experts
                </span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-6 max-w-2xl">
              Residential, Commercial and Association Property Management and Brokerage you can count on. With our experience and professionalism, you&apos;ll find the perfect fit for your property needs.
            </p>

            <p className="text-base text-white/40 mb-10 max-w-xl">
              Johnson City &bull; Kingsport &bull; Bristol &bull; Greeneville &bull; Nashville &bull; and beyond
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2.5 bg-brand-500 hover:bg-brand-600 text-white px-7 py-4 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg shadow-brand-500/20 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://arbellatn.com/rental-properties/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur text-white px-7 py-4 rounded-xl text-base font-semibold transition-all duration-200 border border-white/15"
              >
                <Search className="w-4 h-4" />
                Search Rental Properties
              </a>
            </div>

            {/* Quick action cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Search, label: "Properties For Sale", href: "https://arbellatn.idxbroker.com/idx/results/listings", accent: "from-brand-500/20 to-brand-600/10" },
                { icon: Home, label: "Rental Properties", href: "https://arbellatn.com/rental-properties/", accent: "from-gold-500/20 to-gold-600/10" },
                { icon: Wrench, label: "Maintenance Request", href: "https://app.propertymeld.com/tenant/arbella-properties-inc/", accent: "from-blue-500/20 to-blue-600/10" },
                { icon: FileText, label: "HomeWise Docs", href: "https://www.homewisedocs.com/", accent: "from-green-500/20 to-green-600/10" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-white/[0.08] hover:bg-white/[0.18] backdrop-blur-md border border-white/[0.12] hover:border-white/[0.25] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center border border-white/10`}>
                    <item.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-sm font-semibold text-white/80 group-hover:text-white text-center leading-tight transition-colors">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
