import { IconBadge } from "../../../shared/ui";

export function DestinationPromptCard() {
  return (
    <button type="button" className="destination-card">
      <IconBadge tone="brand" size="md" className="destination-card__leading" />
      <span className="destination-card__placeholder">어디로 가시나요?</span>
      <span className="destination-card__trailing">
        <IconBadge tone="sky" size="sm" rounded="pill" />
      </span>
    </button>
  );
}
