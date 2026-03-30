import Link from "next/link";

export function Container({ children, className = "", ...props }) {
  return (
    <div className={`container ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function Section({ children, className = "", ...props }) {
  return (
    <section className={`section ${className}`.trim()} {...props}>
      {children}
    </section>
  );
}

export function SectionTitle({ children, className = "", ...props }) {
  return (
    <h2 className={`section-title ${className}`.trim()} {...props}>
      {children}
    </h2>
  );
}

export function SectionCopy({ children, className = "", ...props }) {
  return (
    <p className={`section-copy ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}

export function Eyebrow({ children, className = "", ...props }) {
  return (
    <div className={`eyebrow ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`card ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function ButtonLink({ href, children, variant = "primary", className = "", ...props }) {
  const variantClass =
    variant === "secondary"
      ? "button-secondary"
      : variant === "ghost"
        ? "button-ghost"
        : "button-primary";

  return (
    <Link href={href} className={`button ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </Link>
  );
}

export function Pill({ children, className = "", ...props }) {
  return (
    <span className={`pill ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}
