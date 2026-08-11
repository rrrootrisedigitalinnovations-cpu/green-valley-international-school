import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function FloatingAdmissionButton() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (location.pathname === "/admissions") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            to="/admissions"
            className="group flex items-center gap-2.5 rounded-full bg-accent text-white pl-4 pr-5 py-3.5 shadow-glow hover:bg-accent-600 transition-colors"
          >
            <GraduationCap size={18} />
            <span className="text-sm font-semibold hidden sm:inline">Admissions Open</span>
            <span className="text-sm font-semibold sm:hidden">Apply</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
