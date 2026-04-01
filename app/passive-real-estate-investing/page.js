import { ButtonLink, Card, Container, Eyebrow, Section, SectionCopy, SectionTitle } from "@/components/ui";
import { siteContent } from "@/lib/site-content";

export const metadata = siteContent.pageMeta.passive;

export default function PassiveRealEstateInvestingPage() {
  const { passive } = siteContent;

  return (
    <>
      <Section className="hero">
        <Container>
          <div className="stack">
            <Eyebrow>Passive real estate investing</Eyebrow>
            <h1 className="page-title">How to think about real estate without directly owning property.</h1>
            <p className="page-lead">{passive.intro}</p>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="grid-2" style={{ alignItems: "start" }}>
            {passive.sections.map((item) => (
              <Card key={item.title} className="card-pad stack">
                <div className="kicker">{item.title}</div>
                <p className="section-copy">{item.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-tight passive-cta-section">
        <Container>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Card className="card-pad stack">
              <div className="kicker">Important considerations</div>
              <ul className="muted-list">
                {passive.considerations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>

            <Card className="card-pad stack">
              <SectionTitle>Learn More About the Opportunity</SectionTitle>
              <SectionCopy>
                We aim to provide clear, straightforward information to help you understand how our investment approach works and whether it may be a fit for your portfolio.
              </SectionCopy>
              <SectionCopy style={{ marginTop: 0 }}>
                If you're interested in learning more, we're available to provide additional details and answer any questions.
              </SectionCopy>
              <div className="button-row">
                <ButtonLink href="/contact">Request Information</ButtonLink>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
