import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const VARIANT_CLASS = {
  primary: "btn-primary",
  accent: "btn-accent",
  outline: "btn-outline",
  ghostLight: "btn-ghost-light",
};

/**
 * Button — renders as a <Link> when `to` is provided, otherwise a <button>/<a>.
 * variant: primary | accent | outline | ghostLight
 */
export default function Button({
  to,
  href,
  variant = "primary",
  icon = true,
  className = "",
  children,
  ...rest
}) {
  const classes = `${VARIANT_CLASS[variant] || VARIANT_CLASS.primary} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowUpRight size={16} strokeWidth={2.5} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
