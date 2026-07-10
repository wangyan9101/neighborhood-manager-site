import Link from "next/link";
import { navigation, siteContent } from "@/content/site";

const allNavigation = [
  ...navigation,
  { href: "/play", label: "试玩" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <Link className="brand" href="/" aria-label={`${siteContent.name}首页`}>
          <span className="brand-mark" aria-hidden="true">
            区
          </span>
          <span>
            <strong>{siteContent.name}</strong>
            <small>{siteContent.englishName}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="主导航">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-play" href="/play">
            WebGL 试玩
          </Link>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="展开导航菜单">
            <span aria-hidden="true">菜单</span>
            <i aria-hidden="true" />
          </summary>
          <nav aria-label="移动端导航">
            {allNavigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
