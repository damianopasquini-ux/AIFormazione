import type { SVGProps } from "react";

export function IconSettings({ className, ...rest }: SVGProps<SVGSVGElement>) {
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
      <path d="M2 5h10M2 11h6" />
      <circle cx="13" cy="5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="9" cy="11" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
