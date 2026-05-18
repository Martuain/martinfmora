import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8f6f1",
          color: "#111318",
          padding: 72,
          fontFamily: "Inter"
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 0 }}>Martin Mora</div>
        <div>
          <div style={{ fontSize: 78, lineHeight: 1, maxWidth: 930 }}>
            Business outcomes from strategy, AI, and digital systems.
          </div>
          <div style={{ marginTop: 34, fontSize: 28, color: "#5f6f52" }}>{siteConfig.url}</div>
        </div>
      </div>
    ),
    size
  );
}
