import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TABS = [
  {
    label: "Framer Design",
    icon: (
      <svg width="24" height="24" fill="none">
        <path d="M12 2v8H4l8-8zm0 8l8 8H4v-8h8zm0 0l8 8v-8h-8z" stroke="#fff" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    label: "Web Design",
    icon: (
      <svg width="24" height="24" fill="none">
        <rect x="4" y="6" width="16" height="12" rx="2" stroke="#fff" strokeWidth="1.7"/>
        <rect x="9" y="16" width="6" height="2" rx="0.8" stroke="#fff" strokeWidth="1.1"/>
      </svg>
    ),
  },
  {
    label: "Brand Identity",
    icon: (
      <svg width="24" height="24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="#fff" strokeWidth="1.7"/>
        <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "Graphic Design",
    icon: (
      <svg width="24" height="24" fill="none">
        <rect x="6" y="6" width="12" height="12" rx="2" stroke="#fff" strokeWidth="1.7"/>
        <path d="M18 6L6 18" stroke="#fff" strokeWidth="1.1"/>
      </svg>
    ),
  },
  {
    label: "Research",
    icon: (
      <svg width="24" height="24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="1.7"/>
        <line x1="17.5" y1="17.5" x2="21" y2="21" stroke="#fff" strokeWidth="1.05" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const ArrowIcon = (
  <svg width="24" height="24" fill="none">
    <path d="M7 17l5-5 5 5M12 12V6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function MarqueeCard({ label, icon }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      style={{
        width: 222,
        minWidth: 222,
        height: 56,
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "0 32px",
        borderRadius: 16,
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
      <span style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
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
        fontSize: "1.10rem",
        letterSpacing: "0"
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

  // Match the width for both image and marquee row
  const CARD_COUNT = TABS.length;
  const CARD_GAP = 28;
  const CARD_WIDTH = 222;
  const rowWidth = CARD_COUNT * CARD_WIDTH + (CARD_COUNT - 1) * CARD_GAP; // px

  // Setup GSAP animations (marquee + image fade-in with ScrollTrigger)
  useEffect(() => {
    // gsap.context helps scope selectors and ensures proper cleanup
    const ctx = gsap.context(() => {
      // Marquee infinite slide
      if (marqueeRef.current) {
        // Kill any previous tweens on the element first just in case
        gsap.killTweensOf(marqueeRef.current);

        gsap.to(marqueeRef.current, {
          x: `-${rowWidth}px`,
          duration: 15,
          ease: "linear",
          repeat: -1,
          // Force layering to avoid blurry transforms on some devices
          // yoyo: false,
        });
      }

      // Image fade-in with ScrollTrigger
      if (imageRef.current) {
        // Create the animation; ScrollTrigger will be attached to it
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
              // markers: true, // <-- uncomment for debugging
            },
          }
        );
      }
    }, marqueeOuterRef); // scope to marqueeOuterRef (safest)

    return () => {
      // revert will kill the tweens and any ScrollTrigger instances created in this context
      ctx.revert();
    };
  }, [rowWidth]); // re-run if rowWidth changes

  return (
    <section
      style={{
        background: "#000",
        color: "#eee",
        minHeight: "98vh",
        width: "100vw",
        overflow: "hidden",
        padding: "0"
      }}
    >
      <div style={{
        maxWidth: rowWidth + 60,
        margin: "0 auto",
        padding: "0 0 32px"
      }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginTop: 60, marginBottom: 36 }}>
          <div style={{
            fontFamily: "Inter, Segoe UI, Arial, sans-serif",
            fontWeight: 500,
            fontSize: "3.2rem",
            letterSpacing: "-0.03em",
            color: "#f3f3f3",
            lineHeight: 1.04,
            marginBottom: 18,
            wordSpacing: "-0.02em",
          }}>
            Our designers work with <br />
            <span style={{ color: "#bababa", fontWeight: 400 }}>
              a wide range of projects
            </span>
          </div>
          <div style={{
            color: "#8b8b8b",
            fontWeight: 400,
            fontSize: "1.22rem",
            lineHeight: 1.56,
            maxWidth: 560,
            margin: "22px auto 0",
            fontFamily: "Inter, Segoe UI, Arial, sans-serif",
          }}>
            From landing pages to full websites, UI/UX to ongoing updates
            <br />—our expert designers bring your vision to life, hassle-free.
          </div>
        </div>

        {/* --- Centered marquee row with gradient fades --- */}
        <div
          ref={marqueeOuterRef}
          style={{
            width: rowWidth,
            maxWidth: "90vw",
            overflow: "hidden",
            margin: "38px auto 44px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* Marquee: 2x the cards for seamless loop */}
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
              <MarqueeCard
                key={i + tab.label}
                label={tab.label}
                icon={tab.icon}
              />
            ))}
          </div>

          {/* Edge gradients - fade-to-black */}
          <div style={{
            pointerEvents: "none",
            position: "absolute",
            left: 0,
            top: 0,
            width: 100,
            height: "100%",
            background: "linear-gradient(90deg, #000 0%, rgba(0,0,0,0) 100%)",
            zIndex: 2,
          }}/>
          <div style={{
            pointerEvents: "none",
            position: "absolute",
            right: 0,
            top: 0,
            width: 100,
            height: "100%",
            background: "linear-gradient(270deg, #000 0%, rgba(0,0,0,0) 100%)",
            zIndex: 2,
          }}/>
        </div>

        {/* --- Image below --- */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 33,
          minHeight: 420,
        }}>
          <figure
            ref={imageRef}
            style={{
              width: rowWidth,
              maxWidth: "90vw",
              height: 420,
              borderRadius: 28,
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
