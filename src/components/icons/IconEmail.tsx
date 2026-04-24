import type { SVGProps } from "react";

export function IconEmail({ className, ...rest }: SVGProps<SVGSVGElement>) {
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
      <rect x="1.5" y="3" width="13" height="10" rx="1.2" />
      <path d="m2 4.5 6 4.5 6-4.5" />
    </svg>
  );
}
