"use client";

import Link from "next/link";

import { trackEvent } from "@/lib/tracking";

export function TrackableButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  eventName = "cta_click",
  eventProps = {}
}) {
  const variantClass =
    variant === "secondary"
      ? "button-secondary"
      : variant === "ghost"
        ? "button-ghost"
        : "button-primary";

  return (
    <Link
      href={href}
      className={`button ${variantClass} ${className}`.trim()}
      onClick={() => trackEvent(eventName, { href, ...eventProps })}
    >
      {children}
    </Link>
  );
}
