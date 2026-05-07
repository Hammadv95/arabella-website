import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Residential Management", href: "https://arbellatn.com/residential/" },
    { label: "Commercial Management", href: "https://arbellatn.com/commercial-services/" },
    { label: "Association Management", href: "https://arbellatn.com/association/" },
    { label: "Short-Term Rentals", href: "https://arbellatn.com/short-term/" },
    { label: "Real Estate Brokerage", href: "https://arbellatn.com/brokerage/" },
  ],
  Portals: [
    { label: "Tenant Login", href: "https://app.propertyware.com/pw/index.html#/login/tenant/arbellatn" },
    { label: "Owner Login", href: "https://app.propertyware.com/pw/portals/arbellatn/owner.action" },
    { label: "HOA Login", href: "https://home.arbellatn.com/login" },
    { label: "Maintenance Request", href: "https://app.propertymeld.com/tenant/arbella-properties-inc/" },
    { label: "HomeWise Docs", href: "https://www.homewisedocs.com/" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
    { label: "Rental Properties", href: "https://arbellatn.com/rental-properties/" },
  ],
};

const offices = [
  { city: "Johnson City", address: "1805 W State of Franklin Rd #900, 37604" },
  { city: "Fall Branch", address: "1706 Hwy 93, 37656" },
  { city: "Greeneville", address: "104 Sam Doak Street, 37745" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-10 py-16 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <Image
                src="/images/arbella-logo-white.png"
                alt="Arbella Properties"
                width={160}
                height={48}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Professional property management, real estate brokerage, and
              association management across East Tennessee&apos;s Tri-Cities region.
              Serving the community since 2011.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mb-6">
              {[
                { label: "Facebook", letter: "F", href: "https://www.facebook.com/arbellaproperties/" },
                { label: "Instagram", letter: "I", href: "https://www.instagram.com/arbellaproperties/" },
                { label: "LinkedIn", letter: "L", href: "https://www.linkedin.com/company/arbella-properties-inc/" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-500 flex items-center justify-center text-white/40 hover:text-white transition-all duration-200 border border-white/5 hover:border-brand-500"
                  aria-label={s.label}
                >
                  <span className="text-xs font-bold">{s.letter}</span>
                </a>
              ))}
            </div>
            {/* Hours */}
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock className="w-4 h-4 text-brand-500/50" />
              Mon – Fri: 9:00 AM – 4:00 PM
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-white/30 mb-4">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-white/30 mb-4">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+14234468154"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-500" />
                (423) 446-8154
              </a>
              <a
                href="mailto:info@arbellatn.com"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-500" />
                info@arbellatn.com
              </a>
              <div className="pt-3 space-y-3">
                {offices.map((o) => (
                  <div
                    key={o.city}
                    className="flex items-start gap-3 text-sm text-slate-500"
                  >
                    <MapPin className="w-4 h-4 text-brand-500/50 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-400">
                        {o.city}
                      </span>
                      <br />
                      <span className="text-xs">{o.address}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Arbella Properties of Tennessee.
            All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
