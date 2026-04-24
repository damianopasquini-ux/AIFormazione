import bannerIcon from "../../assets/figma/banner-icon.svg";

export interface DeliveryInfoBannerProps {
  title?: string;
  message: string;
  iconSrc?: string;
  className?: string;
}

export function DeliveryInfoBanner({
  title = "Delivery",
  message,
  iconSrc = bannerIcon,
  className,
}: DeliveryInfoBannerProps) {
  return (
    <aside
      className={[
        "flex w-full items-start gap-[12px] rounded-[8px] bg-[var(--color-bg-brand-secondary)] p-[16px]",
        className ?? "",
      ].join(" ")}
    >
      <img
        src={iconSrc}
        alt=""
        aria-hidden="true"
        className="size-[32px] shrink-0"
      />
      <div className="flex flex-1 flex-col gap-[4px]">
        <span className="label-all-caps-sm text-[var(--color-text-brand-secondary)]">
          {title}
        </span>
        <p className="text-[14px] leading-[1.4] text-[var(--color-text-default)]">
          {message}
        </p>
      </div>
    </aside>
  );
}
