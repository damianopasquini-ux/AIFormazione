import { CartItemsCardItem, type CartItemsCardItemProps } from "../CartItemsCard";
import { DeliveryInfoBanner, type DeliveryInfoBannerProps } from "./DeliveryInfoBanner";

export interface OrderSummaryCardProps {
  title?: string;
  orderLabel?: string;
  items: CartItemsCardItemProps[];
  delivery?: DeliveryInfoBannerProps;
  totalLabel?: string;
  totalValue: string;
  className?: string;
}

export function OrderSummaryCard({
  title = "Order Summary",
  orderLabel,
  items,
  delivery,
  totalLabel = "Total",
  totalValue,
  className,
}: OrderSummaryCardProps) {
  return (
    <section
      className={[
        "flex w-[342px] max-w-full flex-col gap-[24px] rounded-[8px] bg-[var(--color-bg-default-secondary)] p-[24px]",
        className ?? "",
      ].join(" ")}
    >
      <header className="flex w-full flex-col gap-[4px]">
        <h3 className="heading-serif text-[20px] leading-[1.2] text-[var(--color-text-default)]">
          {title}
        </h3>
        {orderLabel ? (
          <span className="text-[12px] leading-[1.4] text-[var(--color-text-default-secondary)]">
            {orderLabel}
          </span>
        ) : null}
      </header>

      <ul className="flex w-full flex-col gap-[16px]">
        {items.map((item, index) => (
          <CartItemsCardItem
            key={`${item.title}-${index}`}
            {...item}
            className={
              index < items.length - 1
                ? "border-b border-[var(--color-border-neutral-secondary)] pb-[16px]"
                : undefined
            }
          />
        ))}
      </ul>

      {delivery ? <DeliveryInfoBanner {...delivery} /> : null}

      <div className="flex w-full items-center justify-between border-t border-[var(--color-border-neutral-secondary)] pt-[16px]">
        <span className="label-all-caps-sm text-[var(--color-text-default-secondary)]">
          {totalLabel}
        </span>
        <span className="heading-serif text-[20px] text-[var(--color-text-default)]">
          {totalValue}
        </span>
      </div>
    </section>
  );
}
