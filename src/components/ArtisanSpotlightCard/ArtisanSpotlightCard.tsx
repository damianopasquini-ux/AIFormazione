import { TextButton } from "../TextButton";
import artisanPortrait from "../../assets/figma/artisan-portrait.png";

export interface ArtisanSpotlightCardProps {
  eyebrow?: string;
  name: string;
  quote: string;
  ctaLabel?: string;
  portraitSrc?: string;
  onCtaClick?: () => void;
  className?: string;
}

export function ArtisanSpotlightCard({
  eyebrow = "Artisan Spotlight",
  name,
  quote,
  ctaLabel = "Meet the maker",
  portraitSrc = artisanPortrait,
  onCtaClick,
  className,
}: ArtisanSpotlightCardProps) {
  return (
    <article
      className={[
        "flex w-[342px] max-w-full flex-col items-start gap-[32px] overflow-hidden",
        "rounded-[8px] bg-[var(--color-bg-default-secondary)] p-[48px]",
        className ?? "",
      ].join(" ")}
    >
      <div className="flex size-[128px] items-center justify-center overflow-hidden rounded-[12px] border-4 border-[var(--color-border-neutral-tertiary)] bg-[var(--color-bg-default)] p-[4px] shadow-tab">
        <img
          src={portraitSrc}
          alt={`Portrait of ${name}`}
          className="size-full object-cover rounded-[8px]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-start gap-[16px]">
        <span className="label-all-caps-sm text-[var(--color-text-brand-secondary)]">
          {eyebrow}
        </span>
        <h3 className="heading-serif text-[24px] text-[var(--color-text-default)]">
          {name}
        </h3>
        <p className="text-[14px] leading-[1.4] italic font-semibold text-[var(--color-text-default-secondary)]">
          {quote}
        </p>
      </div>

      <TextButton
        variant="sleek-underline"
        label={ctaLabel}
        onClick={onCtaClick}
      />
    </article>
  );
}
