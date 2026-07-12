import type { Metadata } from "next";
import { Download, Gamepad2, ImageIcon, Mail, Monitor, PackageOpen } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "媒体资料与 Press Kit", description: "《小区经理》游戏事实表、官方介绍与正在准备中的媒体素材。", alternates: { canonical: "/press" } };
const facts = [["游戏名称","《小区经理》"],["英文名","Neighborhood Manager"],["类型","轻量模拟经营"],["平台","Windows / Steam"],["引擎","Unity"],["开发状态","开发中"],["开发者","独立开发者"],["语言","简体中文"]];
export default function PressPage() { return <><PageHero eyebrow="MEDIA & PRESS" title="媒体资料与 Press Kit" description="这里汇总可确认的项目信息。Logo、截图和宣传图尚未完成时，会明确标注而不会提供虚假下载。" aside={<div className="mini-stat-card"><strong>素材准备中</strong><p>Press Kit 将在真实游戏画面和品牌资源完成后开放。</p></div>} />
  <section className="section"><div className="page-shell press-grid"><div><SectionHeading eyebrow="游戏简介" title="在有限预算里，照顾一座小区的日常" /><p className="lead-copy">《小区经理》是一款社区运营题材的轻量模拟经营游戏。玩家需要管理设施、响应投诉、安排员工，并在每日结算中观察每个决定造成的变化。</p><h3>长介绍</h3><p>电梯突然停运、快递柜持续爆满、充电桩前排起长队——这些熟悉的小事会不断进入你的工作台。有限预算和有限人手意味着你无法同时解决所有问题，真正的挑战是判断什么应该先做，以及愿意承担怎样的后果。</p></div><div className="fact-card"><h2>游戏事实表</h2><dl>{facts.map(([k,v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></div></div></section>
  <section className="section section-tint"><div className="page-shell"><SectionHeading eyebrow="媒体素材" title="统一素材正在准备中" description="以下卡片仅用于预留下载位置，不会创建空文件或虚假资源。" /><div className="content-grid-three">{[[Gamepad2,"Logo 包","SVG / PNG"],[ImageIcon,"游戏截图","真实 Unity 画面"],[Monitor,"宣传图","横版 / 竖版"]].map(([Icon,title,detail]) => { const C = Icon as typeof Gamepad2; return <article className="asset-card" key={String(title)}><C /><span className="placeholder-label">素材准备中</span><h3>{String(title)}</h3><p>{String(detail)}</p><button disabled className="button button-disabled"><Download size={17} />暂不可下载</button></article>; })}</div></div></section>
  <section className="section"><div className="page-shell content-grid-two"><article className="content-card"><PackageOpen /><h2>开发者介绍</h2><p>独立开发者，从事 Unity、3D 和数字孪生方向开发，希望把熟悉的社区管理题材转化为轻松、有选择、有反馈的经营体验。</p></article><article className="content-card"><Mail /><h2>媒体联系</h2><p>正式合作邮箱正在准备中。当前请关注开发日志，联系方式确认后会在此更新。</p><button disabled className="button button-disabled">联系渠道准备中</button></article></div></section>
  </>; }
