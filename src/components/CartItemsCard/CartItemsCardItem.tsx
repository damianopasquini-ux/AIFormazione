import cartItemDefault from "../../assets/figma/cart-item-default.png";

export interface CartItemsCardItemProps {
  title: string;
  priceLabel: string;
  quantityLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function CartItemsCardItem({
  title,
  priceLabel,
  quantityLabel,
  imageSrc = cartItemDefault,
  imageAlt,
  className,
}: CartItemsCardItemProps) {
  return (
    <li
      className={[
        "flex w-full items-start gap-[16px]",
        className ?? "",
      ].join(" ")}
    >
      <div className="size-[72px] shrink-0 overflow-hidden rounded-[8px] bg-[var(--color-bg-default)]">
        <img
          src={imageSrc}
          alt={imageAlt ?? title}
          className="size-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 min-w-0 flex-col gap-[4px]">
        <h4 className="heading-serif text-[18px] leading-[1.2] text-[var(--color-text-default)]">
          {title}
        </h4>
        {quantityLabel ? (
          <span className="text-[12px] leading-[1.4] text-[var(--color-text-default-secondary)]">
            {quantityLabel}
          </span>
        ) : null}
      </div>

      <span className="text-[14px] font-semibold leading-[1.4] text-[var(--color-text-default)] shrink-0">
        {priceLabel}
      </span>
    </li>
  );
}
