import React from "react";

export default function CTAGlassBox() {
  return (
    <section
      style={{
        background: "#000",
        width: "100vw",
        minHeight: "55vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "70px 0 90px 0",
      }}
    >
      <div
        style={{
          borderRadius: "2.4rem",
          background: "rgba(255,255,255,0.08)", // lighter translucent glass
          boxShadow:
            "0 12px 66px rgba(13,14,16,0.35), 0 1.8px 32px rgba(255,255,255,0.08) inset",
          width: 1050,
          maxWidth: "97vw",
          margin: "0 auto",
          padding: "68px 40px 78px 40px",
          textAlign: "center",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 2,
          backdropFilter: "blur(22px)", // glassmorphism effect
          WebkitBackdropFilter: "blur(22px)",
          border: "1.7px solid rgba(255,255,255,0.1)", // subtle border
        }}
      >
        {/* Subtle grid overlay (optional) */}
        <div
          aria-hidden
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "repeating-linear-gradient(90deg,rgba(255,255,255,0.05) 0 1px,transparent 1px 62px),repeating-linear-gradient(0deg,rgba(255,255,255,0.05) 0 1px,transparent 1px 62px)",
            opacity: 0.12,
            borderRadius: "2.4rem",
          }}
        />

        {/* Availability badge */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            margin: "0 auto 30px auto",
            padding: "0.48rem 1.22rem",
            borderRadius: 999,
            background: "rgba(255,255,255,0.1)", // softer transparency
            color: "#81eca7",
            fontWeight: 500,
            fontSize: "1.07rem",
            display: "inline-flex",
            alignItems: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            border: "1.2px solid rgba(60,180,90,0.12)",
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 40%, #7cf4c9 70%, #20c075 125%)",
              display: "inline-block",
              marginRight: 10,
              boxShadow: "0 0 0 2.5px rgba(110,255,185,0.16)",
            }}
          />
          <span>Spots open for September projects</span>
        </div>

        {/* Heading */}
        <h2
          style={{
            position: "relative",
            zIndex: 2,
            fontFamily: "Inter, Segoe UI, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "2.3rem",
            color: "#e4e5e7",
            marginBottom: 23,
            letterSpacing: "-0.01em",
            textShadow: "0 2.5px 20px rgba(14,14,14,0.2)",
          }}
        >
          Let’s build your next digital flagship
        </h2>

        {/* Subtitle */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "#cfcfcf",
            fontWeight: 400,
            fontSize: "1.08rem",
            marginBottom: 44,
            maxWidth: 710,
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "Inter, Segoe UI, Arial, sans-serif",
          }}
        >
          Join our premium subscription and partner with senior designers for a
          website or product you love—delivered fast, with style and care.
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          style={{
            position: "relative",
            zIndex: 2,
            display: "inline-block",
            background: "linear-gradient(90deg, #178bf4 0%, #2285e3 100%)",
            color: "#fff",
            fontFamily: "Inter,Segoe UI,Arial,sans-serif",
            fontWeight: 600,
            fontSize: "1.04rem",
            padding: "13px 32px",
            borderRadius: "14px",
            letterSpacing: "-0.01em",
            boxShadow:
              "0 7px 22px rgba(16,90,223,0.2), 0 1.5px 8px rgba(24,50,80,0.1) inset",
            border: "none",
            marginTop: 8,
            cursor: "pointer",
            transition: "background 0.2s cubic-bezier(.33,1.2,.07,1)",
            outline: "none",
            textDecoration: "none",
          }}
        >
          Book your intro call
        </a>
      </div>
    </section>
  );
}
