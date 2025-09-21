import React from "react";

// Glassmorphism stat circle icon SVGs
const stats = [
  {
    value: "30%",
    label: "More conversions",
    icon: (
      <svg width="46" height="46" viewBox="0 0 32 32" fill="none">
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
      <svg width="46" height="46" viewBox="0 0 32 32" fill="none">
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
      <svg width="46" height="46" viewBox="0 0 32 32" fill="none">
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
    <div style={{
      background: "#000",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      padding: "0",
      minHeight: 194
    }}>
      <div style={{
        maxWidth: 1080,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 36,
        padding: "44px 0 36px"
      }}>
        {stats.map((stat, i) =>
          <div key={i} style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 34
          }}>
            <div style={{
              width: 122,
              height: 122,
              minWidth: 122,
              minHeight: 122,
              borderRadius: "50%",
              background: "radial-gradient(ellipse at 52% 61%,rgba(63,63,63,0.27) 65%,rgba(0,0,0,0.14) 100%)",
              boxShadow: "0 4px 34px rgba(0,0,0,0.27), 0 2px 9px 0 rgba(80,80,80,0.11) inset",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {stat.icon}
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "2.2rem",
                marginBottom: 4,
                lineHeight: "1.1"
              }}>{stat.value}</div>
              <div style={{
                color: "#b1b1b1",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "1.14rem",
                letterSpacing: 0
              }}>
                {stat.label}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
