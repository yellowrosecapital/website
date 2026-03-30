import Link from "next/link";

export function SiteFooter({ navItems, disclaimer }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="site-footer-grid">
          <div className="stack">
            <div className="kicker">Yellow Rose Capital</div>
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
