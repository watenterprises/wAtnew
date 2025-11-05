import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ICONS = [
  // Flexible engagement
  <svg key="flexibility" width="54" height="54" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="3" width="16" height="18" rx="3" stroke="white" strokeWidth="1.8" />
    <polyline points="10,16 12,18 16,14" stroke="white" strokeWidth="1.8" fill="none" />
  </svg>,
  // Conversion-driven design
  <svg key="conversion" width="54" height="54" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.8" />
    <path d="M9 11a3 3 0 1 1 6 0" stroke="white" strokeWidth="1.6" fill="none" />
    <circle cx="15.5" cy="9" r="1.2" fill="white" />
  </svg>,
  // Reliable delivery
  <svg key="delivery" width="54" height="54" viewBox="0 0 24 24" fill="none">
    <path d="M3 6h13l5 5v7H3V6z" stroke="white" strokeWidth="1.8" />
    <circle cx="7.5" cy="18.5" r="1.8" fill="white" />
    <circle cx="16.5" cy="18.5" r="1.8" fill="white" />
  </svg>,
  // Cross-platform expertise
  <svg key="engineering" width="54" height="54" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" />
    <rect x="9" y="9" width="6" height="6" rx="1" stroke="white" strokeWidth="1.4" />
    <path d="M12 7v4m0 6v-2" stroke="white" strokeWidth="1.4" />
  </svg>,
  // Analytics & insights
  <svg key="analytics" width="54" height="54" viewBox="0 0 24 24" fill="none">
    <rect x="6" y="6" width="12" height="12" rx="3" stroke="white" strokeWidth="1.8" />
    <path d="M9 15v-4m3 4v-6m3 6v-2" stroke="white" strokeWidth="1.4" />
  </svg>
];

const FEATURES = [
  {
    title: "Flexible Engagement",
    desc:
      "Work with us on your terms—adapt scope as your project evolves, for both Indian and international businesses."
  },
  {
    title: "Conversion-Driven Design",
    desc:
      "Websites, apps, and campaigns created to encourage action and support business objectives."
  },
  {
    title: "Reliable Delivery",
    desc:
      "Consistent, professional development and launch of digital solutions; always aligned with timelines and expectations."
  },
  {
    title: "Cross-Platform Expertise",
    desc:
      "Expertise in React, modern JS frameworks, and mobile technology for seamless experiences on all devices."
  },
  {
    title: "Analytics & Insights",
    desc:
      "From initial strategy to post-launch reports, actionable data guides your website, app, and marketing decisions."
  }
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const circleRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate heading letters (fixed spaces issue)
    if (titleRef.current) {
      const splitText = titleRef.current.textContent.split("");
      titleRef.current.textContent = "";
      splitText.forEach((char) => {
        const span = document.createElement("span");
        // Preserve spaces correctly
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(20px)";
        titleRef.current.appendChild(span);
      });
      gsap.to(titleRef.current.querySelectorAll("span"), {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        }
      });
    }

    // Circle animations
    gsap.fromTo(
      circleRefs.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        }
      }
    );

    // Text under circles
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card.querySelector(".card-text"),
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true
          }
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#000",
        width: "100%",
        minHeight: "75vh",
        padding: "60px 0"
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 20px"
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginTop: 40,
            marginBottom: 32,
            padding: "0 8px"
          }}
        >
          <h2
            ref={titleRef}
            style={{
              color: "white",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 500,
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0",
              userSelect: "none",
              lineHeight: 1.15
            }}
          >
            Why choose us?
          </h2>
          <p
            style={{
              marginTop: 14,
              color: "#a1a1a1",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              fontWeight: 400,
              fontFamily: "Inter, sans-serif",
              lineHeight: 1.6,
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            We specialize in websites, apps and digital campaigns for brands in India and worldwide.
            <br />
            Our approach is responsive, expert, and grounded in proven technologies and insight.
          </p>
        </div>

        {/* Features */}
        <div style={{ position: "relative", marginTop: 36, marginBottom: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "36px 26px",
              alignItems: "stretch"
            }}
          >
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  flex: "1 1 230px",
                  minWidth: 210,
                  maxWidth: 280,
                  textAlign: "center",
                  margin: "0 0 28px 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                className="feature-card"
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
              >
                <div
                  ref={(el) => {
                    circleRefs.current[idx] = el;
                  }}
                  style={{
                    width: 90,
                    height: 90,
                    margin: "0 auto 22px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(closest-side, rgba(80,80,80,0.22), rgba(0,0,0,0.65))",
                    boxShadow:
                      "inset 2px 2px 6px rgba(150,150,150,0.09), 0 0 36px rgba(255,255,255,0.17), inset 0 0 14px rgba(255,255,255,0.18)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative"
                  }}
                >
                  {ICONS[idx]}
                </div>
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.05rem, 2.4vw, 1.26rem)",
                    color: "#EDEDED",
                    marginBottom: 16,
                    marginTop: 0
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="card-text"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(0.95rem,2vw,1rem)",
                    color: "#8a8a8a",
                    maxWidth: 320,
                    margin: "0 auto"
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
