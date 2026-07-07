export function CurrentOriginPanel() {
  return (
    <div className="origin-panel" aria-label="현재 출발지">
      <span className="origin-panel__dot" />
      <div className="origin-panel__content">
        <span className="origin-panel__label">출발지</span>
        <strong className="origin-panel__value">현재 위치 (자동)</strong>
      </div>
    </div>
  );
}
