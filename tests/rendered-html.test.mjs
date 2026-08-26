import assert from "node:assert/strict";
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
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Starter Project/);
});

test("renders policy pages with route-specific metadata", async () => {
  const response = await render("/privacy");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Privacy Policy \| Wondly<\/title>/);
  assert.match(html, /Google 광고 설정/);
  assert.match(html, /개인정보처리방침/);
  assert.doesNotMatch(html, /property="og:image"/);
});
