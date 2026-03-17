import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: "-0.02em" }}>
          Hervé M. Ngenzi
        </div>
        <div style={{ marginTop: 24, fontSize: 34, color: "#e2e8f0" }}>
          Full-Stack Web Developer
        </div>
        <div style={{ marginTop: 20, fontSize: 24, color: "#94a3b8" }}>
          Scalable backends, robust APIs, clean software
        </div>
      </div>
    ),
    size
  );
}
