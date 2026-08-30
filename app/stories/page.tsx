import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { getStories } from "./articles";

export const metadata: Metadata = {
  title: "Stories",
  description: "로또 데이터와 무작위를 예측이 아닌 기록과 생각의 재료로 읽는 Wondly의 이야기입니다.",
  alternates: { canonical: "https://wondly.net/stories" },
  openGraph: {
    title: "Stories | Wondly",
    description: "로또 데이터와 무작위를 예측이 아닌 기록과 생각의 재료로 읽는 Wondly의 이야기입니다.",
    url: "https://wondly.net/stories",
  },
};

export default function StoriesPage() {
  const stories = getStories();
  const [featuredStory, ...latestStories] = stories;

  return (
    <>
      <SiteHeader />
      <main className="stories-page">
        <header className="stories-hero">
          <p>WONDLY STORIES</p>
          <h1>숫자 너머의<br />이야기를 읽습니다.</h1>
          <div className="content-lead">로또 데이터에 정답을 덧씌우지 않고, 무작위와 인간의 직관 사이에서 발견한 흥미로운 질문을 천천히 풀어냅니다.</div>
        </header>

        {featuredStory ? (
          <Link className="featured-story" href={`/stories/${featuredStory.slug}`}>
            <div className="story-index">01</div>
            <div className="featured-story-copy">
              <div className="story-meta"><span>{featuredStory.category}</span><span>{featuredStory.readingMinutes} MIN READ</span></div>
              <h2>{featuredStory.title}</h2>
              <p>{featuredStory.summary}</p>
              <time dateTime={featuredStory.publishedAt}>{featuredStory.publishedLabel}</time>
            </div>
            <span className="story-arrow" aria-hidden="true">↗</span>
          </Link>
        ) : null}

        <section className="story-list" aria-labelledby="latest-stories-title">
          <div className="section-heading dark-heading">
            <p>ALL STORIES</p>
            <h2 id="latest-stories-title">최근 이야기</h2>
          </div>
          <div className="story-grid">
            {latestStories.map((story, index) => (
              <article className="story-card" key={story.slug}>
                <Link href={`/stories/${story.slug}`}>
                  <div className="story-card-top"><span>{String(index + 2).padStart(2, "0")}</span><span>{story.category}</span></div>
                  <h3>{story.title}</h3>
                  <p>{story.summary}</p>
                  <div className="story-card-bottom"><time dateTime={story.publishedAt}>{story.publishedLabel}</time><span>{story.readingMinutes}분 →</span></div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
