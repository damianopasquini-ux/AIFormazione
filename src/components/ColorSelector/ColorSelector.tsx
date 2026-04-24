export interface ColorSwatch {
  id: string;
  color: string;
  label: string;
}

export interface ColorSelectorProps {
  swatches: ColorSwatch[];
  activeId: string;
  onChange?: (id: string) => void;
  className?: string;
}

export function ColorSelector({
  swatches,
  activeId,
  onChange,
  className,
}: ColorSelectorProps) {
  return (
    <div
      role="radiogroup"
      aria-label="Select color"
      className={["inline-flex items-start gap-[12px]", className ?? ""].join(" ")}
    >
      {swatches.map((swatch) => {
        const isActive = swatch.id === activeId;
        return (
          <button
            key={swatch.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={swatch.label}
            onClick={() => onChange?.(swatch.id)}
            className={[
              "relative size-[32px] rounded-[8px] transition-transform active:scale-95",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-bg-brand)]",
              isActive
                ? "shadow-[inset_0_0_0_2px_currentColor,inset_0_0_0_4px_var(--color-bg-default)]"
                : "",
            ].join(" ")}
            style={{ backgroundColor: swatch.color, color: swatch.color }}
          />
        );
      })}
    </div>
  );
}
