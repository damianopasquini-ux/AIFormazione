import {
  type InputHTMLAttributes,
  type ReactNode,
  useId,
} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  showLabel?: boolean;
  iconEnd?: ReactNode;
  containerClassName?: string;
}

export function Input({
  label = "First Name",
  showLabel = true,
  iconEnd,
  placeholder = "Your infos",
  containerClassName,
  className,
  id,
  ...rest
}: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <div
      className={[
        "flex w-[342px] max-w-full flex-col gap-[8px]",
        containerClassName ?? "",
      ].join(" ")}
    >
      {showLabel && label && (
        <label htmlFor={inputId} className="label-all-caps-sm text-[var(--color-text-default-secondary)]">
          {label}
        </label>
      )}
      <div className="flex h-[52px] items-center gap-[12px] border-b border-[var(--color-border-default)] bg-[var(--color-bg-default)] px-[12px] py-[12px] focus-within:border-[var(--color-bg-brand)]">
        <input
          id={inputId}
          placeholder={placeholder}
          className={[
            "flex-1 min-w-0 bg-transparent text-[16px] leading-[1.5] outline-none",
            "text-[var(--color-text-default)] placeholder:text-[var(--color-text-neutral-on-tertiary)]",
            className ?? "",
          ].join(" ")}
          {...rest}
        />
        {iconEnd && (
          <span className="inline-flex size-[16px] items-center justify-center text-[var(--color-icon-default)] shrink-0">
            {iconEnd}
          </span>
        )}
      </div>
    </div>
  );
}
