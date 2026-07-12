import type { Metadata } from "next";
import { CommunityScene } from "@/components/home/community-scene";
import { LinkButton } from "@/components/ui/link-button";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { coreLoop, gameMetrics, sellingPoints } from "@/content/site";

export const metadata: Metadata = {
  title: "游戏介绍",
  description: "了解《小区经理》的背景、核心玩法循环、运营指标与多平台探索方向。",
  alternates: { canonical: "/game" },
};

export default function GamePage() {
  return (
    <>
      <PageHero
        eyebrow="游戏介绍"
        title="小区不大，经理的选择很多"
        description="《小区经理》把熟悉的社区日常变成一段轻松但不轻飘的模拟经营体验。你会看见数字，也会看见数字背后的居民。"
        aside={
          <div className="hero-side-note">
            <strong>一句话定位</strong>
            <p>在有限预算和不断到来的投诉中，管理一个真实又有温度的中国小区。</p>
          </div>
        }
      />

      <section className="section">
        <div className="page-shell content-grid-two">
          <div>
            <SectionHeading
              eyebrow="你的身份"
              title="不是上帝视角，是每天都要回应的人"
              description="玩家扮演小区经理：既要安排设施维护和资金，也要面对居民对噪声、停车、快递与安全的真实诉求。"
            />
            <LinkButton href="/facilities" variant="secondary">
              看看要管理的设施
            </LinkButton>
          </div>
          <CommunityScene />
        </div>
      </section>

      <section className="section section-tint">
        <div className="page-shell">
          <SectionHeading
            eyebrow="核心玩法"
            title="发现问题、安排资源、回应事件、复盘成长"
          />
          <ol className="loop-grid">
            {coreLoop.map((item) => (
              <li key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="page-shell">
          <SectionHeading eyebrow="员工与事件" title="把对的人，派到最需要的地方" description="不同员工适合不同事件。匹配员工处理更快，错误派工会浪费宝贵时间。" />
          <div className="content-grid-three">
            <article className="content-card"><p className="eyebrow">维修工</p><h3>设备抢修与预防保养</h3><p>擅长电梯、充电桩和快递柜故障，但同一时间只能处理一处设施。</p></article>
            <article className="content-card"><p className="eyebrow">保安</p><h3>秩序、安全与现场协调</h3><p>适合停车冲突、消防通道和夜间治安事件。</p></article>
            <article className="content-card"><p className="eyebrow">客服</p><h3>投诉沟通与情绪缓冲</h3><p>能更快稳定居民情绪，为后续处理争取时间。</p></article>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="page-shell content-grid-two">
          <article className="content-card"><p className="eyebrow">胜利条件</p><h2>撑过五天经营挑战</h2><p>在预算没有耗尽的前提下，维持基本满意度和设施健康，完成阶段运营目标。</p></article>
          <article className="content-card"><p className="eyebrow">失败条件</p><h2>每一次积压都会留下后果</h2><p>预算归零、关键设施长期瘫痪或满意度持续跌破底线，都可能提前结束本局。</p></article>
        </div>
      </section>

      <section className="section">
        <div className="page-shell">
          <SectionHeading
            eyebrow="经营指标"
            title="每次选择，都在改变四条曲线"
            description="指标帮助玩家理解运营结果，但不会替代居民反馈与长期影响。"
          />
          <div className="content-grid-two">
            {gameMetrics.map((metric) => (
              <article
                className={`content-card metric-card tone-${metric.tone}`}
                key={metric.label}
              >
                <h3>{metric.label}</h3>
                <p>{metric.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="page-shell">
          <SectionHeading
            eyebrow="体验目标"
            title="轻松上手，但让选择留下分量"
          />
          <div className="content-grid-three">
            {sellingPoints.slice(0, 3).map((point) => (
              <article className="content-card" key={point.title}>
                <span className="selling-icon" aria-hidden="true">
                  {point.icon}
                </span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell content-grid-two">
          <div className="content-card">
            <p className="eyebrow">个人作品方向</p>
            <h2>Unity + AI + 数字孪生</h2>
            <p>
              游戏首先追求有趣、清晰的经营闭环，同时也作为个人技术作品，探索社区设施状态、运营事件与智慧助手之间的连接。
            </p>
          </div>
          <div className="content-card">
            <p className="eyebrow">多平台方向</p>
            <h2>一个 Unity + C# 工程</h2>
            <p>
              项目未来计划探索 Windows、Android、iOS 与 WebGL。具体平台仍需根据原型完成度和测试结果决定。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
