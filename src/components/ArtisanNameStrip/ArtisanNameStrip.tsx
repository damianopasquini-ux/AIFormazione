import artisanStripPhoto from "../../assets/figma/artisan-strip-photo.png";

export interface ArtisanNameStripProps {
  artisanName: string;
  photoSrc?: string;
  href?: string;
  className?: string;
}

export function ArtisanNameStrip({
  artisanName,
  photoSrc = artisanStripPhoto,
  href,
  className,
}: ArtisanNameStripProps) {
  const NameTag = href ? "a" : "span";
  return (
    <div
      className={[
        "flex w-[342px] max-w-full items-center gap-[8px]",
        className ?? "",
      ].join(" ")}
    >
      <span className="inline-flex size-[32px] shrink-0 overflow-hidden rounded-[10px] bg-[var(--color-bg-default-secondary)]">
        <img
          src={photoSrc}
          alt=""
          className="size-full object-cover"
          loading="lazy"
        />
      </span>
      <p className="flex-1 min-w-0 text-[14px] leading-[1.4] text-[var(--color-text-default)]">
        <span className="font-semibold">Artisan: </span>
        <NameTag
          {...(href ? { href } : {})}
          className="underline underline-offset-2 decoration-solid"
        >
          {artisanName}
        </NameTag>
      </p>
    </div>
  );
}
