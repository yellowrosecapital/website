"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandImage } from "@/components/brand-image";
import { trackEvent } from "@/lib/tracking";

const logoPath = "/logo/yellow-rose-capital-full-logo.png";

export function SiteHeader({ navItems }) {
  const pathname = usePathname();

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

          <nav className="site-nav" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => trackEvent("nav_click", { href: item.href, label: item.label })}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="button button-primary"
              onClick={() => trackEvent("cta_click", { href: "/contact", label: "Request Information", section: "header" })}
            >
              Request Information
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
