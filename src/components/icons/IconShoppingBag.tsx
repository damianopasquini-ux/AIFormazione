import type { SVGProps } from "react";

export function IconShoppingBag({ className, ...rest }: SVGProps<SVGSVGElement>) {
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
      <path d="M2.5 4.5h11l-.8 9.2a1 1 0 0 1-1 .9H4.3a1 1 0 0 1-1-.9l-.8-9.2Z" />
      <path d="M5.5 6.5V4a2.5 2.5 0 1 1 5 0v2.5" />
    </svg>
  );
}
