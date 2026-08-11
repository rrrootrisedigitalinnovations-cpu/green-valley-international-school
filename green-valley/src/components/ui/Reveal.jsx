import { motion, useReducedMotion } from "framer-motion";

/**
 * Reveal — fades + slides a block into view once, on scroll.
 * direction: "up" | "down" | "left" | "right" | "none"
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 28,
  className = "",
  as = "div",
  once = true,
}) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = motion[as] || motion.div;

  const offsets = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
