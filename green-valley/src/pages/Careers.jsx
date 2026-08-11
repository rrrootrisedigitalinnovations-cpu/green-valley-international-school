import { useState } from "react";
import { Briefcase, MapPin, ArrowUpRight } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { images } from "../lib/images";
import { CAREERS, BENEFITS, SCHOOL } from "../lib/constants";

const DEPARTMENTS = ["All", ...new Set(CAREERS.map((c) => c.department))];

export default function Careers() {
  const [dept, setDept] = useState("All");
  const filtered = dept === "All" ? CAREERS : CAREERS.filter((c) => c.department === dept);

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Teach where teaching is taken seriously."
        description="We invest as much in our faculty's growth as we do in our students' — funded professional development, real classroom autonomy, and a campus built to work in."
        image={images.careersHero}
        imageAlt="Green Valley International School faculty and staff"
      />

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Why Teach Here" title="What you get, beyond a salary." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.07}>
                <div className="card-premium p-7 h-full">
                  <h3 className="font-display font-semibold text-ink dark:text-white">{b.title}</h3>
                  <p className="text-sm text-ink-500 dark:text-white/60 mt-2 leading-relaxed">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Culture photos — asymmetric collage */}
      <section className="py-8 md:py-16">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            <Reveal className="col-span-2 row-span-2">
              <img src={images.careers.culture1} alt="Faculty collaborating at Green Valley International School" loading="lazy" className="w-full h-full object-cover rounded-[24px] aspect-[4/5] lg:aspect-auto" />
            </Reveal>
            <Reveal delay={0.06}>
              <img src={images.careers.culture2} alt="Staff professional development session" loading="lazy" className="w-full h-full object-cover rounded-[24px] aspect-square" />
            </Reveal>
            <Reveal delay={0.12}>
              <img src={images.careers.culture3} alt="Green Valley International School campus staff room" loading="lazy" className="w-full h-full object-cover rounded-[24px] aspect-square" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Open positions */}
      <section className="py-20 md:py-28 bg-surface-soft dark:bg-white/[0.02]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <SectionHeading eyebrow="Open Positions" title="Current openings." />
            <div className="flex flex-wrap gap-2">
              {DEPARTMENTS.map((d) => (
                <button
                  key={d}
                  onClick={() => setDept(d)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-300 ${
                    dept === d
                      ? "bg-primary text-white"
                      : "bg-ink-100 dark:bg-white/5 text-ink-500 dark:text-white/60 hover:bg-ink-200 dark:hover:bg-white/10"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col divide-y divide-ink-200 dark:divide-white/10 border-y border-ink-200 dark:border-white/10">
            {filtered.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.05}>
                <a
                  href={`mailto:${SCHOOL.email}?subject=${encodeURIComponent("Application: " + job.title)}`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6"
                >
                  <div>
                    <h4 className="font-display font-semibold text-ink dark:text-white group-hover:text-primary dark:group-hover:text-accent-300 transition-colors">
                      {job.title}
                    </h4>
                    <div className="flex items-center gap-4 mt-2 text-xs text-ink-500 dark:text-white/50">
                      <span className="inline-flex items-center gap-1.5"><Briefcase size={12} /> {job.department}</span>
                      <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> {job.type}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 dark:text-accent-400 shrink-0">
                    Apply <ArrowUpRight size={14} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
