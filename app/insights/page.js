import { Card, Container, Eyebrow, Section, SectionCopy } from "@/components/ui";
import { TrackableButtonLink } from "@/components/trackable-button-link";
import { growthContent } from "@/lib/growth-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Insights",
  description:
    "Educational insights from Yellow Rose Capital on passive real estate investing, private credit, and Texas market familiarity.",
  path: "/insights",
  keywords: ["real estate insights", "private credit education", "passive investing"]
});

export default function InsightsPage() {
  return (
    <>
      <Section className="hero">
        <Container>
          <div className="stack">
            <Eyebrow>Insights</Eyebrow>
            <h1 className="page-title">Educational notes for qualified investors and curious readers.</h1>
            <p className="page-lead">
              This is where Yellow Rose Capital can publish educational content that reinforces the firm's public positioning without drifting into a sales funnel.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="grid-2">
            {growthContent.posts.map((post) => (
              <Card key={post.slug} className="card-pad stack">
                <div className="eyebrow-group">
                  <div className="kicker">{post.category}</div>
                  <span className="pill">{post.readTime}</span>
                </div>
                <h2 style={{ margin: 0, fontFamily: "var(--serif)", fontSize: "1.8rem", lineHeight: 1.15 }}>
                  {post.title}
                </h2>
                <p className="section-copy" style={{ marginTop: 0 }}>
                  {post.excerpt}
                </p>
                <div className="footer-note">{post.publishedAt}</div>
                <div className="button-row">
                  <TrackableButtonLink
                    href={`/insights/${post.slug}`}
                    variant="secondary"
                    eventProps={{ location: "insights_index", slug: post.slug }}
                  >
                    Read article
                  </TrackableButtonLink>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Card className="card-pad stack">
              <div className="kicker">Reusable copy blocks</div>
              <ul className="muted-list">
                {growthContent.copyBlocks.map((block) => (
                  <li key={block}>{block}</li>
                ))}
              </ul>
            </Card>

            <Card className="card-pad stack">
              <div className="kicker">Share snippets</div>
              <ul className="muted-list">
                {growthContent.shareSnippets.map((snippet) => (
                  <li key={snippet}>{snippet}</li>
                ))}
              </ul>
              <SectionCopy>
                These snippets can be reused for previews, social cards, and future marketing assets without rewriting the core site.
              </SectionCopy>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
