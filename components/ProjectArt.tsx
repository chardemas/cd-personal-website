import type { ProjectArt as ArtKind } from "@/lib/content";

// Small illustrations standing in for screenshots. Each one sketches what the project does.

const mono = { fontFamily: "var(--font-mono)" };

function KikiArt() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const rows = 6;
  // deterministic "how many people are free" values, 0..4
  const free = (d: number, r: number) => (d * 7 + r * 3 + ((d * r) % 4)) % 5;
  const best = { d: 4, r: 4 };
  return (
    <svg viewBox="0 0 320 190" className="h-full w-full" aria-hidden>
      <text x="20" y="26" fill="var(--color-faint)" fontSize="10" style={mono}>
        who’s free · this week
      </text>
      {days.map((d, i) => (
        <text key={i} x={62 + i * 34} y="48" fill="var(--color-muted)" fontSize="10" textAnchor="middle" style={mono}>
          {d}
        </text>
      ))}
      {["6p", "7p", "8p", "9p", "10p", "11p"].map((t, r) => (
        <text key={t} x="30" y={70 + r * 20} fill="var(--color-faint)" fontSize="9" textAnchor="end" style={mono}>
          {t}
        </text>
      ))}
      {days.map((_, d) =>
        Array.from({ length: rows }, (_, r) => {
          const isBest = d === best.d && r === best.r;
          const v = isBest ? 4 : free(d, r);
          return (
            <rect
              key={`${d}-${r}`}
              x={47 + d * 34}
              y={57 + r * 20}
              width="30"
              height="16"
              rx="4"
              fill="var(--color-green)"
              fillOpacity={0.08 + v * 0.18}
              stroke={isBest ? "var(--color-pink)" : "none"}
              strokeWidth="2"
            />
          );
        }),
      )}
      <g transform="translate(206 150)">
        <rect width="98" height="24" rx="12" fill="var(--color-pink)" />
        <text x="49" y="16" fill="var(--color-bg)" fontSize="10" textAnchor="middle" style={mono} fontWeight="600">
          Fri 10p · 4/4 free
        </text>
      </g>
    </svg>
  );
}

const HEART = [
  "..........",
  "..XX..XX..",
  ".XXXXXXXX.",
  ".XXXXXXXX.",
  ".XXXXXXXX.",
  "..XXXXXX..",
  "...XXXX...",
  "....XX....",
  "..........",
];

function NeedlepointArt() {
  const cell = 13;
  return (
    <svg viewBox="0 0 320 190" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id="np-photo" cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#ffc2dc" />
          <stop offset="55%" stopColor="#ff7eb6" />
          <stop offset="100%" stopColor="#5b3d9e" />
        </radialGradient>
        <filter id="np-soft">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
      </defs>
      <g transform="translate(26 36)">
        <rect width="110" height="118" rx="10" fill="#1b2238" />
        <path
          d="M55 98 C 20 72, 8 54, 18 36 C 27 20, 47 22, 55 38 C 63 22, 83 20, 92 36 C 102 54, 90 72, 55 98 Z"
          fill="url(#np-photo)"
          filter="url(#np-soft)"
        />
        <text x="55" y="136" fill="var(--color-faint)" fontSize="9" textAnchor="middle" style={mono}>
          inspo photo
        </text>
      </g>
      <g transform="translate(146 92)" stroke="var(--color-muted)" strokeWidth="1.5" fill="none">
        <path d="M0 0 H 22 M 16 -5 L 22 0 L 16 5" />
      </g>
      <g transform="translate(180 36)">
        <rect width="130" height="118" rx="10" fill="#1b2238" />
        {HEART.map((row, y) =>
          row.split("").map((ch, x) => {
            const fill = ch === "X" ? (y < 3 && x > 1 && x < 4 ? "#ffc2dc" : "#ff7eb6") : "#e8e6f0";
            return (
              <rect
                key={`${x}-${y}`}
                x={0}
                y={0}
                width={cell * 1.2}
                height={cell * 0.55}
                rx={cell * 0.27}
                fill={fill}
                transform={`translate(${2 + x * cell + cell / 2} ${0 + y * cell + cell / 2}) rotate(-45) translate(${(-cell * 1.2) / 2} ${(-cell * 0.55) / 2})`}
              />
            );
          }),
        )}
        <text x="65" y="136" fill="var(--color-faint)" fontSize="9" textAnchor="middle" style={mono}>
          stitchable chart · 3 colors
        </text>
      </g>
    </svg>
  );
}

