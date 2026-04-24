import { ProductCard, type ProductCardProps } from "../ProductCard";
import { SubSectionTitle } from "../SubSectionTitle";

export interface ProductCarouselProps {
  title: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  products: ProductCardProps[];
  className?: string;
}

export function ProductCarousel({
  title,
  ctaLabel = "View all",
  onCtaClick,
  products,
  className,
}: ProductCarouselProps) {
  return (
    <section
      className={[
        "flex w-full max-w-full flex-col items-start gap-[24px]",
        className ?? "",
      ].join(" ")}
    >
      <SubSectionTitle
        title={title}
        actionLabel={ctaLabel}
        onActionClick={onCtaClick}
      />

      <div
        className="flex w-full gap-[16px] overflow-x-auto scroll-smooth snap-x snap-mandatory px-[24px] pb-[8px]"
        role="list"
        aria-label={title}
      >
        {products.map((product, index) => (
          <div
            key={`${product.title}-${index}`}
            role="listitem"
            className="shrink-0 snap-start"
          >
            <ProductCard {...product} className="w-[280px]" />
          </div>
        ))}
      </div>
    </section>
  );
}
