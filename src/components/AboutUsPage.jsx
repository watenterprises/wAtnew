import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="10" stroke="#19a1ff" strokeWidth="2"/>
        <path d="M18 12v6l4 4" stroke="#19a1ff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Quality First",
    text: "We never compromise on quality. Every pixel, every line of code is crafted with precision."
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path d="M18 8v20M8 18h20" stroke="#19a1ff" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="5" stroke="#19a1ff" strokeWidth="2"/>
      </svg>
    ),
    title: "Innovation",
    text: "We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions."
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path d="M12 18l4 4 8-8" stroke="#19a1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="18" r="10" stroke="#19a1ff" strokeWidth="2"/>
      </svg>
    ),
    title: "Transparency",
    text: "Open communication, clear timelines, and honest feedback throughout every project."
  }
];

const STATS = [
  { value: "80+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" }
];

export default function AboutUsPage() {
  const storyRef = useRef(null);
  const valuesRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    if (storyRef.current) {
      gsap.fromTo(storyRef.current, 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", 
          scrollTrigger: { trigger: storyRef.current, start: "top 85%", once: true }
        }
      );
    }

    if (valuesRef.current[0]) {
      gsap.fromTo(valuesRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: valuesRef.current[0], start: "top 88%", once: true }
        }
      );
    }

    if (statsRef.current[0]) {
      gsap.fromTo(statsRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, stagger: 0.1, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: statsRef.current[0], start: "top 88%", once: true }
        }
      );
    }
  }, []);

  return (
    <section style={{
      background: "#000",
      width: "100vw",
      minHeight: "100vh",
      padding: 0,
      margin: 0
    }}>
      <div style={{
        maxWidth: 1080,
        margin: "0 auto",
        padding: "60px 24px 80px"
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h1 style={{
            fontFamily: "Inter, Segoe UI, Arial, sans-serif",
            fontWeight: 600,
            fontSize: "3.8rem",
            color: "#e8e8e8",
            marginBottom: 18,
            letterSpacing: "-0.02em"
          }}>
            About Us
          </h1>
          <p style={{
            color: "#b8b8b8",
            fontWeight: 400,
            fontSize: "1.24rem",
            lineHeight: 1.52,
            maxWidth: 720,
            margin: "0 auto",
            fontFamily: "Inter, Segoe UI, Arial, sans-serif"
          }}>
            We're a team of designers, developers, and strategists committed to creating digital experiences that make an impact.
          </p>
        </div>

        {/* Our Story - Glassmorphic Card */}
        <div ref={storyRef} style={{
          background: "linear-gradient(125deg, rgba(38,38,42,0.28) 54%, rgba(18,18,22,0.42) 100%)",
          borderRadius: "2.2rem",
          padding: "48px 44px",
          border: "1.6px solid rgba(255,255,255,0.06)",
          boxShadow: "0 8px 44px rgba(0,0,0,0.24), 0 0.5px 10px 0 rgba(100,100,100,0.08) inset",
          backdropFilter: "blur(18px) saturate(110%)",
          WebkitBackdropFilter: "blur(18px) saturate(110%)",
          marginBottom: 64
        }}>
          <h2 style={{
            fontFamily: "Inter, Segoe UI, Arial, sans-serif",
            fontWeight: 600,
            fontSize: "2.2rem",
            color: "#f2f2f2",
            marginBottom: 20,
            letterSpacing: "-0.01em"
          }}>
            Our Story
          </h2>
          <p style={{
            fontFamily: "Inter, Segoe UI, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "1.12rem",
            color: "#c8c8c8",
            lineHeight: 1.7,
            marginBottom: 16
          }}>
            Founded in 2020, wAt started with a simple mission: to help businesses succeed online with beautiful, effective digital solutions. What began as a small studio has grown into a full-service agency trusted by startups and established brands alike.
          </p>
          <p style={{
            fontFamily: "Inter, Segoe UI, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "1.12rem",
            color: "#c8c8c8",
            lineHeight: 1.7
          }}>
            We believe great design is more than aesthetics—it's about solving problems, telling stories, and creating meaningful connections. Every project we take on is an opportunity to push boundaries and deliver results that exceed expectations.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 28,
          marginBottom: 64
        }}>
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              ref={el => statsRef.current[idx] = el}
              style={{
                background: "linear-gradient(125deg, rgba(38,38,42,0.24) 54%, rgba(18,18,22,0.38) 100%)",
                borderRadius: "1.6rem",
                padding: "32px 24px",
                border: "1.5px solid rgba(255,255,255,0.06)",
                boxShadow: "0 6px 36px rgba(0,0,0,0.20), 0 0.5px 8px 0 rgba(100,100,100,0.08) inset",
                backdropFilter: "blur(14px) saturate(110%)",
                WebkitBackdropFilter: "blur(14px) saturate(110%)",
                textAlign: "center"
              }}
            >
              <div style={{
                fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                fontWeight: 700,
                fontSize: "2.6rem",
                color: "#19a1ff",
                marginBottom: 8,
                letterSpacing: "-0.02em"
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                fontWeight: 500,
                fontSize: "1.06rem",
                color: "#c8c8c8"
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Our Values */}
        <div>
          <h2 style={{
            fontFamily: "Inter, Segoe UI, Arial, sans-serif",
            fontWeight: 600,
            fontSize: "2.4rem",
            color: "#e8e8e8",
            marginBottom: 42,
            textAlign: "center",
            letterSpacing: "-0.01em"
          }}>
            Our Values
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 32
          }}>
            {VALUES.map((value, idx) => (
              <div
                key={value.title}
                ref={el => valuesRef.current[idx] = el}
                style={{
                  background: "linear-gradient(125deg, rgba(38,38,42,0.24) 54%, rgba(18,18,22,0.38) 100%)",
                  borderRadius: "1.6rem",
                  padding: "32px 28px",
                  border: "1.5px solid rgba(255,255,255,0.06)",
                  boxShadow: "0 6px 36px rgba(0,0,0,0.20), 0 0.5px 8px 0 rgba(100,100,100,0.08) inset",
                  backdropFilter: "blur(14px) saturate(110%)",
                  WebkitBackdropFilter: "blur(14px) saturate(110%)",
                  textAlign: "center"
                }}
              >
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(25,161,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  border: "1.4px solid rgba(25,161,255,0.15)"
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.32rem",
                  color: "#f2f2f2",
                  marginBottom: 12
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "1.04rem",
                  color: "#c0c0c0",
                  lineHeight: 1.6
                }}>
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
