"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-400 mb-4">
            Get Started Today
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-white tracking-tight mb-5">
            Let Arbella Manage Your Property While You Live Your Life
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Join property owners across the Tri-Cities who trust Arbella Properties
            to protect their investments. Serving East Tennessee since 2011.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg shadow-brand-500/20 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
            >
              Contact Us Today
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+14234468154"
              className="inline-flex items-center gap-2.5 text-white/70 hover:text-white px-6 py-4 rounded-xl text-base font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              Or call (423) 446-8154
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
