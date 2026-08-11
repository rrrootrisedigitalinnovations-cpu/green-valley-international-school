import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import StatCounter from "../../ui/StatCounter";
import { images } from "../../../lib/images";
import { STATS, SCHOOL } from "../../../lib/constants";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <motion.img
          src={images.heroCampus}
          alt="Green Valley International School campus at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-950/45 to-primary-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/60 via-transparent to-transparent" />

        <Container className="relative h-full flex flex-col justify-end pb-40 md:pb-44">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="eyebrow text-accent-300 mb-6"
          >
            {SCHOOL.curriculum} Curriculum · {SCHOOL.city}, {SCHOOL.state}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[2.75rem] sm:text-6xl lg:text-[5rem] font-bold text-white leading-[0.98] tracking-tight max-w-4xl text-balance"
          >
            Learning Today.
            <br />
            <span className="text-accent-300">Leading Tomorrow.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-7 max-w-lg text-base sm:text-lg text-white/75 leading-relaxed"
          >
            A Cambridge International curriculum school in Coimbatore, built for students who will go
            on to lead — in the classroom, on the field, and everywhere after.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button to="/admissions" variant="accent">Admissions Open</Button>
            <Button to="/contact" variant="ghostLight" icon={false}>Schedule Campus Visit</Button>
          </motion.div>
        </Container>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hidden sm:flex flex-col items-center gap-1"
        >
          <span className="font-mono text-[10px] tracking-widest2 uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </div>

      {/* Signature overlapping stats card */}
      <Container className="relative -mt-24 md:-mt-28 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="card-premium px-8 py-10 md:px-14 md:py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
        >
          {STATS.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
