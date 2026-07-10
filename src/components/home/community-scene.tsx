export function CommunityScene() {
  return (
    <div
      className="community-scene"
      role="img"
      aria-label="明亮的小区场景插画：住宅楼、树木、步道和社区服务站"
    >
      <div className="scene-sun" />
      <div className="scene-cloud scene-cloud-one" />
      <div className="scene-cloud scene-cloud-two" />
      <div className="scene-building building-back">
        <span className="scene-roof" />
        <span className="scene-windows" />
      </div>
      <div className="scene-building building-front">
        <span className="scene-roof" />
        <span className="scene-windows" />
        <span className="scene-door" />
      </div>
      <div className="scene-service">
        <span>社区服务站</span>
      </div>
      <div className="scene-tree tree-one" />
      <div className="scene-tree tree-two" />
      <div className="scene-path" />
      <div className="scene-person person-one" />
      <div className="scene-person person-two" />
      <div className="scene-status-card">
        <span className="status-dot" />
        今日社区运行平稳
      </div>
    </div>
  );
}
