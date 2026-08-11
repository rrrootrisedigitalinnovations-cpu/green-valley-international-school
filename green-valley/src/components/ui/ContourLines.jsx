/**
 * ContourLines — the site's signature graphic.
 *
 * Green Valley's identity is drawn literally from topographic contour
 * lines: nested elevation curves that dip into a valley at the centre.
 * The same generator produces the hero backdrop, the section dividers,
 * and the faint footer watermark, so the motif reads as one consistent
 * mark rather than decoration repeated at random.
 */

function buildContourStroke(width, baseline, { amplitude, phase, wobble = 0.6 }) {
  const points = 10;
  const step = width / points;
  let d = `M -20 ${baseline}`;
  for (let i = 0; i <= points; i++) {
    const x = i * step;
    const valley = Math.sin((i / points) * Math.PI);
    const y =
      baseline -
      amplitude * valley -
      Math.sin(i * wobble + phase) * (amplitude * 0.18);
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}

const TONE_STROKE = {
  accent: "#16A34A",
  white: "#FFFFFF",
  primary: "#1E3A8A",
};

/**
 * variant="divider" — a slim horizontal band, use between sections.
 * variant="field"   — a tall decorative backdrop, use behind hero copy.
 */
export default function ContourLines({
  variant = "divider",
  tone = "accent",
  opacity = 0.5,
  lines = 5,
  className = "",
  flip = false,
}) {
  const width = 1440;
  const height = variant === "field" ? 640 : 160;
  const baseline = variant === "field" ? height * 0.62 : height * 0.75;
  const stroke = TONE_STROKE[tone] || TONE_STROKE.accent;

  const paths = Array.from({ length: lines }, (_, i) => {
    const amplitude = (variant === "field" ? 60 : 26) - i * (variant === "field" ? 6 : 3);
    const phase = i * 0.9;
    return buildContourStroke(width, baseline - i * (variant === "field" ? 34 : 14), {
      amplitude,
      phase,
    });
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="none"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={stroke}
          strokeWidth={variant === "field" ? 1.4 : 1.2}
          opacity={opacity * (1 - i * (0.6 / lines))}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

