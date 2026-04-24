export interface ProductSpecificationItem {
  label: string;
  value: string;
}

export interface ProductSpecificationCardProps {
  title?: string;
  items: ProductSpecificationItem[];
  className?: string;
}

export function ProductSpecificationCard({
  title = "Specifications",
  items,
  className,
}: ProductSpecificationCardProps) {
  return (
    <section
      className={[
        "flex w-[342px] max-w-full flex-col items-start gap-[24px]",
        "rounded-[8px] bg-[var(--color-bg-default-secondary)] px-[32px] pt-[24px] pb-[32px]",
        className ?? "",
      ].join(" ")}
    >
      <h3 className="heading-serif text-[20px] text-[var(--color-text-default)] w-full">
        {title}
      </h3>
      <dl className="flex w-full flex-col gap-[12px] text-[14px] leading-[1.4]">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <div
              key={item.label}
              className={[
                "flex w-full items-center gap-[12px] pb-[9px]",
                isLast ? "" : "border-b border-[var(--color-border-default)]",
              ].join(" ")}
            >
              <dt className="flex-1 text-[var(--color-text-default-secondary)]">
                {item.label}
              </dt>
              <dd className="text-right text-[var(--color-text-default)] whitespace-nowrap">
                {item.value}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
