import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Obifoks Global & Felicity Nig. Ltd. | Solar Energy & Storage Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0E",
          backgroundImage: "radial-gradient(circle at 85% 15%, rgba(238, 113, 48, 0.25) 0%, transparent 50%)",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "#FFFFFF",
          position: "relative",
        }}
      >
        {/* Top Accent Bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            backgroundColor: "#EE7130",
          }}
        />

        {/* Header Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {/* Logo Icon */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#EE7130",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#000000",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: "36px", fontWeight: 900, letterSpacing: "-0.02em" }}>
              <span>OBIFOKS&nbsp;</span>
              <span style={{ color: "#EE7130" }}>GLOBAL</span>
            </div>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#A1A1AA", letterSpacing: "0.15em" }}>
              &amp; FELICITY NIG. LTD.
            </div>
          </div>
        </div>

        {/* Main Body */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
            }}
          >
            Solar Energy &amp; Storage Solutions
          </div>
          <div style={{ fontSize: "24px", color: "#EE7130", fontWeight: 600 }}>
            Official Felicity Solar Distributor in Owerri, Imo State
          </div>
        </div>

        {/* Badges / Product Categories */}
        <div style={{ display: "flex", gap: "16px", width: "100%" }}>
          <div
            style={{
              padding: "14px 28px",
              backgroundColor: "rgba(238, 113, 48, 0.12)",
              border: "1px solid rgba(238, 113, 48, 0.4)",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            SOLAR PANELS
          </div>
          <div
            style={{
              padding: "14px 28px",
              backgroundColor: "rgba(238, 113, 48, 0.12)",
              border: "1px solid rgba(238, 113, 48, 0.4)",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            LITHIUM BATTERIES
          </div>
          <div
            style={{
              padding: "14px 28px",
              backgroundColor: "rgba(238, 113, 48, 0.12)",
              border: "1px solid rgba(238, 113, 48, 0.4)",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            HYBRID INVERTERS
          </div>
          <div
            style={{
              padding: "14px 28px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#D4D4D8",
            }}
          >
            CCTV &amp; LIGHTING
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
