import { TextButton } from "../TextButton";

export interface SubSectionTitleProps {
  title: string;
  actionLabel?: string;
  onActionClick?: () => void;
  className?: string;
}

export function SubSectionTitle({
  title,
  actionLabel = "Explore All",
  onActionClick,
  className,
}: SubSectionTitleProps) {
  return (
    <div
      className={[
        "flex w-[390px] max-w-full items-end justify-between px-[24px]",
        className ?? "",
      ].join(" ")}
    >
      <div className="flex flex-col items-start gap-[8px]">
        <h2 className="heading-serif text-[24px] text-[var(--color-text-default)]">
          {title}
        </h2>
        <span
          aria-hidden="true"
          className="h-[2px] w-[48px] bg-[var(--color-bg-brand)]"
        />
      </div>
      {actionLabel && (
        <TextButton
          variant="sleek"
          label={actionLabel}
          onClick={onActionClick}
        />
      )}
    </div>
  );
}
