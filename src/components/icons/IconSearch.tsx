import type { SVGProps } from "react";

export function IconSearch({ className, ...rest }: SVGProps<SVGSVGElement>) {
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
      <circle cx="7.111" cy="7.111" r="5.556" />
      <path d="m14.444 14.444-3.022-3.022" />
    </svg>
  );
}
