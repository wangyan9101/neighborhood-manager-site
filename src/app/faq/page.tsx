import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { faqItems } from "@/content/site";

export const metadata: Metadata = {
  title: "常见问题",
  description: "关于《小区经理》的游戏类型、开发状态、平台计划与项目定位。",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="常见问题"
        title="关于这座小区，你可能想先问这些"
        description="内容会随项目真实进展更新。尚未确定的日期、平台与功能，会明确标注为规划而不是承诺。"
      />
      <section className="section section-tint">
        <div className="page-shell faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
