import type { RoutineItem } from "../model/types";
import { IconBadge, ToggleSwitch } from "../../../shared/ui";

type RoutineCardProps = {
  routine: RoutineItem;
  onToggle?: (routineId: string) => void;
};

export function RoutineCard({ routine, onToggle }: RoutineCardProps) {
  return (
    <article
      className={`routine-card routine-card--${routine.accent} ${
        routine.enabled ? "is-enabled" : ""
      }`}
    >
      <div className="routine-card__main">
        <IconBadge tone={mapAccentToTone(routine.accent)} className="routine-card__icon" />
        <div className="routine-card__body">
          <strong className="routine-card__title">{routine.title}</strong>
          <p className="routine-card__summary">{routine.summary}</p>
        </div>
      </div>

      <div className="routine-card__meta">
        <strong className="routine-card__time">{routine.departureTime}</strong>
        <span className="routine-card__period">{routine.departurePeriod}</span>
        <ToggleSwitch
          checked={routine.enabled}
          ariaLabel={`${routine.title} 루틴 알림`}
          onToggle={() => onToggle?.(routine.id)}
        />
      </div>
    </article>
  );
}

function mapAccentToTone(accent: RoutineItem["accent"]) {
  switch (accent) {
    case "green":
      return "sky";
    case "mint":
      return "mint";
    case "violet":
      return "violet";
    default:
      return "brand";
  }
}
