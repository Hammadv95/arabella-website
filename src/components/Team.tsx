"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

const members = [
  { name: "Jeff Orr", role: "Realtor®, Principal Broker", image: "/team/jeff-orr.png" },
  { name: "Brenda Campbell", role: "Broker Associate, CMCA / Founder", image: "/team/brenda-campbell.jpg" },
  { name: "Hammad Vaid", role: "Technology & Operations", image: null },
  { name: "Hannah Owens", role: "Leasing Coordinator, Realtor®", image: "/team/hannah-owens.png" },
  { name: "Tim Hensley", role: "Success Coordinator, Realtor®", image: "/team/tim-hensley.png" },
  { name: "Dillon Willis", role: "Maintenance & Special Projects Coordinator", image: "/team/dillon-willis.jpg" },
  { name: "Abigail Willis", role: "HOA Manager", image: "/team/abigail-willis.jpg" },
  { name: "Trinity Calton", role: "Accounting Specialist", image: "/team/trinity-calton.jpg" },
  { name: "Cassidy Harkleroad", role: "Accounting Specialist", image: "/team/cassidy-harkleroad.png" },
  { name: "Amy", role: "Team Member", image: null },
  { name: "Kyle", role: "Team Member", image: null },
];

const VISIBLE = 4;

export default function Team() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(members.length / VISIBLE);

  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section id="team" className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
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
              Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-slate-900 tracking-tight mb-4">
              Meet the Arbella Team
            </h2>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              Our dedicated team of licensed professionals, board-certified CMCAs,
              and property management experts serving Tennessee.
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
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-brand-50 hover:border-brand-200 flex items-center justify-center text-slate-400 hover:text-brand-500 transition-all duration-200 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-200 disabled:hover:text-slate-400"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel — 4 visible at a time */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `calc(-${page * 100}% - ${page * 20}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ gap: "20px" }}
          >
            {members.map((person) => (
              <div
                key={person.name}
                className="group flex-shrink-0"
                style={{ width: `calc((100% - ${20 * (VISIBLE - 1)}px) / ${VISIBLE})` }}
              >
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                        <div className="w-20 h-20 rounded-full bg-slate-300/50 flex items-center justify-center mb-3">
                          <User className="w-10 h-10 text-slate-400" />
                        </div>
                        <span className="text-xs text-slate-400 font-medium">Photo coming soon</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold font-[var(--font-heading)] text-slate-900 text-sm lg:text-base">
                      {person.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-snug">
                      {person.role}
                    </p>
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
