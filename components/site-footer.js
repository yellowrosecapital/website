import Link from "next/link";

import { BrandImage } from "@/components/brand-image";

const logoPath = "/logo/yellow-rose-capital-full-logo.png";

export function SiteFooter({ navItems, disclaimer }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="site-footer-grid">
          <div className="stack">
            <Link href="/" className="site-brand site-footer-brand" aria-label="Yellow Rose Capital home">
              <BrandImage
                src={logoPath}
                alt="Yellow Rose Capital logo"
                className="site-brand-mark site-brand-mark-full site-footer-mark"
                imgClassName="site-brand-mark-image site-brand-mark-image-full"
                fallback={<span aria-hidden="true">YR</span>}
              />
            </Link>
            <p className="section-copy" style={{ marginTop: 0 }}>
              Passive real estate investing for accredited individual investors seeking real asset exposure, disciplined underwriting, and a relationship-based process.
            </p>
            <div className="footer-note">San Antonio, Texas</div>
          </div>

          <div className="stack">
            <div className="kicker">Navigate</div>
            <div className="footer-nav">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="disclaimer-box">{disclaimer}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
