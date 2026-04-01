"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { BrandImage } from "@/components/brand-image";
import { trackEvent } from "@/lib/tracking";

const logoPath = "/logo/yellow-rose-capital-full-logo.png";

export function SiteHeader({ navItems }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <div className="site-header-bar">
          <Link href="/" className="site-brand" aria-label="Yellow Rose Capital home">
            <BrandImage
              src={logoPath}
              alt="Yellow Rose Capital logo"
              className="site-brand-mark site-brand-mark-full"
              imgClassName="site-brand-mark-image site-brand-mark-image-full"
              fallback={<span aria-hidden="true">YR</span>}
              priority
            />
          </Link>

          <button
            type="button"
            className="site-nav-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="site-nav-toggle-line" />
            <span className="site-nav-toggle-line" />
            <span className="site-nav-toggle-line" />
          </button>

          <nav className={`site-nav${menuOpen ? " site-nav-open" : ""}`} id="primary-navigation" aria-label="Primary">
            {navItems.map((item) => (
              item.label === "Contact" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="button button-primary"
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => {
                    trackEvent("cta_click", { href: item.href, label: item.label, section: "header" });
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => {
                    trackEvent("nav_click", { href: item.href, label: item.label });
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
