import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "媒体资料",
  description: "《小区经理》项目简介、内容使用说明与媒体素材准备状态。",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="媒体资料"
        title="把项目讲清楚，也把未完成说清楚"
        description="这里将集中提供项目简介、标识、截图与联系信息。目前首批正式媒体素材仍在整理中。"
      />
      <section className="section">
        <div className="page-shell media-placeholder">
          <div>
            <span aria-hidden="true">媒</span>
            <h2>媒体素材整理中</h2>
            <p>
              待游戏实机画面和正式标识准备好后，这里会提供可下载文件。当前没有虚构的截图包或媒体评价。
            </p>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="page-shell">
          <SectionHeading eyebrow="基础信息" title="可确认的项目事实" />
          <div className="content-grid-three">
            <article className="content-card">
              <h3>项目名称</h3>
              <p>{siteContent.name} / {siteContent.englishName}</p>
            </article>
            <article className="content-card">
              <h3>项目类型</h3>
              <p>中国现代住宅社区题材的运维模拟经营游戏，个人开发。</p>
            </article>
            <article className="content-card">
              <h3>当前状态</h3>
              <p>原型阶段，未公布上线日期、商店地址或正式下载渠道。</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="page-shell content-grid-two">
          <article className="content-card">
            <h2>内容使用说明</h2>
            <p>
              官网文字可用于准确介绍项目，但请保留“个人开发、原型阶段”的上下文，不要将规划中的平台或功能描述为已经发布。
            </p>
          </article>
          <article className="content-card">
            <h2>联系渠道</h2>
            <p>
              正式联系邮箱尚未配置。准备完成后会在此处更新，当前不会展示不可用或虚假的联系方式。
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
