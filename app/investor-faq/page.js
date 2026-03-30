import { Card, Container, Eyebrow, Section, SectionCopy, SectionTitle } from "@/components/ui";
import { siteContent } from "@/lib/site-content";

export const metadata = siteContent.pageMeta.faq;

export default function InvestorFaqPage() {
  return (
    <>
      <Section className="hero">
        <Container>
          <div className="stack">
            <Eyebrow>Investor FAQ</Eyebrow>
            <h1 className="page-title">Common questions, answered in a calm and credible way.</h1>
            <p className="page-lead">
              The FAQ should explain the investor fit, the passive structure, and the private process without sounding promotional.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="faq-grid stack">
            {siteContent.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <div className="faq-answer">{item.answer}</div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="card-pad stack">
            <div className="kicker">FAQ tone guardrail</div>
            <SectionTitle>Answer the question, then stop.</SectionTitle>
            <SectionCopy>
              Each answer should be short, reassuring, and clear. The purpose is to educate qualified investors, not to close a sale on the page.
            </SectionCopy>
          </Card>
        </Container>
      </Section>
    </>
  );
}
