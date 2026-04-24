export interface TabMenuItem {
  id: string;
  label: string;
}

export interface TabMenuProps {
  items: TabMenuItem[];
  activeId: string;
  onChange?: (id: string) => void;
  className?: string;
}

export function TabMenu({ items, activeId, onChange, className }: TabMenuProps) {
  return (
    <div
      role="tablist"
      className={[
        "inline-flex w-[342px] max-w-full items-start justify-center gap-[4px]",
        "rounded-[8px] bg-[var(--color-bg-neutral-tertiary)] p-[4px]",
        className ?? "",
      ].join(" ")}
    >
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange?.(item.id)}
            className={[
              "flex h-[64px] flex-1 flex-col items-center justify-center px-[16px] py-[12px]",
              "rounded-[4px] text-[14px] leading-[1.4] text-center font-body",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-bg-brand)]",
              isActive
                ? "bg-[var(--color-bg-default)] text-[var(--color-text-brand)] font-semibold shadow-tab"
                : "bg-transparent text-[var(--color-text-neutral-secondary)] font-normal",
            ].join(" ")}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
