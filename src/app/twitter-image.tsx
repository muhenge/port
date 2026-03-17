import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #111827 50%, #1f2937 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 68, fontWeight: 700, letterSpacing: "-0.02em" }}>
          Hervé M. Ngenzi
        </div>
        <div style={{ marginTop: 22, fontSize: 32, color: "#e2e8f0" }}>
          Full-Stack Web Developer
        </div>
        <div style={{ marginTop: 18, fontSize: 22, color: "#94a3b8" }}>
          Scalable backends, robust APIs, clean software
        </div>
      </div>
    ),
    size
  );
}
