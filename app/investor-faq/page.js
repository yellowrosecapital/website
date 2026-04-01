import { ButtonLink, Card, Container, Eyebrow, Section, SectionCopy, SectionTitle } from "@/components/ui";
import { siteContent } from "@/lib/site-content";

export const metadata = siteContent.pageMeta.faq;

export default function InvestorFaqPage() {
  return (
    <>
      <Section className="hero">
        <Container>
          <div className="stack">
            <Eyebrow>Investor FAQ</Eyebrow>
            <h1 className="page-title">Investor FAQ</h1>
            <p className="page-lead">Information to help you understand our approach, structure, and investor experience.</p>
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
            <SectionTitle>Still have questions?</SectionTitle>
            <SectionCopy>
              We're happy to walk you through the strategy, structure, and what participation looks like. Detailed information is shared privately with qualified investors.
            </SectionCopy>
            <div className="button-row">
              <ButtonLink href="/contact">Request Information</ButtonLink>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
