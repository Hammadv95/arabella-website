"use client";

import { motion } from "framer-motion";
import { Building2, Clock, Users, MapPin } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "Since 2011",
    label: "Serving Tennessee",
    color: "text-brand-500",
    bg: "bg-brand-50",
  },
  {
    icon: Building2,
    value: "14+",
    label: "Communities Managed",
    color: "text-navy-700",
    bg: "bg-navy-50",
  },
  {
    icon: MapPin,
    value: "3 Offices",
    label: "Across Tennessee",
    color: "text-brand-500",
    bg: "bg-brand-50",
  },
  {
    icon: Users,
    value: "5 Services",
    label: "Full-Service Real Estate",
    color: "text-navy-700",
    bg: "bg-navy-50",
  },
];

export default function TrustBar() {
  return (
    <section className="relative -mt-1 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-slate-100 p-2"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-center gap-4 px-6 py-5 ${
                  i < stats.length - 1
                    ? "lg:border-r border-slate-100"
                    : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold font-[var(--font-heading)] text-slate-900 leading-none">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500 mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
