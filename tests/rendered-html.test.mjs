import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`https://wondly.net${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Wondly homepage with its primary content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<html[^>]+lang="ko"/);
  assert.match(html, /<title>Wondly — 일상의 궁금함을 쓸모 있는 도구로<\/title>/);
  assert.match(html, /Lotto Analysis/);
  assert.match(html, /번호를 예측하거나 추천하지 않고/);
  assert.match(html, /Privacy Policy/);
  const documentHead = html.slice(html.indexOf("<head>"), html.indexOf("</head>") + 7);
  assert.match(documentHead, /name="google-adsense-account" content="ca-pub-2586236796433286"/);
  assert.match(documentHead, /googletagmanager\.com\/gtag\/js\?id=G-1N1BXQCE2K/);
  assert.match(documentHead, /gtag\('config', 'G-1N1BXQCE2K'\)/);
  assert.match(html, /rel="canonical" href="https:\/\/wondly.net\/?"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /https:\/\/schema.org/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Starter Project/);
});

test("renders policy pages with route-specific metadata", async () => {
  const response = await render("/privacy");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>개인정보처리방침 \| Wondly<\/title>/);
  assert.match(html, /rel="canonical" href="https:\/\/wondly.net\/privacy"/);
  assert.match(html, /Google 광고 설정/);
  assert.match(html, /Google Analytics 4/);
  assert.match(html, /개인정보처리방침/);
  assert.doesNotMatch(html, /property="og:image"/);
});

test("renders the synced Lotto story index and a semantic article page", async () => {
  const indexResponse = await render("/stories");
  assert.equal(indexResponse.status, 200);
  const indexHtml = await indexResponse.text();
  assert.match(indexHtml, /<title>Stories \| Wondly<\/title>/);
  assert.match(indexHtml, /로또의 허와 실: 우리는 무엇을 사고 있는가/);
  assert.match(indexHtml, /한 주를 망치지 않는 로또 루틴/);

  const articleResponse = await render("/stories/lotto-myths-and-reality");
  assert.equal(articleResponse.status, 200);
  const articleHtml = await articleResponse.text();
  assert.match(articleHtml, /<title>로또의 허와 실: 우리는 무엇을 사고 있는가 \| Wondly<\/title>/);
  assert.match(articleHtml, /<h1[^>]*>로또의 허와 실: 우리는 무엇을 사고 있는가<\/h1>/);
  assert.match(articleHtml, /<h2[^>]*>종이 한 장보다 큰 상상<\/h2>/);
  assert.match(articleHtml, /rel="canonical" href="https:\/\/wondly.net\/stories\/lotto-myths-and-reality"/);
  assert.match(articleHtml, /application\/ld\+json/);
  assert.doesNotMatch(articleHtml, /property="og:image"/);
});

test("publishes the correct AdSense authorized-seller record", async () => {
  const adsTxt = await readFile(new URL("../public/ads.txt", import.meta.url), "utf8");
  assert.equal(adsTxt, "google.com, pub-2586236796433286, DIRECT, f08c47fec0942fa0\n");
});
