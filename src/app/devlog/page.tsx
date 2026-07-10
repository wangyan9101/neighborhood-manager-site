import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { devlogs } from "@/content/devlogs";
import { formatChineseDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "开发日志",
  description: "关注《小区经理》个人开发项目的真实进度、范围选择与阶段记录。",
};

export default function DevlogPage() {
  return (
    <>
      <PageHero
        eyebrow="开发日志"
        title="慢一点，但每次都往前走"
        description="个人项目每周可投入约两天。这里记录已经开始的工作、仍在验证的方向，也坦诚标注尚未完成的部分。"
        aside={
          <div className="mini-stat-card">
            <strong>记录原则</strong>
            <p>不虚构完成度，不承诺未经验证的日期，只分享可确认的进展。</p>
          </div>
        }
      />
      <section className="section section-tint">
        <div className="page-shell devlog-list">
          {devlogs.map((log) => (
            <article className="devlog-entry" key={log.slug}>
              <div>
                <p className="eyebrow">{log.issue}</p>
                <time dateTime={log.date}>{formatChineseDate(log.date)}</time>
                <span className="log-status">{log.status}</span>
              </div>
              <div>
                <h2>{log.title}</h2>
                <p>{log.excerpt}</p>
                <ul>
                  {log.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
