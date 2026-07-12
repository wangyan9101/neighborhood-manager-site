import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { ScreenshotPlaceholder } from "@/components/home/screenshot-placeholder";
import { FacilityCard } from "@/components/game/facility-card";
import { LinkButton } from "@/components/ui/link-button";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SteamWishlistButton } from "@/components/ui/steam-wishlist-button";
import { devlogs } from "@/content/devlogs";
import { facilities } from "@/content/facilities";
import { coreLoop, screenshotSlots, sellingPoints, siteContent } from "@/content/site";
import { formatChineseDate } from "@/lib/utils";

const CommunityScene = dynamic(() => import("@/components/home/community-scene").then(m => m.CommunityScene), { loading: () => <div className="community-scene scene-fallback"><span>正在搭建社区沙盘…</span></div> });

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <p className="hero-badge"><span />{siteContent.stage}</p>
          <h1>当一天小区经理，<em>才知道物业有多难。</em></h1>
          <p className="hero-tagline">{siteContent.tagline}</p><p className="hero-description">{siteContent.description}</p>
          <div className="tag-row" aria-label="游戏标签">{["轻量模拟经营","社区运营","单机游戏","独立开发"].map(tag => <span key={tag}>{tag}</span>)}</div>
          <div className="button-row"><SteamWishlistButton /><LinkButton href="/game" variant="secondary">查看游戏玩法 <ArrowRight size={17} /></LinkButton><LinkButton href="/devlog" variant="ghost">查看开发日志</LinkButton></div>
          <ul className="hero-facts" aria-label="游戏概览">{[["6 类","社区设施"],["8+","随机事件"],["5 天","经营挑战"],["多种","运营结局"]].map(([v,l]) => <li key={l}><strong>{v}</strong>{l}</li>)}</ul>
        </div>
        <CommunityScene />
      </div>
    </section>

    <section className="section"><div className="page-shell"><SectionHeading eyebrow="核心卖点" title="这不是简单收物业费的游戏" description="每一次投诉、派工和维修都会改变社区状态，也会挤占下一次选择的空间。" />
      <div className="selling-grid">{sellingPoints.map((point,i) => <MotionReveal key={point.title}><article className="selling-card"><span className="selling-number">0{i+1}</span><span className="selling-icon">{point.icon}</span><h3>{point.title}</h3><p>{point.description}</p></article></MotionReveal>)}</div>
    </div></section>

    <section className="section section-tint"><div className="page-shell"><SectionHeading eyebrow="核心玩法循环" title="每天五步，问题从不重复" description="从巡检到结算，清楚的节奏里藏着不断变化的资源取舍。" />
      <ol className="loop-grid">{coreLoop.map(item => <li key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.description}</p></li>)}</ol>
    </div></section>

    <section className="section"><div className="page-shell"><div className="heading-with-action"><SectionHeading eyebrow="设施系统" title="六类设施，六种社区难题" description="设施不是被动数字，它们会制造事件、消耗预算，也影响居民对你的信任。" /><LinkButton href="/facilities" variant="ghost">探索全部设施 <ArrowRight size={17} /></LinkButton></div>
      <div className="facility-grid">{facilities.map(f => <FacilityCard facility={f} key={f.id} />)}</div>
    </div></section>

    <section className="section section-dark"><div className="page-shell"><SectionHeading eyebrow="游戏画面" title="把复杂运营，装进清楚好读的界面" description="以下为统一风格的布局占位，不代表最终美术质量；真实 Unity 画面将在完成后替换。" />
      <div className="screenshot-grid">{screenshotSlots.map((slot,i) => <ScreenshotPlaceholder key={slot.label} {...slot} index={i} />)}</div>
    </div></section>

    <section className="section"><div className="page-shell"><SectionHeading eyebrow="开发日志" title="一款独立游戏，是怎样慢慢长出来的" description="记录真实进度、设计判断和下一步计划，不承诺未经验证的日期。" />
      <div className="devlog-card-grid">{devlogs.map(log => <article className={`devlog-card cover-${log.cover}`} key={log.slug}><div className="devlog-cover"><span>DEVLOG</span></div><div className="devlog-card-body"><p className="devlog-meta"><CalendarDays size={15} />{formatChineseDate(log.date)}</p><h3><Link href={`/devlog/${log.slug}`}>{log.title}</Link></h3><p>{log.summary}</p><div className="chip-list">{log.tags.map(t => <span key={t}>{t}</span>)}</div><Link className="text-link" href={`/devlog/${log.slug}`}>阅读日志 <ArrowRight size={16} /></Link></div></article>)}</div>
    </div></section>

    <section className="final-cta"><div className="building-silhouette" /><div className="page-shell final-cta-inner"><div><p className="eyebrow">Steam 愿望单</p><h2>准备好接管这个小区了吗？</h2><p>商店页面正在准备中。先把这里收藏起来，或者从开发日志了解最新进度。</p></div><div className="button-row"><SteamWishlistButton /><LinkButton href="/devlog" variant="secondary"><CheckCircle2 size={17} />关注开发进度</LinkButton></div></div></section>
  </>;
}
