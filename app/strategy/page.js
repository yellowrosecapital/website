import { ButtonLink, Card, Container, Eyebrow, Section, SectionCopy, SectionTitle } from "@/components/ui";
import { siteContent } from "@/lib/site-content";

export const metadata = siteContent.pageMeta.strategy;

export default function StrategyPage() {
  const { strategy } = siteContent;

  return (
    <>
      <Section className="hero">
        <Container>
          <div className="strategy-hero-grid">
            <div className="stack">
              <Eyebrow>Strategy</Eyebrow>
              <h1 className="page-title">Private real estate credit built for income, security, and disciplined execution.</h1>
              <p className="page-lead">
                {strategy.intro}
              </p>

              <div className="button-row">
                <ButtonLink href="/contact">Speak with Our Team</ButtonLink>
                <ButtonLink href="/investor-process" variant="secondary">
                  See the Investor Process
                </ButtonLink>
              </div>
            </div>

            <Card className="card-pad stack strategy-hero-card">
              <div className="kicker">Strategy at a glance</div>
              <div className="stack">
                <div className="feature-stat">
                  <strong>Income focus</strong>
                  <span>Residential mortgage notes and real estate-backed lending designed for current cash flow.</span>
                </div>
                <div className="feature-stat">
                  <strong>Collateral-first</strong>
                  <span>Underwriting emphasizes lien position, asset quality, and downside awareness.</span>
                </div>
                <div className="feature-stat">
                  <strong>Texas markets</strong>
                  <span>Public focus stays on San Antonio and surrounding residential communities.</span>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Card className="card-pad stack">
              <div className="kicker">What the strategy is</div>
              <SectionTitle style={{ fontSize: "1.6rem" }}>Residential credit structured for steady, private-market participation.</SectionTitle>
              <SectionCopy style={{ marginTop: 0 }}>
                Yellow Rose Capital originates and acquires residential mortgage notes and short-term real estate loans. The focus is on disciplined underwriting, first-position collateral, and capital preservation rather than public-market style speculation.
              </SectionCopy>
              <SectionCopy style={{ marginTop: 0 }}>
                The public story stays simple on purpose: investors should understand the asset, the security, and the role income plays without needing every deal term on the website.
              </SectionCopy>
            </Card>

            <Card className="card-pad stack">
              <div className="kicker">Public communication principles</div>
              <ul className="muted-list">
                <li>Keep detailed economics and underwriting private.</li>
                <li>Use clear language that explains the strategy without overselling it.</li>
                <li>Present the firm as a disciplined operator, not a mass-market syndicator.</li>
                <li>Lead with Texas-rooted market knowledge and transparent communication.</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="stack">
            <div className="stack">
              <Eyebrow>Core pillars</Eyebrow>
              <SectionTitle>Three themes define the public strategy.</SectionTitle>
            </div>

            <div className="grid-3">
              {strategy.pillars.map((pillar) => (
                <Card key={pillar.title} className="card-pad stack">
                  <div className="kicker">{pillar.title}</div>
                  <p className="section-copy" style={{ marginTop: 0 }}>
                    {pillar.text}
                  </p>
                </Card>
              ))}
            </div>

            <Card className="card-pad strategy-note-card">
              <div className="kicker">Important nuance</div>
              <SectionCopy style={{ marginTop: 0 }}>
                {strategy.publicNote}
              </SectionCopy>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Card className="card-pad stack">
              <div className="kicker">How it works</div>
              <ol className="strategy-timeline">
                {strategy.process.map((item, index) => (
                  <li key={item} className="strategy-timeline-item">
                    <span className="strategy-timeline-step">{String(index + 1).padStart(2, "0")}</span>
                    <span className="strategy-timeline-copy">{item}</span>
                  </li>
                ))}
              </ol>
            </Card>

            <Card className="card-pad stack">
              <div className="kicker">Public guardrail</div>
              <SectionTitle>Keep the page high level.</SectionTitle>
              <SectionCopy style={{ marginTop: 0 }}>
                Detailed underwriting thresholds, economics, and offering specifics belong in private materials and direct conversations, not the public website.
              </SectionCopy>
              <div className="button-row">
                <ButtonLink href="/contact" variant="ghost">
                  Request Information
                </ButtonLink>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
