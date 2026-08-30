import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { getStory, stories } from "../articles";

type StoryPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};

  const url = `https://wondly.net/stories/${story.slug}`;
  return {
    title: story.title,
    description: story.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "ko_KR",
      siteName: "Wondly",
      title: story.title,
      description: story.summary,
      url,
      publishedTime: story.publishedAt,
      images: [],
    },
    twitter: {
      card: "summary",
      title: story.title,
      description: story.summary,
      images: [],
    },
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.summary,
    datePublished: story.publishedAt,
    dateModified: story.publishedAt,
    inLanguage: "ko-KR",
    mainEntityOfPage: `https://wondly.net/stories/${story.slug}`,
    author: { "@type": "Organization", name: "Wondly", url: "https://wondly.net" },
    publisher: { "@type": "Organization", name: "Wondly", url: "https://wondly.net" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader />
      <main className="story-page">
        <header className="story-hero">
          <Link className="story-back" href="/stories">← 모든 이야기</Link>
          <div className="story-kicker"><span>{story.category}</span><span>{story.readingMinutes} MIN READ</span></div>
          <h1>{story.title}</h1>
          <p>{story.summary}</p>
          <time dateTime={story.publishedAt}>{story.publishedLabel}</time>
        </header>
        <article className="story-prose">
          {story.sections.map((section) => (
            <section key={`${section.label}-${section.heading}`}>
              <p className="story-section-label">{section.label}</p>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <aside className="story-note"><strong>기록을 읽는 원칙</strong><p>이 글은 과거 데이터와 무작위에 대한 설명입니다. 미래 번호나 당첨 가능성을 예측하지 않습니다.</p></aside>
          <Link className="story-list-link" href="/stories">다른 이야기 읽기 <span aria-hidden="true">→</span></Link>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
