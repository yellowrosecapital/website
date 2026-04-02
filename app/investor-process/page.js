import { Card, Container, Eyebrow, Section, SectionCopy, SectionTitle } from "@/components/ui";
import { siteContent } from "@/lib/site-content";

export const metadata = siteContent.pageMeta.process;

export default function InvestorProcessPage() {
  return (
    <>
      <Section className="hero">
        <Container>
          <div className="stack">
            <Eyebrow>Investor process</Eyebrow>
            <h1 className="page-title">A simple, private process</h1>
            <p className="page-lead">
              We take a relationship-first approach-starting with a conversation, then sharing additional information with qualified investors.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="grid-2">
            {siteContent.process.map((item) => (
              <Card key={item.step} className="card-pad stack">
                <div className="eyebrow-group">
                  <span className="step-index">{item.step}</span>
                  <div className="kicker">{item.title}</div>
                </div>
                <p className="section-copy">{item.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Card className="card-pad stack">
              <div className="kicker">What to expect</div>
              <ul className="muted-list">
                <li>A private, conversation-based process</li>
                <li>Access to detailed information if there’s a fit</li>
                <li>Time to review and ask questions before making a decision</li>
                <li>Ongoing communication after you invest</li>
              </ul>
            </Card>

            <Card className="card-pad stack">
              <SectionTitle>Simple and relationship-driven</SectionTitle>
              <SectionCopy>
                We focus on clear communication and a thoughtful process—so you can evaluate the opportunity without pressure.
              </SectionCopy>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
