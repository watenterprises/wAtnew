import React from "react";

export default function WebsiteFooter() {
  return (
    <footer
      style={{
        width: "100vw",
        background:
          "radial-gradient(ellipse at 60% 0%,rgba(20,20,20,.61) 48%,rgba(6,6,6,.96) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: 0,
        margin: 0,
        minHeight: 120,
      }}
    >
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "38px 12px 38px 12px",
          fontFamily: "Inter,Segoe UI,Arial,sans-serif",
          flexWrap: "wrap",
          gap: 32,
        }}
      >
        {/* Left: logo/copyright */}
        <div style={{ flex: "1 1 200px", minWidth: 180, marginBottom: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 15,
            }}
          >
            <img
              src="/logo.png"
              alt="WAT Logo"
              style={{
                width: 120,
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
          <span
            style={{
              color: "#858585",
              fontSize: "1rem",
              fontWeight: 400,
              opacity: 0.92,
            }}
          >
            &copy; {new Date().getFullYear()}. Your design partner
          </span>
        </div>

        {/* Center: Company/Legal lists */}
        <div
          style={{
            flex: "2 1 260px",
            display: "flex",
            justifyContent: "center",
            gap: 42,
            minWidth: 220,
            flexWrap: "wrap",
          }}
        >
          {/* Company */}
          <div style={{ minWidth: 120, marginBottom: 24 }}>
            <span
              style={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "1.08rem",
                marginBottom: 10,
                display: "inline-block",
              }}
            >
              Company
            </span>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "17px 0 0 0",
                opacity: 0.87,
                fontSize: "1.08rem",
              }}
            >
              <li style={{ margin: "0 0 11px 0" }}>
                <a href="#services" style={footerLink}>
                  Services
                </a>
              </li>
              <li style={{ margin: "0 0 11px 0" }}>
                <a href="#case-studies" style={footerLink}>
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#about" style={footerLink}>
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div style={{ minWidth: 120 }}>
            <span
              style={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "1.08rem",
                marginBottom: 10,
                display: "inline-block",
              }}
            >
              Legal
            </span>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "17px 0 0 0",
                opacity: 0.87,
                fontSize: "1.08rem",
              }}
            >
              <li style={{ margin: "0 0 11px 0" }}>
                <a href="#privacy" style={footerLink}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" style={footerLink}>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Socials */}
        <div
          style={{
            flex: "1.2 1 170px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            minWidth: 140,
          }}
        >
          <div style={{ display: "flex", gap: 17, marginTop: 2 }}>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={glassIconBtn}
              aria-label="X"
            >
              <svg width="21" height="21" fill="none" viewBox="0 0 21 21">
                <path
                  d="M4.5 16.5L16.5 4.5M4.5 4.5l12 12"
                  stroke="#fff"
                  strokeWidth="1.37"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={glassIconBtn}
              aria-label="Instagram"
            >
              <svg width="21" height="21" fill="none" viewBox="0 0 21 21">
                <rect
                  x="4.4"
                  y="4.4"
                  width="12.2"
                  height="12.2"
                  rx="4.1"
                  stroke="#fff"
                  strokeWidth="1.24"
                />
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="3.35"
                  stroke="#fff"
                  strokeWidth="1.16"
                />
                <circle cx="15.09" cy="5.91" r="0.92" fill="#fff" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={glassIconBtn}
              aria-label="LinkedIn"
            >
              <svg width="21" height="21" fill="none" viewBox="0 0 21 21">
                <rect
                  x="2.6"
                  y="3.7"
                  width="15.8"
                  height="13.6"
                  rx="3.3"
                  stroke="#fff"
                  strokeWidth="1.14"
                />
                <rect
                  x="6.3"
                  y="8.2"
                  width="2.5"
                  height="6"
                  rx="1"
                  stroke="#fff"
                  strokeWidth="1.12"
                />
                <circle cx="7.55" cy="6.85" r="1.12" fill="#fff" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Responsive layout for mobile */}
      <style>{`
        @media (max-width: 820px) {
          footer > div {
            flex-direction: column;
            align-items: stretch !important;
            padding: 26px 4vw 26px 4vw !important;
            gap: 22px !important;
          }
          footer > div > div {
            align-items: flex-start !important;
            margin-bottom: 18px !important;
            min-width: 0 !important;
          }
          footer > div > div:last-child {
            align-items: flex-start !important;
            margin-bottom: 0 !important;
          }
        }
        @media (max-width: 480px) {
          footer span, footer ul, footer a {
            font-size: 0.97rem !important;
          }
          footer > div {
            padding: 20px 2vw 20px 2vw !important;
          }
        }
      `}</style>
    </footer>
  );
}

const footerLink = {
  color: "#bcbcbc",
  textDecoration: "none",
  fontWeight: 500,
  letterSpacing: "-0.01em",
  opacity: 0.95,
  transition: "color 0.15s",
};
const glassIconBtn = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: 8,
  padding: "10px 12px",
  display: "flex",
  alignItems: "center",
  boxShadow: "0 2px 10px rgba(80,90,120,0.11)",
  border: "1px solid rgba(255,255,255,0.09)",
  transition: "background 0.15s",
};
