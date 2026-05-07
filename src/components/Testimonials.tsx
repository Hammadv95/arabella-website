"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Property Owner",
    role: "Multi-property investor",
    quote:
      "Brenda Campbell and Arbella Properties has been managing our properties for several years. We find them very knowledgeable regarding this area, honest and very hardworking. She manages these properties as if she owns them. She is very responsive to our tenants. I would recommend her without reservations to anyone looking for a property manager.",
    stars: 5,
  },
  {
    name: "Home Buyer",
    role: "Tri-Cities area",
    quote:
      "George Coates was awesome with my first home purchase. Every step was made so much easier with him by my side. Truly a blessing working with him. Need a realtor... go see George Coates!",
    stars: 5,
  },
  {
    name: "Seller & Buyer",
    role: "East Tennessee",
    quote:
      "I can't say enough good things about Brenda Campbell and Arbella Properties! She and her agents are a pleasure to work with. The knowledge and awareness she has of the housing market is a great asset for anyone looking to buy or sell their home. This woman knows her stuff!",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4">
            What Our Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-slate-900 tracking-tight mb-5">
            Trusted by East Tennessee Property Owners
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Real feedback from property owners and home buyers who trust Arbella.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(t.stars)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-gold-500 text-gold-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-500 font-bold text-sm font-[var(--font-heading)]">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
