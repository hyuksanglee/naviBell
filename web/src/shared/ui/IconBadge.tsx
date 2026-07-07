type IconBadgeProps = {
  tone?: "brand" | "sky" | "mint" | "violet";
  size?: "sm" | "md" | "lg";
  rounded?: "soft" | "pill";
  className?: string;
};

export function IconBadge({
  tone = "brand",
  size = "md",
  rounded = "soft",
  className,
}: IconBadgeProps) {
  const classes = [
    "icon-badge",
    `icon-badge--${tone}`,
    `icon-badge--${size}`,
    `icon-badge--${rounded}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span aria-hidden="true" className={classes} />;
}
