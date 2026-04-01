import { ButtonLink, Card, Container, Eyebrow, Section, SectionCopy, SectionTitle } from "@/components/ui";
import { siteContent } from "@/lib/site-content";

export const metadata = siteContent.pageMeta.strategy;

export default function StrategyPage() {
  const { strategy, about } = siteContent;

  return (
    <>
      <Section className="hero">
        <Container>
          <div className="stack">
            <Eyebrow>Strategy</Eyebrow>
            <h1 className="page-title">Private real estate credit built around residential collateral and disciplined underwriting.</h1>
            <p className="page-lead">{about.intro}</p>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Card className="card-pad stack">
              <div className="kicker">Why the firm exists</div>
              <SectionTitle style={{ fontSize: "1.6rem" }}>Built for accredited investors who want passive exposure to real estate.</SectionTitle>
              <SectionCopy style={{ marginTop: 0 }}>{about.philosophy}</SectionCopy>
              <SectionCopy style={{ marginTop: 0 }}>{about.whoItServes}</SectionCopy>
              <div className="button-row">
                <ButtonLink href="/contact">Request More Information</ButtonLink>
              </div>
            </Card>

            <Card className="card-pad stack">
              <div className="kicker">Public brand rules</div>
              <ul className="muted-list">
                {about.commitments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
