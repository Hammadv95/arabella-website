"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

const offices = [
  { city: "Johnson City", address: "1805 W State of Franklin Rd #900, 37604" },
  { city: "Fall Branch", address: "1706 Hwy 93, 37656" },
  { city: "Greeneville", address: "104 Sam Doak Street, 37745" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-slate-900 tracking-tight mb-5">
              Ready to Simplify Property Management?
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              Contact us today to learn how Arbella Properties can help you with
              your property management, real estate, or association needs. We serve
              the Tri-Cities region and surrounding areas.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              <a
                href="tel:+14234468154"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center group-hover:bg-navy-100 transition-colors">
                  <Phone className="w-5 h-5 text-navy-700" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Call us</p>
                  <p className="font-semibold text-slate-900">
                    (423) 446-8154
                  </p>
                </div>
              </a>
              <a
                href="mailto:info@arbellatn.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center group-hover:bg-navy-100 transition-colors">
                  <Mail className="w-5 h-5 text-navy-700" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email us</p>
                  <p className="font-semibold text-slate-900">
                    info@arbellatn.com
                  </p>
                </div>
              </a>
            </div>

            {/* Office locations */}
            <div>
              <p className="text-sm font-semibold text-slate-900 mb-3">
                Office Locations
              </p>
              <div className="space-y-3">
                {offices.map((office) => (
                  <div
                    key={office.city}
                    className="flex items-start gap-2.5 p-3 bg-white rounded-xl border border-slate-200"
                  >
                    <MapPin className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-slate-700">
                        {office.city}, TN
                      </span>
                      <p className="text-xs text-slate-400">{office.address}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400 mt-4">
                Mon – Fri: 9:00 AM – 4:00 PM
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold font-[var(--font-heading)] text-slate-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-slate-500 mb-6">
                  We&apos;ve received your message. A member of the Arbella team
                  will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-semibold text-brand-500 hover:text-brand-600"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-7 sm:p-9">
                <h3 className="text-xl font-bold font-[var(--font-heading)] text-slate-900 mb-1">
                  Send Us a Message
                </h3>
                <p className="text-sm text-slate-500 mb-7">
                  We&apos;ll get back to you as soon as possible.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(423) 555-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                      How can we help you?
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-700 bg-white"
                    >
                      <option>Residential Property Management</option>
                      <option>Commercial Property Management</option>
                      <option>Association / HOA Management</option>
                      <option>Short-Term Rental Management</option>
                      <option>Real Estate Brokerage</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your property or how we can help..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-500 hover:bg-brand-600 text-white py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg shadow-brand-500/20 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    No spam. We&apos;ll get back to you within one business day.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
