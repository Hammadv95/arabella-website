"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Property Owner",
    role: "Multi-property investor",
    quote:
      "Brenda Campbell and Arbella Properties has been managing our properties for several years. We find them very knowledgeable regarding this area, honest and very hardworking. She manages these properties as if she owns them. She is very responsive to our tenants. I would recommend her without reservations to anyone looking for a property manager.",
    stars: 5,
    category: "Property Management",
  },
  {
    name: "Seller & Buyer",
    role: "Tennessee",
    quote:
      "I can't say enough good things about Brenda Campbell and Arbella Properties! She and her agents are a pleasure to work with. The knowledge and awareness she has of the housing market is a great asset for anyone looking to buy or sell their home. This woman knows her stuff!",
    stars: 5,
    category: "Real Estate",
  },
  {
    name: "HOA Board Member",
    role: "Community Association",
    quote:
      "Arbella Properties has been an invaluable partner for our HOA. Their CMCA-certified team handles everything from financial reporting to vendor management with professionalism. Communication with homeowners has improved dramatically since we brought them on board.",
    stars: 5,
    category: "Association Management",
  },
  {
    name: "Rental Property Owner",
    role: "Tennessee",
    quote:
      "As an out-of-state investor, I needed a property management team I could trust completely. Arbella handles tenant screening, maintenance coordination, and rent collection seamlessly. My properties have never been better managed and my vacancy rates are the lowest they've ever been.",
    stars: 5,
    category: "Property Management",
  },
  {
    name: "Home Buyer",
    role: "Tennessee",
    quote:
      "George Coates was awesome with my first home purchase. Every step was made so much easier with him by my side. Truly a blessing working with him. Need a realtor... go see George Coates!",
    stars: 5,
    category: "Real Estate",
  },
  {
    name: "Residential Tenant",
    role: "Tennessee",
    quote:
      "The maintenance team at Arbella is incredibly responsive. Every request I've submitted through the portal has been addressed quickly and professionally. It's clear they care about the properties they manage and the tenants who live in them.",
    stars: 5,
    category: "Property Management",
  },
];

const VISIBLE = 3;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / VISIBLE);

  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const visible = testimonials.slice(page * VISIBLE, page * VISIBLE + VISIBLE);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4">
              What Our Clients Say
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-slate-900 tracking-tight mb-4">
              Trusted by Tennessee Property Owners
            </h2>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              Real feedback from property owners, tenants, and association boards across Tennessee who trust Arbella.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-sm text-slate-400 mr-1">
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={prev}
              disabled={!canPrev}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-brand-50 hover:border-brand-200 flex items-center justify-center text-slate-400 hover:text-brand-500 transition-all duration-200 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-200 disabled:hover:text-slate-400"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-brand-50 hover:border-brand-200 flex items-center justify-center text-slate-400 hover:text-brand-500 transition-all duration-200 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-200 disabled:hover:text-slate-400"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            key={page}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {visible.map((t, i) => (
              <div
                key={t.name + t.category}
                className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-gold-500 text-gold-500"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-500 bg-brand-50 px-2.5 py-1 rounded-full">
                    {t.category}
                  </span>
                </div>

                <blockquote className="text-slate-600 leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

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
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
