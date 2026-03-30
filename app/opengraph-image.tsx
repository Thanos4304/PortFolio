import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Sairavi Ganesh Viswanathan — Portfolio"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0e0e11",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Grid pattern background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(251,191,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Amber glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Top status bar */}
        <div
          style={{
            position: "absolute",
            top: "32px",
            left: "80px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fbbf24" }} />
          <span style={{ color: "#fbbf24", fontSize: "13px", letterSpacing: "2px" }}>
            sairavi@portfolio
          </span>
          <span style={{ color: "#3f3f46", fontSize: "13px", marginLeft: "auto" }}>
            portfolio.sairavi.dev
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative" }}>
          {/* Terminal prompt */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "#fbbf24", fontSize: "20px" }}>$</span>
            <span style={{ color: "#52525b", fontSize: "20px" }}>whoami</span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: "700",
              color: "#e4e4e7",
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Sairavi Ganesh
            <span style={{ color: "#fbbf24" }}>_</span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "26px",
              color: "#fbbf24",
              letterSpacing: "1px",
              fontFamily: "monospace",
            }}
          >
            Full Stack Developer &amp; ML Enthusiast
          </div>

          {/* Divider */}
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "#fbbf24",
              opacity: 0.4,
              marginTop: "8px",
            }}
          />

          {/* Tags */}
          <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
            {["React", "Next.js", "TypeScript", "Python", "ML & AI"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 16px",
                  border: "1px solid rgba(251,191,36,0.3)",
                  borderRadius: "6px",
                  color: "#a1a1aa",
                  fontSize: "15px",
                  background: "rgba(251,191,36,0.05)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Illinois Tech */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "80px",
            color: "#52525b",
            fontSize: "15px",
            fontFamily: "monospace",
          }}
        >
          Computer Engineering @ Illinois Institute of Technology · Chicago, IL
        </div>
      </div>
    ),
    { ...size }
  )
}
