"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Residential Property Management",
    description:
      "Your property investment portfolio is as important to us as it is to you. Stay informed, save time and headaches, and enjoy smooth sailing through the entire process. Never worry about leasing, tenants, maintenance, regulations, etc. ever again!",
    image: "/images/residential.jpg",
    href: "https://arbellatn.com/residential/",
    features: ["Tenant Screening", "Rent Collection", "Property Maintenance", "Financial Reporting"],
  },
  {
    title: "Commercial Property Management",
    description:
      "As your commercial property management team, we offer the most comprehensive services for maintenance, tenant placement and compliance, rent collection, accounting, vacancy marketing, and web-based portals. Our property managers are always on-call!",
    image: "/images/commercial.jpg",
    href: "https://arbellatn.com/commercial-services/",
    features: ["Office & Retail", "Industrial", "Tenant Placement", "24/7 On-Call"],
  },
  {
    title: "Association Management",
    description:
      "Because running a community association is like running a business, hiring a qualified, board-certified CMCA is the best way for you to protect your investment. Our team of board-certified CMCAs are committed to providing excellent, hands-on support for your community association.",
    image: "/images/association.jpg",
    href: "https://arbellatn.com/association/",
    features: ["Board Support", "Community Communication", "Financial Management", "Compliance"],
  },
  {
    title: "Short-Term Rental Management",
    description:
      "Arbella Properties is your go-to for the best short-term rental property management in Tennessee and beyond. We offer full service management from start to finish, ensuring the process is easy for you and an amazing experience for your guests!",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
    href: "https://arbellatn.com/short-term/",
    features: ["Guest Management", "Listing Optimization", "Revenue Maximization", "Full-Service"],
  },
  {
    title: "Real Estate Brokerage",
    description:
      "We are a full service brokerage with a team of seasoned real estate agents who grasp the complexities of today's real estate market. Our focus is on quality, value, and results; providing premiere customer service and delivering solutions that fit your needs.",
    image: "/images/brokerage.jpg",
    href: "https://arbellatn.com/brokerage/",
    features: ["Buying & Selling", "Market Analysis", "Licensed Agents", "Statewide Coverage"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-slate-900 tracking-tight mb-5">
            Property Management &amp; Brokerage You Can Count On
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            With our experience and professionalism, you&apos;ll find the perfect
            fit for your property management and brokerage needs.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="space-y-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`group grid md:grid-cols-2 gap-0 bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden aspect-[16/10] md:aspect-auto ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-2xl font-bold font-[var(--font-heading)] text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
