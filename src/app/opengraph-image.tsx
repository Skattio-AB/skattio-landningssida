import { ImageResponse } from "next/og";

export const alt = "Skattio — Skattehjälp som faktiskt hjälper";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const interBold = fetch(
    new URL("../../public/fonts/Inter-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const interRegular = fetch(
    new URL("../../public/fonts/Inter-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const logoSvg = await fetch(
    new URL("../../public/Logodark.svg", import.meta.url)
  ).then((res) => res.text());
  const logoDataUri = `data:image/svg+xml;base64,${btoa(logoSvg)}`;

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
          background:
            "linear-gradient(135deg, #ffffff 0%, #ffffff 50%, #EEF0F6 100%)",
          padding: "60px 80px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Inter",
        }}
      >
        {/* Accent glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(232,89,12,0.08) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Accent glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -100,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(26,35,66,0.06) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo */}
        <img
          src={logoDataUri}
          alt="Skattio"
          width={220}
          height={55}
          style={{ marginBottom: 40 }}
        />

        {/* Main heading */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <span
            style={{
              fontSize: 62,
              fontWeight: 700,
              color: "#0A0A0B",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Skattehjälp som faktiskt hjälper
          </span>
          <span
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: "#525252",
              textAlign: "center",
              lineHeight: 1.5,
              maxWidth: 700,
            }}
          >
            Deklarera enkelt — oavsett om du sålt bostad, hyr ut eller behöver
            hjälp med avdrag.
          </span>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(90deg, transparent, #E8590C, #F5C842, #E8590C, transparent)",
            display: "flex",
          }}
        />

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#737373",
            }}
          >
            skattio.se
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Inter",
          data: await interRegular,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
