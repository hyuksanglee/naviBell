export function DeparturePlannerWidget() {
  return (
    <main className="page-shell">
      <section className="planner">
        <p className="eyebrow">Just-In-Time Departure</p>
        <h1>제때 출발</h1>
        <p className="lead">
          도착 시간을 입력하면, 언제 출발해야 하는지 알려주는 대중교통
          출발 알림 서비스입니다.
        </p>

        <div className="quick-form" aria-label="출발 시간 계산 미리보기">
          <label>
            출발지
            <input value="현재 위치" readOnly />
          </label>
          <label>
            목적지
            <input value="강남역" readOnly />
          </label>
          <label>
            도착 희망 시간
            <input value="오전 9:00" readOnly />
          </label>
          <button type="button">출발 시간 계산</button>
        </div>

        <aside className="result-preview" aria-label="계산 결과 예시">
          <span>추천 출발 시각</span>
          <strong>오전 8:17</strong>
          <p>도보, 대중교통, 신호 대기 시간을 반영해 계산합니다.</p>
        </aside>
      </section>
    </main>
  );
}
