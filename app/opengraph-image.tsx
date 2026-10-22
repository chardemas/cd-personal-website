import { ImageResponse } from "next/og";

export const alt = "Charlotte Demas, Software Engineer in New York";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const threads = ["#ff4fd2", "#b45cff", "#ff3366", "#3dffa2", "#3b8cff"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0c0b0a",
          backgroundImage: "radial-gradient(rgba(243,237,228,0.08) 2px, transparent 2px)",
          backgroundSize: "28px 28px",
          color: "#f3ede4",
        }}
      >
        <div style={{ display: "flex", gap: 14 }}>
          {threads.map((c) => (
            <div key={c} style={{ width: 44, height: 16, borderRadius: 8, background: c, transform: "rotate(-45deg)" }} />
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 112, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}>
            Charlotte Demas<span style={{ color: "#ff4fd2" }}>.</span>
          </div>
          <div style={{ fontSize: 36, color: "#aaa296", marginTop: 28 }}>
            Software engineer · full-stack, backend & AI/ML · New York
          </div>
        </div>
      </div>
    ),
    size,
  );
}
