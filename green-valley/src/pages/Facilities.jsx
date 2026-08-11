import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MonitorPlay, FlaskConical, Cpu, BookOpen, Trophy, Music2, Sparkles, Theater, Bot, Waves,
  ChevronLeft, ChevronRight, Compass,
} from "lucide-react";
import PageHero from "../components/layout/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { images } from "../lib/images";
import { FACILITIES } from "../lib/constants";

const ICONS = { MonitorPlay, FlaskConical, Cpu, BookOpen, Trophy, Music2, Sparkles, Theater, Bot, Waves };

const SPANS = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-4", "lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-6"];

export default function Facilities() {
  const [tourIndex, setTourIndex] = useState(0);
  const tourStop = FACILITIES[tourIndex];

  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="Ten spaces. Zero filler."
        description="Every facility on campus earns its square footage — used daily, not photographed once for a brochure."
        image={images.facilitiesHero}
        imageAlt="Green Valley International School facilities overview"
      />

      {/* Virtual tour strip */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Compass className="text-accent" size={20} />
              <span className="eyebrow">Virtual Campus Tour</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous"
                onClick={() => setTourIndex((i) => (i - 1 + FACILITIES.length) % FACILITIES.length)}
                className="h-9 w-9 rounded-full border border-ink-200 dark:border-white/15 flex items-center justify-center text-ink-500 dark:text-white/60 hover:border-primary hover:text-primary dark:hover:text-white transition-colors"
              >
                <ChevronLeft size={15} />
              </button>
              <button
                aria-label="Next"
                onClick={() => setTourIndex((i) => (i + 1) % FACILITIES.length)}
                className="h-9 w-9 rounded-full border border-ink-200 dark:border-white/15 flex items-center justify-center text-ink-500 dark:text-white/60 hover:border-primary hover:text-primary dark:hover:text-white transition-colors"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          <div className="relative rounded-[28px] overflow-hidden aspect-[16/7] shadow-premium">
            <AnimatePresence mode="wait">
              <motion.img
                key={tourStop.title}
                src={images.facilities[tourStop.image]}
                alt={`Virtual tour stop: ${tourStop.title}`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
              <span className="font-mono text-xs text-accent-300 tracking-widest2 uppercase">
                Stop {tourIndex + 1} of {FACILITIES.length}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mt-2">{tourStop.title}</h3>
              <p className="text-white/70 text-sm mt-1 max-w-md">{tourStop.description}</p>
            </div>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {FACILITIES.map((f, i) => (
              <button
                key={f.title}
                onClick={() => setTourIndex(i)}
                className={`shrink-0 h-1.5 rounded-full transition-all duration-300 ${
                  i === tourIndex ? "w-8 bg-accent" : "w-1.5 bg-ink-200 dark:bg-white/15"
                }`}
                aria-label={`Go to ${f.title}`}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Full bento grid */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="Every Facility" title="The full campus map." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
            {FACILITIES.map((f, i) => {
              const Icon = ICONS[f.icon];
              return (
                <Reveal key={f.title} delay={(i % 6) * 0.05} className={SPANS[i] || "lg:col-span-2"}>
                  <div className="group relative h-full min-h-[240px] rounded-[24px] overflow-hidden">
                    <img
                      src={images.facilities[f.image]}
                      alt={f.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
                    <div className="relative h-full flex flex-col justify-between p-6">
                      <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
                        <p className="text-xs text-white/70 mt-1">{f.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
