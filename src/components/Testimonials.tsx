"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  useEffect(() => {
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="testimonials" className="py-14 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4">
            What Our Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-slate-900 tracking-tight mb-4">
            Trusted by Tennessee Property Owners
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Real feedback from property owners, tenants, and association boards across Tennessee who trust Arbella.
          </p>
        </motion.div>

        <div
          className="elfsight-app-04b73325-5541-4e7c-aeda-f856bdf13c02"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}
