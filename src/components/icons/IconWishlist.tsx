import type { SVGProps } from "react";

export function IconWishlist({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.333"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      <path d="M8 13.3s-5.3-3-5.3-7A2.8 2.8 0 0 1 8 5a2.8 2.8 0 0 1 5.3 1.3c0 4-5.3 7-5.3 7Z" />
    </svg>
  );
}
