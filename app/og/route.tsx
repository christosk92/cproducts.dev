import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? site.name;
  const subtitle = searchParams.get("subtitle") ?? site.description;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafaf7",
          padding: "80px",
          fontFamily: "Georgia, serif",
          color: "#0a0a0a",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 24,
            color: "#6b6b66",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#ff7a3d",
            }}
          />
          <div style={{ display: "flex" }}>cproducts</div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 88,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#6b6b66",
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex", maxWidth: 700 }}>{subtitle}</div>
          <div style={{ display: "flex", fontFamily: "monospace" }}>
            cproducts.dev
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
