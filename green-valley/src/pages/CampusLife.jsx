import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { images } from "../lib/images";
import { STUDENT_LIFE, EVENTS } from "../lib/constants";

export default function CampusLife() {
  return (
    <>
      <PageHero
        eyebrow="Campus Life"
        title="School doesn't end at the last bell."
        description="Sports, arts, robotics and travel — the parts of a Green Valley education that happen outside the timetable, but shape just as much."
        image={images.campusLifeHero}
        imageAlt="Students participating in campus life activities at Green Valley International School"
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Student Life" title="Eight ways students grow beyond the classroom." />

          <div className="mt-16 flex flex-col gap-20 md:gap-28">
            {STUDENT_LIFE.map((item, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={item.title}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${reversed ? "lg:[direction:rtl]" : ""}`}
                >
                  <Reveal direction={reversed ? "right" : "left"} className="lg:col-span-6 [direction:ltr]">
                    <div className="relative rounded-[28px] overflow-hidden aspect-[16/11] shadow-card">
                      <img
                        src={images.studentLife[item.image]}
                        alt={`${item.title} at Green Valley International School`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                  <div className="lg:col-span-6 [direction:ltr]">
                    <span className="font-mono text-xs text-accent-600 dark:text-accent-400 tracking-widest2 uppercase">
                      {String(i + 1).padStart(2, "0")} / 08
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink dark:text-white mt-4">{item.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-ink-500 dark:text-white/60 max-w-md">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Upcoming events strip */}
      <section className="py-20 md:py-28 bg-primary-950 text-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading eyebrow="What's Coming Up" title="Upcoming campus events." tone="dark" />
            <Link to="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-300 hover:text-accent-100 transition-colors shrink-0">
              Full events calendar <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EVENTS.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.06}>
                <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-accent/15 text-accent-300 flex items-center justify-center">
                    <CalendarDays size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white">{e.title}</h4>
                    <p className="text-xs text-white/50 mt-1">{e.date} · {e.time}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
