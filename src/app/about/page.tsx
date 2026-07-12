import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "关于作者",
  description: "了解《小区经理》个人开发项目的创作目标、技术方向与范围原则。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="关于作者"
        title="一个人，慢慢把一座小区做出来"
        description="我是一个从事 Unity、3D 和数字孪生方向开发的程序员。《小区经理》是我独立制作的一款社区运营模拟经营游戏。"
        aside={
          <div className="mini-stat-card">
            <strong>每周约两天</strong>
            <p>范围优先于堆叠功能，小而完整优先于大而空。</p>
          </div>
        }
      />
      <section className="section">
        <div className="page-shell content-grid-two">
          <div>
            <SectionHeading
              eyebrow="为什么做它"
              title="因为社区运营既有系统，也有人情"
              description="我希望把熟悉的运维、设施和社区管理题材，转化为一个轻松、有选择、有反馈的模拟经营体验。目标不是一开始就做成庞大的城市模拟系统，而是先完成一款玩法清晰、可以持续迭代并最终上线 Steam 的独立游戏。"
            />
          </div>
          <blockquote className="about-quote">
            “先做一款愿意玩的游戏，再让技术自然地长在真实问题里。”
            <footer>《小区经理》的创作原则</footer>
          </blockquote>
        </div>
      </section>
      <section className="section section-tint">
        <div className="page-shell">
          <SectionHeading eyebrow="三个目标" title="同一个项目，三条相互支持的路径" />
          <div className="content-grid-three">
            <article className="content-card">
              <p className="eyebrow">01 · 独立游戏</p>
              <h3>做出清晰好玩的经营体验</h3>
              <p>围绕设施、事件与运营指标，先完成一段小而完整的核心循环。</p>
            </article>
            <article className="content-card">
              <p className="eyebrow">02 · 个人作品</p>
              <h3>连接 Unity、AI 与数字孪生</h3>
              <p>用可运行的产品表达跨端开发、数据建模和智慧运营思考。</p>
            </article>
            <article className="content-card">
              <p className="eyebrow">03 · 未来 Demo</p>
              <h3>探索真实社区运维仿真</h3>
              <p>在游戏基础上，为物业和园区场景保留可验证、可演示的扩展方向。</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="page-shell content-grid-two">
          <article className="content-card">
            <h2>技术边界</h2>
            <ul className="check-list">
              <li>官网使用 Next.js，优先静态内容与服务端组件</li>
              <li>游戏使用统一 Unity + C# 工程探索多端</li>
              <li>后续服务计划以 FastAPI 和简单数据存储起步</li>
            </ul>
          </article>
          <article className="content-card">
            <h2>开发边界</h2>
            <ul className="check-list">
              <li>不提前承诺上线日期与未完成平台</li>
              <li>不为了技术展示牺牲玩家可理解的体验</li>
              <li>每个阶段都追求可讲清、可运行、可继续</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
