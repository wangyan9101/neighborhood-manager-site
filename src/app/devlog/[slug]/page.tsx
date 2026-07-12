import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Share2 } from "lucide-react";
import { devlogs } from "@/content/devlogs";
import { formatChineseDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return devlogs.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const post = devlogs.find(p => p.slug === slug); return post ? { title: post.title, description: post.summary, alternates: { canonical: `/devlog/${slug}` } } : {}; }

export default async function DevlogDetail({ params }: Props) {
  const { slug } = await params; const index = devlogs.findIndex(p => p.slug === slug); const post = devlogs[index] ?? devlogs[0];
  const previous = devlogs[index - 1]; const next = devlogs[index + 1];
  return <article className="article-page"><header className={`article-hero cover-${post.cover}`}><div className="page-shell article-hero-inner"><Link className="back-link" href="/devlog"><ArrowLeft size={17} />返回开发日志</Link><div className="chip-list">{post.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h1>{post.title}</h1><p>{post.summary}</p><time dateTime={post.date}><CalendarDays size={16} />{formatChineseDate(post.date)}</time></div></header>
  <div className="page-shell article-layout"><div className="article-content">{post.content.map((paragraph,i) => <p key={i}>{paragraph}</p>)}<button className="button button-ghost" disabled title="分享功能准备中"><Share2 size={17} />分享功能准备中</button></div>
  <nav className="article-nav" aria-label="开发日志翻页">{previous ? <Link href={`/devlog/${previous.slug}`}><small>上一篇</small><span><ArrowLeft size={16} />{previous.title}</span></Link> : <span />}{next ? <Link href={`/devlog/${next.slug}`}><small>下一篇</small><span>{next.title}<ArrowRight size={16} /></span></Link> : <span />}</nav></div></article>;
}
