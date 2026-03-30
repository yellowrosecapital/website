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
            <h1 className="page-title">A structured, relationship-based process from inquiry to private materials.</h1>
            <p className="page-lead">
              The process should feel thoughtful and professional, not like a public signup funnel.
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
              <div className="kicker">What investors should expect</div>
              <ul className="muted-list">
                <li>A private conversation instead of a public solicitation.</li>
                <li>Access to confidential offering documents only if there is a fit.</li>
                <li>A deliberate review process before any subscription decision.</li>
                <li>Ongoing communication through private investor channels after investing.</li>
              </ul>
            </Card>

            <Card className="card-pad stack">
              <SectionTitle>The process should feel premium and simple.</SectionTitle>
              <SectionCopy>
                The public site is designed to help an accredited individual investor understand the next step without feeling pressured.
              </SectionCopy>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
