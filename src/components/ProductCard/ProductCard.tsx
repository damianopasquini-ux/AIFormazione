import { ArtisanNameStrip } from "../ArtisanNameStrip";
import productDefault from "../../assets/figma/product-default.png";

export interface ProductCardProps {
  title: string;
  priceLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  artisanName?: string;
  artisanPhotoSrc?: string;
  artisanHref?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function ProductCard({
  title,
  priceLabel,
  imageSrc = productDefault,
  imageAlt,
  artisanName,
  artisanPhotoSrc,
  artisanHref,
  onClick,
  href,
  className,
}: ProductCardProps) {
  const Wrapper = href ? "a" : "article";
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...wrapperProps}
      onClick={onClick}
      className={[
        "group flex w-[342px] max-w-full flex-col items-start gap-[16px]",
        href || onClick ? "cursor-pointer" : "",
        className ?? "",
      ].join(" ")}
    >
      <div className="relative w-full overflow-hidden rounded-[8px] bg-[var(--color-bg-default-secondary)] aspect-square">
        <img
          src={imageSrc}
          alt={imageAlt ?? title}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="flex w-full flex-col items-start gap-[8px]">
        <div className="flex w-full items-start justify-between gap-[12px]">
          <h3 className="heading-serif text-[20px] leading-[1.2] text-[var(--color-text-default)]">
            {title}
          </h3>
          <span className="text-[14px] font-semibold leading-[1.4] text-[var(--color-text-default)] shrink-0">
            {priceLabel}
          </span>
        </div>

        {artisanName ? (
          <ArtisanNameStrip
            artisanName={artisanName}
            photoSrc={artisanPhotoSrc}
            href={artisanHref}
            className="w-full"
          />
        ) : null}
      </div>
    </Wrapper>
  );
}
