import { motion } from "framer-motion";
import Container from "../ui/Container";

/**
 * variant="banner" — full-width image, overlay, centered/left copy. Tall.
 * variant="split"  — copy on one side, image on the other. No overlay.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  variant = "banner",
  align = "left",
  children,
}) {
  if (variant === "split") {
    return (
      <section className="pt-36 pb-20 md:pt-44 md:pb-24">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-5 font-display text-4xl md:text-5xl font-bold leading-[1.05] text-ink dark:text-white text-balance"
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-base md:text-lg leading-relaxed text-ink-500 dark:text-white/60 max-w-lg"
              >
                {description}
              </motion.p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[28px] overflow-hidden aspect-[4/3] shadow-premium"
            >
              <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative h-[52vh] min-h-[420px] overflow-hidden">
      <motion.img
        src={image}
        alt={imageAlt}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/50 to-primary-950/30" />
      <Container className={`relative h-full flex flex-col justify-end pb-16 ${align === "center" ? "items-center text-center" : ""}`}>
        {eyebrow && <span className="eyebrow text-accent-300 mb-4">{eyebrow}</span>}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.02] text-balance ${align === "center" ? "max-w-3xl" : "max-w-2xl"}`}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`mt-5 text-base md:text-lg text-white/75 leading-relaxed ${align === "center" ? "max-w-xl" : "max-w-md"}`}
          >
            {description}
          </motion.p>
        )}
        {children}
      </Container>
    </section>
  );
}
