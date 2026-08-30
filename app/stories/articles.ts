import articleData from "../../content/lotto-articles.json";

export type StorySection = {
  label: "서론" | "본론" | "결론";
  heading: string;
  paragraphs: readonly string[];
};

export type Story = {
  slug: string;
  category: "가이드" | "데이터 이야기" | "생각거리";
  title: string;
  summary: string;
  publishedAt: string;
  publishedLabel: string;
  readingMinutes: number;
  featured?: boolean;
  sections: readonly StorySection[];
};

export const stories = articleData as readonly Story[];

export function getStories() {
  return [...stories].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}
