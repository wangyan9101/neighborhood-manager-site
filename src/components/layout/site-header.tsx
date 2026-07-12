"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Building2, Menu, X } from "lucide-react";
import { navigation, siteContent } from "@/content/site";
import { SteamWishlistButton } from "@/components/ui/steam-wishlist-button";

export function SiteHeader() {
  const [pathname, setPathname] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 12); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { const syncPath = () => setPathname(window.location.pathname); const timer = window.setTimeout(syncPath, 0); window.addEventListener("popstate", syncPath); return () => { window.clearTimeout(timer); window.removeEventListener("popstate", syncPath); }; }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="page-shell header-inner">
      <Link className="brand" href="/" aria-label={`${siteContent.name}首页`}><span className="brand-mark"><Building2 size={22} /></span><span><strong>{siteContent.name}</strong><small>NEIGHBORHOOD MANAGER</small></span></Link>
      <nav className="desktop-nav" aria-label="主导航">{navigation.map(item => <Link onClick={() => setPathname(item.href)} className={active(item.href) ? "is-active" : ""} key={item.href} href={item.href}>{item.label}</Link>)}<SteamWishlistButton compact /></nav>
      <button className="menu-trigger" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}<span className="sr-only">{open ? "关闭菜单" : "打开菜单"}</span></button>
    </div>
    {open && <div className="mobile-menu-panel" id="mobile-navigation"><nav aria-label="移动端导航">{navigation.map(item => <Link onClick={() => { setOpen(false); setPathname(item.href); }} className={active(item.href) ? "is-active" : ""} key={item.href} href={item.href}>{item.label}</Link>)}<SteamWishlistButton /></nav></div>}
  </header>;
}
