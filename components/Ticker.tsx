import { ticker } from "@/lib/content";
import { tickerIcons } from "@/components/NycIcons";

const colors = ["text-pink", "text-blue", "text-green", "text-purple", "text-red"];

// Times Square zipper. The list is rendered twice so the loop is seamless.
export default function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="relative overflow-hidden border-y border-line bg-black/40 py-4" aria-hidden>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent" />
      <div className="ticker-track">
        {items.map((t, i) => {
          const n = i % ticker.length; // same icon/color in both copies keeps the loop seamless
          const Icon = tickerIcons[n % tickerIcons.length];
          return (
            <span key={i} className="flex items-center gap-6 px-3 font-mono text-sm tracking-[0.2em] uppercase">
              <span className="text-ink/85">{t}</span>
              <Icon className={`neon-icon h-5 w-5 ${colors[n % colors.length]}`} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
