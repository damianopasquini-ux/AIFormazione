import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { IconShoppingBag, IconArrowDx } from "../icons";

export type TextButtonVariant =
  | "filled-primary"
  | "filled-secondary"
  | "ghost"
  | "sleek"
  | "sleek-underline";

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: TextButtonVariant;
  iconStart?: ReactNode | null;
  iconEnd?: ReactNode | null;
  showIconStart?: boolean;
  showIconEnd?: boolean;
  fullWidth?: boolean;
}

const baseBoxedClasses =
  "inline-flex items-center justify-center gap-[10px] px-[32px] py-[12px] rounded-[8px] font-semibold uppercase tracking-[0.1em] text-[12px] leading-none transition-transform active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-bg-brand)]";

const variantClasses: Record<TextButtonVariant, string> = {
  "filled-primary":
    "bg-[var(--color-bg-brand)] text-[var(--color-text-brand-on-brand)] shadow-button hover:bg-[#5f4d40]",
  "filled-secondary":
    "bg-[var(--color-bg-neutral-tertiary)] text-[var(--color-text-default)] shadow-button hover:bg-[#d7d6d3]",
  ghost:
    "bg-transparent text-[var(--color-text-neutral)] hover:bg-[var(--color-bg-default-secondary)]",
  sleek:
    "!px-0 !py-0 !shadow-none bg-transparent text-[var(--color-icon-positive)] hover:opacity-80",
  "sleek-underline":
    "!px-0 !py-[6px] !shadow-none bg-transparent text-[var(--color-icon-positive)] border-b-2 border-[var(--color-text-brand)] rounded-none hover:opacity-80",
};

export function TextButton({
  label,
  variant = "filled-primary",
  iconStart,
  iconEnd,
  showIconStart = true,
  showIconEnd = true,
  fullWidth = false,
  className,
  type = "button",
  ...rest
}: TextButtonProps) {
  const isSleek = variant === "sleek" || variant === "sleek-underline";
  const defaultStart = iconStart ?? <IconShoppingBag className="size-[14px]" />;
  const defaultEnd = iconEnd ?? <IconArrowDx className="size-[14px]" />;

  return (
    <button
      type={type}
      className={[
        baseBoxedClasses,
        variantClasses[variant],
        fullWidth ? "w-full" : "",
        className ?? "",
      ].join(" ")}
      {...rest}
    >
      {!isSleek && showIconStart && (
        <span className="inline-flex size-[18px] items-center justify-center shrink-0">
          {defaultStart}
        </span>
      )}
      <span>{label}</span>
      {!isSleek && showIconEnd && (
        <span className="inline-flex size-[18px] items-center justify-center shrink-0">
          {defaultEnd}
        </span>
      )}
    </button>
  );
}
