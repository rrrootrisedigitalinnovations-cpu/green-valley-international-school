import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Users2, LineChart, Laptop2 } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { images } from "../lib/images";
import { PROGRAMS } from "../lib/constants";

const STAGE_SUBJECTS = {
  Kindergarten: {
    subjects: ["Language & Literacy", "Numeracy", "The World Around Us", "Physical Development", "Creative Expression"],
    assessment: "Ongoing observation-based assessment — no formal exams. Teachers track development against the Cambridge Early Years framework each term.",
  },
  "Primary School": {
    subjects: ["English", "Mathematics", "Science", "Second Language", "Computing", "Art & Design", "Physical Education"],
    assessment: "Cambridge Primary Checkpoint at the end of Grade 5, alongside continuous classroom assessment and termly progress reports.",
  },
  "Middle School": {
    subjects: ["English", "Mathematics", "Sciences (Bio/Chem/Physics)", "Global Perspectives", "Second Language", "Computing", "Design Technology", "Humanities"],
    assessment: "Cambridge Lower Secondary Checkpoint at the end of Grade 8, plus project-based assessment across the term.",
  },
  "High School": {
    subjects: ["English", "Mathematics", "Sciences", "Economics/Business", "Computer Science", "Humanities Electives", "Second Language"],
    assessment: "IGCSE examinations at Grade 10, followed by AS & A Level examinations through Grade 12, with structured university counselling from Grade 11.",
  },
};

const APPROACH = [
  { icon: Lightbulb, title: "Inquiry-Led", text: "Students ask the question before we hand them the answer — across every subject, every stage." },
  { icon: Users2, title: "Small Class Sizes", text: "A maximum of 24 students per class, so feedback is specific, not generic." },
  { icon: LineChart, title: "Continuous Assessment", text: "Termly progress reports built on classroom evidence, not a single exam snapshot." },
  { icon: Laptop2, title: "Technology-Integrated", text: "Purpose-built learning software layered into lessons — never technology for its own sake." },
];

export default function Academics() {
  const [activeStage, setActiveStage] = useState(PROGRAMS[0].title);
  const stage = STAGE_SUBJECTS[activeStage];

  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="A curriculum designed to compound, one stage at a time."
        description="Every subject, at every stage, connects to what comes next — so students build on real foundations, not memorised fragments."
        image={images.academicsHero}
        imageAlt="Students in a Green Valley International School classroom"
      />

      {/* Stage tabs */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Subjects by Stage" title="Explore what students study, stage by stage." />

          <div className="mt-12 flex flex-wrap gap-2">
            {PROGRAMS.map((p) => (
              <button
                key={p.title}
                onClick={() => setActiveStage(p.title)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeStage === p.title
                    ? "bg-primary text-white"
                    : "bg-ink-100 dark:bg-white/5 text-ink-500 dark:text-white/60 hover:bg-ink-200 dark:hover:bg-white/10"
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10"
            >
              <div className="lg:col-span-7">
                <h3 className="font-mono text-xs uppercase tracking-widest2 text-accent-600 dark:text-accent-400 mb-4">Subjects</h3>
                <div className="flex flex-wrap gap-3">
                  {stage.subjects.map((s) => (
                    <span
                      key={s}
                      className="px-4 py-2 rounded-full border border-ink-200 dark:border-white/10 text-sm text-ink dark:text-white/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-mono text-xs uppercase tracking-widest2 text-accent-600 dark:text-accent-400 mb-4">Assessment</h3>
                <p className="text-sm md:text-base leading-relaxed text-ink-500 dark:text-white/60">{stage.assessment}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* Learning approach */}
      <section className="py-20 md:py-28 bg-surface-soft dark:bg-white/[0.02]">
        <Container>
          <SectionHeading eyebrow="Learning Approach" title="How we teach, not just what we teach." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPROACH.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="h-full">
                  <item.icon className="text-primary dark:text-accent-300 mb-5" size={26} strokeWidth={1.6} />
                  <h3 className="font-display font-semibold text-ink dark:text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-500 dark:text-white/60 mt-2">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology in education */}
      <section className="py-20 md:py-28">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <Reveal direction="left" className="lg:col-span-6">
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] shadow-premium">
              <img src={images.facilities.computerLabs} alt="Students using computers in a Green Valley International School lab" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-6">
            <span className="eyebrow">Technology in Education</span>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink dark:text-white mt-4 text-balance">
              Technology that supports the teacher, never replaces one.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-ink-500 dark:text-white/60 max-w-lg">
              Every classroom is equipped with interactive displays and adaptive learning software that
              gives teachers real-time visibility into where each student is struggling — so intervention
              happens in the same week, not the same term.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
