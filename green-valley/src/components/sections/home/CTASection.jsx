import { motion } from "framer-motion";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import { images } from "../../../lib/images";

export default function CTASection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <img
        src={images.aboutCampusWide}
        alt="Students walking across the Green Valley International School campus"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary-950/85" />

      <Container className="relative text-center max-w-2xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-accent-300"
        >
          Admissions Open · 2027–28
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance"
        >
          Seats for Kindergarten through Grade 12 are filling for next year.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button to="/admissions" variant="accent">Start Your Application</Button>
          <Button to="/contact" variant="ghostLight" icon={false}>Talk to Admissions</Button>
        </motion.div>
      </Container>
    </section>
  );
}
