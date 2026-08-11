import { Quote } from "lucide-react";
import Container from "../../ui/Container";
import Reveal from "../../ui/Reveal";
import ContourLines from "../../ui/ContourLines";
import { images } from "../../../lib/images";

export default function PrincipalMessage() {
  return (
    <section className="relative py-24 md:py-32 bg-surface-soft dark:bg-white/[0.02] overflow-hidden">
      <ContourLines
        variant="field"
        tone="accent"
        opacity={0.18}
        lines={4}
        className="absolute -bottom-20 left-0 w-full h-72"
      />

      <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        <Reveal direction="left" className="lg:col-span-5">
          <div className="relative">
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] shadow-premium">
              <img
                src={images.principal}
                alt="Dr. Lakshmi Narayanan, Principal of Green Valley International School"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-2xl bg-surface-card dark:bg-surface-darkcard border border-ink-200/70 dark:border-white/10 shadow-card px-6 py-5">
              <p className="font-display text-xl font-bold text-primary dark:text-white">26 Years</p>
              <p className="font-mono text-[10px] tracking-widest2 uppercase text-ink-500 dark:text-white/50">In Education</p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <span className="eyebrow">Principal's Message</span>
          <Quote className="text-accent-400 my-6" size={36} strokeWidth={1.5} />
          <Reveal>
            <p className="font-display text-2xl md:text-3xl leading-snug text-ink dark:text-white text-balance">
              "We don't measure a school year by the syllabus we finished. We measure it by the
              questions students are brave enough to ask by the end of it."
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-ink-500 dark:text-white/60 max-w-xl">
              Our mission is to build a learning environment where academic rigour and genuine curiosity
              reinforce each other — where the Cambridge framework gives structure, and our teachers give
              it life. Our vision is simple: every student who walks through these gates should leave
              more capable, more curious, and more themselves than when they arrived.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 flex items-center gap-4">
              <div>
                <p className="font-display font-semibold text-ink dark:text-white">Dr. Lakshmi Narayanan</p>
                <p className="text-sm text-ink-500 dark:text-white/50">Principal, Green Valley International School</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
