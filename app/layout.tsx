import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-EKK3YHBQQL";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "wondly.net";
  const protocol = headerList.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Wondly — 일상의 궁금함을 쓸모 있는 도구로";
  const description = "Wondly는 복잡한 데이터를 누구나 편하게 살펴볼 수 있는 작고 정교한 웹 도구를 만듭니다.";

  return {
    metadataBase: new URL(origin),
    applicationName: "Wondly",
    title: { default: title, template: "%s | Wondly" },
    description,
    creator: "Wondly",
    publisher: "Wondly",
    category: "technology",
    alternates: { canonical: "https://wondly.net/" },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: { type: "website", locale: "ko_KR", siteName: "Wondly", title, description, url: origin, images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Wondly — 일상의 궁금함을 쓸모 있는 도구로" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-adsense-account" content="ca-pub-2586236796433286" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
