import type { SVGProps } from "react";

export function IconHamburgerMenu({ className, ...rest }: SVGProps<SVGSVGElement>) {
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
      <path d="M1.778 4.444h12.444M1.778 8h12.444M1.778 11.556h12.444" />
    </svg>
  );
}
