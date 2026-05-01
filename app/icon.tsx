import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const PACIFICO_TTF =
  "https://raw.githubusercontent.com/google/fonts/main/ofl/pacifico/Pacifico-Regular.ttf";

async function loadPacifico(): Promise<ArrayBuffer> {
  return fetch(PACIFICO_TTF).then((r) => r.arrayBuffer());
}

export default async function Icon() {
  const fontData = await loadPacifico();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ff7a3d",
          color: "#0a0a0a",
          fontFamily: "Pacifico",
          fontSize: 28,
          paddingBottom: 3,
        }}
      >
        c
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Pacifico",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
