import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 18,
          color: "white",
          background: "#2f7d64",
          boxShadow: "inset 0 -7px 0 #235e4d",
          fontSize: 34,
          fontWeight: 800,
        }}
      >
        区
      </div>
    ),
    size,
  );
}
