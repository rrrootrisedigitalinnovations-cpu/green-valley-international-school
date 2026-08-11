import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-primary-900 flex flex-col items-center justify-center gap-6"
        >
          <motion.svg
            width="56"
            height="56"
            viewBox="0 0 64 64"
            fill="none"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <rect width="64" height="64" rx="14" fill="#16A34A" />
            <motion.path
              d="M6 40C14 40 16 28 24 28C32 28 34 44 42 44C50 44 52 32 58 32"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, ease: "easeInOut", delay: 0.15 }}
            />
          </motion.svg>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[11px] tracking-widest2 uppercase text-white/60"
            >
              Green Valley International School
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
