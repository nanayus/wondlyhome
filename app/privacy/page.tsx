import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const description = "Wondly 웹사이트와 도구의 개인정보 처리, 쿠키, 광고 및 이용자 권리를 안내합니다.";
export const metadata: Metadata = {
  title: "개인정보처리방침",
  description,
  alternates: { canonical: "https://wondly.net/privacy" },
  openGraph: { title: "개인정보처리방침 | Wondly", description, url: "https://wondly.net/privacy", images: [] },
  twitter: { card: "summary", title: "개인정보처리방침 | Wondly", description, images: [] },
};

export default function PrivacyPage() {
  return <><SiteHeader /><main className="content-page policy-page"><header className="content-hero"><p>PRIVACY POLICY</p><h1>개인정보처리방침</h1><div className="content-lead">Wondly는 서비스 제공에 필요한 범위에서만 정보를 처리하고, 처리 목적과 방법을 투명하게 안내합니다.</div><time dateTime="2026-08-27">시행일: 2026년 8월 27일</time></header><article className="prose policy-prose">
    <h2>1. 적용 범위</h2><p>이 개인정보처리방침은 wondly.net과 Wondly가 운영하는 웹 도구에 적용됩니다. 외부 사이트로 이동한 뒤의 정보 처리는 해당 사이트의 정책을 따릅니다.</p>
    <h2>2. 처리하는 정보</h2><p>현재 Wondly는 회원가입 기능을 제공하지 않으며 이름, 전화번호, 주소와 같은 개인정보를 직접 요구하지 않습니다. 다만 서비스 운영 과정에서 접속 IP 주소, 브라우저와 기기 정보, 접속 일시, 방문 페이지, 오류 기록 등이 호스팅 사업자의 서버 로그에 자동으로 기록될 수 있습니다.</p><p>이메일로 문의하면 이메일 주소와 문의 내용, 첨부한 정보가 답변과 문제 해결을 위해 처리됩니다. 주민등록번호, 금융정보 또는 그 밖의 민감한 정보는 보내지 마세요.</p>
    <h2>3. 이용 목적</h2><ul><li>웹사이트와 도구의 안정적인 제공 및 보안 유지</li><li>오류 진단, 성능 개선과 이용 현황 파악</li><li>문의 확인, 답변과 분쟁 대응</li><li>법령상 의무 이행과 부정 이용 방지</li></ul>
    <h2>4. 쿠키와 광고</h2><p>Wondly는 서비스 설정 유지, 이용 분석 또는 광고 제공을 위해 쿠키와 유사 기술을 사용할 수 있습니다. 쿠키는 브라우저에 저장되는 작은 정보 파일이며 브라우저 설정에서 삭제하거나 저장을 거부할 수 있습니다. 일부 쿠키를 차단하면 서비스의 일부 기능이 정상적으로 작동하지 않을 수 있습니다.</p><p>향후 Google AdSense 광고가 게재되는 경우 Google을 포함한 제3자 사업자는 사용자의 이전 웹사이트 방문 기록을 기반으로 광고를 제공하기 위해 쿠키를 사용할 수 있습니다. Google의 광고 쿠키를 통해 Google과 파트너는 Wondly 또는 다른 웹사이트 방문 정보를 바탕으로 광고를 제공할 수 있습니다.</p><p>사용자는 <a href="https://adssettings.google.com/" rel="noreferrer">Google 광고 설정</a>에서 맞춤형 광고를 관리하거나 해제할 수 있습니다. Google이 파트너 사이트의 정보를 사용하는 방식은 <a href="https://policies.google.com/technologies/partner-sites?hl=ko" rel="noreferrer">Google의 파트너 사이트 관련 안내</a>에서 확인할 수 있습니다.</p>
    <h2>5. 보관 기간</h2><p>문의 이메일은 답변과 후속 확인이 필요한 기간 동안 보관한 뒤 삭제합니다. 법령에 따라 보관할 의무가 있거나 분쟁 대응에 필요한 경우에는 해당 기간 동안 보관할 수 있습니다. 서버 로그의 보관 기간은 사용하는 호스팅·보안 사업자의 설정과 정책에 따르며, 목적 달성에 필요한 범위를 넘지 않도록 관리합니다.</p>
    <h2>6. 제3자 서비스</h2><p>서비스 운영을 위해 호스팅, 보안, 트래픽 분석 및 광고 서비스를 이용할 수 있습니다. 이 과정에서 해당 사업자가 쿠키, 웹 비콘, IP 주소 또는 기타 식별자를 수집하거나 읽을 수 있습니다. 새로운 서비스 도입으로 처리 내용이 실질적으로 바뀌면 이 방침을 업데이트합니다.</p>
    <h2>7. 이용자의 선택과 권리</h2><p>이용자는 본인에 관한 개인정보의 열람, 정정 또는 삭제를 요청할 수 있습니다. 쿠키는 브라우저의 개인정보 보호 설정에서 관리할 수 있습니다. 요청은 아래 이메일로 보내주시면 관련 법령이 정한 범위에서 확인하고 처리합니다.</p>
    <h2>8. 아동의 개인정보</h2><p>Wondly는 만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다. 아동의 정보가 동의 없이 전달된 사실을 알게 되면 확인 후 삭제를 위해 노력합니다.</p>
    <h2>9. 방침의 변경</h2><p>법령, 서비스 또는 사용 중인 외부 사업자의 변경에 따라 이 방침을 수정할 수 있습니다. 중요한 변경이 있을 때에는 시행 전에 홈페이지에서 알리고, 상단의 시행일을 갱신합니다.</p>
    <h2>10. 문의</h2><p>개인정보와 관련한 문의는 <a href="mailto:hello@wondly.net">hello@wondly.net</a>으로 보내주세요.</p>
  </article></main><SiteFooter /></>;
}
