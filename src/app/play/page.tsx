import type { Metadata } from "next";
import { LinkButton } from "@/components/ui/link-button";
import { getExternalLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "WebGL 试玩",
  description: "《小区经理》WebGL 轻量试玩版预留页面与开发状态。",
};

export default function PlayPage() {
  const webglUrl = getExternalLink("webgl");

  return (
    <section className="section">
      <div className="page-shell play-panel">
        <div>
          <span className="play-icon" aria-hidden="true">▶</span>
          <p className="eyebrow">浏览器试玩</p>
          <h1>WebGL 试玩版开发中</h1>
          <p>未来将在这里直接体验轻量版《小区经理》。</p>
          <div className="button-row">
            {webglUrl ? (
              <LinkButton href={webglUrl} external>
                打开已配置试玩
              </LinkButton>
            ) : null}
            <LinkButton href="/game" variant={webglUrl ? "secondary" : "primary"}>
              返回游戏介绍
            </LinkButton>
            <LinkButton href="/devlog" variant="secondary">
              关注开发进度
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
