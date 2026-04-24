import { type ReactNode } from "react";
import {
  IconHamburgerMenu,
  IconSearch,
  IconArrowSx,
  IconShare,
} from "../icons";

export type TopAppBarVariant = "main" | "internal";

export interface TopAppBarProps {
  variant?: TopAppBarVariant;
  title: string;
  iconStart?: ReactNode | null;
  iconEnd?: ReactNode | null;
  onStartClick?: () => void;
  onEndClick?: () => void;
  className?: string;
}

export function TopAppBar({
  variant = "main",
  title,
  iconStart,
  iconEnd,
  onStartClick,
  onEndClick,
  className,
}: TopAppBarProps) {
  const isMain = variant === "main";

  const defaultStart = isMain ? <IconHamburgerMenu /> : <IconArrowSx />;
  const defaultEnd = isMain ? <IconSearch /> : <IconShare />;

  const titleColor = isMain
    ? "text-[var(--color-icon-positive)]"
    : "text-[var(--color-text-default)]";
  const titleSize = isMain ? "text-[24px]" : "text-[20px]";

  return (
    <header
      className={[
        "flex h-[60px] w-[390px] max-w-full items-center justify-center gap-[12px]",
        "px-[24px] py-[16px] bg-[var(--color-bg-default)]/90 backdrop-blur-md",
        className ?? "",
      ].join(" ")}
    >
      <button
        type="button"
        aria-label={isMain ? "Open menu" : "Go back"}
        onClick={onStartClick}
        className="inline-flex size-[18px] items-center justify-center text-[var(--color-icon-default)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-bg-brand)]"
      >
        {iconStart ?? defaultStart}
      </button>

      <h1
        className={[
          "flex-1 text-center heading-serif",
          titleSize,
          titleColor,
        ].join(" ")}
      >
        {title}
      </h1>

      <button
        type="button"
        aria-label={isMain ? "Search" : "Share"}
        onClick={onEndClick}
        className="inline-flex size-[18px] items-center justify-center text-[var(--color-icon-default)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-bg-brand)]"
      >
        {iconEnd ?? defaultEnd}
      </button>
    </header>
  );
}
