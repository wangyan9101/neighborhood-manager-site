import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { devlogs } from "@/content/devlogs";
import { formatChineseDate } from "@/lib/utils";

export const metadata: Metadata = { title: "开发日志", description: "关注《小区经理》的真实开发进度、玩法设计与 Demo 计划。", alternates: { canonical: "/devlog" } };

export default function DevlogPage() { return <><PageHero eyebrow="开发日志" title="一款独立游戏，是怎样慢慢长出来的" description="记录已经完成的工作、仍在验证的方向和下一阶段计划；不虚构完成度，也不承诺未经验证的日期。" aside={<div className="mini-stat-card"><strong>{devlogs.length} 篇开发记录</strong><p>从项目起点，到第一局可运行，再到 Demo 0.2。</p></div>} />
  <section className="section section-tint"><div className="page-shell devlog-card-grid">{devlogs.map(log => <article className={`devlog-card cover-${log.cover}`} key={log.slug}><div className="devlog-cover"><span>DEVLOG</span></div><div className="devlog-card-body"><p className="devlog-meta"><CalendarDays size={15} />{formatChineseDate(log.date)}</p><h2><Link href={`/devlog/${log.slug}`}>{log.title}</Link></h2><p>{log.summary}</p><div className="chip-list">{log.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link className="text-link" href={`/devlog/${log.slug}`}>阅读全文 <ArrowRight size={16} /></Link></div></article>)}</div></section>
</>; }
