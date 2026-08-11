import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import { images } from "../../../lib/images";
import { TESTIMONIALS } from "../../../lib/constants";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  const go = (dir) => setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  const current = TESTIMONIALS[index];

  return (
    <section
      className="py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What parents, students and alumni say." align="center" className="mx-auto" />

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <Quote className="mx-auto text-accent-400 mb-6" size={34} strokeWidth={1.5} />

          <div className="min-h-[180px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-xl md:text-2xl leading-snug text-ink dark:text-white text-balance">
                  "{current.quote}"
                </p>
                <div className="mt-7 flex items-center justify-center gap-3">
                  <img
                    src={images.testimonials[index % images.testimonials.length]}
                    alt={current.name}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-sm text-ink dark:text-white">{current.name}</p>
                    <p className="text-xs text-ink-500 dark:text-white/50">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-ink-200 dark:border-white/15 text-ink-500 dark:text-white/70 hover:border-primary hover:text-primary dark:hover:text-white transition-colors"
            >
              <ChevronLeft size={17} />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-accent" : "w-1.5 bg-ink-200 dark:bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-ink-200 dark:border-white/15 text-ink-500 dark:text-white/70 hover:border-primary hover:text-primary dark:hover:text-white transition-colors"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
