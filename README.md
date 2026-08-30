# Wondly website

`wondly.net`의 브랜드 홈페이지입니다. 현재 제공 중인 도구를 소개하고 About,
Privacy Policy, Terms, Contact 페이지를 제공합니다.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run build
npm run lint
```

`npm run build`는 Vercel용 Next.js 빌드를 생성합니다. 기존 OpenAI Sites용
Cloudflare Worker 빌드는 `npm run build:sites`로 분리되어 있습니다.

홈페이지의 Lotto Analysis 링크는 `https://lotto.wondly.net`을 기준으로 합니다.
실제 도메인이 다르면 `app/page.tsx`에서 링크를 변경하세요.

## Lotto Stories 동기화

Lotto Analysis의 게시글 원본은 상위 프로젝트의
`src/features/content/articles.ts`에서 관리합니다. Wondly 홈페이지를 개발하거나
빌드하면 원고가 자동으로 `content/lotto-articles.json`에 동기화되어 `/stories`와
각 상세 페이지에 함께 발행됩니다.

동기화만 따로 실행하려면 `npm run sync:lotto-content`를 사용하세요. 배포 환경에
상위 프로젝트가 없는 경우에는 저장소에 포함된 최신 스냅샷을 사용합니다.
