import Link from "next/link";
import { navigation, siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark" aria-hidden="true">
              区
            </span>
            <span>
              <strong>{siteContent.name}</strong>
              <small>{siteContent.englishName}</small>
            </span>
          </Link>
          <p className="footer-note">
            一个关于设施、居民与社区温度的个人模拟经营游戏项目。
          </p>
        </div>
        <div>
          <p className="footer-title">浏览</p>
          <nav className="footer-links" aria-label="页脚导航">
            {navigation.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="footer-title">项目</p>
          <nav className="footer-links" aria-label="项目导航">
            <Link href="/play">WebGL 试玩</Link>
            <Link href="/about">关于作者</Link>
            <Link href="/faq">常见问题</Link>
          </nav>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <p>© {new Date().getFullYear()} 小区经理 · 个人开发项目</p>
        <p>当前处于原型阶段，页面内容不代表最终游戏品质。</p>
      </div>
    </footer>
  );
}
