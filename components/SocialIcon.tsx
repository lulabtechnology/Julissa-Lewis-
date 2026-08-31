import type { SVGProps } from "react";

type IconName = "whatsapp" | "linkedin" | "email" | "external";

export function SocialIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M16.02 3.2A12.67 12.67 0 0 0 5.1 22.27L3.2 28.8l6.69-1.76A12.68 12.68 0 1 0 16.02 3.2Zm0 22.95a10.25 10.25 0 0 1-5.22-1.43l-.37-.22-3.97 1.04 1.06-3.87-.24-.4a10.24 10.24 0 1 1 8.74 4.88Zm5.62-7.68c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.69.15-.21.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.21.05-.39-.03-.54-.08-.16-.69-1.67-.95-2.29-.25-.6-.51-.52-.69-.53h-.59c-.21 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56 0 1.51 1.1 2.97 1.25 3.18.16.2 2.16 3.3 5.23 4.63.73.32 1.3.5 1.74.64.73.23 1.4.2 1.93.12.59-.09 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.46-.08-.13-.28-.2-.59-.36Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.8 9.9h4.36V21H2.8V9.9Zm7.07 0h4.18v1.52h.06c.58-1.1 2-2.26 4.12-2.26 4.41 0 5.23 2.9 5.23 6.68V21H19.1v-4.58c0-1.09-.02-2.5-1.52-2.5-1.52 0-1.75 1.19-1.75 2.42V21h-4.36V9.9Z" />
      </svg>
    );
  }

  if (name === "email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M14 5h5v5M19 5l-8 8" />
      <path d="M19 13v6H5V5h6" />
    </svg>
  );
}
