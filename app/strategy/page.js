import { ButtonLink, Card, Container, Eyebrow, Section, SectionCopy, SectionTitle } from "@/components/ui";
import { siteContent } from "@/lib/site-content";

export const metadata = siteContent.pageMeta.strategy;

export default function StrategyPage() {
  const { strategy } = siteContent;

  return (
    <>
      <Section className="hero">
        <Container>
          <div className="stack">
            <Eyebrow>Investment strategy</Eyebrow>
            <h1 className="page-title">Private real estate credit built around residential collateral and disciplined underwriting.</h1>
            <p className="page-lead">{strategy.intro}</p>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Card className="card-pad stack">
              <div className="kicker">What the public page should say</div>
              <ul className="muted-list">
                <li>Private real estate credit is the core theme.</li>
                <li>Residential mortgage notes and real estate-backed debt are the focus.</li>
                <li>First-position liens and collateral quality are part of the underwriting story.</li>
                <li>The Texas and San Antonio emphasis should remain visible.</li>
              </ul>
            </Card>

            <Card className="card-pad stack">
              <div className="kicker">How the strategy should feel</div>
              <p className="section-copy" style={{ marginTop: 0 }}>
                The page should feel clean, credible, and understandable to an individual accredited investor who wants to know what the firm does without being pushed into a sales funnel.
              </p>
              <div className="button-row">
                <ButtonLink href="/contact" variant="secondary">
                  Request More Information
                </ButtonLink>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid-2">
            {strategy.pillars.map((pillar) => (
              <Card key={pillar.title} className="card-pad">
                <div className="kicker">{pillar.title}</div>
                <p className="section-copy">{pillar.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Card className="card-pad stack">
              <div className="kicker">Process framing</div>
              <ol className="muted-list">
                {strategy.process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </Card>

            <Card className="card-pad stack">
              <div className="kicker">Public guardrail</div>
              <SectionTitle>Keep the page at a high level.</SectionTitle>
              <SectionCopy>
                Detailed underwriting thresholds, economics, and offering specifics belong in the private materials, not the public website.
              </SectionCopy>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
