import { IconBadge } from "./IconBadge";

const tabs = [
  { label: "홈", active: true },
  { label: "경로", active: false },
  { label: "알람", active: false },
  { label: "루틴", active: false },
];

export function BottomTabBar() {
  return (
    <nav className="bottom-tab-bar" aria-label="하단 탭">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          type="button"
          className={`bottom-tab-bar__item ${tab.active ? "is-active" : ""}`}
          aria-current={tab.active ? "page" : undefined}
        >
          <IconBadge
            tone={tab.active ? "brand" : "sky"}
            size="sm"
            className="bottom-tab-bar__icon"
          />
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
