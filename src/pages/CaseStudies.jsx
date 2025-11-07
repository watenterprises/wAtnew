import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

gsap.registerPlugin(ScrollTrigger);

// Arrow icon SVG
const ArrowIcon = (
  <svg width="54" height="54" fill="none" viewBox="0 0 54 54">
    <circle
      cx="27"
      cy="27"
      r="26"
      fill="rgba(8,11,18,.38)"
      stroke="#fff"
      strokeWidth="1.1"
      opacity="0.15"
    />
    <path
      d="M23 27h8m0 0-3-3m3 3-3 3"
      stroke="#fff"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function CaseStudies() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const hoverRefs = useRef([]);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  // ✅ Fetch data from Firestore
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectData);
      } catch (err) {
        console.error("❌ Error fetching Firestore projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // ✅ GSAP Animations
  useEffect(() => {
    if (!projects.length) return;

    gsap.set(cardRefs.current, { opacity: 0, y: 80, scale: 0.95 });

    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
          delay: index * 0.15,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [projects]);

  if (loading)
    return (
      <div className="text-white text-center mt-20 text-lg font-light">
        Loading projects...
      </div>
    );

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#000",
        width: "100vw",
        padding: "0",
        margin: 0,
        minHeight: "88vh",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          maxWidth: "min(1020px, 90vw)",
          margin: "0 auto",
          padding: "clamp(32px, 5vw, 52px) 20px 0",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Inter, Segoe UI, Arial, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(2.2rem, 6vw, 4.4rem)",
            letterSpacing: "-0.025em",
            color: "#e2e2e2",
            marginBottom: "clamp(8px, 1.5vw, 12px)",
          }}
        >
          Case Studies
        </h1>
        <div
          style={{
            color: "#bcbcbc",
            fontWeight: 400,
            fontSize: "clamp(1rem, 2vw, 1.18rem)",
            lineHeight: 1.48,
            marginBottom: "clamp(24px, 4vw, 40px)",
            fontFamily: "Inter, Segoe UI, Arial, sans-serif",
            padding: "0 10px",
          }}
        >
          Discover how our solutions have transformed businesses. Read our case
          studies to see real results and success stories.
        </div>
      </div>

      {/* Cards Container */}
      <div
        style={{
          maxWidth: "min(1180px, 95vw)",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(28px, 5vw, 48px)",
          alignItems: "center",
          padding: "20px 15px clamp(40px, 8vw, 60px)",
        }}
      >
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="case-study-card"
            style={{
              width: "100%",
              maxWidth: 1130,
              minHeight: "clamp(200px, 50vw, 272px)",
              display: "flex",
              flexDirection: window.innerWidth <= 768 ? "column" : "row",
              alignItems: "stretch",
              borderRadius: "clamp(1.2rem, 3vw, 2.1rem)",
              background:
                "linear-gradient(115deg, rgba(39,39,41,0.24) 54%, rgba(18,18,20,0.38) 100%)",
              boxShadow:
                "0 8px 64px rgba(0,0,0,0.19), 0 0.5px 14px 0 rgba(100,100,100,0.07) inset",
              backdropFilter: "blur(13px) saturate(113%)",
              WebkitBackdropFilter: "blur(13px) saturate(113%)",
              border: "1.8px solid rgba(255,255,255,0.03)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Image */}
            <Link
              to={`/projects/${proj.id}`}
              style={{
                width:
                  window.innerWidth <= 768
                    ? "100%"
                    : "clamp(280px, 30vw, 360px)",
                height: window.innerWidth <= 768 ? "200px" : "100%",
                position: "relative",
                display: "block",
                textDecoration: "none",
                flexShrink: 0,
                transition: "box-shadow 0.17s",
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
                alt={proj.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.93)",
                  borderTopLeftRadius: "clamp(1.2rem, 3vw, 2.1rem)",
                  borderBottomLeftRadius:
                    window.innerWidth <= 768 ? "0" : "clamp(1.2rem, 3vw, 2.1rem)",
                  borderTopRightRadius:
                    window.innerWidth <= 768
                      ? "clamp(1.2rem, 3vw, 2.1rem)"
                      : "0",
                  transition: "filter 0.15s",
                }}
                loading="lazy"
              />
              <span
                ref={(el) => (hoverRefs.current[idx] = el)}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, 26px)",
                  opacity: 0,
                  transition:
                    "opacity 0.26s cubic-bezier(.55,0,.18,1.2), transform 0.32s cubic-bezier(.55,0,.18,1.2)",
                  pointerEvents: "none",
                }}
              >
                {ArrowIcon}
              </span>
            </Link>

            {/* Content */}
            <div
              style={{
                flex: 1,
                padding:
                  window.innerWidth <= 768
                    ? "clamp(20px, 5vw, 28px)"
                    : "clamp(28px, 4vw, 38px) clamp(32px, 5vw, 46px)",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(1.4rem, 3.5vw, 2.1rem)",
                  color: "#f4f4f4",
                  marginBottom: "clamp(10px, 2vw, 17px)",
                }}
              >
                {proj.title}
              </div>
              <div
                style={{
                  color: "#b9b9b9",
                  fontWeight: 400,
                  fontSize: "clamp(0.95rem, 2vw, 1.13rem)",
                  lineHeight: 1.55,
                  marginBottom: "clamp(18px, 3vw, 33px)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {proj.subtitle}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "clamp(8px, 2vw, 14px)",
                  flexWrap: "wrap",
                }}
              >
                {proj.tags &&
                  proj.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        borderRadius: "44px",
                        fontSize: "clamp(0.88rem, 1.8vw, 1.01rem)",
                        color: "#dadada",
                        fontWeight: 500,
                        padding:
                          "clamp(5px, 1vw, 7px) clamp(14px, 3vw, 23px)",
                        border: "1.17px solid rgba(255,255,255,0.10)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive fix */}
      <style jsx>{`
        @media (max-width: 768px) {
          .case-study-card {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
