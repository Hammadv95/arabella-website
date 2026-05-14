"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Clock, User } from "lucide-react";

const posts = [
  {
    title: "Are Property Management Companies Worth It?",
    excerpt:
      "How to know when it's time to hire a property manager. We break down the costs, benefits, and signs that professional management could save you time and money.",
    slug: "are-property-management-companies-worth-it",
    category: "Property Management",
    author: "Kacie Shirley",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  },
  {
    title: "How Property Management Works — A Beginner's Guide",
    excerpt:
      "New to rental investing? Learn how property management works from tenant screening and rent collection to maintenance and financial reporting.",
    slug: "how-property-management-works-a-beginners-guide",
    category: "Getting Started",
    author: "Kacie Shirley",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  },
  {
    title: "Your Tenant Privacy Rights in Tennessee",
    excerpt:
      "Understanding tenant privacy rights in Tennessee is essential for landlords. Learn what you can and can't do as a property owner under state law.",
    slug: "your-tenant-privacy-rights-in-tennessee-what-are-they",
    category: "Tennessee Law",
    author: "Kacie Shirley",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
  },
  {
    title: "Protecting Your HOA's Finances",
    excerpt:
      "How to vet and monitor property management firms in Northeastern Tennessee. Essential tips for HOA boards to safeguard community funds.",
    slug: "protecting-your-hoas-finances",
    category: "HOA Management",
    author: "Arbella Team",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    title: "How Should Your HOA Handle Short-Term Rental Pressures?",
    excerpt:
      "With Airbnb and VRBO listings growing in Northeast Tennessee, learn how your HOA can address STR pressures while maintaining community standards.",
    slug: "how-should-your-hoa-handle-increasing-short-term-rental-str-pressures-in-northeast-tennessee-especially-via-airbnb-vrbo-listings",
    category: "HOA Management",
    author: "Arbella Team",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=600&q=80",
  },
  {
    title: "Arbella Properties Transitions Sales Division to Real Broker LLC",
    excerpt:
      "A first for Eastern Tennessee — Arbella Properties announces its sales division transition to Real Broker LLC, expanding opportunities for agents and clients.",
    slug: "arbella-properties-transitions-sales-division-to-real-broker-llc-a-first-for-eastern-tennessee",
    category: "Company News",
    author: "Arbella Team",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&q=80",
  },
];

export default function Blog() {
  const featured = posts[0];
  const rest = posts.slice(1, 4);

  return (
    <section id="blog" className="py-24 lg:py-32 bg-white">
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
              From Our Blog
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-slate-900 tracking-tight mb-4">
              Insights &amp; Resources
            </h2>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              Expert advice on property management, HOA governance, and real
              estate in Tennessee.
            </p>
          </div>
          <a
            href="https://arbellatn.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors whitespace-nowrap"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured post */}
          <motion.a
            href={`https://arbellatn.com/${featured.slug}/`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-brand-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {featured.category}
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {featured.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {featured.date}
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold font-[var(--font-heading)] text-slate-900 mb-3 group-hover:text-brand-500 transition-colors">
                {featured.title}
              </h3>
              <p className="text-slate-500 leading-relaxed flex-1">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-500 mt-4 group-hover:gap-3 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.a>

          {/* 3 smaller posts */}
          <div className="flex flex-col gap-5">
            {rest.map((post, i) => (
              <motion.a
                key={post.slug}
                href={`https://arbellatn.com/${post.slug}/`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group flex gap-5 bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="relative w-36 sm:w-44 flex-shrink-0 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="176px"
                  />
                </div>
                <div className="py-4 pr-5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm lg:text-base leading-snug group-hover:text-brand-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2 hidden sm:block">
                    {post.excerpt}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
