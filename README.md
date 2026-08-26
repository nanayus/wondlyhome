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
