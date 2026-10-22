import { ImageResponse } from "next/og";

export const alt = "Charlotte Demas, Software Engineer in New York";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#0a0e1a",
          backgroundImage: "radial-gradient(rgba(243,237,228,0.08) 2px, transparent 2px)",
          backgroundSize: "28px 28px",
          color: "#f3ede4",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 24,
            border: "3px solid #b69cff",
            color: "#ff7eb6",
            fontSize: 44,
            fontStyle: "italic",
            fontFamily: "serif",
          }}
        >
          CD
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 112, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}>
            Charlotte Demas
          </div>
          <div style={{ fontSize: 36, color: "#c9cbd6", marginTop: 28 }}>
            Software Engineer · Bank of America · New York
          </div>
        </div>
      </div>
    ),
    size,
  );
}
