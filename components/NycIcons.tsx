import type { InterestIcon } from "@/lib/content";

type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function AppleIcon({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 7.5c-1.6-1.2-4.6-1.3-6 .8-1.7 2.6-.6 7 1.4 9.6 1.1 1.4 2.3 2 3.4 1.4.8-.4 1.6-.4 2.4 0 1.1.6 2.3 0 3.4-1.4 2-2.6 3.1-7 1.4-9.6-1.4-2.1-4.4-2-6-.8Z" />
      <path d="M12 7.5c0-2 .8-3.6 2.6-4.3M12 6c-1-1.6-2.6-2-3.6-1.6" />
    </svg>
  );
}

export function TaxiIcon({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3.5 15.5v-3l2-4.5h13l2 4.5v3a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1Z" />
      <path d="M9.5 8V6h5v2M3.5 12.5h17" />
      <circle cx="7.5" cy="16.5" r="1.6" />
      <circle cx="16.5" cy="16.5" r="1.6" />
    </svg>
  );
}

export function EmpireStateIcon({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 1.5v4M10.5 5.5h3v3h-3zM9 8.5h6v4H9zM7.5 12.5h9v10h-9zM5.5 22.5h13" />
      <path d="M10.5 15v5M13.5 15v5" />
    </svg>
  );
}

export function PizzaIcon({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3 5.5c5.5-2.7 12.5-2.7 18 0L12 21.5 3 5.5Z" />
      <path d="M4.3 8c4.8-2 10.6-2 15.4 0" />
      <circle cx="10" cy="11" r="1.2" />
      <circle cx="14.2" cy="13.5" r="1.2" />
    </svg>
  );
}

export function SubwayIcon({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="5" y="3" width="14" height="15" rx="3" />
      <path d="M5 11h14M9 21l1.5-3M15 21l-1.5-3" />
      <circle cx="9" cy="14.5" r=".8" />
      <circle cx="15" cy="14.5" r=".8" />
      <path d="M8 6.5h8" />
    </svg>
  );
}

export function LibertyIcon({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M15.5 2.5v4.5M14 2.5h3M9.5 9l1-2.2 1.5 1.2 1.5-1.2 1 2.2" />
      <path d="M10 9.5c0 2 .8 2.6 2 2.6s2-.6 2-2.6M15.5 7 14 12" />
      <path d="M9 22.5l1-9h4l1 9M7.5 22.5h9" />
    </svg>
  );
}

function SportsIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 3.5 12 17h7.5a1.5 1.5 0 0 1 0 3H11L2.5 5" />
      <ellipse cx="6" cy="19" rx="3" ry="1.4" />
    </svg>
  );
}

function NeedleIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M20.5 3.5 5 19l-1.5 1.5" />
      <path d="M17.2 4.8a1.4 1.4 0 0 1 2 2" />
      <path d="M18.5 5.5c-6 0-10 3-10 7s5 3 5 6-3 3-6 2" />
    </svg>
  );
}

function MahjongIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="5.5" y="2.5" width="13" height="18" rx="2.5" />
      <path d="M5.5 20.5v1h13v-1" />
      <circle cx="12" cy="7.5" r="1.6" />
      <circle cx="9" cy="14" r="1.6" />
      <circle cx="15" cy="14" r="1.6" />
    </svg>
  );
}

function FilmIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3.5 9.5h17v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-10Z" />
      <path d="m3.5 9.5-.6-3.4 16.3-2.9.6 3.4-16.3 2.9ZM7.5 5.5l2.6 3M12.5 4.6l2.6 3" />
    </svg>
  );
}

export function InterestGlyph({ icon, className = "h-5 w-5" }: { icon: InterestIcon; className?: string }) {
  switch (icon) {
    case "sports":
      return <SportsIcon className={className} />;
    case "needle":
      return <NeedleIcon className={className} />;
    case "mahjong":
      return <MahjongIcon className={className} />;
    case "film":
      return <FilmIcon className={className} />;
    case "taxi":
      return <TaxiIcon className={className} />;
  }
}

export const nycIcons = [AppleIcon, TaxiIcon, EmpireStateIcon, PizzaIcon, SubwayIcon, LibertyIcon];
