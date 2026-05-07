"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Heart,
  Award,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Deep Local Expertise",
    description:
      "Our team lives and works across East Tennessee. We understand the Tri-Cities market — Johnson City, Kingsport, Bristol, and Greeneville — because we've been here since 2011.",
  },
  {
    icon: Heart,
    title: "People-First Approach",
    description:
      "At Arbella, we believe in putting people first. Whether you're a property owner, tenant, or community member, we treat every relationship with care and respect.",
  },
  {
    icon: Award,
    title: "Board-Certified Professionals",
    description:
      "Our team includes board-certified CMCAs (Certified Managers of Community Associations), ensuring your investment is managed by qualified, credentialed professionals.",
  },
  {
    icon: Headphones,
    title: "Always On-Call Support",
    description:
      "Every client gets a dedicated property manager — not a call center. Our managers are always on-call, reachable by phone, email, or portal any time you need us.",
  },
];

export default function WhyArbella() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-300 mb-4">
              Why Arbella
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-white tracking-tight mb-6">
              Trusted Property Management Since 2011
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Founded by Brenda Campbell, Arbella Properties has grown into East
              Tennessee&apos;s trusted name in property management and real estate.
              We combine local market knowledge with hands-on professionalism to
              protect and grow your investment.
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur">
              {[
                { value: "14+", label: "Communities" },
                { value: "3", label: "Office locations" },
                { value: "5", label: "Service lines" },
              ].map((m) => (
                <div key={m.label} className="text-center">
                  <p className="text-2xl lg:text-3xl font-bold text-white font-[var(--font-heading)]">
                    {m.value}
                  </p>
                  <p className="text-xs text-white/60 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side — feature cards */}
          <div className="space-y-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group flex gap-5 p-5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-500/20 group-hover:bg-brand-500/30 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <reason.icon className="w-5 h-5 text-brand-300" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1.5 font-[var(--font-heading)]">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
