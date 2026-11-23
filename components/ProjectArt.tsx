import type { ProjectArt as ArtKind } from "@/lib/content";

// Small illustrations standing in for screenshots. Each one sketches what the project does.

const mono = { fontFamily: "var(--font-mono)" };

// A t-shirt outline in 0..100 units, placed at (x, y) and scaled to `size` px wide
const TEE = [[21, 5], [37, 0], [45, 8], [55, 8], [63, 0], [79, 5], [100, 29], [87, 39], [76, 29], [76, 100], [24, 100], [24, 29], [13, 39], [0, 29]];
const tee = (x: number, y: number, size: number) =>
  TEE.map(([px, py]) => `${x + (px * size) / 100},${y + (py * size) / 100}`).join(" ");

function ResellArt() {
  return (
    <svg viewBox="0 0 320 190" className="h-full w-full" aria-hidden>
      <text x="20" y="26" fill="var(--color-faint)" fontSize="10" style={mono}>
        before → depop-ready
      </text>
      {/* before: on the floor */}
      <rect x="20" y="40" width="124" height="124" rx="10" fill="#3b2d24" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1="20" y1={52 + i * 22} x2="144" y2={60 + i * 22} stroke="#2e231c" strokeWidth="5" />
      ))}
      <polygon points={tee(37, 58, 90)} fill="var(--color-blue)" fillOpacity="0.55" />
      <text x="166" y="106" fill="var(--color-faint)" fontSize="14" textAnchor="middle" style={mono}>
        →
      </text>
      {/* after: on white */}
      <rect x="188" y="40" width="124" height="124" rx="10" fill="var(--color-ink)" />
      <polygon points={tee(205, 58, 90)} fill="var(--color-blue)" />
      <g transform="translate(214 150)">
        <rect width="98" height="24" rx="12" fill="var(--color-pink)" />
        <text x="49" y="16" fill="var(--color-bg)" fontSize="10" textAnchor="middle" style={mono} fontWeight="600">
          list at $36
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
          DMC chart · 3 threads
        </text>
      </g>
    </svg>
  );
}

const HORSE = [
  "..........MH..",
  ".........MHHH.",
  "........MHHHHH",
  "T......MHHH...",
  "TT.HHHHHHHH...",
  ".THHHHHHHHH...",
  "..HHHHHHHH....",
  "..H.H...H.H...",
  "..H.H...H.H...",
  "..D.D...D.D...",
];

function CyberdeckArt() {
  const px = 5;
  const horseColor: Record<string, string> = { H: "#a86b3c", M: "#4a2c1a", T: "#4a2c1a", D: "#2a1a10" };
  const stats = [
    { label: "hunger", c: "var(--color-pink)", w: 0.72 },
    { label: "mood · happy", c: "var(--color-green)", w: 0.9 },
    { label: "motion · hi!", c: "var(--color-purple)", w: 0.5 },
  ];
  return (
    <svg viewBox="0 0 320 190" className="h-full w-full" aria-hidden>
      <defs>
        <filter id="cd-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      <g transform="translate(20 28)">
        {/* LED strip glow behind the frame */}
        <rect x="-2" y="-2" width="174" height="138" rx="14" fill="none" stroke="var(--color-pink)" strokeWidth="5" opacity="0.7" filter="url(#cd-glow)" />
        <rect width="170" height="134" rx="12" fill="#161c30" stroke="var(--color-line-strong)" />
        <circle cx="85" cy="8" r="3" fill="var(--color-line-strong)" />
        {/* meadow screen */}
        <rect x="10" y="16" width="150" height="108" rx="4" fill="#5f9e4a" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} x={18 + ((i * 37) % 130)} y={26 + ((i * 23) % 88)} width="4" height="3" fill="#4f8a3d" />
        ))}
        {/* fence */}
        <g stroke="#e8d3a8" strokeWidth="2">
          <line x1="16" y1="30" x2="154" y2="30" />
          <line x1="16" y1="36" x2="154" y2="36" />
          {[18, 52, 86, 120, 152].map((x) => (
            <line key={x} x1={x} y1="26" x2={x} y2="40" />
          ))}
        </g>
        {/* trough */}
        <rect x="124" y="92" width="26" height="10" rx="2" fill="#7a5233" />
        <rect x="127" y="94" width="20" height="4" fill="var(--color-blue)" />
        {/* horse */}
        <g transform="translate(46 58)">
          {HORSE.map((row, y) =>
            row.split("").map((ch, x) =>
              ch === "." ? null : (
                <rect key={`${x}-${y}`} x={x * px} y={y * px} width={px} height={px} fill={horseColor[ch]} />
              ),
            ),
          )}
          <rect x={10 * px} y={1 * px} width={px * 0.6} height={px * 0.6} fill="#161c30" transform="translate(4 3)" />
        </g>
        <text x="62" y="54" fill="var(--color-pink)" fontSize="11" style={mono}>
          ♥
        </text>
      </g>
      {stats.map((s, i) => (
        <g key={s.label} transform={`translate(204 ${42 + i * 38})`}>
          <text x="0" y="0" fill="var(--color-muted)" fontSize="9" style={mono}>
            {s.label}
          </text>
          <rect y="7" width="100" height="8" rx="4" fill="#161c30" />
          <rect y="7" width={100 * s.w} height="8" rx="4" fill={s.c} />
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
    case "resell":
      return <ResellArt />;
    case "needlepoint":
      return <NeedlepointArt />;
    case "cyberdeck":
      return <CyberdeckArt />;
    case "patents":
      return <PatentsArt />;
    case "email":
      return <EmailArt />;
  }
}
