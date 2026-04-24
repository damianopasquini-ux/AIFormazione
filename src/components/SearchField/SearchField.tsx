import { type InputHTMLAttributes } from "react";
import { IconSearch, IconSettings } from "../icons";

export interface SearchFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  showSettings?: boolean;
  onSettingsClick?: () => void;
}

export function SearchField({
  containerClassName,
  placeholder = "Search handcrafted vessels...",
  showSettings = true,
  onSettingsClick,
  className,
  ...rest
}: SearchFieldProps) {
  return (
    <div
      className={[
        "flex h-[52px] w-[342px] max-w-full items-center gap-[12px]",
        "rounded-[8px] bg-[var(--color-bg-default-secondary)] px-[24px] py-[12px]",
        "focus-within:ring-2 focus-within:ring-[var(--color-bg-brand)]/40",
        containerClassName ?? "",
      ].join(" ")}
    >
      <IconSearch className="size-[16px] shrink-0 text-[var(--color-icon-default-secondary)]" />
      <input
        type="search"
        placeholder={placeholder}
        className={[
          "flex-1 min-w-0 bg-transparent text-[16px] leading-[1.5] outline-none",
          "text-[var(--color-text-default)] placeholder:text-[var(--color-text-neutral-on-tertiary)]",
          className ?? "",
        ].join(" ")}
        {...rest}
      />
      {showSettings && (
        <button
          type="button"
          aria-label="Search settings"
          onClick={onSettingsClick}
          className="inline-flex size-[18px] items-center justify-center text-[var(--color-icon-default)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-bg-brand)]"
        >
          <IconSettings className="size-[14px]" />
        </button>
      )}
    </div>
  );
}
