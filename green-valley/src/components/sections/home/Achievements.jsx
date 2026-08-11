import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import Reveal from "../../ui/Reveal";
import { ACHIEVEMENTS } from "../../../lib/constants";

export default function Achievements() {
  return (
    <section className="py-24 md:py-32 bg-surface-soft dark:bg-white/[0.02]">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Results our students earned — in labs, on fields, and on stage."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-200/70 dark:bg-white/10 rounded-[28px] overflow-hidden border border-ink-200/70 dark:border-white/10">
          {ACHIEVEMENTS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="bg-surface-card dark:bg-surface-darkcard h-full p-8 md:p-9 flex flex-col gap-3 text-center items-center">
                <span className="font-display text-4xl md:text-5xl font-bold text-primary dark:text-accent-300">
                  {item.value}
                </span>
                <span className="font-semibold text-sm text-ink dark:text-white">{item.label}</span>
                <p className="text-xs leading-relaxed text-ink-500 dark:text-white/55">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
