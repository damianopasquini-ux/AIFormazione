export interface TotalExpensesLine {
  label: string;
  amount: string;
}

export interface TotalExpensesCardProps {
  lines: TotalExpensesLine[];
  totalLabel?: string;
  totalAmount: string;
  className?: string;
}

export function TotalExpensesCard({
  lines,
  totalLabel = "Total",
  totalAmount,
  className,
}: TotalExpensesCardProps) {
  return (
    <section
      className={[
        "flex w-[342px] max-w-full flex-col items-start gap-[24px] p-[32px]",
        "rounded-[8px] bg-[var(--color-bg-neutral-tertiary)]",
        className ?? "",
      ].join(" ")}
    >
      <dl className="flex w-full flex-col gap-[12px] text-[14px] leading-[1.4]">
        {lines.map((line) => (
          <div key={line.label} className="flex w-full items-start justify-between">
            <dt className="text-[var(--color-text-default-secondary)]">{line.label}</dt>
            <dd className="text-right text-[var(--color-text-default)] whitespace-nowrap">
              {line.amount}
            </dd>
          </div>
        ))}
      </dl>
      <div className="flex w-full items-center justify-between border-t border-[var(--color-border-neutral-tertiary)] pt-[16px]">
        <span className="heading-serif text-[20px] text-[var(--color-text-default)]">
          {totalLabel}
        </span>
        <span className="heading-serif text-[20px] text-[var(--color-text-brand)]">
          {totalAmount}
        </span>
      </div>
    </section>
  );
}
