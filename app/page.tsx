import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const toolNumbers = [3, 11, 18, 27, 34, 42];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="eyebrow"><span /> SMALL TOOLS, CLEARER DAYS</div>
          <h1 id="hero-title">일상의 궁금함을<br /><em>쓸모 있는 도구</em>로.</h1>
          <p>Wondly는 복잡한 데이터를 누구나 편하게 살펴볼 수 있는 작고 정교한 웹 도구를 만듭니다. 과장된 답 대신, 스스로 판단할 수 있는 맥락을 제공합니다.</p>
          <a className="primary-link" href="#tools">도구 둘러보기 <span aria-hidden="true">↓</span></a>
        </section>

        <section className="tools" id="tools" aria-labelledby="tools-title">
          <div className="section-heading"><p>01 / OUR TOOLS</p><h2 id="tools-title">지금 사용할 수 있는 도구</h2></div>
          <article className="tool-card">
            <div className="tool-copy">
              <div className="tool-status"><span /> AVAILABLE</div>
              <h3>Lotto Analysis</h3>
              <p>대한민국 로또 6/45의 과거 당첨 데이터를 번호별·조합별로 탐색합니다. 번호를 예측하거나 추천하지 않고, 공개된 기록을 이해하기 쉬운 통계로 보여줍니다.</p>
              <a href="https://lotto.wondly.net" rel="noreferrer">Lotto Analysis 열기 <span aria-hidden="true">↗</span></a>
            </div>
            <div className="tool-preview" aria-label="선택 번호 예시">
              <div className="preview-topline"><span>SELECTED NUMBERS</span><span>6 / 6</span></div>
              <div className="number-row">{toolNumbers.map((number) => <span key={number}>{number}</span>)}</div>
              <div className="preview-stats"><div><small>분석 범위</small><strong>전체 회차</strong></div><div><small>데이터 기준</small><strong>과거 기록</strong></div></div>
            </div>
          </article>
          <div className="coming-card">
            <span>COMING NEXT</span>
            <div><h3>다음 도구도 천천히, 제대로.</h3><p>생활 속 데이터를 더 쉽게 이해하는 새로운 도구를 준비하고 있습니다.</p></div>
            <span className="coming-mark" aria-hidden="true">+</span>
          </div>
        </section>

        <section className="principles" aria-labelledby="principles-title">
          <div className="section-heading dark-heading"><p>02 / HOW WE WORK</p><h2 id="principles-title">작지만 믿을 수 있게</h2></div>
          <div className="principle-grid">
            <article><span>01</span><h3>출처를 확인합니다</h3><p>도구가 사용하는 데이터의 출처와 기준을 확인하고, 사용자가 그 범위를 이해할 수 있도록 설명합니다.</p></article>
            <article><span>02</span><h3>한계를 숨기지 않습니다</h3><p>통계는 과거를 정리하는 방법이지 미래를 보장하는 답이 아닙니다. 해석에 필요한 한계를 함께 보여줍니다.</p></article>
            <article><span>03</span><h3>사용에 집중합니다</h3><p>불필요한 가입과 복잡한 설정을 줄이고, 모바일과 데스크톱 어디서든 핵심 기능에 빠르게 닿게 합니다.</p></article>
          </div>
        </section>

        <section className="tool-guide" aria-labelledby="guide-title">
          <div className="guide-intro"><p>LOTTO ANALYSIS GUIDE</p><h2 id="guide-title">이 도구는 무엇을 보여주나요?</h2></div>
          <div className="guide-copy">
            <p>Lotto Analysis는 공개된 로또 6/45 과거 회차를 바탕으로 번호별 출현 기록, 최근 흐름, 함께 나온 번호와 사용자가 고른 여섯 번호의 과거 일치 기록을 정리합니다. 기간과 보너스 번호 포함 여부를 바꾸며 같은 데이터를 여러 관점에서 살펴볼 수 있습니다.</p>
            <p>모든 추첨은 독립적인 무작위 사건입니다. 과거에 자주 또는 드물게 나온 번호가 다음 회차에 더 유리하다는 뜻은 아닙니다. Wondly는 당첨 번호를 추천하거나 당첨 가능성을 예측하지 않으며, 분석 결과는 정보 탐색과 오락 목적으로만 제공됩니다.</p>
            <a href="https://lotto.wondly.net" rel="noreferrer">과거 데이터 탐색하기 <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="faq" aria-labelledby="faq-title">
          <div className="section-heading dark-heading"><p>03 / FAQ</p><h2 id="faq-title">자주 묻는 질문</h2></div>
          <div className="faq-list">
            <details><summary>Wondly는 어떤 서비스인가요?<span>+</span></summary><p>복잡한 정보와 데이터를 일상에서 바로 사용할 수 있는 웹 도구로 만드는 독립 서비스입니다. 각 도구는 명확한 목적과 설명을 갖고 별도 주소에서 제공됩니다.</p></details>
            <details><summary>Lotto Analysis는 번호를 추천하나요?<span>+</span></summary><p>아니요. 과거 데이터를 탐색하고 직접 선택한 번호를 분석하는 기능만 제공합니다. 미래 번호, 당첨 가능성 또는 유리한 조합을 예측하지 않습니다.</p></details>
            <details><summary>회원가입이나 결제가 필요한가요?<span>+</span></summary><p>현재 공개된 도구는 회원가입 없이 사용할 수 있습니다. 향후 유료 기능이 생길 경우 비용과 조건을 사용 전에 명확히 안내합니다.</p></details>
            <details><summary>새로운 도구는 어디에서 확인하나요?<span>+</span></summary><p>새 도구가 준비되면 이 홈페이지의 도구 목록에 설명과 함께 추가합니다. 문의나 제안은 Contact 페이지의 이메일로 보내주세요.</p></details>
          </div>
        </section>

        <section className="closing"><p>ONE USEFUL THING AT A TIME</p><h2>오늘의 궁금함에서<br />다음 도구가 시작됩니다.</h2><Link href="/contact">의견 보내기 <span aria-hidden="true">↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
