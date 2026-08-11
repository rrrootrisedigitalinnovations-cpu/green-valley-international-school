import { useCountUp } from "../../hooks/useCountUp";

export default function StatCounter({ value, suffix = "", label, tone = "light" }) {
  const [ref, count] = useCountUp(value);
  const numColor = tone === "dark" ? "text-white" : "text-primary dark:text-white";
  const labelColor = tone === "dark" ? "text-white/60" : "text-ink-500 dark:text-white/55";

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span className={`font-display text-4xl md:text-5xl font-bold tabular-nums ${numColor}`}>
        {count}
        <span className="text-accent">{suffix}</span>
      </span>
      <span className={`font-mono text-[11px] uppercase tracking-widest2 ${labelColor}`}>{label}</span>
    </div>
  );
}
