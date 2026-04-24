import { CartItemsCardItem, type CartItemsCardItemProps } from "./CartItemsCardItem";

export interface CartItemsCardProps {
  title?: string;
  items: CartItemsCardItemProps[];
  className?: string;
}

export function CartItemsCard({
  title = "Your Cart",
  items,
  className,
}: CartItemsCardProps) {
  return (
    <section
      className={[
        "flex w-[342px] max-w-full flex-col gap-[24px] rounded-[8px] bg-[var(--color-bg-default-secondary)] p-[24px]",
        className ?? "",
      ].join(" ")}
    >
      <h3 className="heading-serif text-[20px] leading-[1.2] text-[var(--color-text-default)]">
        {title}
      </h3>

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
    </section>
  );
}
