import { useState } from "react";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { images } from "../lib/images";
import { NEWS, EVENTS } from "../lib/constants";

const CATEGORIES = ["All", "Achievement", "Admissions", "Campus", "Community", "Academics"];

export default function NewsEvents() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? NEWS : NEWS.filter((n) => n.category === active);

  return (
    <>
      <PageHero
        eyebrow="News & Events"
        title="What's happening on campus."
        description="Announcements, achievements and the calendar of everything coming up this term."
        image={images.newsHero}
        imageAlt="Green Valley International School news and events"
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <SectionHeading eyebrow="Latest News" title="Recent announcements." />
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-300 ${
                    active === cat
                      ? "bg-primary text-white"
                      : "bg-ink-100 dark:bg-white/5 text-ink-500 dark:text-white/60 hover:bg-ink-200 dark:hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, i) => (
              <Reveal key={item.title} delay={(i % 6) * 0.06}>
                <article className="group cursor-pointer">
                  <div className="relative rounded-[22px] overflow-hidden aspect-[4/3]">
                    <img
                      src={images.news[i % images.news.length]}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-surface-dark/90 text-[11px] font-semibold text-primary dark:text-accent-300">
                      {item.category}
                    </span>
                  </div>
                  <div className="mt-4">
                    <span className="text-xs font-mono text-ink-400 dark:text-white/40">{item.date}</span>
                    <h3 className="font-display font-semibold text-ink dark:text-white mt-2 leading-snug group-hover:text-primary dark:group-hover:text-accent-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-600 dark:text-accent-400 mt-3">
                      Read more <ArrowUpRight size={13} />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Event calendar */}
      <section className="py-20 md:py-28 bg-surface-soft dark:bg-white/[0.02]">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Event Calendar" title="What's coming up." />
          <div className="mt-12 flex flex-col divide-y divide-ink-200 dark:divide-white/10 border-y border-ink-200 dark:border-white/10">
            {EVENTS.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.05}>
                <div className="flex items-center gap-6 py-6">
                  <div className="shrink-0 w-16 text-center">
                    <p className="font-display text-2xl font-bold text-primary dark:text-accent-300 leading-none">
                      {e.date.split(" ")[0]}
                    </p>
                    <p className="text-[11px] font-mono uppercase tracking-widest2 text-ink-400 dark:text-white/40 mt-1">
                      {e.date.split(" ")[1]}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-ink dark:text-white">{e.title}</h4>
                    <p className="text-xs text-ink-500 dark:text-white/50 mt-1 flex items-center gap-1.5">
                      <Clock3 size={12} /> {e.time}
                    </p>
                  </div>
                  <CalendarDays className="text-ink-200 dark:text-white/20 hidden sm:block" size={20} />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
