import type { CSSProperties, UIEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { mockRoutines, RoutineCard } from "../../../entities/routine";
import { DestinationPromptCard } from "../../../features/set-destination";
import { CurrentOriginPanel } from "../../../features/set-origin";
import { BottomTabBar, IconBadge } from "../../../shared/ui";

export function HomeDashboardWidget() {
  const phoneRef = useRef<HTMLElement | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const [routines, setRoutines] = useState(mockRoutines);

  const handleScroll = (event: UIEvent<HTMLElement>) => {
    setIsCollapsed(event.currentTarget.scrollTop > 0);
  };

  const handleRoutineToggle = (routineId: string) => {
    setRoutines((prev) =>
      prev.map((routine) =>
        routine.id === routineId
          ? { ...routine, enabled: !routine.enabled }
          : routine,
      ),
    );
  };

  useEffect(() => {
    const element = phoneRef.current;

    if (!element) {
      return;
    }

    const updateScrollableState = () => {
      const canScroll = element.scrollHeight > element.clientHeight + 1;

      setIsScrollable(canScroll);

      if (!canScroll) {
        element.scrollTop = 0;
        setIsCollapsed(false);
      }
    };

    updateScrollableState();

    window.addEventListener("resize", updateScrollableState);

    return () => {
      window.removeEventListener("resize", updateScrollableState);
    };
  }, [routines, isCollapsed]);

  const headerStyle = {
    "--collapse-progress": isCollapsed ? "1" : "0",
  } as CSSProperties;

  return (
    <main className="home-page">
      <section
        ref={phoneRef}
        className={`home-phone ${isScrollable ? "is-scrollable" : ""}`}
        onScroll={handleScroll}
      >
        <header className="home-sticky-header" style={headerStyle}>
          <div className="home-brand-row">
            <div className="home-brand">
              <IconBadge tone="brand" size="sm" />
              <strong>NaviBell</strong>
            </div>
            <div className="home-header-actions" aria-hidden="true">
              <span />
              <span />
            </div>
          </div>

          <div className="home-origin-wrapper">
            <CurrentOriginPanel />
          </div>

          <div className="home-inline-search">
            <DestinationPromptCard />
          </div>
        </header>

        <section className="home-routines">
          <div className="home-routines__label">내 루틴</div>
          <div className="home-routines__list">
            {routines.map((routine) => (
              <RoutineCard
                key={routine.id}
                routine={routine}
                onToggle={handleRoutineToggle}
              />
            ))}
          </div>
        </section>

        <button type="button" className="home-fab" aria-label="새 루틴 추가">
          <IconBadge tone="brand" size="lg" rounded="pill" />
        </button>

        <BottomTabBar />
      </section>
    </main>
  );
}
