import { TextButton } from "../TextButton";
import {
  IconShoppingBag,
  IconArrowDx,
  IconWishlist,
} from "../icons";
import {
  BottomNavBarButton,
  type BottomNavBarButtonType,
} from "./BottomNavBarButton";

export type BottomNavBarVariant = "navigation" | "cart" | "product";

export interface BottomNavBarProps {
  variant?: BottomNavBarVariant;
  activeNavType?: BottomNavBarButtonType;
  onNavClick?: (type: BottomNavBarButtonType) => void;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

const NAV_ORDER: BottomNavBarButtonType[] = [
  "curated",
  "artist",
  "archive",
  "account",
];

const containerBase =
  "flex h-[90px] w-[390px] max-w-full items-center justify-center gap-[12px] px-[24px] py-[16px] bg-[var(--color-bg-default-secondary)]/90 backdrop-blur-md shadow-nav-top";

export function BottomNavBar({
  variant = "navigation",
  activeNavType = "curated",
  onNavClick,
  onPrimaryClick,
  onSecondaryClick,
  className,
}: BottomNavBarProps) {
  if (variant === "navigation") {
    return (
      <nav
        aria-label="Primary"
        className={[containerBase, className ?? ""].join(" ")}
      >
        {NAV_ORDER.map((type) => (
          <BottomNavBarButton
            key={type}
            type={type}
            status={activeNavType === type ? "active" : "idle"}
            onClick={() => onNavClick?.(type)}
            className="flex-1"
          />
        ))}
      </nav>
    );
  }

  if (variant === "cart") {
    return (
      <div
        role="group"
        aria-label="Cart actions"
        className={[containerBase, className ?? ""].join(" ")}
      >
        <TextButton
          variant="ghost"
          label="Continue Shopping"
          iconStart={<IconShoppingBag className="size-[14px]" />}
          showIconEnd={false}
          onClick={onSecondaryClick}
          fullWidth
          className="flex-1 h-full"
        />
        <TextButton
          variant="filled-primary"
          label="Complete Order"
          iconStart={<IconShoppingBag className="size-[14px]" />}
          iconEnd={<IconArrowDx className="size-[14px]" />}
          onClick={onPrimaryClick}
          fullWidth
          className="flex-1 h-full"
        />
      </div>
    );
  }

  // product variant
  return (
    <div
      role="group"
      aria-label="Product actions"
      className={[containerBase, className ?? ""].join(" ")}
    >
      <TextButton
        variant="ghost"
        label="Wishlist"
        iconStart={<IconWishlist className="size-[14px]" />}
        showIconEnd={false}
        onClick={onSecondaryClick}
        fullWidth
        className="flex-1 h-full"
      />
      <TextButton
        variant="filled-primary"
        label="Add to cart"
        showIconStart={false}
        iconEnd={<IconShoppingBag className="size-[14px]" />}
        onClick={onPrimaryClick}
        fullWidth
        className="flex-1 h-full"
      />
    </div>
  );
}
