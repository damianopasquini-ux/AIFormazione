import type { SVGProps } from "react";

export function IconShoppingBagFull({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 4V4a2.5 2.5 0 0 1 5 0v.5h3l-.8 9.2a1 1 0 0 1-1 .9H4.3a1 1 0 0 1-1-.9L2.5 4.5h3Zm1 0a1.5 1.5 0 1 1 3 0v.5h-3V4Z"
      />
    </svg>
  );
}
