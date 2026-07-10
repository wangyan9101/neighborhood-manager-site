import Link from "next/link";
import { CommunityScene } from "@/components/home/community-scene";
import { ScreenshotPlaceholder } from "@/components/home/screenshot-placeholder";
import { FacilityCard } from "@/components/game/facility-card";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { devlogs } from "@/content/devlogs";
import { facilities } from "@/content/facilities";
import {
  accessCards,
  coreLoop,
  roadmap,
  screenshotSlots,
  sellingPoints,
  siteContent,
} from "@/content/site";
import { getExternalLink } from "@/lib/config";
import { formatChineseDate } from "@/lib/utils";

export default function Home() {
  const latestLog = devlogs[0];

  return (
    <>
      <section className="home-hero">
        <div className="page-shell hero-grid">
          <div className="hero-copy">
            <p className="hero-badge">
              <span />
              {siteContent.stage}
            </p>
            <h1>
              管好一座小区，
              <em>也照顾这里的生活。</em>
            </h1>
            <p className="hero-tagline">{siteContent.tagline}</p>
            <p className="hero-description">{siteContent.description}</p>
            <div className="button-row">
              <LinkButton href="/game">认识这款游戏</LinkButton>
              <LinkButton href="/devlog" variant="secondary">
                查看开发进度
              </LinkButton>
            </div>
            <ul className="hero-facts" aria-label="项目概览">
              <li>
                <strong>6 类</strong>
                首批设施关注
              </li>
              <li>
                <strong>3 项</strong>
                核心运营取舍
              </li>
              <li>
                <strong>多端</strong>
                Unity 探索方向
              </li>
            </ul>
          </div>
          <CommunityScene />
        </div>
      </section>

      <section className="section">
        <div className="page-shell">
          <SectionHeading
            eyebrow="为什么值得管理"
            title="熟悉的社区，处处都是经营选择"
            description="这里没有冷冰冰的数字堆砌。每个设备状态、每次投诉和每笔预算，都会回到居民真实的日常感受。"
          />
          <div className="selling-grid">
            {sellingPoints.map((point) => (
              <article className="selling-card" key={point.title}>
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

      <section className="section section-tint">
        <div className="page-shell">
          <SectionHeading
            eyebrow="核心玩法循环"
            title="一天不长，但要操心的事不少"
            description="从发现问题到复盘结果，构成一段清晰、可重复又不断变化的社区运营节奏。"
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
          <div className="heading-with-action">
            <SectionHeading
              eyebrow="设施系统"
              title="六类设施，六种社区难题"
              description="先从居民每天都会接触的设施开始，把范围控制在小而完整的可玩闭环。"
            />
            <LinkButton href="/facilities" variant="ghost">
              查看设施详情
            </LinkButton>
          </div>
          <div className="facility-grid">
            {facilities.map((facility) => (
              <FacilityCard facility={facility} key={facility.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="page-shell">
          <SectionHeading
            eyebrow="游戏画面"
            title="让每个界面都像小区里的一扇窗"
            description="以下区域为真实的截图占位，不代表游戏已经完成。后续会逐步替换为 Unity 实机画面。"
          />
          <div className="screenshot-grid">
            {screenshotSlots.map((slot, index) => (
              <ScreenshotPlaceholder key={slot.label} {...slot} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section progress-section">
        <div className="page-shell progress-grid">
          <SectionHeading
            eyebrow="开发进度"
            title="两天一周，也要把每一步走完整"
            description="这是个人开发项目。当前优先完成可以被理解、被体验、也能继续扩展的小型原型，不承诺未经验证的上线日期。"
          />
          <ol className="roadmap-list">
            {roadmap.map((item, index) => (
              <li key={item.title} className={index === 0 ? "is-current" : ""}>
                <span className="roadmap-dot" />
                <div>
                  <p>{item.state}</p>
                  <h3>{item.title}</h3>
                  <span>{item.description}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tint">
        <div className="page-shell devlog-feature">
          <div>
            <p className="eyebrow">最新开发日志</p>
            <p className="devlog-meta">
              {latestLog.issue} · {formatChineseDate(latestLog.date)}
            </p>
            <h2>{latestLog.title}</h2>
            <p>{latestLog.excerpt}</p>
            <LinkButton href="/devlog" variant="secondary">
              阅读开发记录
            </LinkButton>
          </div>
          <div className="devlog-note" aria-label="本期开发重点">
            <span>本期重点</span>
            <ul>
              {latestLog.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section access-section">
        <div className="page-shell">
          <SectionHeading
            eyebrow="从这里继续"
            title="游戏、试玩与智慧运营实验"
            description="入口只在真实地址配置后开放；未开放的服务不会跳转到虚假页面。"
            align="center"
          />
          <div className="access-grid">
            {accessCards.map((card) => {
              const url = getExternalLink(card.key);
              const localPlay = card.key === "webgl" && !url ? "/play" : undefined;
              return (
                <article key={card.key}>
                  <p className="card-kicker">{card.eyebrow}</p>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  {url ? (
                    <LinkButton href={url} external variant="secondary">
                      立即前往
                    </LinkButton>
                  ) : localPlay ? (
                    <LinkButton href={localPlay} variant="secondary">
                      查看试玩计划
                    </LinkButton>
                  ) : (
                    <LinkButton variant="secondary">敬请期待</LinkButton>
                  )}
                </article>
              );
            })}
          </div>
          <p className="access-note">
            想先了解范围？<Link href="/faq">查看常见问题</Link>
          </p>
        </div>
      </section>
    </>
  );
}
