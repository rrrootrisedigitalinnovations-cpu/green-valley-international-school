import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-ink-200 dark:divide-white/10 border-y border-ink-200 dark:border-white/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 py-6 text-left group"
            >
              <span className="font-display text-base md:text-lg font-medium text-ink dark:text-white group-hover:text-primary dark:group-hover:text-accent-300 transition-colors">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0 h-8 w-8 rounded-full border border-ink-200 dark:border-white/15 flex items-center justify-center text-ink-500 dark:text-white/60"
              >
                <Plus size={15} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-sm md:text-base leading-relaxed text-ink-500 dark:text-white/60 max-w-2xl">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
