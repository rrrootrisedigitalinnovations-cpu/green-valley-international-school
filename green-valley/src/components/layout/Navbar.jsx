import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "../../lib/constants";
import { useDarkMode } from "../../hooks/useDarkMode";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent py-6"
          : "bg-surface/85 dark:bg-surface-dark/85 backdrop-blur-xl border-b border-ink-200/60 dark:border-white/10 py-3 shadow-sm"
      }`}
    >
      <div className="mx-auto w-full max-w-8xl px-6 md:px-10 lg:px-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <svg width="34" height="34" viewBox="0 0 64 64" fill="none" className="shrink-0">
            <rect width="64" height="64" rx="14" fill={transparent ? "#FFFFFF" : "#1E3A8A"} fillOpacity={transparent ? 0.14 : 1} />
            <path d="M6 40C14 40 16 28 24 28C32 28 34 44 42 44C50 44 52 32 58 32" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" />
            <path d="M6 48C14 48 17 38 25 38C33 38 35 52 43 52C51 52 53 42 58 42" stroke={transparent ? "#FFFFFF" : "#F8FAFC"} strokeWidth="3" strokeLinecap="round" opacity="0.55" />
          </svg>
          <span className={`font-display font-bold text-[15px] leading-tight tracking-tight ${transparent ? "text-white" : "text-ink dark:text-white"}`}>
            Green Valley
            <span className="block text-[10px] font-mono font-normal tracking-widest2 uppercase opacity-70">International School</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-full text-[13.5px] font-medium transition-colors duration-200 ${
                  isActive
                    ? transparent
                      ? "text-white bg-white/15"
                      : "text-primary dark:text-white bg-primary/10 dark:bg-white/10"
                    : transparent
                    ? "text-white/85 hover:text-white hover:bg-white/10"
                    : "text-ink-500 dark:text-white/70 hover:text-primary dark:hover:text-white hover:bg-ink-100 dark:hover:bg-white/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setIsDark(!isDark)}
            className={`hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
              transparent
                ? "border-white/30 text-white hover:bg-white/10"
                : "border-ink-200 dark:border-white/15 text-ink-500 dark:text-white/70 hover:bg-ink-100 dark:hover:bg-white/10"
            }`}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <Link
            to="/admissions"
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
              transparent
                ? "bg-white text-primary hover:bg-white/90"
                : "bg-accent text-white hover:bg-accent-600"
            }`}
          >
            Apply Now <ArrowUpRight size={14} />
          </Link>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border ${
              transparent ? "border-white/30 text-white" : "border-ink-200 dark:border-white/15 text-ink dark:text-white"
            }`}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-surface dark:bg-surface-dark border-t border-ink-200/60 dark:border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-[15px] font-medium ${
                      isActive ? "bg-primary/10 text-primary dark:text-white" : "text-ink-500 dark:text-white/70"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex items-center gap-3 mt-3 px-4">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="inline-flex items-center gap-2 text-sm text-ink-500 dark:text-white/70"
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />} {isDark ? "Light mode" : "Dark mode"}
                </button>
              </div>
              <Link to="/admissions" className="btn-accent mt-4 mx-4">
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
