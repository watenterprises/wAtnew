import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TABS = [
  { label: "Framer Design", icon: (<svg width="24" height="24" fill="none"><path d="M12 2v8H4l8-8zm0 8l8 8H4v-8h8zm0 0l8 8v-8h-8z" stroke="#fff" strokeWidth="1.7" /></svg>) },
  { label: "Web Design", icon: (<svg width="24" height="24" fill="none"><rect x="4" y="6" width="16" height="12" rx="2" stroke="#fff" strokeWidth="1.7"/><rect x="9" y="16" width="6" height="2" rx="0.8" stroke="#fff" strokeWidth="1.1"/></svg>) },
  { label: "Brand Identity", icon: (<svg width="24" height="24" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#fff" strokeWidth="1.7"/><circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="1.5"/></svg>) },
  { label: "Graphic Design", icon: (<svg width="24" height="24" fill="none"><rect x="6" y="6" width="12" height="12" rx="2" stroke="#fff" strokeWidth="1.7"/><path d="M18 6L6 18" stroke="#fff" strokeWidth="1.1"/></svg>) },
  { label: "Research", icon: (<svg width="24" height="24" fill="none"><circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="1.7"/><line x1="17.5" y1="17.5" x2="21" y2="21" stroke="#fff" strokeWidth="1.05" strokeLinecap="round"/></svg>) },
];

const ArrowIcon = (
  <svg width="24" height="24" fill="none">
    <path d="M7 17l5-5 5 5M12 12V6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function MarqueeCard({ label, icon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        flex: "0 0 auto",
        minWidth: "180px",
        maxWidth: "220px",
        height: 56,
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "0 20px",
        borderRadius: 14,
        background: "linear-gradient(135deg, rgba(32,32,32,0.87) 60%, rgba(8,8,8,0.98) 100%)",
        boxShadow: "0 2px 11px rgba(0,0,0,0.11), 0 1.5px 5px rgba(80,80,80,0.12) inset",
        border: "1.2px solid rgba(128,128,128,0.08)",
        cursor: "pointer",
        userSelect: "none",
        transition: "background 0.18s cubic-bezier(.4,0,.2,1)"
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <span style={{
          position: "absolute",
          transition: "opacity 0.18s, transform 0.22s",
          opacity: hovered ? 0 : 1,
          transform: hovered ? "translateY(-10px)" : "translateY(0)"
        }}>
          {icon}
        </span>
        <span style={{
          position: "absolute",
          transition: "opacity 0.16s, transform 0.18s",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(13px)"
        }}>
          {ArrowIcon}
        </span>
      </span>
      <span style={{
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        fontSize: "0.95rem",
        lineHeight: 1.3,
      }}>
        {label}
      </span>
    </div>
  );
}

export default function ProjectShowcaseSection() {
  const marqueeOuterRef = useRef(null);
  const marqueeRef = useRef(null);
  const imageRef = useRef(null);

  const CARD_COUNT = TABS.length;
  const CARD_GAP = 20;
  const CARD_WIDTH = 200;
  const rowWidth = CARD_COUNT * CARD_WIDTH + (CARD_COUNT - 1) * CARD_GAP;

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        gsap.killTweensOf(marqueeRef.current);
        gsap.to(marqueeRef.current, {
          x: `-${rowWidth}px`,
          duration: 15,
          ease: "linear",
          repeat: -1,
        });
      }

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, y: 60, scale: 0.93 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }
    }, marqueeOuterRef);

    return () => ctx.revert();
  }, [rowWidth]);

  return (
    <section
      style={{
        background: "#000",
        color: "#eee",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        padding: "0 16px"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", paddingBottom: "32px" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginTop: 60, marginBottom: 36 }}>
          <div style={{
            fontFamily: "Inter, Segoe UI, Arial, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
            letterSpacing: "-0.02em",
            color: "#f3f3f3",
            lineHeight: 1.2,
            marginBottom: 18,
          }}>
            Our designers work with <br />
            <span style={{ color: "#bababa", fontWeight: 400 }}>
              a wide range of projects
            </span>
          </div>
          <div style={{
            color: "#8b8b8b",
            fontWeight: 400,
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            lineHeight: 1.6,
            maxWidth: 600,
            margin: "20px auto 0",
            fontFamily: "Inter, Segoe UI, Arial, sans-serif",
          }}>
            From landing pages to full websites, UI/UX to ongoing updates
            <br />—our expert designers bring your vision to life, hassle-free.
          </div>
        </div>

        {/* Marquee */}
        <div
          ref={marqueeOuterRef}
          style={{
            width: "100%",
            overflow: "hidden",
            margin: "38px auto 44px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            ref={marqueeRef}
            style={{
              display: "flex",
              gap: `${CARD_GAP}px`,
              width: `${rowWidth * 2}px`,
              willChange: "transform",
            }}
          >
            {[...TABS, ...TABS].map((tab, i) => (
              <MarqueeCard key={i + tab.label} label={tab.label} icon={tab.icon} />
            ))}
          </div>

          {/* Edge gradients */}
          <div style={{
            pointerEvents: "none",
            position: "absolute",
            left: 0,
            top: 0,
            width: 60,
            height: "100%",
            background: "linear-gradient(90deg, #000 0%, rgba(0,0,0,0) 100%)",
            zIndex: 2,
          }}/>
          <div style={{
            pointerEvents: "none",
            position: "absolute",
            right: 0,
            top: 0,
            width: 60,
            height: "100%",
            background: "linear-gradient(270deg, #000 0%, rgba(0,0,0,0) 100%)",
            zIndex: 2,
          }}/>
        </div>

        {/* Image */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
          minHeight: 320,
        }}>
          <figure
            ref={imageRef}
            style={{
              width: "100%",
              maxWidth: "90vw",
              height: "clamp(240px, 50vw, 420px)",
              borderRadius: 20,
              overflow: "hidden",
              background: "#262626",
              margin: 0,
              boxShadow: "0 16px 60px rgba(14 15 20 / 17%), 0 2px 18px rgba(50 50 70 / 16%)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block"
              }}
              alt="Designer work example"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
