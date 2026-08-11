import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import ContourLines from "../ui/ContourLines";
import { NAV_LINKS, SCHOOL } from "../../lib/constants";

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="relative bg-surface-dark text-white/80 overflow-hidden">
      <ContourLines
        variant="field"
        tone="accent"
        opacity={0.14}
        lines={4}
        className="absolute inset-x-0 top-0 w-full h-56 -translate-y-10"
      />

      <Container className="relative pt-20 pb-10">
        {/* Campus tour CTA banner */}
        <div className="rounded-[28px] bg-gradient-to-br from-primary via-primary-700 to-primary-900 px-8 py-10 md:px-14 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-20 shadow-premium">
          <div className="max-w-xl">
            <span className="eyebrow text-accent-300">Come see it for yourself</span>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mt-3 leading-tight text-balance">
              Book a campus tour and meet the teachers your child will learn from.
            </h3>
          </div>
          <Link to="/admissions" className="btn-ghost-light shrink-0">
            Schedule Campus Visit
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
                <rect width="64" height="64" rx="14" fill="#16A34A" />
                <path d="M6 40C14 40 16 28 24 28C32 28 34 44 42 44C50 44 52 32 58 32" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <span className="font-display font-bold text-white text-lg">Green Valley</span>
            </div>
            <p className="text-sm leading-relaxed text-white/55 max-w-sm">
              {SCHOOL.tagline} A Cambridge International curriculum school in {SCHOOL.city}, {SCHOOL.state} — educating confident, globally minded learners since 2001.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/15 hover:border-accent hover:text-accent transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-widest2 text-white/40 mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-accent-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-widest2 text-white/40 mb-5">Admissions</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/admissions" className="hover:text-accent-300 transition-colors">How to Apply</Link></li>
              <li><Link to="/admissions" className="hover:text-accent-300 transition-colors">Fee Structure</Link></li>
              <li><Link to="/admissions" className="hover:text-accent-300 transition-colors">Scholarships</Link></li>
              <li><Link to="/careers" className="hover:text-accent-300 transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-widest2 text-white/40 mb-5">Newsletter</h4>
            <p className="text-sm text-white/55 mb-4">Term updates and admissions news, once a month.</p>
            {submitted ? (
              <p className="text-sm text-accent-300">You're subscribed — welcome aboard.</p>
            ) : (
              <form onSubmit={onSubmit} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="min-w-0 flex-1 rounded-full bg-white/8 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="h-10 w-10 shrink-0 inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-600 transition-colors"
                >
                  <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-white/40">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <span className="inline-flex items-center gap-2"><MapPin size={13} /> {SCHOOL.address}</span>
            <span className="inline-flex items-center gap-2"><Phone size={13} /> {SCHOOL.phone}</span>
            <span className="inline-flex items-center gap-2"><Mail size={13} /> {SCHOOL.email}</span>
          </div>
          <span>© {new Date().getFullYear()} Green Valley International School. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  );
}
