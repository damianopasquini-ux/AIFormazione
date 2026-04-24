export interface DeliveryInfoCardProps {
  title?: string;
  addressLines: string[];
  className?: string;
}

export function DeliveryInfoCard({
  title = "Delivery Address",
  addressLines,
  className,
}: DeliveryInfoCardProps) {
  return (
    <section
      className={[
        "flex w-[342px] max-w-full flex-col items-start gap-[24px] p-[32px]",
        "rounded-[8px] bg-[var(--color-bg-neutral-tertiary)]",
        className ?? "",
      ].join(" ")}
    >
      <h3 className="label-all-caps text-[12px] text-[var(--color-text-default)]">
        {title}
      </h3>
      <address className="not-italic text-[14px] leading-[1.4] text-[var(--color-text-default-secondary)]">
        {addressLines.map((line, idx) => (
          <span key={idx} className="block">
            {line}
          </span>
        ))}
      </address>
    </section>
  );
}