function OutfitsArt() {
  const looks = [
    { score: "0.92", colors: ["#b69cff", "#e8e6f0", "#c9a46a"] },
    { score: "0.88", colors: ["#6ea8ff", "#1f2a44", "#e8e6f0"] },
    { score: "0.85", colors: ["#5eead4", "#ff6b81", "#2a3150"] },
  ];
  return (
    <svg viewBox="0 0 320 190" className="h-full w-full" aria-hidden>
      <g transform="translate(20 20)">
        <rect width="280" height="30" rx="15" fill="#161c30" stroke="var(--color-line-strong)" />
        <text x="16" y="19" fill="var(--color-muted)" fontSize="10" style={mono}>
          rooftop wedding · NYC · size 4 · $150
        </text>
        <circle cx="262" cy="15" r="9" fill="var(--color-pink)" />
      </g>
      {looks.map((l, i) => (
        <g key={i} transform={`translate(${20 + i * 96} 64)`}>
          <rect width="88" height="108" rx="10" fill="#161c30" stroke="var(--color-line)" />
          <rect x="22" y="12" width="44" height="34" rx="8" fill={l.colors[0]} />
          <rect x="16" y="50" width="56" height="26" rx="6" fill={l.colors[1]} opacity="0.9" />
          <rect x="30" y="80" width="28" height="8" rx="4" fill={l.colors[2]} />
          <text x="44" y="102" fill="var(--color-faint)" fontSize="9" textAnchor="middle" style={mono}>
            sim {l.score}
          </text>
        </g>
      ))}
    </svg>
  );
}

function PatentsArt() {
  const steps = [
    { label: "50k patents", color: "var(--color-red)" },
    { label: "SBERT", color: "var(--color-blue)" },
    { label: "cosine sim", color: "var(--color-purple)" },
    { label: "O*NET tasks", color: "var(--color-green)" },
  ];
  return (
    <svg viewBox="0 0 320 190" className="h-full w-full" aria-hidden>
      {steps.map((s, i) => (
        <g key={s.label} transform={`translate(${14 + i * 77} 70)`}>
          <rect width="66" height="50" rx="10" fill="#161c30" stroke={s.color} strokeOpacity="0.6" />
          <circle cx="12" cy="13" r="3.5" fill={s.color} />
          <text x="33" y="34" fill="var(--color-ink)" fontSize="9" textAnchor="middle" style={mono}>
            {s.label}
          </text>
          {i < steps.length - 1 && (
            <path d="M68 25 H 76 M 72 21 L 76 25 L 72 29" stroke="var(--color-faint)" strokeWidth="1.4" fill="none" />
          )}
        </g>
      ))}
      <text x="20" y="40" fill="var(--color-faint)" fontSize="10" style={mono}>
        which jobs does an invention touch?
      </text>
      <text x="20" y="150" fill="var(--color-muted)" fontSize="10" style={mono}>
        embed both sides · score every pair
      </text>
    </svg>
  );
}

function EmailArt() {
  const rows = [
    { w: 0.95, c: "var(--color-pink)", t: "prod incident: action needed" },
    { w: 0.72, c: "var(--color-red)", t: "review by EOD" },
    { w: 0.44, c: "var(--color-blue)", t: "team offsite poll" },
    { w: 0.18, c: "var(--color-faint)", t: "newsletter" },
  ];
  return (
    <svg viewBox="0 0 320 190" className="h-full w-full" aria-hidden>
      <text x="20" y="28" fill="var(--color-faint)" fontSize="10" style={mono}>
        unread · ranked by urgency
      </text>
      {rows.map((r, i) => (
        <g key={i} transform={`translate(20 ${44 + i * 34})`}>
          <rect width="280" height="26" rx="8" fill="#161c30" />
          <rect width={280 * r.w} height="26" rx="8" fill={r.c} fillOpacity="0.18" />
          <circle cx="13" cy="13" r="4" fill={r.c} />
          <text x="26" y="17" fill="var(--color-ink)" fontSize="10" style={mono}>
            {r.t}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function ProjectArt({ kind }: { kind: ArtKind }) {
  switch (kind) {
    case "kiki":
      return <KikiArt />;
    case "needlepoint":
      return <NeedlepointArt />;
    case "outfits":
      return <OutfitsArt />;
    case "patents":
      return <PatentsArt />;
    case "email":
      return <EmailArt />;
  }
}
