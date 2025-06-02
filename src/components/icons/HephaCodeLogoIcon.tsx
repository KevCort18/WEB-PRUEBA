import type { SVGProps } from 'react';

export function HephaCodeLogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="HephaCode Logo"
      {...props}
    >
      <path
        d="M20 3L35.5 11.25V27.75L20 36L4.5 27.75V11.25L20 3Z" // Outer octagon/hexagon
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M20 10L29 15V24L20 29L11 24V15L20 10Z" // Inner cutout shape
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
       {/* Simple lines suggesting circuitry or connection */}
      <path d="M4.5 11.25L1 8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M35.5 11.25L39 8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 27.75L1 31" stroke="currentColor" strokeWidth="1.5" />
      <path d="M35.5 27.75L39 31" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
