import React, { useRef } from "react";

// Dummy project data
const PROJECTS = [
  {
    name: "GreenTech Solutions",
    description: "Increased customer engagement by 30% and streamlined digital presence.",
    tags: ["Web Design", "Figma", "Responsive"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    url: "/ProjectDetailSection"
  },
  {
    name: "StudioWave",
    description: "Brand overhaul led to 2x conversions and a striking digital facelift.",
    tags: ["Branding", "UI/UX", "Next.js"],
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3e49?auto=format&fit=crop&w=800&q=80",
    url: "/case-studies/studiowave"
  },
  {
    name: "FitStack App",
    description: "Mobile-first redesign with real-time features grew retention by 40%.",
    tags: ["Mobile App", "React Native", "Real-time"],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    url: "/case-studies/fitstack-app"
  }
];

// Arrow icon SVG
const ArrowIcon = (
  <svg width="54" height="54" fill="none" viewBox="0 0 54 54">
    <circle cx="27" cy="27" r="26" fill="rgba(8,11,18,.38)" stroke="#fff" strokeWidth="1.1" opacity="0.15"/>
    <path d="M23 27h8m0 0-3-3m3 3-3 3" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function CaseStudies() {
  // Track hovered state for each image
  const hoverRefs = useRef([]);

  // For clean fade, just use css for arrow overlay per card
  return (
    <section style={{ background: "#000", width: "100vw", padding: "0", margin: 0, minHeight: "88vh" }}>
      <div style={{ maxWidth: 1020, margin: "0 auto", padding: "52px 0 0 0", textAlign: "center" }}>
        <h1 style={{
          fontFamily: "Inter, Segoe UI, Arial, sans-serif",
          fontWeight: 500,
          fontSize: "4.4rem",
          letterSpacing: "-0.025em",
          color: "#e2e2e2",
          marginBottom: 12,
        }}>
          Case Studies
        </h1>
        <div style={{
          color: "#bcbcbc",
          fontWeight: 400,
          fontSize: "1.18rem",
          lineHeight: 1.48,
          marginBottom: 40,
          fontFamily: "Inter, Segoe UI, Arial, sans-serif"
        }}>
          Discover how our solutions have transformed businesses. Read our case studies to see real results and success stories.
        </div>
      </div>
      <div style={{
        maxWidth: 1180,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 48,
        alignItems: "center",
        padding: "20px 0 60px"
      }}>
        {PROJECTS.map((proj, idx) => (
          <div
            key={proj.name}
            style={{
              width: "100%",
              maxWidth: 1130,
              minHeight: 272,
              display: "flex",
              alignItems: "stretch",
              borderRadius: "2.1rem",
              background: "linear-gradient(115deg, rgba(39,39,41,0.24) 54%, rgba(18,18,20,0.38) 100%)",
              boxShadow: "0 8px 64px rgba(0,0,0,0.19), 0 0.5px 14px 0 rgba(100,100,100,0.07) inset",
              backdropFilter: "blur(13px) saturate(113%)",
              WebkitBackdropFilter: "blur(13px) saturate(113%)",
              border: "1.8px solid rgba(255,255,255,0.03)",
              overflow: "hidden",
              position: "relative"
            }}
          >
            {/* Image */}
            <a
              href={proj.url}
              style={{
                width: 360,
                minWidth: 300,
                height: "100%",
                position: "relative",
                display: "block",
                textDecoration: "none",
                border: "none",
                background: "none",
                flexShrink: 0,
                transition: "box-shadow 0.17s"
              }}
              onMouseEnter={() => {
                if (hoverRefs.current[idx]) {
                  hoverRefs.current[idx].style.opacity = "1";
                  hoverRefs.current[idx].style.transform = "translateY(0)";
                }
              }}
              onMouseLeave={() => {
                if (hoverRefs.current[idx]) {
                  hoverRefs.current[idx].style.opacity = "0";
                  hoverRefs.current[idx].style.transform = "translateY(26px)";
                }
              }}
            >
              <img
                src={proj.image}
                alt={proj.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  minHeight: 230,
                  maxHeight: 280,
                  display: "block",
                  borderTopLeftRadius: "2.1rem",
                  borderBottomLeftRadius: "2.1rem",
                  filter: "brightness(0.93)",
                  transition: "filter 0.15s"
                }}
                loading="lazy"
              />
              {/* Fade-in arrow overlay */}
              <span
                ref={el => hoverRefs.current[idx] = el}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  zIndex: 10,
                  transform: "translate(-50%, 26px)",
                  opacity: 0,
                  transition: "opacity 0.26s cubic-bezier(.55,0,.18,1.2), transform 0.32s cubic-bezier(.55,0,.18,1.2)",
                  pointerEvents: "none"
                }}
              >
                {ArrowIcon}
              </span>
            </a>
            {/* Content */}
            <div style={{
              flex: 1,
              padding: "38px 42px 36px 46px",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              <div style={{
                fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                fontWeight: 600,
                fontSize: "2.1rem",
                color: "#f4f4f4",
                marginBottom: 17
              }}>
                {proj.name}
              </div>
              <div style={{
                color: "#b9b9b9",
                fontWeight: 400,
                fontSize: "1.13rem",
                lineHeight: 1.55,
                marginBottom: 33,
                fontFamily: "Inter, Segoe UI, Arial, sans-serif"
              }}>
                {proj.description}
              </div>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                {proj.tags.map((tag, i) =>
                  <span key={tag} style={{
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: "44px",
                    fontSize: "1.01rem",
                    color: "#dadada",
                    fontWeight: 500,
                    fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                    padding: "7px 23px 7px 16px",
                    border: "1.17px solid rgba(255,255,255,0.10)",
                    display: "inline-block"
                  }}>{tag}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
