"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, ArrowRight, Home } from "lucide-react";

const properties = [
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
    address: "Residential Property",
    city: "Johnson City",
    type: "Single Family",
    since: "2015",
    beds: 4,
    baths: 3,
  },
  {
    image: "/images/association.jpg",
    address: "Community Association",
    city: "Kingsport",
    type: "HOA Community",
    since: "2018",
    beds: 0,
    baths: 0,
  },
  {
    image: "/images/vacation.jpg",
    address: "Short-Term Rental",
    city: "Bristol",
    type: "Vacation Rental",
    since: "2021",
    beds: 3,
    baths: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    address: "Commercial Office",
    city: "Johnson City",
    type: "Commercial",
    since: "2016",
    beds: 0,
    baths: 0,
  },
  {
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    address: "Residential Rental",
    city: "Greeneville",
    type: "Single Family",
    since: "2019",
    beds: 4,
    baths: 3,
  },
  {
    image: "/images/multi-family.jpg",
    address: "Multi-Family Property",
    city: "Fall Branch",
    type: "Multi-Family",
    since: "2020",
    beds: 6,
    baths: 4,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-white">
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
              Our Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-slate-900 tracking-tight mb-4">
              Properties We Manage
            </h2>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              A glimpse into our managed portfolio across Tennessee —
              from single-family homes to commercial properties and HOA communities.
            </p>
          </div>
          <a
            href="https://arbellatn.com/rental-properties/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors whitespace-nowrap"
          >
            View Available Rentals
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.address}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <Image
                  src={prop.image}
                  alt={prop.address}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur text-xs font-semibold text-slate-700 px-3 py-1.5 rounded-full">
                    {prop.type}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-1">
                  {prop.address}
                </h3>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {prop.city}, TN
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Since {prop.since}
                  </span>
                </div>
                {(prop.beds > 0 || prop.baths > 0) && (
                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-slate-100 text-xs text-slate-400">
                    <span>{prop.beds} Beds</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span>{prop.baths} Baths</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="text-brand-600 font-semibold">Managed</span>
                  </div>
                )}
                {prop.beds === 0 && prop.baths === 0 && (
                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-slate-100 text-xs">
                    <span className="text-brand-600 font-semibold">Professionally Managed</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
