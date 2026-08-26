import Link from "next/link";

export function SiteHeader() {
  return <header className="site-header"><Link className="wordmark" href="/" aria-label="Wondly 홈">wondly<span aria-hidden="true">.</span></Link><nav aria-label="주요 메뉴"><Link href="/#tools">Tools</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-brand"><Link className="wordmark footer-wordmark" href="/">wondly<span>.</span></Link><p>Small tools for clearer days.</p></div><nav aria-label="푸터 메뉴"><Link href="/about">About</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link></nav><p className="copyright">© {new Date().getFullYear()} Wondly. All rights reserved.</p></footer>;
}
