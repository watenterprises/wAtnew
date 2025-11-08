import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    icon: (
      <svg width="42" height="42" fill="none" viewBox="0 0 42 42">
        <rect x="8" y="10" width="26" height="22" rx="3" stroke="#19a1ff" strokeWidth="2.2" />
        <path d="M8 16h26M15 10v6M27 10v6" stroke="#19a1ff" strokeWidth="2.2" />
      </svg>
    ),
    title: "Web Design & Development",
    description:
      "Premium, conversion-focused websites built with modern frameworks. Fully responsive, fast, and scalable to grow with your business.",
    features: ["Custom Design", "Responsive", "SEO Optimized", "CMS Integration"],
  },
  {
    icon: (
      <svg width="42" height="42" fill="none" viewBox="0 0 42 42">
        <circle cx="21" cy="21" r="12" stroke="#19a1ff" strokeWidth="2.2" />
        <path d="M21 15v6l4 4" stroke="#19a1ff" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Brand Identity Design",
    description:
      "Create a memorable brand with logos, color systems, typography, and comprehensive brand guidelines that stand out.",
    features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"],
  },
  {
    icon: (
      <svg width="42" height="42" fill="none" viewBox="0 0 42 42">
        <rect x="10" y="6" width="22" height="30" rx="3" stroke="#19a1ff" strokeWidth="2.2" />
        <circle cx="21" cy="30" r="1.8" fill="#19a1ff" />
        <rect x="13" y="10" width="16" height="14" rx="1.5" stroke="#19a1ff" strokeWidth="1.8" />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "User-centered design that delights and converts. From wireframes to high-fidelity prototypes, we craft intuitive experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    icon: (
      <svg width="42" height="42" fill="none" viewBox="0 0 42 42">
        <path d="M8 21h26M21 8v26" stroke="#19a1ff" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="21" cy="21" r="6" stroke="#19a1ff" strokeWidth="2.2" />
      </svg>
    ),
    title: "Digital Strategy",
    description:
      "Data-driven strategies to maximize ROI. We align your digital presence with business goals through research and optimization.",
    features: ["Market Research", "Content Strategy", "Analytics", "Growth Planning"],
  },
  {
    icon: (
      <svg width="42" height="42" fill="none" viewBox="0 0 42 42">
        <rect x="6" y="12" width="30" height="18" rx="2" stroke="#19a1ff" strokeWidth="2.2" />
        <path d="M6 18h30M15 12v6M27 12v6" stroke="#19a1ff" strokeWidth="2.2" />
      </svg>
    ),
    title: "E-commerce Solutions",
    description:
      "Complete online stores with seamless checkout, inventory management, and integrations that drive sales and customer loyalty.",
    features: ["Shop Setup", "Payment Gateway", "Inventory System", "Order Management"],
  },
  {
    icon: (
      <svg width="42" height="42" fill="none" viewBox="0 0 42 42">
        <circle cx="21" cy="13" r="5" stroke="#19a1ff" strokeWidth="2.2" />
        <path
          d="M10 35c0-6 5-11 11-11s11 5 11 11"
          stroke="#19a1ff"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Ongoing Support & Maintenance",
    description:
      "Keep your website fresh, secure, and performing optimally. Regular updates, bug fixes, and feature enhancements included.",
    features: ["24/7 Monitoring", "Security Updates", "Performance Optimization", "Content Updates"],
  },
  {
    icon: (
      <svg width="42" height="42" fill="none" viewBox="0 0 42 42">
        <circle cx="21" cy="21" r="12" stroke="#19a1ff" strokeWidth="2.2" />
        <path
          d="M15 18h12M18 24h6M21 9v3M21 30v3M9 21h3M30 21h3"
          stroke="#19a1ff"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "AI Agents Development",
    description:
      "Build intelligent AI agents that automate complex workflows, enhance decision-making, and deliver personalized digital experiences.",
    features: ["Chatbots & Virtual Assistants", "Task Automation", "Custom GPT Integrations", "AI-Powered Workflows"],
  },
  {
    icon: (
      <svg width="42" height="42" fill="none" viewBox="0 0 42 42">
        <path d="M8 10h26v6H8zM8 26h26v6H8z" stroke="#19a1ff" strokeWidth="2.2" />
        <path d="M21 16v10" stroke="#19a1ff" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Workflow Automation Design",
    description:
      "Streamline your business operations by connecting apps and automating repetitive tasks with powerful no-code and low-code solutions.",
    features: ["Process Optimization", "API Integration", "No-Code Tools", "Scalable Automation"],
  },
];

export default function ServicesPage() {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current[0]) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 88%",
            once: true,
          },
        }
      );
    }
  }, []);

  return (
    <section
      style={{
        background: "#000",
        width: "100vw",
        minHeight: "100vh",
        padding: "0",
        margin: 0,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "60px 24px 80px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h1
            style={{
              fontFamily: "Inter, Segoe UI, Arial, sans-serif",
              fontWeight: 600,
              fontSize: "3.6rem",
              color: "#e8e8e8",
              marginBottom: 18,
              letterSpacing: "-0.02em",
            }}
          >
            Our Services
          </h1>
          <p
            style={{
              color: "#b8b8b8",
              fontWeight: 400,
              fontSize: "1.22rem",
              lineHeight: 1.5,
              maxWidth: 680,
              margin: "0 auto",
              fontFamily: "Inter, Segoe UI, Arial, sans-serif",
            }}
          >
            From strategy to execution, we provide end-to-end digital solutions tailored to your
            business needs. Let's build something extraordinary together.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32,
            marginTop: 48,
          }}
        >
          {SERVICES.map((service, idx) => (
            <div
              key={service.title}
              ref={(el) => (cardsRef.current[idx] = el)}
              style={{
                background:
                  "linear-gradient(125deg, rgba(38,38,42,0.28) 54%, rgba(18,18,22,0.42) 100%)",
                borderRadius: "1.8rem",
                padding: "36px 32px 32px",
                border: "1.6px solid rgba(255,255,255,0.06)",
                boxShadow:
                  "0 8px 44px rgba(0,0,0,0.24), 0 0.5px 10px 0 rgba(100,100,100,0.08) inset",
                backdropFilter: "blur(16px) saturate(110%)",
                WebkitBackdropFilter: "blur(16px) saturate(110%)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
                minHeight: 340,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 56px rgba(25,161,255,0.35), 0 0 12px rgba(25,161,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 44px rgba(0,0,0,0.24), 0 0.5px 10px 0 rgba(100,100,100,0.08) inset";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: "50%",
                  background: "rgba(25,161,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  border: "1.4px solid rgba(25,161,255,0.15)",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.48rem",
                  color: "#f2f2f2",
                  marginBottom: 14,
                  letterSpacing: "-0.01em",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "1.06rem",
                  color: "#c0c0c0",
                  lineHeight: 1.6,
                  marginBottom: 22,
                }}
              >
                {service.description}
              </p>

              {/* Features */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {service.features.map((feat) => (
                  <span
                    key={feat}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "#d8d8d8",
                      fontSize: "0.94rem",
                      fontWeight: 500,
                      padding: "6px 14px",
                      borderRadius: "18px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                    }}
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
