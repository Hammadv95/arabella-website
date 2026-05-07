"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  CreditCard,
  FileText,
  Shield,
  Smartphone,
  TrendingUp,
  Wrench,
} from "lucide-react";

const ownerFeatures = [
  { icon: BarChart3, text: "Real-time financial dashboards" },
  { icon: TrendingUp, text: "Monthly performance reports" },
  { icon: CreditCard, text: "Direct deposit rental income" },
  { icon: FileText, text: "Tax-ready documentation" },
];

const residentFeatures = [
  { icon: Smartphone, text: "Easy online rent payments" },
  { icon: Wrench, text: "24/7 maintenance requests" },
  { icon: Bell, text: "Instant notifications" },
  { icon: Shield, text: "Secure resident portal" },
];

export default function OwnerResident() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4">
            Owner &amp; Tenant Portals
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-slate-900 tracking-tight mb-5">
            A Better Experience for{" "}
            <span className="text-brand-500">Owners</span> &amp;{" "}
            <span className="text-navy-700">Tenants</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Our web-based portals put everyone in control — owners see
            performance, tenants get convenience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Owner card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            {/* Mockup preview */}
            <div className="bg-gradient-to-br from-navy-800 to-navy-950 p-8 pb-0">
              <div className="bg-white/10 backdrop-blur rounded-t-xl border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-white/40 text-xs font-medium">
                    PropertyWare — Owner Portal
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Monthly Revenue", val: "$12,450", color: "text-green-400" },
                    { label: "Occupancy", val: "97.2%", color: "text-brand-300" },
                    { label: "Net Yield", val: "8.4%", color: "text-gold-400" },
                  ].map((m) => (
                    <div key={m.label} className="bg-white/5 rounded-lg p-3">
                      <p className="text-white/40 text-[10px] font-medium">
                        {m.label}
                      </p>
                      <p className={`text-lg font-bold ${m.color}`}>{m.val}</p>
                    </div>
                  ))}
                </div>
                <div className="h-20 bg-white/5 rounded-lg flex items-end justify-between px-3 pb-2">
                  {[40, 55, 45, 60, 70, 65, 75, 80, 72, 85, 78, 90].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="w-4 rounded-t transition-all"
                        style={{
                          height: `${h}%`,
                          backgroundColor: h > 70 ? "rgba(168,16,16,0.6)" : "rgba(168,16,16,0.3)",
                        }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-navy-700 bg-navy-50 px-3 py-1.5 rounded-full mb-4">
                <BarChart3 className="w-3.5 h-3.5" />
                FOR PROPERTY OWNERS
              </div>
              <h3 className="text-2xl font-bold font-[var(--font-heading)] text-slate-900 mb-3">
                Complete Visibility Into Your Investment
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Track income, expenses, maintenance, and tenant activity in real
                time. Our PropertyWare owner portal gives you full transparency
                without any of the headaches.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {ownerFeatures.map((f) => (
                  <div key={f.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-4 h-4 text-navy-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="https://app.propertyware.com/pw/portals/arbellatn/owner.action"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors"
              >
                Access Owner Portal →
              </a>
            </div>
          </motion.div>

          {/* Tenant card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            {/* Mockup preview */}
            <div className="bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 p-8 pb-0">
              <div className="bg-black/20 backdrop-blur rounded-t-xl border border-white/15 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-white/50 text-xs font-medium">
                    PropertyWare — Tenant Portal
                  </span>
                </div>
                <div className="bg-black/15 rounded-xl p-4 mb-3 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/70 text-sm font-medium">
                      Rent Payment
                    </span>
                    <span className="text-xs bg-green-500/25 text-green-300 px-2.5 py-0.5 rounded-full font-semibold">
                      On Time
                    </span>
                  </div>
                  <p className="text-white text-2xl font-bold">$1,450.00</p>
                  <p className="text-white/50 text-xs mt-1">
                    Due June 1, 2026
                  </p>
                </div>
                <div className="bg-black/15 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500/25 rounded-lg flex items-center justify-center">
                      <Wrench className="w-4 h-4 text-orange-300" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        Maintenance Request
                      </p>
                      <p className="text-white/50 text-xs">
                        HVAC repair — Technician scheduled via PropertyMeld
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-700 bg-brand-50 px-3 py-1.5 rounded-full mb-4">
                <Smartphone className="w-3.5 h-3.5" />
                FOR TENANTS
              </div>
              <h3 className="text-2xl font-bold font-[var(--font-heading)] text-slate-900 mb-3">
                Easy Living, Zero Friction
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Pay rent online, submit maintenance requests through PropertyMeld,
                and communicate with management — all from one simple portal.
                Happy tenants stay longer.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {residentFeatures.map((f) => (
                  <div key={f.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-4 h-4 text-brand-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="https://app.propertyware.com/pw/index.html#/login/tenant/arbellatn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors"
              >
                Access Tenant Portal →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
