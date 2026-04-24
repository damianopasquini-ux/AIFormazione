import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { IconShoppingBagFull } from "../icons";

export interface FloatingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  label: string;
}

export function FloatingButton({
  icon,
  label,
  className,
  type = "button",
  ...rest
}: FloatingButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={[
        "inline-flex items-center justify-center size-[56px]",
        "rounded-[16px] bg-[var(--color-bg-brand)] text-[var(--color-icon-brand-on-brand)]",
        "shadow-floating transition-transform active:scale-95",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-bg-brand)]",
        className ?? "",
      ].join(" ")}
      {...rest}
    >
      {icon ?? <IconShoppingBagFull className="size-[20px]" />}
    </button>
  );
}
