import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const QUESTIONS = [
  {
    q: "How long does a typical project take?",
    a:
      "On average, branding projects take 4–6 weeks, while web design projects can range from 8–12 weeks. We provide a detailed timeline and keep you informed throughout the project.",
  },
  {
    q: "What is the cost of working with you?",
    a:
      "Pricing depends on project scope and requirements. After understanding your needs, we’ll provide a transparent, all-inclusive quote with no hidden fees.",
  },
  {
    q: "How involved will I be in the process?",
    a:
      "Your involvement is entirely up to you. We’ll guide and update you at key stages and always invite feedback, but we’re happy to run with the brief if you prefer a hands-off approach.",
  },
  {
    q: "Can you work with my existing brand?",
    a:
      "Absolutely. Whether you need a full rebrand or want us to work with your existing brand guidelines, we’ll ensure everything matches your identity and vision.",
  },
];

function Caret({ open }) {
  return open ? (
    <svg width="28" height="28" style={{ transition: "transform 0.23s", transform: "rotate(180deg)" }} fill="none">
      <path d="M20 16L14 10 8 16" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="28" height="28" style={{ transition: "transform 0.23s", transform: "rotate(0)" }} fill="none">
      <path d="M8 12l6 6 6-6" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current[0]) {
      gsap.fromTo(cardsRef.current, {
        opacity: 0,
        y: 36,
      },{
        opacity: 1,
        y: 0,
        stagger: 0.13,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 93%",
          once: true,
        }
      });
    }
  }, []);

  return (
    <section style={{
      background: "#000",
      width: "100vw",
      minHeight: "82vh",
      padding: 0,
      margin: 0,
    }}>
      <div style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "60px 0 30px",
        textAlign: "center"
      }}>
        <h2 style={{
          fontFamily: "Inter, Segoe UI, Arial, sans-serif",
          fontWeight: 500,
          fontSize: "3.2rem",
          color: "#b9b9b9",
          marginBottom: 18,
          letterSpacing: "-0.02em",
        }}>
          Your questions, answered
        </h2>
        <div style={{
          color: "#a7a7a7",
          fontFamily: "Inter, Segoe UI, Arial, sans-serif",
          fontWeight: 400,
          fontSize: "1.18rem",
          lineHeight: 1.45,
          marginBottom: 58,
          maxWidth: 630,
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          Whether you're a new client or a long-time partner, we're here to help.&nbsp;
          Below are answers to the most common questions.
        </div>
      </div>

      <div style={{
        maxWidth: 770,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 28
      }}>
        {QUESTIONS.map((item, i) => (
          <div
            ref={el => cardsRef.current[i] = el}
            key={item.q}
            style={{
              borderRadius: 23,
              background: "linear-gradient(115deg, rgba(38,38,40,0.27) 54%, rgba(17,17,19,0.38) 100%)",
              boxShadow: "0 8px 44px rgba(0,0,0,0.33), 0 0.5px 8px 0 rgba(100,100,100,0.09) inset",
              backdropFilter: "blur(18px) saturate(115%)",
              WebkitBackdropFilter: "blur(18px) saturate(115%)",
              border: "1.7px solid rgba(255,255,255,0.04)",
              padding: openIndex === i ? "32px 44px 26px" : "28px 44px 28px",
              margin: 0,
              lineHeight: 1.34,
              textAlign: "left",
              color: "#fff",
              cursor: "pointer",
              fontFamily: "Inter, Segoe UI, Arial, sans-serif",
              minHeight: 32,
              maxWidth: "100%",
              transition: "box-shadow 0.2s, background 0.28s"
            }}
            onClick={() => setOpenIndex(i)}
          >
            <div style={{
              fontWeight: 600,
              fontSize: "1.36rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#fff"
            }}>
              <span>{item.q}</span>
              <span>
                <Caret open={openIndex === i}/>
              </span>
            </div>
            {openIndex === i && (
              <div style={{
                fontWeight: 400,
                color: "#bfbfbf",
                fontSize: "1.13rem",
                marginTop: 15,
                lineHeight: 1.60,
                letterSpacing: "-0.01em"
              }}>
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
