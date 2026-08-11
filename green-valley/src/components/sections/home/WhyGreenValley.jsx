import { Globe2, GraduationCap, MonitorPlay, ShieldCheck, FlaskConical, Plane } from "lucide-react";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import Reveal from "../../ui/Reveal";
import { WHY_GREEN_VALLEY } from "../../../lib/constants";

const ICONS = { Globe2, GraduationCap, MonitorPlay, ShieldCheck, FlaskConical, Plane };

export default function WhyGreenValley() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Families Choose Us"
          title="A school built around how children actually learn best."
          description="Every decision on campus — from classroom acoustics to lab access hours — is made against one question: does this help a specific student go further?"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-200/70 dark:bg-white/10 rounded-[28px] overflow-hidden border border-ink-200/70 dark:border-white/10">
          {WHY_GREEN_VALLEY.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.06} className="h-full">
                <div className="group bg-surface-card dark:bg-surface-darkcard h-full p-8 md:p-10 flex flex-col gap-5 transition-colors duration-300 hover:bg-primary-50 dark:hover:bg-primary-900/20">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 dark:bg-white/10 text-primary dark:text-accent-300 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink dark:text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-500 dark:text-white/60">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
