type ScreenshotPlaceholderProps = {
  label: string;
  caption: string;
  index?: number;
};

export function ScreenshotPlaceholder({
  label,
  caption,
  index = 0,
}: ScreenshotPlaceholderProps) {
  return (
    <article className="screenshot-card">
      <div
        className={`screenshot-placeholder screenshot-variant-${(index % 3) + 1}`}
        role="img"
        aria-label={`${label}游戏截图占位图`}
      >
        <div className="mock-topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="mock-map">
          <i />
          <i />
          <i />
        </div>
        <div className="mock-panel">
          <b />
          <span />
          <span />
        </div>
        <span className="placeholder-label">画面开发中</span>
      </div>
      <div className="screenshot-copy">
        <h3>{label}</h3>
        <p>{caption}</p>
      </div>
    </article>
  );
}
