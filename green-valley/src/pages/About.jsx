import { Target, Eye, HeartHandshake } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import ContourLines from "../components/ui/ContourLines";
import { images } from "../lib/images";
import { SCHOOL } from "../lib/constants";

const TIMELINE = [
  { year: "2001", title: "Founded", detail: "Green Valley opens its doors with 3 classrooms and 40 students." },
  { year: "2008", title: "Cambridge Affiliation", detail: "Becomes an authorised Cambridge International school." },
  { year: "2014", title: "Senior Campus", detail: "The current 22-acre campus in Coimbatore opens for Grades 6–12." },
  { year: "2020", title: "Innovation Labs", detail: "Robotics, design-technology and applied-science labs launch." },
  { year: "2026", title: "1,000+ Students", detail: "Green Valley crosses 1,000 students across 120+ faculty." },
];

const VALUES = [
  { icon: Target, title: "Our Mission", text: "To build a learning environment where academic rigour and genuine curiosity reinforce each other, for every student who walks through our gates." },
  { icon: Eye, title: "Our Vision", text: "To be recognised as South India's leading Cambridge International school — measured not by rankings, but by where our alumni go and who they become." },
  { icon: HeartHandshake, title: "Our Values", text: "Integrity, curiosity and care — for the individual student, the wider community and the world they will help shape." },
];

export default function About() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="About Green Valley"
        title="Twenty-five years of teaching students to think for themselves."
        description="Green Valley International School opened in 2001 with a simple premise: a rigorous, internationally benchmarked education, delivered by teachers who know every student by name."
        image={images.aboutStory}
        imageAlt="Green Valley International School students in a campus courtyard"
      />

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Our Story" title="A quarter-century, in five chapters." />

          <div className="mt-16 relative">
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-ink-200 dark:bg-white/10 md:-translate-x-1/2" />
            <div className="flex flex-col gap-10 md:gap-14">
              {TIMELINE.map((item, i) => {
                const reversed = i % 2 === 1;
                return (
                  <Reveal key={item.year} delay={i * 0.06}>
                    <div className={`relative flex items-start gap-6 md:gap-0 ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`}>
                      <div className={`hidden md:block md:w-1/2 ${reversed ? "pl-14 text-left" : "pr-14 text-right"}`}>
                        <TimelineCard item={item} />
                      </div>
                      <span className="absolute left-0 md:left-1/2 top-1 h-8 w-8 md:-translate-x-1/2 rounded-full bg-accent text-white text-[10px] font-mono flex items-center justify-center ring-4 ring-surface dark:ring-surface-dark shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="hidden md:block md:w-1/2" />
                      <div className="pl-12 md:hidden">
                        <TimelineCard item={item} />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Mission / Vision / Values */}
      <section className="relative py-20 md:py-28 bg-primary-950 text-white overflow-hidden">
        <ContourLines variant="field" tone="accent" opacity={0.15} lines={4} className="absolute inset-x-0 bottom-0 w-full h-64" />
        <Container className="relative">
          <SectionHeading eyebrow="What Drives Us" title="Mission, vision and the values behind them." tone="dark" align="center" className="mx-auto" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-[24px] border border-white/10 bg-white/[0.04] p-8">
                  <v.icon className="text-accent-300 mb-5" size={26} strokeWidth={1.6} />
                  <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60 mt-3">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Campus wide photo + location */}
      <section className="relative">
        <img src={images.aboutCampusWide} alt={`${SCHOOL.name} campus grounds`} loading="lazy" className="w-full h-[46vh] min-h-[320px] object-cover" />
      </section>
    </>
  );
}

function TimelineCard({ item }) {
  return (
    <div>
      <p className="font-mono text-xs text-accent-600 dark:text-accent-400">{item.year}</p>
      <p className="font-display font-semibold text-ink dark:text-white mt-1">{item.title}</p>
      <p className="text-sm text-ink-500 dark:text-white/60 mt-1">{item.detail}</p>
    </div>
  );
}
