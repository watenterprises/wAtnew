import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "We've seen a significant improvement on our conversion rate after switching to their service. Highly recommend!",
    name: "Emily Carter",
    title: "E-commerce Founder",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "The team delivered exceptional design work that truly captured our brand essence. A game-changer for us!",
    name: "Michael Lee",
    title: "Creative Director",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    text: "Professional, timely, and always attentive to our needs. Their service boosted our growth remarkably.",
    name: "Sophia Patel",
    title: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  }
];

const ArrowIcon = (
  <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18l6-6-6-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        {opacity: 0, y: 50}, 
        {opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: {trigger: cardRef.current, start: "top 85%", once: true}});
    }
  }, []);

  useEffect(() => {
    if (textRefs.current[current]) {
      const el = textRefs.current[current];
      gsap.fromTo(el.querySelector(".testimonial-text"), 
        {opacity: 0, y: 20}, 
        {opacity: 1, y: 0, duration: 0.7, ease: "power3.out"});
      gsap.fromTo(el.querySelector(".testimonial-name-title"), 
        {opacity: 0}, 
        {opacity: 1, delay: 0.3, duration: 0.5, ease: "power3.out"});
    }
  }, [current]);

  return (
    <section style={{
      background: "#000",
      width: "100vw",
      minHeight: "70vh",
      padding: 0,
      margin: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        maxWidth: 930,
        margin: "0 auto",
        padding: "58px 0 60px",
        textAlign: "center",
        position: "relative"
      }}>
        <h2 style={{
          fontFamily: "Inter, Segoe UI, Arial, sans-serif",
          fontWeight: 400,
          fontSize: "3rem",
          color: "#acacac",
          marginBottom: 14,
          letterSpacing: "-0.03em"
        }}>
          Don't take our word for it
        </h2>
        <p style={{
          color: "#a0a0a0",
          fontWeight: 400,
          fontSize: "1.18rem",
          lineHeight: 1.4,
          marginBottom: 44,
          fontFamily: "Inter, Segoe UI, Arial, sans-serif"
        }}>
          See what our happy clients have to say about<br />
          our subscription-based web design services.
        </p>

        <div ref={cardRef} style={{
          width: "98vw",
          maxWidth: "100%",
          margin: "0 auto",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          background: "rgba(15,15,15,0.43)",
          borderRadius: "2.2rem",
          boxShadow: "0 8px 36px rgba(15,15,20,0.5), inset 0 0 32px rgba(255,255,255,0.16)",
          padding: "56px 48px 54px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          userSelect: "none",
          cursor: "default"
        }}>
          <div style={{ fontSize: "2.85rem", color: "#fff", opacity: 0.96, marginBottom: 30, fontWeight: 700, lineHeight: 1 }}>
            <span role="img" aria-label="quote">&rdquo;</span>
          </div>

          {testimonials.map((t, i) => (
            <div
              key={t.name}
              ref={el => textRefs.current[i] = el}
              style={{ display: current === i ? "block" : "none", maxWidth: 700 }}
            >
              <div className="testimonial-text" style={{
                fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                fontWeight: 600,
                fontSize: "2rem",
                color: "#fff",
                lineHeight: 1.18,
                letterSpacing: "-0.025em",
                marginBottom: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <span>{t.text}</span>
                <button style={{
                  background: "rgba(25,25,25,0.44)",
                  border: "none",
                  borderRadius: 9,
                  width: 40,
                  height: 40,
                  marginLeft: 16,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.3)",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.9)"
                }}>
                  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 7l4 4-4 4M6.5 11h8" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="testimonial-name-title" style={{
                display: "flex",
                alignItems: "center"
              }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  style={{
                    borderRadius: "50%",
                    marginRight: 16,
                    boxShadow: "0 0 14px rgba(255,255,255,0.14)",
                    backdropFilter: "blur(7px)",
                    WebkitBackdropFilter: "blur(7px)"
                  }}
                />
                <div style={{ textAlign: "left" }}>
                  <div style={{
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: "1.05rem",
                    lineHeight: 1.08,
                    fontFamily: "Inter, sans-serif"
                  }}>{t.name}</div>
                  <div style={{
                    color: "#b3b3b3",
                    fontWeight: 400,
                    fontSize: "0.99rem",
                    fontFamily: "Inter, sans-serif"
                  }}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
