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
          background: "#2f7d64",
          boxShadow: "inset 0 -7px 0 #235e4d",
          gap: 5,
        }}
      >
        <div
          style={{
            width: 15,
            height: 31,
            display: "flex",
            borderRadius: 3,
            background: "white",
          }}
        />
        <div
          style={{
            width: 15,
            height: 23,
            display: "flex",
            marginTop: 8,
            borderRadius: 3,
            background: "#f5c66a",
          }}
        />
      </div>
    ),
    size,
  );
}
