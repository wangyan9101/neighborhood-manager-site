import type { Metadata } from "next";
import { FacilityCard } from "@/components/game/facility-card";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { facilities } from "@/content/facilities";

export const metadata: Metadata = {
  title: "设施系统",
  description: "查看《小区经理》首批关注的电梯、停车场、快递柜、摄像头、儿童活动区和充电桩系统。",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="设施系统"
        title="一座小区，从六类日常设施开始"
        description="设施不是孤立的数值。每一次维护、升级与规则调整，都会同时影响预算、效率、安全与居民感受。"
        aside={
          <div className="mini-stat-card">
            <strong>首批范围：6 类</strong>
            <p>控制个人开发范围，优先把最小玩法闭环做完整。</p>
          </div>
        }
      />
      <section className="section">
        <div className="page-shell">
          <SectionHeading
            eyebrow="运营现场"
            title="每项设施，都可能带来一段故事"
            description="以下事件用于说明玩法方向，不代表这些功能已经完成。"
          />
          <div className="facility-grid facility-detail-grid">
            {facilities.map((facility) => (
              <FacilityCard detailed facility={facility} key={facility.slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="page-shell content-grid-three">
          <article className="content-card">
            <h3>先看状态</h3>
            <p>在线率、健康度与使用压力帮助你找到问题，但不会自动给出答案。</p>
          </article>
          <article className="content-card">
            <h3>再做取舍</h3>
            <p>抢修、保养、扩建或制定新规则，每一种方案都有成本和副作用。</p>
          </article>
          <article className="content-card">
            <h3>最后看影响</h3>
            <p>设施恢复只是开始，居民满意度与社区信任会记录长期运营结果。</p>
          </article>
        </div>
      </section>
    </>
  );
}
