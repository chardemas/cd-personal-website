// Manhattan skyline silhouette with neon-lit windows. Deterministic so server and client agree.

const NEON = ["#ff4fd2", "#ff3366", "#3b8cff", "#3dffa2", "#b45cff"];

function rand(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

type Building = { x: number; w: number; h: number; spire?: "empire" | "chrysler" | "antenna" };

const buildings: Building[] = [];
{
  let x = 0;
  let i = 0;
  while (x < 1200) {
    const w = 28 + Math.floor(rand(i) * 46);
    let h = 50 + Math.floor(rand(i + 100) * 120);
    let spire: Building["spire"];
    if (x > 380 && x < 440 && !buildings.some((b) => b.spire === "empire")) {
      spire = "empire";
      h = 190;
    } else if (x > 700 && x < 780 && !buildings.some((b) => b.spire === "chrysler")) {
      spire = "chrysler";
      h = 165;
    } else if (rand(i + 7) > 0.85) spire = "antenna";
    buildings.push({ x, w, h, spire });
    x += w + 2;
    i++;
  }
}

export default function Skyline({ className = "" }: { className?: string }) {
  const H = 260;
  return (
    <svg viewBox={`0 0 1200 ${H}`} preserveAspectRatio="xMidYMax slice" className={className} aria-hidden>
      <defs>
        <linearGradient id="sky-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1622" />
          <stop offset="100%" stopColor="#0f0d12" />
        </linearGradient>
      </defs>
      {buildings.map((b, i) => {
        const top = H - b.h;
        const cx = b.x + b.w / 2;
        const windows = [];
        for (let wy = top + 10; wy < H - 8; wy += 11) {
          for (let wx = b.x + 5; wx < b.x + b.w - 6; wx += 8) {
            const r = rand(wx * 13 + wy * 7);
            if (r > 0.86) {
              windows.push(
                <rect
                  key={`${wx}-${wy}`}
                  x={wx}
                  y={wy}
                  width="3"
                  height="4"
                  fill={NEON[Math.floor(r * 1000) % NEON.length]}
                  className={r > 0.985 ? "window-flicker" : undefined}
                  opacity={0.55 + (r - 0.86) * 3}
                />,
              );
            }
          }
        }
        return (
          <g key={i}>
            {b.spire === "empire" && (
              <path
                d={`M${cx - 14} ${top} v-14 h28 v14 M${cx - 8} ${top - 14} v-14 h16 v14 M${cx - 3} ${top - 28} v-14 h6 v14 M${cx} ${top - 42} v-26`}
                fill="url(#sky-fade)"
                stroke="#ff4fd2"
                strokeOpacity="0.6"
              />
            )}
            {b.spire === "chrysler" && (
              <path
                d={`M${cx - 14} ${top} Q ${cx} ${top - 60} ${cx + 14} ${top} Z M${cx} ${top - 44} v-28`}
                fill="url(#sky-fade)"
                stroke="#3b8cff"
                strokeOpacity="0.7"
              />
            )}
            {b.spire === "antenna" && <path d={`M${cx} ${top} v-18`} stroke="#ffffff22" />}
            <rect x={b.x} y={top} width={b.w} height={b.h} fill="url(#sky-fade)" />
            {windows}
          </g>
        );
      })}
    </svg>
  );
}
