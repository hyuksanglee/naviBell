type ToggleSwitchProps = {
  checked: boolean;
  ariaLabel: string;
  onToggle?: () => void;
};

export function ToggleSwitch({ checked, ariaLabel, onToggle }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      className={`toggle-switch ${checked ? "is-checked" : ""}`}
      aria-label={ariaLabel}
      aria-pressed={checked}
      onClick={onToggle}
    >
      <span className="toggle-switch__thumb" />
    </button>
  );
}
