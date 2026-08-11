import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import Reveal from "../../ui/Reveal";
import { images } from "../../../lib/images";
import { PROGRAMS } from "../../../lib/constants";

export default function AcademicPrograms() {
  return (
    <section className="py-24 md:py-32 bg-primary-950 text-white relative overflow-hidden">
      <Container className="relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            eyebrow="One Continuous Pathway"
            title="Four stages. One Cambridge pathway, from age three to eighteen."
            tone="dark"
          />
          <Link
            to="/academics"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-300 hover:text-accent-100 transition-colors shrink-0"
          >
            View full curriculum <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.title} delay={i * 0.08} className="h-full">
              <div className="group relative h-full rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={images.programs[program.image]}
                    alt={`${program.title} students at Green Valley International School`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/10 to-transparent" />
                  <span className="absolute top-4 left-5 font-mono text-xs tracking-widest2 text-accent-300">
                    {program.stage}
                  </span>
                </div>
                <div className="p-6 md:p-7 flex flex-col gap-3">
                  <h3 className="font-display text-xl font-semibold">{program.title}</h3>
                  <span className="font-mono text-[11px] tracking-wide text-white/45">{program.ages}</span>
                  <p className="text-sm leading-relaxed text-white/60">{program.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
