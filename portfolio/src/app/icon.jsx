import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: "25px",
          display: "flex",
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          color: "white",
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
