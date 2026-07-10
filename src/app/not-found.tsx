import { LinkButton } from "@/components/ui/link-button";

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <p className="not-found-code">404</p>
        <h1>走错楼栋了</h1>
        <p>这个页面暂时不在小区地图里。回到首页，继续看看今天的社区情况吧。</p>
        <LinkButton href="/">返回官网首页</LinkButton>
      </div>
    </section>
  );
}
