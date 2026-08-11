import { useState } from "react";
import { FileCheck2, CalendarCheck, PenLine, CheckCircle2 } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Accordion from "../components/ui/Accordion";
import { images } from "../lib/images";
import { ADMISSION_STEPS, FEES, SCHOLARSHIPS, ADMISSIONS_FAQS, PROGRAMS } from "../lib/constants";

const REQUIRED_DOCS = [
  "Birth certificate (original + copy)",
  "Previous school transfer certificate",
  "Last two years' academic reports",
  "4 recent passport-size photographs",
  "Address proof of parent/guardian",
  "Immunisation record",
];

export default function Admissions() {
  return (
    <>
      <PageHero
        eyebrow="Admissions Open · 2027–28"
        title="Four steps between here and your child's first day."
        description="We keep the process short and personal — a real conversation with our admissions team, not a black-box form."
        image={images.admissionsHero}
        imageAlt="Parents and a student on a campus tour at Green Valley International School"
      />

      {/* Process */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="How It Works" title="The admission process." />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-ink-200 dark:bg-white/10" />
            {ADMISSION_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08} className="relative">
                <div className="flex md:flex-col items-start md:items-start gap-4 md:gap-6">
                  <span className="relative z-10 shrink-0 h-16 w-16 rounded-2xl bg-primary text-white font-display font-bold text-lg flex items-center justify-center">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-ink dark:text-white">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-500 dark:text-white/60 mt-2">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Eligibility + documents */}
      <section className="py-20 md:py-28 bg-surface-soft dark:bg-white/[0.02]">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <Reveal>
            <span className="eyebrow">Eligibility</span>
            <h3 className="font-display text-2xl font-semibold text-ink dark:text-white mt-4">Grade-wise age eligibility</h3>
            <div className="mt-6 flex flex-col gap-3">
              {PROGRAMS.map((p) => (
                <div key={p.title} className="flex items-center justify-between py-3 border-b border-ink-200 dark:border-white/10">
                  <span className="text-sm font-medium text-ink dark:text-white">{p.title}</span>
                  <span className="text-sm text-ink-500 dark:text-white/55">{p.ages}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Required Documents</span>
            <h3 className="font-display text-2xl font-semibold text-ink dark:text-white mt-4">What to bring</h3>
            <ul className="mt-6 flex flex-col gap-3">
              {REQUIRED_DOCS.map((doc) => (
                <li key={doc} className="flex items-start gap-3 text-sm text-ink-500 dark:text-white/60">
                  <FileCheck2 size={16} className="text-accent shrink-0 mt-0.5" />
                  {doc}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Fees */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Fee Information" title="Annual tuition by grade." description="Fees cover tuition, digital learning tools and core co-curricular access. Transport, boarding and meals are billed separately." />
          <Reveal className="mt-12 overflow-hidden rounded-2xl border border-ink-200 dark:border-white/10">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-sm font-semibold font-display">Grade</th>
                  <th className="px-6 py-4 text-sm font-semibold font-display">Annual Tuition</th>
                </tr>
              </thead>
              <tbody className="bg-surface-card dark:bg-surface-darkcard">
                {FEES.map((row, i) => (
                  <tr key={row.grade} className={i !== FEES.length - 1 ? "border-b border-ink-200 dark:border-white/10" : ""}>
                    <td className="px-6 py-4 text-sm text-ink dark:text-white">{row.grade}</td>
                    <td className="px-6 py-4 text-sm font-mono text-ink-500 dark:text-white/60">{row.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </Container>
      </section>

      {/* Scholarships */}
      <section className="py-20 md:py-28 bg-surface-soft dark:bg-white/[0.02]">
        <Container>
          <SectionHeading eyebrow="Scholarships" title="Support for the families who need it." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SCHOLARSHIPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="card-premium p-7 h-full">
                  <CalendarCheck className="text-accent mb-4" size={22} strokeWidth={1.7} />
                  <h3 className="font-display font-semibold text-ink dark:text-white">{s.title}</h3>
                  <p className="text-sm text-ink-500 dark:text-white/60 mt-2 leading-relaxed">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Common admissions questions." />
          <div className="mt-12">
            <Accordion items={ADMISSIONS_FAQS} />
          </div>
        </Container>
      </section>

      <EnquiryForm />
    </>
  );
}

function EnquiryForm() {
  const [form, setForm] = useState({ studentName: "", grade: "", parentName: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 bg-primary-950 text-white">
      <Container className="max-w-2xl">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="eyebrow text-accent-300">Online Admission Enquiry</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4 text-balance">Start your child's application.</h2>
          <p className="mt-4 text-white/60 max-w-md">Fill this in and our admissions team will reach out within one working day to schedule a campus tour.</p>
        </div>

        {submitted ? (
          <Reveal className="rounded-[24px] border border-white/10 bg-white/[0.04] p-10 text-center flex flex-col items-center gap-4">
            <CheckCircle2 className="text-accent-300" size={36} />
            <h3 className="font-display text-xl font-semibold">Enquiry received</h3>
            <p className="text-white/60 text-sm max-w-sm">
              Thank you, {form.studentName ? `${form.studentName}'s` : "your child's"} enquiry is with our admissions team. We'll be in touch shortly.
            </p>
          </Reveal>
        ) : (
          <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Student Name" value={form.studentName} onChange={update("studentName")} required />
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-widest2 text-white/50">Grade Applying For</label>
              <select
                required
                value={form.grade}
                onChange={update("grade")}
                className="rounded-xl bg-white/8 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-accent [&>option]:text-ink"
              >
                <option value="" disabled>Select grade</option>
                {PROGRAMS.map((p) => (
                  <option key={p.title} value={p.title}>{p.title}</option>
                ))}
              </select>
            </div>
            <Field label="Parent / Guardian Name" value={form.parentName} onChange={update("parentName")} required />
            <Field label="Phone Number" type="tel" value={form.phone} onChange={update("phone")} required />
            <Field label="Email Address" type="email" value={form.email} onChange={update("email")} required className="sm:col-span-2" />
            <div className="sm:col-span-2 flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-widest2 text-white/50">Message (Optional)</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="Anything you'd like us to know ahead of the tour."
                className="rounded-xl bg-white/8 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-accent resize-none"
              />
            </div>
            <button type="submit" className="btn-accent sm:col-span-2 mt-2">
              <PenLine size={16} className="mr-1" /> Submit Enquiry
            </button>
          </form>
        )}
      </Container>
    </section>
  );
}

function Field({ label, className = "", ...props }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-xs font-mono uppercase tracking-widest2 text-white/50">{label}</label>
      <input
        {...props}
        className="rounded-xl bg-white/8 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-accent"
      />
    </div>
  );
}
