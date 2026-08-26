import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const description = "Wondly에 문의하거나 도구에 대한 의견을 보내세요.";
export const metadata: Metadata = { title: "Contact", description, openGraph: { title: "Contact | Wondly", description, images: [] }, twitter: { card: "summary", title: "Contact | Wondly", description, images: [] } };

export default function ContactPage() {
  return <><SiteHeader /><main className="content-page contact-page"><header className="content-hero"><p>CONTACT</p><h1>궁금한 점이나<br />좋은 생각이 있나요?</h1><div className="content-lead">도구 사용 중 발견한 오류, 데이터 관련 문의, 개선 아이디어를 이메일로 보내주세요.</div></header><section className="contact-card"><div><span>EMAIL</span><a href="mailto:hello@wondly.net">hello@wondly.net <b aria-hidden="true">↗</b></a></div><p>보내주신 내용은 문의 확인과 답변을 위해서만 사용합니다. 일반적으로 영업일 기준 3~5일 안에 확인하며, 모든 제안을 개별적으로 구현하거나 답변한다고 보장할 수는 없습니다.</p></section><section className="contact-notes"><article><h2>오류를 발견했다면</h2><p>사용한 도구, 화면 주소, 문제가 발생한 상황과 기대한 결과를 함께 알려주시면 확인에 도움이 됩니다.</p></article><article><h2>데이터 문의라면</h2><p>확인이 필요한 번호·회차·분석 항목을 적어주세요. 개인정보나 민감한 정보는 이메일에 포함하지 마세요.</p></article></section></main><SiteFooter /></>;
}
