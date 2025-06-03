import type { SVGProps } from 'react';

export function HephaCodeLogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24" // Adjusted to match common usage, can be overridden by className
      height="24" // Adjusted to match common usage, can be overridden by className
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="HephaCode Logo"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
