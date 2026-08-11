import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import Container from "../components/ui/Container";
import ContourLines from "../components/ui/ContourLines";
import Reveal from "../components/ui/Reveal";
import { SCHOOL } from "../lib/constants";

const INFO_CARDS = [
  { icon: Phone, label: "Call Us", value: SCHOOL.phone, href: `tel:${SCHOOL.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email Us", value: SCHOOL.email, href: `mailto:${SCHOOL.email}` },
  { icon: MapPin, label: "Visit Us", value: SCHOOL.address },
  { icon: Clock, label: "Office Hours", value: "Mon–Sat, 8:00 AM – 4:30 PM" },
];

export default function Contact() {
  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <ContourLines variant="field" tone="primary" opacity={0.25} lines={4} className="absolute inset-x-0 top-0 w-full h-64" />
        <Container className="relative text-center max-w-2xl mx-auto">
          <span className="eyebrow">Contact</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink dark:text-white mt-5 text-balance">
            Let's talk about your child's next school.
          </h1>
          <p className="mt-5 text-base md:text-lg text-ink-500 dark:text-white/60 leading-relaxed">
            Call, write, or come by — our admissions desk usually replies within one working day.
          </p>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {INFO_CARDS.map((card, i) => (
              <Reveal key={card.label} delay={i * 0.06}>
                {card.href ? (
                  <a href={card.href} className="card-premium p-6 h-full flex flex-col gap-4 hover:border-primary/40 dark:hover:border-accent/40">
                    <card.icon className="text-accent" size={22} strokeWidth={1.7} />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest2 text-ink-400 dark:text-white/40">{card.label}</p>
                      <p className="text-sm font-medium text-ink dark:text-white mt-1.5">{card.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="card-premium p-6 h-full flex flex-col gap-4">
                    <card.icon className="text-accent" size={22} strokeWidth={1.7} />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest2 text-ink-400 dark:text-white/40">{card.label}</p>
                      <p className="text-sm font-medium text-ink dark:text-white mt-1.5">{card.value}</p>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <Reveal direction="left" className="lg:col-span-7">
              <div className="rounded-[28px] overflow-hidden border border-ink-200 dark:border-white/10 h-[420px] lg:h-full min-h-[420px]">
                <iframe
                  title="Green Valley International School location"
                  src={SCHOOL.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-5">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-premium p-10 h-full flex flex-col items-center justify-center text-center gap-4 min-h-[420px]">
        <CheckCircle2 className="text-accent" size={36} />
        <h3 className="font-display text-xl font-semibold text-ink dark:text-white">Message sent</h3>
        <p className="text-sm text-ink-500 dark:text-white/60 max-w-xs">
          Thanks, {form.name || "there"} — our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-premium p-8 flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <ContactField label="Full Name" value={form.name} onChange={update("name")} required />
        <ContactField label="Email" type="email" value={form.email} onChange={update("email")} required />
      </div>
      <ContactField label="Subject" value={form.subject} onChange={update("subject")} required />
      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono uppercase tracking-widest2 text-ink-400 dark:text-white/40">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="How can we help?"
          className="rounded-xl border border-ink-200 dark:border-white/15 bg-surface dark:bg-white/5 px-4 py-3 text-sm text-ink dark:text-white placeholder:text-ink-400 focus:outline-none focus:border-primary resize-none"
        />
      </div>
      <button type="submit" className="btn-primary mt-2">
        <Send size={16} className="mr-1" /> Send Message
      </button>
    </form>
  );
}

function ContactField({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-mono uppercase tracking-widest2 text-ink-400 dark:text-white/40">{label}</label>
      <input
        {...props}
        className="rounded-xl border border-ink-200 dark:border-white/15 bg-surface dark:bg-white/5 px-4 py-3 text-sm text-ink dark:text-white placeholder:text-ink-400 focus:outline-none focus:border-primary"
      />
    </div>
  );
}
