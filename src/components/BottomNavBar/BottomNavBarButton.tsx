import navCuratedActive from "../../assets/figma/navbar-curated-active.svg";
import navCuratedIdle from "../../assets/figma/navbar-curated-idle.svg";
import navArtistIdle from "../../assets/figma/navbar-artist-idle.svg";
import navArchiveIdle from "../../assets/figma/navbar-archive-idle.svg";
import navAccountIdle from "../../assets/figma/navbar-account-idle.svg";

export type BottomNavBarButtonType =
  | "curated"
  | "artist"
  | "archive"
  | "account";
export type BottomNavBarButtonStatus = "active" | "idle";

export interface BottomNavBarButtonProps {
  type?: BottomNavBarButtonType;
  status?: BottomNavBarButtonStatus;
  onClick?: () => void;
  className?: string;
}

const LABELS: Record<BottomNavBarButtonType, string> = {
  curated: "Curated",
  artist: "Artists",
  archive: "Archive",
  account: "Account",
};

// Figma only provides a "Curated/Active" vector separately from the idle ones —
// for all others we reuse the idle illustration; the visual difference in Active
// comes from the filled pill background.
function getIcon(type: BottomNavBarButtonType, status: BottomNavBarButtonStatus) {
  if (type === "curated") {
    return status === "active" ? navCuratedActive : navCuratedIdle;
  }
  if (type === "artist") return navArtistIdle;
  if (type === "archive") return navArchiveIdle;
  return navAccountIdle;
}

export function BottomNavBarButton({
  type = "curated",
  status = "idle",
  onClick,
  className,
}: BottomNavBarButtonProps) {
  const isActive = status === "active";
  const label = LABELS[type];
  const iconSrc = getIcon(type, status);

  return (
    <button
      type="button"
      aria-pressed={isActive}
      aria-label={label}
      onClick={onClick}
      className={[
        "inline-flex h-[58px] w-[80px] flex-col items-center justify-center gap-[4px]",
        "px-[12px] py-[6px] rounded-[8px] shrink-0",
        isActive
          ? "bg-[var(--color-bg-neutral-tertiary)] shadow-button text-[var(--color-icon-positive)]"
          : "bg-transparent text-[var(--color-text-neutral)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-bg-brand)]",
        className ?? "",
      ].join(" ")}
    >
      <img src={iconSrc} alt="" className="size-[24px]" />
      <span className="label-all-caps-sm">{label}</span>
    </button>
  );
}
