import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = tone === "dark" ? "text-white" : "text-ink dark:text-white";
  const descColor = tone === "dark" ? "text-white/70" : "text-ink-500 dark:text-white/60";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Reveal>
        <h2 className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.1] text-balance ${titleColor}`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.08}>
          <p className={`font-body text-base lg:text-lg leading-relaxed ${descColor}`}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}
