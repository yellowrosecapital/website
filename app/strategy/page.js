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
              <div className="stack strategy-hero-stat-stack">
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
              <div className="kicker">What the Strategy Is</div>
              <SectionTitle style={{ fontSize: "1.6rem" }}>
                Residential real estate credit focused on consistent income and capital preservation
              </SectionTitle>
              <SectionCopy style={{ marginTop: 0 }}>
                Yellow Rose Capital originates and acquires residential mortgage notes and short-term real estate loans. The strategy is centered on disciplined underwriting, first-position collateral, and generating income backed by real assets.
              </SectionCopy>
              <SectionCopy style={{ marginTop: 0 }}>
                Our focus is on simplicity—investors should clearly understand what the investment is, how it is secured, and how income is generated.
              </SectionCopy>
            </Card>

            <Card className="card-pad stack">
              <div className="kicker">How We Communicate</div>
              <ul className="muted-list">
                <li>We provide clear, straightforward explanations of our investment approach.</li>
                <li>Detailed underwriting and deal-level information is shared privately with qualified investors.</li>
                <li>We focus on disciplined execution rather than promotional messaging.</li>
                <li>Our communication reflects a long-term, relationship-driven approach.</li>
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
