import React from "react";

// Glassmorphism stat circle icon SVGs
const stats = [
  {
    value: "30%",
    label: "More conversions",
    icon: (
      <svg width="42" height="42" viewBox="0 0 32 32" fill="none">
        <g opacity="0.89" stroke="#fff" strokeWidth="1.5">
          <path d="M6 26V14l4 3 7-9 9 12" strokeLinejoin="round"/>
          <circle cx="22.7" cy="20.5" r="1.6" />
        </g>
      </svg>
    )
  },
  {
    value: "50%",
    label: "More engagement",
    icon: (
      <svg width="42" height="42" viewBox="0 0 32 32" fill="none">
        <g opacity="0.89" stroke="#fff" strokeWidth="1.5">
          <path d="M16 25v-6m0 0l-2-2m2 2l2-2m-2 2l-2 .5m2-.5l2 .5" strokeLinejoin="round"/>
          <circle cx="16" cy="14" r="8" />
        </g>
      </svg>
    )
  },
  {
    value: "99%",
    label: "Customer satisfaction",
    icon: (
      <svg width="42" height="42" viewBox="0 0 32 32" fill="none">
        <g opacity="0.89" stroke="#fff" strokeWidth="1.5">
          <path d="M16 25v-6m0 0l-2-2m2 2l2-2m-2 2l-2 .5m2-.5l2 .5" strokeLinejoin="round"/>
          <circle cx="16" cy="14" r="8" />
        </g>
      </svg>
    )
  }
];

export function StatsGlassRow() {
  return (
    <div
      style={{
        background: "#000",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        padding: "0",
        minHeight: 160
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 28,
          padding: "28px 0 24px",
          flexWrap: "wrap" // ✅ makes it wrap on smaller screens
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 260px", // ✅ allows shrinking & stacking
              display: "flex",
              alignItems: "center",
              gap: 24,
              marginBottom: 16, // ✅ spacing when stacked
              justifyContent: "center"
            }}
          >
            <div
              style={{
                width: 100,
                height: 100,
                minWidth: 100,
                minHeight: 100,
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse at 52% 61%,rgba(63,63,63,0.27) 65%,rgba(0,0,0,0.14) 100%)",
                boxShadow:
                  "0 4px 24px rgba(0,0,0,0.25), 0 2px 6px 0 rgba(80,80,80,0.1) inset",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {stat.icon}
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.6rem",
                  marginBottom: 2,
                  lineHeight: "1.1"
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: "#b1b1b1",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "1rem",
                  letterSpacing: 0
                }}
              >
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
