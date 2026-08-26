import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const description = "Wondly가 만드는 도구와 운영 원칙을 소개합니다.";
export const metadata: Metadata = { title: "About", description, openGraph: { title: "About | Wondly", description, images: [] }, twitter: { card: "summary", title: "About | Wondly", description, images: [] } };

export default function AboutPage() {
  return <><SiteHeader /><main className="content-page"><header className="content-hero"><p>ABOUT WONDLY</p><h1>이해하기 쉬운 도구는<br />더 나은 판단을 돕습니다.</h1><div className="content-lead">Wondly는 일상에서 마주치는 복잡한 데이터와 정보를 작고 명확한 웹 도구로 바꾸는 독립 서비스입니다.</div></header><article className="prose">
    <h2>왜 Wondly인가요?</h2><p>우리는 숫자와 정보가 많아질수록 답이 선명해지기보다 오히려 판단이 어려워질 수 있다고 생각합니다. Wondly는 사용자가 원본 맥락을 놓치지 않으면서도 필요한 내용을 빠르게 읽고 비교할 수 있도록 정보의 구조를 다듬습니다.</p><p>이름은 wonder와 friendly한 어감을 담고 있습니다. 사소한 궁금함을 그냥 지나치지 않고, 직접 살펴볼 수 있는 도구로 연결한다는 뜻입니다.</p>
    <h2>무엇을 만들고 있나요?</h2><p>첫 번째 도구인 Lotto Analysis는 대한민국 로또 6/45의 공개된 과거 당첨 기록을 탐색하는 서비스입니다. 번호별 출현 기록과 조합의 과거 일치 내역을 보여주지만, 미래 당첨 번호나 확률을 예측하지 않습니다.</p><p>앞으로도 생활 속 공개 데이터, 반복해서 계산하는 정보, 매번 검색하기 번거로운 내용을 더 편하게 이해하고 사용할 수 있는 도구를 하나씩 추가할 예정입니다.</p>
    <h2>운영 원칙</h2><ul><li>사용자가 데이터 출처와 범위를 알 수 있게 설명합니다.</li><li>통계와 도구가 말할 수 없는 한계를 분명히 밝힙니다.</li><li>기능보다 광고가 앞서지 않도록 콘텐츠와 사용성을 우선합니다.</li><li>필요 이상의 개인정보를 요구하지 않습니다.</li><li>오류 제보와 사용자 의견을 반영해 지속적으로 개선합니다.</li></ul>
  </article></main><SiteFooter /></>;
}
