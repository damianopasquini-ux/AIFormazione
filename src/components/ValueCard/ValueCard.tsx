import valueIconLight from "../../assets/figma/value-icon-light.svg";
import valueIconDark from "../../assets/figma/value-icon-dark.svg";

export type ValueCardTheme = "light" | "dark";

export interface ValueCardProps {
  title: string;
  description: string;
  theme?: ValueCardTheme;
  iconSrc?: string;
  className?: string;
}

export function ValueCard({
  title,
  description,
  theme = "light",
  iconSrc,
  className,
}: ValueCardProps) {
  const isDark = theme === "dark";
  const resolvedIcon = iconSrc ?? (isDark ? valueIconDark : valueIconLight);

  return (
    <article
      className={[
        "flex w-[163px] flex-col items-start justify-center gap-[12px] p-[24px]",
        "rounded-[8px]",
        isDark
          ? "bg-[var(--color-bg-neutral-tertiary)]"
          : "bg-[var(--color-bg-default-secondary)]",
        className ?? "",
      ].join(" ")}
    >
      <img
        src={resolvedIcon}
        alt=""
        className="h-[24px] w-auto"
        aria-hidden="true"
      />
      <div className="flex w-full flex-col items-start gap-[8px]">
        <h3 className="heading-serif text-[20px] text-[var(--color-text-default)] whitespace-pre-line">
          {title}
        </h3>
        <p className="text-[14px] leading-[1.4] text-[var(--color-text-default-secondary)]">
          {description}
        </p>
      </div>
    </article>
  );
}
